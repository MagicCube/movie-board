import { connect } from 'react-redux';
import Immutable from 'immutable';
import React from 'react';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import ProgressBar from '../components/ProgressBar';
import SearchBar from '../components/SearchBar';

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
    this.searchBar = <SearchBar onKeywordChange={e => console.log(e.keyword)} />;
    return (
      <div className="mb-app">
        <AppHeader navbars={this.searchBar} />
        <ProgressBar isLoading={this.props.status.get('isLoading')} />
        {this.props.children}
        <AppFooter />
      </div>
    );
  }
}
