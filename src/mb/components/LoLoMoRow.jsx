import cs from 'classnames';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


/**
 * Represent a single row in a LoLoMo container.
 */
export default class LoLoMoRow extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)]),
    hasSelection: React.PropTypes.bool,
    jawBone: React.PropTypes.element,
    title: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    children: null,
    hasSelection: false,
    jawBone: null
  }

  scrollLeft = () => {
    let scroll = this.getScroll();
    scroll -= this.scrollable.offsetWidth - 40; // 40 is the @mb-app-padding
    if (scroll < 0) {
      scroll = 0;
    }
    this.setScroll(scroll);
  }

  scrollRight = () => {
    let scroll = this.getScroll();
    scroll += this.scrollable.offsetWidth - 40; // 40 is the @mb-app-padding
    const max = this.scrollable.scrollWidth - this.scrollable.offsetWidth;
    if (scroll > max) {
      scroll = max;
    }
    this.setScroll(scroll);
  }

  getScroll() {
    let transform = this.scrollable.style.transform;
    if (!transform.startsWith('translate')) {
      transform = 'translateX(0px)';
    }
    const translateX = parseInt(transform.match(/\(([-\d]+)/)[1], 0);
    return Math.abs(translateX);
  }

  setScroll(scroll) {
    this.scrollable.style.transform = `translate(${-scroll}px)`;
  }

  render() {
    const { title, hasSelection, jawBone } = this.props;
    const children = React.Children.toArray(this.props.children);
    return (
      <div className={cs('mb-lolomo-row', { 'no-selection': !hasSelection }, { 'has-selection': hasSelection })}>
        <div className="row-head">
          <a className="title h3">{title}</a>
        </div>
        <div className="row-content">
          <a className="left scroll-button" role="button" onClick={this.scrollLeft}><i className="octicon icon-chevron-left" /></a>
          <div ref={(div) => { this.scrollable = div; }} className="scrollable">
            {children.length > 0 ? children[0] : null}
          </div>
          <a className="right scroll-button" role="button" onClick={this.scrollRight}><i className="octicon icon-chevron-right" /></a>
        </div>
        <ReactCSSTransitionGroup
            transitionName="jaw-bone-transition"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
          >
          {jawBone}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
