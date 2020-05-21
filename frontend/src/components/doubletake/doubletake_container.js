import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';
import Doubletake from './doubletake';

const mSTP = state => ({
  errors: state.errors.session
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Doubletake);