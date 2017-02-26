import React from 'react';

import '../res/rating.less';

/**
 * The rating component.
 */
export default recompose.pure(({
  rating
}) => {
  const stars = rating.get('stars');
  const average = rating.get('rating');
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
    <div className="mb-rating" data-stars={stars}>
      <div className="average">{average ? `${average} 分` : '暂无'}</div>
      <div className="stars">
        {starElements}
      </div>
    </div>
  );
});
