import Immutable from 'immutable';
import React from 'react';
import { connect } from 'react-redux';

import LoMoCovers from '../components/LoMoCovers';

import '../res/search-page.less';

@connect(
  state => ({
    searchResults: state.getIn(['models', 'searchResults'])
  })
)
export default class SearchPage extends React.Component {
  static propTypes = {
    searchResults: React.PropTypes.objectOf(Immutable.Map)
  };

  static defaultProps = {
    searchResults: Immutable.fromJS({
      subjects: []
    })
  }

  render() {
    console.log(this.props.searchResults.get('subjects'));
    return (
      <div className="mb-page mb-search-page">
        <LoMoCovers subjects={this.props.searchResults.get('subjects')} actions={{ selectSubject: () => {} }} />
      </div>
    );
  }
}
