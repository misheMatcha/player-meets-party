import { connect } from 'react-redux';
import Profile from './profile';
import { requestAllUsers } from '../../actions/user_actions';

// remove ul/tests after checking the reducers are working as intended

const mSTP = state => ({
  ul: state.entities.users
});

const mDTP = dispatch => ({
  test: () => dispatch(requestAllUsers())
});

export default connect(mSTP, mDTP)(Profile);