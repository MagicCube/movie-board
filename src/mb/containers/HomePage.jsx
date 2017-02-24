import React from 'react';

import LoLoMo from '../components/LoLoMo';

import '../res/home-page.less';

export default class HomePage extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    return (
      <div className="mb-page mb-home-page">
        <LoLoMo />
      </div>
    );
  }
}
