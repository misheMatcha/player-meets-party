import { connect } from 'react-redux'
import { requestAllUsers } from '../../actions/user_actions';
import Doubletake from './doubletake';

const mSTP = state => ({
  users: state.entities.users.list
});

const mDTP = dispatch => ({
  fetchUsers: () => dispatch(requestAllUsers())
});

export default connect(mSTP, mDTP)(Doubletake);