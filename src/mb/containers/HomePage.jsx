import React from 'react';
import { connect } from 'react-redux';

import modelActionCreators from '../actions/model-action-creators';
import LoLoMo from './LoLoMo';


@connect(
  state => ({
    models: state.models,
  }),
  dipatch => ({
    loadComingSoon() {
      dipatch(modelActionCreators.loadComingSoon());
    },
    loadInTheaters() {
      dipatch(modelActionCreators.loadInTheaters());
    }
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
    loadComingSoon: React.PropTypes.func.isRequired,
    loadInTheaters: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    models: {
      inTheaters: { count: 0, total: 0, subjects: [] },
      comingSoon: { count: 0, total: 0, subjects: [] }
    }
  }

  componentDidMount() {
    this.props.loadInTheaters();
    this.props.loadComingSoon();
  }

  render() {
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
