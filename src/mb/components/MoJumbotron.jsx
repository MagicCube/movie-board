import Immutable from 'immutable';
import React from 'react';

import MoDetailRow from './MoDetailRow';
import Rating from './Rating';

import '../res/mo-jumbotron.less';

/**
 * The jumbotron component to show movie details.
 * It can be included in a JawBone container inside a LoLoMo.
 */
export default class MoJumbotron extends React.Component {
  static propTypes = {
    subject: React.PropTypes.objectOf(Immutable.Map).isRequired
  }

  shouldComponentUpdate(nextProps) {
    return !nextProps.subject.equals(this.props.subject);
  }

  render() {
    const { subject } = this.props;
    const {
      id,
      title,
      year
    } = subject.toJS();
    const rating = subject.get('rating');
    const casts = subject.get('casts');
    const directors = subject.get('directors');
    const genres = subject.get('genres');
    const summary = subject.get('summary');
    return (
      <div className="mb-mo-jumbotron" data-subject-id={id}>
        <div className="content">
          <h1><span className="title">{title}</span></h1>
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
      </div>
    );
  }
}
