import { connect } from 'react-redux';
import Immutable from 'immutable';
import React from 'react';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import ProgressBar from '../components/ProgressBar';

import '../res/app.less';

/**
 * Application container.
 */
@connect(
  state => ({
    status: state.get('status')
  })
)
export default class App extends React.PureComponent {
  static propTypes = {
    status: React.PropTypes.objectOf(Immutable.Map).isRequired,
    children: React.PropTypes.element
  }

  static defaultProps = {
    children: []
  }

  render() {
    return (
      <div className="mb-app">
        <AppHeader />
        <ProgressBar isLoading={this.props.status.get('isLoading')} />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}
