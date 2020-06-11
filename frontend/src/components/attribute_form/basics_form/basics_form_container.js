import { connect } from 'react-redux';
import BasicsForm from './basics_form.jsx';
import { closeModal } from '../../../actions/modal_actions';
import { editUser } from '../../../actions/user_actions';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(BasicsForm);