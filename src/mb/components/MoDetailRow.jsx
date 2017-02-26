import Immutable from 'immutable';
import React from 'react';

import '../res/mo-detail-row.less';

const TYPES = {
  casts: '演员',
  directors: '导演',
  genres: '类型'
};

/**
 * Represent a inline list in a detail row of MoJumbotron.
 */
export default class MoDetailRow extends React.Component {
  static propTypes = {
    data: React.PropTypes.objectOf(Immutable.List).isRequired,
    type: React.PropTypes.string.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.type !== this.props.type || !nextProps.data.equals(this.props.data);
  }

  render() {
    const { data, type } = this.props;
    let items = null;
    if (type === 'genres') {
      items = data.map(genre => <li key={genre}>{genre}</li>);
    } else {
      items = data.map(people => <li key={people.get('id')}>{people.get('name')}</li>);
    }

    return (
      <dl className={`mb-mo-detail-row ${type}`}>
        <dt>{TYPES[type]}</dt>
        <dd>
          <ul>
            {items}
          </ul>
        </dd>
      </dl>
    );
  }
}
