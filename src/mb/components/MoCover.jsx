import React from 'react';
import { pure } from 'recompose';

import '../res/mo-cover.less';

/**
 * Movie cover component. It has been integrated in LoMoCovers.
 */
const MoCover = pure((props) => {
  const {
    subject
  } = props;
  return (
    <div className="mb-mo-cover">
      <div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} />
    </div>
  );
});

MoCover.propTypes = {
  subject: React.PropTypes.object.isRequired
};

export default MoCover;
