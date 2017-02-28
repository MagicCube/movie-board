import Immutable from 'immutable';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.slides.equals(this.props.slides) || nextState.slideIndex !== this.state.slideIndex;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.slides.size && !nextProps.slides.equals(this.props.slides)) {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        this.setState((prevState, props) => {
          let slideIndex = prevState.slideIndex + 1;
          if (slideIndex > props.slides.size - 1) {
            slideIndex = 0;
          }
          return { slideIndex };
        });
      }, 3000);
      this.setState({
        slideIndex: 0
      });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    const { slides } = this.props;
    const slide = slides.get(this.state.slideIndex);
    let slideElement = null;
    if (slide) {
      slideElement = (
        <div
          key={slide.get('id')}
          className="slide"
          style={{ backgroundImage: `url(${slide.get('image') ? slide.get('image') : slide.get('medium')})` }}
        />
      );
    }
    return (
      <div className="mb-mo-slides">
        <div className="slides">
          <ReactCSSTransitionGroup
            transitionName="slide-transition"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800}
          >
            {slideElement}
          </ReactCSSTransitionGroup>
        </div>
        <div className="mask" />
      </div>
    );
  }
}
