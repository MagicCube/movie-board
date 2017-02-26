import cs from 'classnames';
import React from 'react';

import LoMoCovers from './LoMoCovers';

/**
 * Represent a single row in a LoLoMo container.
 */
export default function LoLoMoRow({ actions, children, defaultTitle, hasSelection, model, selectedSubjectId }) {
  console.log('LoLoMoRow.render()', model.title);
  return (
    <div className={cs('mb-lolomo-row', { 'no-selection': !hasSelection }, { 'has-selection': hasSelection })}>
      <div className="row-head">
        <a className="title" href="javascript:void(0)">{model.title ? model.title : defaultTitle}</a>
      </div>
      <div className="row-content">
        <LoMoCovers {...model} actions={actions} selectedSubjectId={selectedSubjectId} />
      </div>
      {children}
    </div>
  );
}

LoLoMoRow.propTypes = {
  actions: React.PropTypes.object,
  children: React.PropTypes.element,
  defaultTitle: React.PropTypes.string.isRequired,
  hasSelection: React.PropTypes.bool,
  model: React.PropTypes.shape({
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }).isRequired,
  selectedSubjectId: React.PropTypes.string
};

LoLoMoRow.defaultProps = {
  actions: {},
  children: null,
  hasSelection: false,
  selectedSubjectId: null
};
