import cs from 'classnames';
import Immutable from 'immutable';
import React from 'react';

import LoMoCovers from './LoMoCovers';


/**
 * Represent a single row in a LoLoMo container.
 */
export default class LoLoMoRow extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
    children: React.PropTypes.element,
    defaultTitle: React.PropTypes.string.isRequired,
    hasSelection: React.PropTypes.bool,
    model: React.PropTypes.objectOf(Immutable.Map).isRequired,
    selectedSubjectId: React.PropTypes.string,
    subjectKey: React.PropTypes.string
  }

  static defaultProps = {
    actions: {},
    children: null,
    hasSelection: false,
    selectedSubjectId: null,
    subjectKey: null
  }

  render() {
    const { actions, children, defaultTitle, hasSelection, model, selectedSubjectId, subjectKey } = this.props;
    return (
      <div className={cs('mb-lolomo-row', { 'no-selection': !hasSelection }, { 'has-selection': hasSelection })}>
        <div className="row-head">
          <a className="title h3">{model.get('title') ? model.get('title') : defaultTitle}</a>
        </div>
        <div className="row-content">
          <a className="left scroll-button" role="button"><i className="octicon icon-chevron-left" /></a>
          <div ref={(div) => { this.scrollable = div; }} className="scrollable">
            <LoMoCovers subjectKey={subjectKey} subjects={model.get('subjects')} hasSelection={hasSelection} selectedSubjectId={selectedSubjectId} actions={actions} />
          </div>
          <a className="right scroll-button" role="button"><i className="octicon icon-chevron-right" /></a>
        </div>
        {children}
      </div>
    );
  }
}
