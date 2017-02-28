import Immutable from 'immutable';
import React from 'react';

import RatingStars from './RatingStars';


export default class LoComment extends React.PureComponent {
  static propTypes = {
    comment: React.PropTypes.objectOf(Immutable.Map).isRequired
  }

  render() {
    const { comment } = this.props;
    const content = comment.get('content');
    const author = comment.getIn(['author', 'name']);
    const stars = comment.getIn(['rating', 'value']) * 10;
    return (
      <div className="mb-lo-comment">
        <div className="content">{content}</div>
        <div className="info">
          <div className="author">{author}</div>
          <RatingStars stars={stars} />
        </div>
      </div>
    );
  }
}
