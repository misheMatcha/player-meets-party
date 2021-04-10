import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mSTP = state => ({
  errors: Object.values(state.errors.session),
  loggedIn: state.session.isAuthenticated
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(LoginForm);