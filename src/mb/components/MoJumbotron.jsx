import React from 'react';

import '../res/mo-jumbotron.less';

/**
 * The jumbotron component to show movie details.
 * It can be included in a JawBone container inside a LoLoMo.
 */
export default class MoJumbotron extends React.PureComponent {
  static propTypes = {
    subject: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired
    }).isRequired
  }

  static defaultProps = {

  }

  render() {
    return (
      <div className="mb-mo-jumbotron">
      </div>
    );
  }
}
