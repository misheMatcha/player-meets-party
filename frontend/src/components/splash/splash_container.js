import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';

const mSTP = state => ({});

const mDTP = dispatch => ({
  login: (
    <button className='splash-nav-login-btn' onClick={() => dispatch(openModal('login'))}>Sign in</button>
  )
});

export default connect(mSTP, mDTP)(Splash);