import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionFrom from './session_form';

const mSTP = state => ({
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(SessionFrom);