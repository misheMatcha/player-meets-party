import { connect } from 'react-redux';
import Navbar from './navbar';

const mSTP = state => ({
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(Navbar);