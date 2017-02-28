import Immutable from 'immutable';
import React from 'react';

import MoDetailRow from './MoDetailRow';
import Rating from './Rating';


export default class MoGeneral extends React.PureComponent {
  static propTypes = {
    subject: React.PropTypes.objectOf(Immutable.Map).isRequired
  }

  render() {
    const { subject } = this.props;
    const {
      year
    } = subject.toJS();
    const rating = subject.get('rating');
    const casts = subject.get('casts');
    const directors = subject.get('directors');
    const genres = subject.get('genres');
    const summary = subject.get('summary');

    return (
      <div className="content">
        <div className="general tab">
          <div className="rating-and-year">
            <Rating rating={rating} />
            <div className="year">{year}</div>
          </div>
          <div className="details">
            <MoDetailRow type="casts" data={casts} />
            <MoDetailRow type="directors" data={directors} />
            <MoDetailRow type="genres" data={genres} />
          </div>
          <div className="summary">{summary}</div>
        </div>
      </div>
    );
  }
}
