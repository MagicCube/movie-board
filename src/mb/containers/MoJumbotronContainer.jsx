import React from 'react';
import { connect } from 'react-redux';

import MoJumbotron from '../components/MoJumbotron';


export default connect(
  state => ({
    subject: state.getIn(['lolomo', 'selectedSubject'])
  })
)(MoJumbotron);
