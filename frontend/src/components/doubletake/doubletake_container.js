import { connect } from 'react-redux'
import { requestAllUsers, requestUser } from '../../actions/user_actions';
import Doubletake from './doubletake';

const mSTP = state => ({
  users: state.entities.users.list,
  curUser: state.entities.users.user
});

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(requestAllUsers()),
  fetchCurrentUser: userId => dispatch(requestUser(userId))
});

export default connect(mSTP, mDTP)(Doubletake);