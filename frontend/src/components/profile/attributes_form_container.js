import { connect } from 'react-redux';
import AttributesForm from './attributes_form.jsx';
import { closeModal } from '../../actions/modal_actions';
import { requestUser, editUser } from '../../actions/user_actions';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchUser: userId => dispatch(requestUser(userId)),
  updateUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(AttributesForm);