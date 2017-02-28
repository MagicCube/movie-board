import Immutable from 'immutable';
import React from 'react';

import '../res/lo-trailers.less';


export default class LoTrailers extends React.PureComponent {
  static propTypes = {
    trailers: React.PropTypes.objectOf(Immutable.List)
  }

  static defaultProps = {
    trailers: Immutable.fromJS([])
  }

  render() {
    const { trailers } = this.props;
    const items = trailers.map(trailer => (
      <li key={trailer.get('id')}>
        <a>
          <div className="thumbnail" style={{ backgroundImage: `url(${trailer.getIn(['medium'])})` }} />
          <div className="title">{trailer.get('title')}</div>
        </a>
      </li>
    )).toArray();
    return (
      <ul className="mb-lo-trailers mb-lo-common">
        {items}
      </ul>
    );
  }
}
