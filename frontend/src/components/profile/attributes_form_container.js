import { connect } from 'react-redux';
import AttributesForm from './attributes_form.jsx';
import { closeModal } from '../../actions/modal_actions';

const mSTP = props => ({});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(AttributesForm);