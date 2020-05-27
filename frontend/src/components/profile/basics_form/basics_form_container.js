import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import BasicsForm from './basics_form';

const mSTP = state => ({
  user: state.entities.users.user
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(BasicsForm);