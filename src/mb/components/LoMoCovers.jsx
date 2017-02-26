import cs from 'classnames';
import Immutable from 'immutable';
import React from 'react';

import MoCover from './MoCover';

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
    subjectKey: React.PropTypes.string
  }

  static defaultProps = {
    hasSelection: false,
    selectedSubjectId: null,
    subjectKey: null
  }

  shouldComponentUpdate(nextProps) {
    let shouldUpdate = false;
    if (nextProps.hasSelection !== this.props.hasSelection) {
      shouldUpdate = true;
    } else if (nextProps.selectedSubjectId !== this.props.selectedSubjectId && this.props.hasSelection) {
      shouldUpdate = true;
    }
    if (!nextProps.subjects.equals(this.props.subjects)) {
      shouldUpdate = true;
    }
    return shouldUpdate;
  }

  render() {
    const { actions, selectedSubjectId, subjects, subjectKey } = this.props;

    const items = subjects.map(subject => (
      <li
        key={subject.get('id')}
        className={cs('mb-lomo-covers-cell', { selected: selectedSubjectId === subject.get('id') })}
        onClick={(e) => {
          actions.selectSubject(subject);
          $(document.body).animate({
            scrollTop: e.currentTarget.offsetTop - $('.mb-app-header').height() - 8
          }, 400);
        }}
      >
        <MoCover subject={subject} />
        <div className="selection-indicator">
          <div className="arrow" />
        </div>
      </li>
    )).toArray();

    return (
      <ul className="mb-lomo-covers">
        {items}
      </ul>
    );
  }
}
