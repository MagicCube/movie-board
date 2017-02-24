import React from 'react';

import Cover from './Cover';

export default function CoverListItem(props) {
  const { subject } = props;
  return (
    <li className="mb-cover-list-item">
      <Cover subject={subject} />
    </li>
  );
}

CoverListItem.propTypes = {
  subject: React.PropTypes.object.isRequired
};
