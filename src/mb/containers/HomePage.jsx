import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import React from 'react';

import modelActionCreators from '../actions/model-action-creators';
import LoLoMo from './LoLoMo';


@connect(
  state => ({ models: state.get('models') }),
  dispatch => ({
    actions: bindActionCreators(modelActionCreators, dispatch)
  })
)
/**
 * Home page container.
 */
export default class HomePage extends React.PureComponent {
  static propTypes = {
    models: React.PropTypes.objectOf(Immutable.Map).isRequired,
    actions: React.PropTypes.shape({
      loadComingSoon: React.PropTypes.func.isRequired,
      loadInTheaters: React.PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount() {
    this.props.actions.loadInTheaters();
    this.props.actions.loadComingSoon();
  }

  render() {
    // We only want to show inTheaters and comingSoon in the home page.
    // This is why LoLoMo MUST be a pure component which is using shallow comparation.
    const models = Immutable.Map({
      inTheaters: this.props.models.get('inTheaters'),
      comingSoon: this.props.models.get('comingSoon')
    });
    return (
      <div className="mb-page mb-home-page">
        <LoLoMo models={models} />
      </div>
    );
  }
}
