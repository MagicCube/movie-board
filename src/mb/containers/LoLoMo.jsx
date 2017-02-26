import React from 'react';
import { connect } from 'react-redux';

import JawBone from '../components/JawBone';
import lolomoActionCreators from '../actions/lolomo-action-creators';
import LoLoMoRow from '../components/LoLoMoRow';

import '../res/lolomo.less';

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影'
};


@connect(
  state => ({
    selectedSubjectId: state.lolomo.selectedSubjectId,
    selectedRowKey: state.lolomo.selectedRowKey
  }),
  dispatch => ({
    actions: {
      selectSubject(subject) {
        dispatch(lolomoActionCreators.selectSubject(subject));
      }
    }
  })
)
/**
 * The famous design awarded "List Of List of Movie" container.
 */
export default class LoLoMo extends React.PureComponent {
  static propTypes = {
    actions: React.PropTypes.shape({
      selectSubject: React.PropTypes.func.isRequired
    }).isRequired,
    models: React.PropTypes.shape({}).isRequired,
    selectedSubjectId: React.PropTypes.string,
    selectedRowKey: React.PropTypes.string
  }

  static defaultProps = {
    selectedSubjectId: null,
    selectedRowKey: null
  }

  getJawBone() {
    if (!this._jawBone) {
      this._jawBone = (
        <JawBone>
          <h1>JawBone Placeholder</h1>
        </JawBone>
      );
    }
    return this._jawBone;
  }

  render() {
    const rows = Object.keys(this.props.models).map((key) => {
      const model = this.props.models[key];
      const title = TITLES[key];
      const actions = {
        selectSubject: subject => this.props.actions.selectSubject({ subject, rowKey: key })
      };
      const jawBone = this.props.selectedRowKey === key ? this.getJawBone() : null;
      return (
        <LoLoMoRow
          key={key}
          actions={actions}
          defaultTitle={title}
          model={model}
          hasSelection={this.props.selectedRowKey === key}
          selectedSubjectId={this.props.selectedSubjectId}
        >
          {jawBone}
        </LoLoMoRow>
      );
    });

    return (
      <div className="mb-lolomo">
        {rows}
      </div>
    );
  }
}
