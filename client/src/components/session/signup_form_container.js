import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
// import SessionFrom from './session_form';
import SignupForm from './signup_form';

const mSTP = state => ({
  errors: state.errors.session,
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm);