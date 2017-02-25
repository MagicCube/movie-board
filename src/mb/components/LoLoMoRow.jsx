import cs from 'classnames';
import React from 'react';

import MoCoverList from './MoCoverList';

export default function LoLoMoRow(props) {
  return (
    <div className={cs('mb-lolomo-row', { 'no-selection': !props.hasSelection }, { 'has-selection': props.hasSelection })}>
      <div className="mb-lolomo-row-head">
        <a className="title" href="javascript:void(0)">{props.model.title ? props.model.title : props.defaultTitle}</a>
      </div>
      <div className="mb-lolomo-row-content">
        <MoCoverList {...props.model} actions={props.actions} selectedSubjectId={props.selectedSubjectId} />
      </div>
    </div>
  );
}

LoLoMoRow.propTypes = {
  actions: React.PropTypes.object,
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
  hasSelection: false,
  selectedSubjectId: null
};
