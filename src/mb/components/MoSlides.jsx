import Immutable from 'immutable';
import React from 'react';

import '../res/mo-slides.less';

/**
 * The photo/trailer slide show component.
 */
export default class MoSlides extends React.Component {
  static propTypes = {
    slides: React.PropTypes.objectOf(Immutable.List)
  }

  static defaultProps = {
    slides: Immutable.fromJS([])
  }

  render() {
    const { slides } = this.props;
    const slideElements = slides.map(slide => (
      <div key={slide.get('id')} className="slide" style={{ backgroundImage: `url(${slide.get('cover') ? slide.get('cover') : slide.get('medium')})` }} />
    )).toArray();
    return (
      <div className="mb-mo-slides">
        <div className="slides">
          {slideElements}
        </div>
        <div className="mask" />
      </div>
    );
  }
}
