import { LOGIN_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case LOGIN_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;