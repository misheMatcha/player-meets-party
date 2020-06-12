import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import EssayForm from './essay_form.jsx';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  editUser: user => dispatch(editUser(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(EssayForm);