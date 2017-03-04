import cs from 'classnames';
import Immutable from 'immutable';
import React from 'react';

import MoCover from '../components/MoCover';

import '../res/lomo-covers.less';


/**
 * Represent a "List of Movie Covers" inside a LoLoMo Row.
 */
export default class LoMoCovers extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      selectSubject: React.PropTypes.func.isRequired
    }).isRequired,
    hasSelection: React.PropTypes.bool,
    selectedSubjectId: React.PropTypes.string,
    subjects: React.PropTypes.objectOf(Immutable.List).isRequired,
  }

  static defaultProps = {
    hasSelection: false,
    selectedSubjectId: null
  }

  shouldComponentUpdate(nextProps) {
    let shouldUpdate = false;
    if (nextProps.hasSelection !== this.props.hasSelection) {
      shouldUpdate = true;
    } else if (nextProps.selectedSubjectId !== this.props.selectedSubjectId && this.props.hasSelection) {
      shouldUpdate = true;
    }
    if (nextProps.subjects !== this.props.subjects) {
      shouldUpdate = true;
    }
    return shouldUpdate;
  }

  render() {
    const { actions, selectedSubjectId, subjects } = this.props;
    const items = subjects.map(subject => (
      <li
        key={subject.get('id')}
        className={cs('mb-lomo-covers-cell', { selected: selectedSubjectId === subject.get('id') })}
        onClick={(e) => {
          if (selectedSubjectId === subject.get('id')) {
            actions.selectSubject(null);
          } else {
            actions.selectSubject(subject);
            const parent = e.currentTarget.offsetParent;
            setTimeout(() => {
              $(document.body).animate({
                scrollTop: parent.offsetTop + parent.offsetParent.offsetTop - $('.mb-app-header').height() - 8
              }, 250);
            }, 400);
          }
        }}
      >
        <MoCover subject={subject} />
      </li>
    )).toArray();

    return (
      <ul className="mb-lomo-covers">
        {items}
      </ul>
    );
  }
}
