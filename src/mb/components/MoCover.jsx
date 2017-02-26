import React from 'react';
import { pure } from 'recompose';

import '../res/mo-cover.less';

/**
 * Movie cover component. It has been integrated in LoMoCovers.
 */
export default class MoCover extends React.Component {
  static propTypes = {
    subject: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }).isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.subject.id !== this.props.subject.id;
  }

  render() {
    const {
      subject
    } = this.props;
    return (
      <div className="mb-mo-cover">
        <div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} />
      </div>
    );
  }
}
