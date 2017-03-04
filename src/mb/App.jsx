import React from 'react';

import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

import style from './res/App.less';

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
      <div className={style.App}>
        <AppHeader />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}
