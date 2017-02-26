import cs from 'classnames';
import React from 'react';

import LoMoCovers from './LoMoCovers';

/**
 * Represent a single row in a LoLoMo container.
 */
export default function LoLoMoRow(props) {
  return (
    <div className={cs('mb-lolomo-row', { 'no-selection': !props.hasSelection }, { 'has-selection': props.hasSelection })}>
      <div className="row-head">
        <a className="title" href="javascript:void(0)">{props.model.title ? props.model.title : props.defaultTitle}</a>
      </div>
      <div className="row-content">
        <LoMoCovers {...props.model} actions={props.actions} selectedSubjectId={props.selectedSubjectId} />
      </div>
      {props.children}
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
