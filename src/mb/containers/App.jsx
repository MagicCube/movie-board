import React from 'react';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

import '../res/app.less';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  static defaultProps = {
    children: []
  }

  render() {
    return (
      <div className="mb-app">
        <AppHeader navbars={[]} />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}
