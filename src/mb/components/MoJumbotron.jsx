import React from 'react';

import MoDetailRow from './MoDetailRow';
import Rating from './Rating';

import '../res/mo-jumbotron.less';

/**
 * The jumbotron component to show movie details.
 * It can be included in a JawBone container inside a LoLoMo.
 */
export default class MoJumbotron extends React.PureComponent {
  static propTypes = {
    subject: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      year: React.PropTypes.string.isRequired,
      genres: React.PropTypes.array.isRequired,
      casts: React.PropTypes.array.isRequired,
      directors: React.PropTypes.array.isRequired,
      rating: React.PropTypes.object.isRequired,
    }).isRequired
  }

  render() {
    const {
      id,
      title,
      year,
      genres,
      casts,
      directors,
      rating
    } = this.props.subject;
    return (
      <div className="mb-mo-jumbotron" data-subject-id={id}>
        <div className="content">
          <h1><span className="title">{title}</span></h1>
          <div className="rating-and-year">
            <Rating rating={rating} />
            <div className="year">{year}</div>
          </div>
          <div className="details">
            <MoDetailRow type="casts" data={casts} />
            <MoDetailRow type="directors" data={directors} />
            <MoDetailRow type="genres" data={genres} />
          </div>
          <div className="summary">
          </div>
        </div>
      </div>
    );
  }
}
