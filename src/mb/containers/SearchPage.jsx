import React from 'react';
import { connect } from 'react-redux';


@connect(
  state => ({
    results: state.getIn(['models', 'search'])
  })
)
export default class SearchPage extends React.PureComponent {
  render() {
    return (
      <div className="mb-page mb-search-page"></div>
    );
  }
}
