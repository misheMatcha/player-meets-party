import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { editUser } from '../../../actions/user_actions';
import BasicsForm from './basics_form';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(BasicsForm);