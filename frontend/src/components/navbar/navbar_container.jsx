import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const mSTP = state => ({
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
  boost: (
    <button className='navbar-btn nbboost' onClick={() => dispatch(openModal('boost'))}><div className='fas fa-bolt'/> BOOST</button>
  )
});

export default connect(mSTP, mDTP)(Navbar);