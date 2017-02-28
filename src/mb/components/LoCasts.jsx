import Immutable from 'immutable';
import React from 'react';

import '../res/lo-casts.less';


export default class LoCasts extends React.PureComponent {
  static propTypes = {
    casts: React.PropTypes.objectOf(Immutable.List)
  }

  static defaultProps = {
    casts: Immutable.fromJS([])
  }

  render() {
    const { casts } = this.props;
    const items = casts.map(cast => (
      <li key={cast.get('id')}>
        <a>
          <div className="thumbnail" style={{ backgroundImage: `url(${cast.getIn(['avatars', 'large'])})` }} />
          <div className="title">{cast.get('name')}</div>
        </a>
      </li>
    )).toArray();
    return (
      <ul className="mb-lo-casts mb-lo-common">
        {items}
      </ul>
    );
  }
}
