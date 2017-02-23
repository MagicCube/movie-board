import React from 'react';

import '../res/home-page.less';

export default class HomePage extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    return (
      <div className="mb-page mb-home-page">
        <h1>Home Page</h1>
      </div>
    );
  }
}
