import Immutable from 'immutable';
import React from 'react';

import RatingStars from './RatingStars';

import '../res/rating.less';

/**
 * The rating component.
 */
export default class Rating extends React.Component {
  static propTypes = {
    rating: React.PropTypes.objectOf(Immutable.Map).isRequired
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.rating.get('average') !== this.props.rating.get('average'));
  }

  render() {
    const { rating } = this.props;
    const stars = parseInt(rating.get('stars'));
    const average = rating.get('average');
    return (
      <div className="mb-rating" data-stars={stars}>
        <div className="average">{average ? `${average} 分` : '暂无'}</div>
        <RatingStars stars={stars} />
      </div>
    );
  }
}
