import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Boost from './boost';

const mSTP = state => ({});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Boost);