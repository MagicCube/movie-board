import React from 'react';

import '../res/search-bar.less';

export default class SearchBar extends React.Component {
  static propTypes = {
    onQueryChange: React.PropTypes.func.isRequired
  }

  handleChange(e) {
    const value = e.target.value.trim();
    this.clearChangingTimer();
    this.changingTimer = setTimeout(() => {
      this.props.onQueryChange({ query: value !== '' ? value : null });
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
        <input type="search" onChange={e => this.handleChange(e)} placeholder="影片名或艺术家" />
        <span className="octicon icon-search" />
      </div>
    );
  }
}
