import React from 'react';

export default function LoLoMoCell(props) {
  const { subject } = props;
  return (
    <li className="mb-lolomo-cell">
      <div className="cover"><div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} /></div>
    </li>
  );
}

LoLoMoCell.propTypes = {
  subject: React.PropTypes.object.isRequired,
};
