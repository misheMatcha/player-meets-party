import { connect } from 'react-redux';
import { requestUser, editUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const mSTP = state => ({
  user: state.entities.users.user,
  current: state.entities.users.current
});

const mDTP = dispatch => ({
  fetchUser: user_id => dispatch(requestUser(user_id)),
  basicsForm: () => dispatch(openModal('basics')),
  pronounsForm: () => dispatch(openModal('pronouns')),
  editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(Profile);