import React from 'react';

import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

import './res/app.less';

/**
 * Application container.
 */
export default class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.element
  }

  static defaultProps = {
    children: []
  }

  render() {
    return (
      <div className="mb-app">
        <AppHeader />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}
