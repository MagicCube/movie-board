import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JawBone from '../components/JawBone';
import lolomoActionCreators from '../actions/lolomo-action-creators';
import LoLoMoRow from '../components/LoLoMoRow';
import MoJumbotron from '../components/MoJumbotron';

import '../res/lolomo.less';

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影'
};


@connect(
  state => state.lolomo,
  dispatch => ({
    actions: bindActionCreators(lolomoActionCreators, dispatch)
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

  createJawBone({
    models,
    selectedRowKey,
    selectedSubjectId
  }) {
    const subject = selectedSubjectId ? models[selectedRowKey].subjects.find(subject => subject.id === selectedSubjectId) : null;
    return (
      <JawBone>
        <MoJumbotron subject={subject} />
      </JawBone>
    );
  }

  render() {
    const { models, selectedRowKey, selectedSubjectId } = this.props;

    const rows = Object.keys(models).map((key) => {
      const model = models[key];
      const title = TITLES[key];
      const actions = {
        selectSubject: subject => this.props.actions.selectSubject({ subject, rowKey: key })
      };
      const jawBone = selectedRowKey === key ? this.createJawBone(this.props) : null;
      return (
        <LoLoMoRow
          key={key}
          actions={actions}
          defaultTitle={title}
          model={model}
          hasSelection={selectedRowKey === key}
          selectedSubjectId={selectedSubjectId}
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
