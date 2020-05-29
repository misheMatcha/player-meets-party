import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import { editUser, requestCurrentUser } from '../../../actions/user_actions';
import PronounsForm from './pronouns_form';

const mSTP = state => ({
  user: state.entities.users.current
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  editUser: user => dispatch(editUser(user)),
  requestCurrentUser: user_id => dispatch(requestCurrentUser(user_id))
});

export default connect(mSTP, mDTP)(PronounsForm);