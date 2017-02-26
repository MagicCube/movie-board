import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import modelActionCreators from '../actions/model-action-creators';
import LoLoMo from './LoLoMo';


@connect(
  state => ({ models: state.models }),
  dispatch => ({
    actions: bindActionCreators(modelActionCreators, dispatch)
  })
)
/**
 * Home page container.
 */
export default class HomePage extends React.PureComponent {
  static propTypes = {
    models: React.PropTypes.shape({
      inTheaters: React.PropTypes.object,
      comingSoon: React.PropTypes.object
    }),
    actions: React.PropTypes.shape({
      loadComingSoon: React.PropTypes.func.isRequired,
      loadInTheaters: React.PropTypes.func.isRequired
    }).isRequired
  }

  static defaultProps = {
    models: {
      inTheaters: { count: 0, total: 0, subjects: [] },
      comingSoon: { count: 0, total: 0, subjects: [] }
    }
  }

  componentDidMount() {
    this.props.actions.loadInTheaters();
    this.props.actions.loadComingSoon();
  }

  render() {
    // We only want to show inTheaters and comingSoon in the home page.
    // This is why LoLoMo MUST be a pure component which is using shallow comparation.
    const models = {
      inTheaters: this.props.models.inTheaters,
      comingSoon: this.props.models.comingSoon,
    };
    return (
      <div className="mb-page mb-home-page">
        <LoLoMo models={models} />
      </div>
    );
  }
}
