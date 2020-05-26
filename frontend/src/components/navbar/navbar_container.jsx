import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { requestCurrentUser } from '../../actions/user_actions'
import Navbar from './navbar';

const mSTP = state => ({
  current: state.entities.users.current,
  authId: state.session.user.id
});

const mDTP = dispatch => ({
  boost: (
    <button className='navbar-btn nbboost' onClick={() => dispatch(openModal('boost'))}><div className='fas fa-bolt'/> BOOST</button>
  ),
  logout: () => dispatch(logout()),
  fetchCurrentUser: user_id => dispatch(requestCurrentUser(user_id))
});

export default connect(mSTP, mDTP)(Navbar);