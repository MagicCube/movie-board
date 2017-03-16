import React from 'react';

import '../res/search-bar.less';

export default class SearchBar extends React.Component {
  onChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="mb-search-bar">
        <input type="search" onChange={e => this.onChange(e)} placeholder="影片搜索" />
        <span className="octicon icon-search" />
      </div>
    );
  }
}
