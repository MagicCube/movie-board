import React from 'react';

import '../res/rating-stars.less';

/**
 * The rating stars component.
 */
export default class RatingStars extends React.Component {
  static propTypes = {
    stars: React.PropTypes.number.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.stars !== this.props.stars;
  }

  render() {
    const { stars } = this.props;
    const starElements = [];
    for (let i = 0; i < 50; i += 10) {
      if (stars - i >= 10) {
        starElements.push(<div className="star" key={i} />);
      } else if (stars - i === 5) {
        starElements.push(<div className="half star" key={i}><div className="inner-star" /></div>);
      } else {
        starElements.push(<div className="zero star" key={i} />);
      }
    }
    return (
      <div className="mb-rating-stars">
        {starElements}
      </div>
    );
  }
}
