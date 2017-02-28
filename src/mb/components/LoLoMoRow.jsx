import cs from 'classnames';
import Immutable from 'immutable';
import React from 'react';

import LoMoCovers from './LoMoCovers';


/**
 * Represent a single row in a LoLoMo container.
 */
export default class LoLoMoRow extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
    children: React.PropTypes.element,
    defaultTitle: React.PropTypes.string.isRequired,
    hasSelection: React.PropTypes.bool,
    model: React.PropTypes.objectOf(Immutable.Map).isRequired,
    selectedSubjectId: React.PropTypes.string,
    subjectKey: React.PropTypes.string
  }

  static defaultProps = {
    actions: {},
    children: null,
    hasSelection: false,
    selectedSubjectId: null,
    subjectKey: null
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
    const { actions, children, defaultTitle, hasSelection, model, selectedSubjectId, subjectKey } = this.props;
    return (
      <div className={cs('mb-lolomo-row', { 'no-selection': !hasSelection }, { 'has-selection': hasSelection })}>
        <div className="row-head">
          <a className="title h3">{model.get('title') ? model.get('title') : defaultTitle}</a>
        </div>
        <div className="row-content">
          <a className="left scroll-button" role="button" onClick={this.scrollLeft}><i className="octicon icon-chevron-left" /></a>
          <div ref={(div) => { this.scrollable = div; }} className="scrollable">
            <LoMoCovers subjectKey={subjectKey} subjects={model.get('subjects')} hasSelection={hasSelection} selectedSubjectId={selectedSubjectId} actions={actions} />
          </div>
          <a className="right scroll-button" role="button" onClick={this.scrollRight}><i className="octicon icon-chevron-right" /></a>
        </div>
        {children}
      </div>
    );
  }
}
