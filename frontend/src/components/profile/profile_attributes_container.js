import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ProfileAttributes from './profile_attributes.jsx';

const mSTP = state => ({});

const mDTP = dispatch => ({
  basics: () => dispatch(openModal('Basics')),
  pronouns: () => dispatch(openModal('Pronouns')),
  looks: () => dispatch(openModal('Looks')),
  background: () => dispatch(openModal('Background')),
  lifestyle: () => dispatch(openModal('Lifestyle')),
  family: () => dispatch(openModal('Family')),
  lookingFor: () => dispatch(openModal('I am looking for'))
});

export default connect(mSTP, mDTP)(ProfileAttributes);