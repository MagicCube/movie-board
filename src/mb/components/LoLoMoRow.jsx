import React from 'react';

import LoLoMoRowContent from './LoLoMoRowContent';
import LoLoMoRowHead from './LoLoMoRowHead';

export default function LoLoMoRow(props) {
  return (
    <div className="mb-lolomo-row">
      <LoLoMoRowHead title={props.model.title} defaultTitle={props.defaultTitle} />
      <LoLoMoRowContent {...props.model} actions={props.actions} />
    </div>
  );
}

LoLoMoRow.propTypes = {
  actions: React.PropTypes.object,
  defaultTitle: React.PropTypes.string.isRequired,
  model: React.PropTypes.shape({
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }).isRequired
};

LoLoMoRow.defaultProps = {
  actions: {}
};
