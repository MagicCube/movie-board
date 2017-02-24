import React from 'react';

import LoLoMoRowContent from './LoLoMoRowContent';
import LoLoMoRowHead from './LoLoMoRowHead';

export default function LoLoMoRow(props) {
  return (
    <div className="mb-lolomo-row">
      <LoLoMoRowHead title={props.model.title} />
      <LoLoMoRowContent movies={props.model.subjects} />
    </div>
  );
}

LoLoMoRow.propTypes = {
  model: React.PropTypes.shape({
    count: React.PropTypes.isRequired,
    subjects: React.PropTypes.array,
    title: React.PropTypes.string
  }).isRequired
};
