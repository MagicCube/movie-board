import React from 'react';

export default function Cover(props) {
  const { subject } = props;
  return (
    <div className="mb-cover">
      <div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} />
    </div>
  );
}

Cover.propTypes = {
  subject: React.PropTypes.object.isRequired,
};


