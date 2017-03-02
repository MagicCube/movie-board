import { connect } from 'react-redux';
import React from 'react';

import LoMoCovers from '../components/LoMoCovers';

import actionCreators from '../actions/lolomo-action-creators';


export default connect(
  state => ({
    selectedSubjectId: state.getIn(['lolomo', 'selectedSubject', 'id']),
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
