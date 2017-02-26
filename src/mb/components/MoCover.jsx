import Immutable from 'immutable';
import React from 'react';

import '../res/mo-cover.less';

/**
 * Movie cover component. It has been integrated in LoMoCovers.
 */
export default class MoCover extends React.Component {
  static propTypes = {
    subject: React.PropTypes.objectOf(Immutable.Map).isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.subject.get('id') !== this.props.subject.get('id');
  }

  render() {
    const {
      subject
    } = this.props;
    return (
      <div className="mb-mo-cover">
        <div className="cover-image" style={{ backgroundImage: `url(${subject.getIn(['images', 'large'])})` }} />
      </div>
    );
  }
}
