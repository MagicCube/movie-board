import React from 'react';

import CoverList from './CoverList';

export default function LoLoMoRowContent(props) {
  return (
    <div className="mb-lolomo-row-content">
      <CoverList subjects={props.subjects} />
    </div>
  );
}

LoLoMoRowContent.propTypes = {
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  }))
};

LoLoMoRowContent.defaultProps = {
  subjects: []
};
