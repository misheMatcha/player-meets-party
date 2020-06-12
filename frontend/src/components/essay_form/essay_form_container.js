import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  editUser: user => dispatch(editUser(user))
});

export default connect(mSTP, mDTP)(EssayForm);