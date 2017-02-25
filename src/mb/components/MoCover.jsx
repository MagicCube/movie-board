import React from 'react';

import '../res/mo-cover.less';

export default function MoCover(props) {
  const {
    subject
  } = props;
  return (
    <div className="mb-mo-cover">
      <div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} />
    </div>
  );
}

MoCover.propTypes = {
  subject: React.PropTypes.object.isRequired
};
