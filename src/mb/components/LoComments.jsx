import Immutable from 'immutable';
import React from 'react';

import Comment from './Comment';

import '../res/lo-comments.less';


export default class LoComments extends React.PureComponent {
  static propTypes = {
    comments: React.PropTypes.objectOf(Immutable.List)
  }

  static defaultProps = {
    comments: Immutable.fromJS([])
  }

  render() {
    const { comments } = this.props;
    const items = comments.map(comment => (
      <li key={comment.get('id')}>
        <Comment comment={comment} />
      </li>
    )).toArray();
    return (
      <ul className="mb-lo-comments">
        {items}
      </ul>
    );
  }
}
