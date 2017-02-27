import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import React from 'react';

import JawBone from '../components/JawBone';
import modelActionCreators from '../actions/model-action-creators';
import lolomoActionCreators from '../actions/lolomo-action-creators';
import LoLoMoRow from '../components/LoLoMoRow';
import MoJumbotron from '../components/MoJumbotron';

import '../res/lolomo.less';

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影'
};


@connect(
  state => ({
    selectedSubjectId: state.getIn(['lolomo', 'selectedSubjectId']),
    selectedRowKey: state.getIn(['lolomo', 'selectedRowKey']),
  }),
  dispatch => ({
    actions: {
      selectSubject(payload) {
        dispatch(lolomoActionCreators.selectSubject(payload));
      },
      loadSubject(subjectId) {
        dispatch(modelActionCreators.loadSubject(subjectId));
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
      selectSubject: React.PropTypes.func.isRequired,
      loadSubject: React.PropTypes.func.isRequired
    }).isRequired,
    models: React.PropTypes.objectOf(Immutable.Map).isRequired,
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
    const subject = selectedSubjectId ? models.getIn([selectedRowKey, 'subjects']).find(s => s.get('id') === selectedSubjectId) : null;
    return (
      <JawBone>
        <MoJumbotron subject={subject} />
      </JawBone>
    );
  }

  render() {
    const { models, selectedRowKey, selectedSubjectId } = this.props;

    const rows = models.map((model, key) => {
      const title = TITLES[key];
      const actions = {
        selectSubject: (subject) => {
          this.props.actions.selectSubject({ subject, rowKey: key });
          this.props.actions.loadSubject(subject.get('id'));
        }
      };
      const jawBone = selectedRowKey === key ? this.createJawBone(this.props) : null;
      return (
        <LoLoMoRow
          key={key}
          subjectKey={key}
          actions={actions}
          defaultTitle={title}
          model={model}
          hasSelection={selectedRowKey === key}
          selectedSubjectId={selectedSubjectId}
        >
          {jawBone}
        </LoLoMoRow>
      );
    }).toArray();

    return (
      <div className="mb-lolomo">
        {rows}
      </div>
    );
  }
}
