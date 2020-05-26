import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import Profile from './profile';

const mSTP = state => ({
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(Profile);