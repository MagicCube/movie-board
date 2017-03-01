import { connect } from 'react-redux';
import React from 'react';

import LoMoCovers from '../components/LoMoCovers';

import actionCreators from '../actions/lolomo-action-creators';


export default connect(
  (state, ownProps) => ({
    subjects: state.getIn(['models', ownProps.modelKey, 'subjects']),
    selectedSubjectId: state.getIn(['lolomo', 'selectedSubject', 'id']),
    hasSelection: state.getIn(['lolomo', 'selectedModelKey']) === ownProps.modelKey
  }),
  (dispatch, ownProps) => ({
    actions: {
      selectSubject(subject) {
        dispatch(actionCreators.selectSubject({ subject, modelKey: ownProps.modelKey }));
        if (subject) {
          dispatch(actionCreators.loadSubject(subject.get('id')));
        }
      }
    }
  })
)(LoMoCovers);
