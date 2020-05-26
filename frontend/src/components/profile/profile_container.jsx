import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  fetchUser: user_id => dispatch(requestUser(user_id)),
  basicsForm: () => dispatch(openModal('basics'))
});

export default connect(mSTP, mDTP)(Profile);