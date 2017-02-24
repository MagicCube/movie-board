import cs from 'classnames';
import React from 'react';

import LoLoMoRowContent from './LoLoMoRowContent';
import LoLoMoRowHead from './LoLoMoRowHead';

export default function LoLoMoRow(props) {
  return (
    <div className={cs('mb-lolomo-row', { 'no-selection': !props.hasSelection })}>
      <LoLoMoRowHead title={props.model.title} defaultTitle={props.defaultTitle} />
      <LoLoMoRowContent {...props.model} actions={props.actions} selectedSubjectId={props.selectedSubjectId} />
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
