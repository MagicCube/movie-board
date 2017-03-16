import React from 'react';

import '../res/search-bar.less';

export default class SearchBar extends React.Component {
  static propTypes = {
    onKeywordChange: React.PropTypes.func.isRequired
  }

  handleChange(e) {
    const value = e.target.value.trim();
    this.clearChangingTimer();
    this.changingTimer = setTimeout(() => {
      this.props.onKeywordChange({ keyword: value !== '' ? value : null });
    }, 360);
  }

  clearChangingTimer() {
    if (this.changingTimer) {
      clearTimeout(this.changingTimer);
    }
    this.changingTimer = null;
  }

  render() {
    return (
      <div className="mb-search-bar">
        <input type="search" onChange={e => this.handleChange(e)} placeholder="影片搜索" />
        <span className="octicon icon-search" />
      </div>
    );
  }
}
