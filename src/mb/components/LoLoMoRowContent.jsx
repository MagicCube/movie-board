import React from 'react';

import CoverList from './CoverList';

export default function LoLoMoRowContent(props) {
  return (
    <div className="mb-lolomo-row-content">
      <CoverList {...props} />
    </div>
  );
}
