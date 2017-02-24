import React from 'react';
import { connect } from 'react-redux';

import modelActionCreators from '../actions/model-action-creators';
import lolomoActionCreators from '../actions/lolomo-action-creators';
import LoLoMo from '../components/LoLoMo';

import '../res/home-page.less';


@connect(
  state => ({ models: state.models, selectedSubjectId: state.lolomo.selectedSubjectId, selectedRowKey: state.lolomo.selectedRowKey }),
  dipatch => ({
    loadComingSoon() {
      dipatch(modelActionCreators.loadComingSoon());
    },
    loadInTheaters() {
      dipatch(modelActionCreators.loadInTheaters());
    },
    selectSubject(subject) {
      dipatch(lolomoActionCreators.selectSubject(subject));
    }
  })
)
export default class HomePage extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({}),
    loadComingSoon: React.PropTypes.func.isRequired,
    loadInTheaters: React.PropTypes.func.isRequired,
    selectedRowKey: React.PropTypes.string,
    selectedSubjectId: React.PropTypes.string,
    selectSubject: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    models: { inTheaters: { count: 0 }, comingSoon: { count: 0 } },
    selectedSubjectId: null
  }

  componentDidMount() {
    this.props.loadInTheaters();
    this.props.loadComingSoon();
  }

  render() {
    return (
      <div className="mb-page mb-home-page">
        <LoLoMo
          actions={{ selectSubject: this.props.selectSubject }}
          models={this.props.models}
          selectedSubjectId={this.props.selectedSubjectId}
          selectedRowKey={this.props.selectedRowKey}
        />
      </div>
    );
  }
}
