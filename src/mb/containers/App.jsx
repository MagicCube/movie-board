import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Immutable from 'immutable';
import React from 'react';

import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import ProgressBar from '../components/ProgressBar';
import SearchBar from '../components/SearchBar';
import modelActionCreators from '../actions/model-action-creators';

import '../res/app.less';

/**
 * Application container.
 */
@connect(
  state => ({
    status: state.get('status')
  }),
  dispatch => ({
    actions: bindActionCreators(modelActionCreators, dispatch)
  })
)
export default class App extends React.PureComponent {
  static propTypes = {
    status: React.PropTypes.objectOf(Immutable.Map).isRequired,
    children: React.PropTypes.element,
    actions: React.PropTypes.shape({
      search: React.PropTypes.func.isRequired
    }).isRequired
  }

  static defaultProps = {
    children: []
  }

  handleQueryChange(e) {
    if (e.query !== null) {
      if (browserHistory.getCurrentLocation().pathname !== '/search') {
        browserHistory.push('/search');
      }
      this.props.actions.search({ query: e.query });
    } else if (browserHistory.getCurrentLocation().pathname !== '/') {
      browserHistory.push('/');
    }
  }

  render() {
    this.searchBar = <SearchBar onQueryChange={e => this.handleQueryChange(e)} />;
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
