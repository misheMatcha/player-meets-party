import { LOGIN_USER, LOGOUT_USER } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

const SessionReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_USER:
      return{
        ...state,
        isAuthenticated: !!action.user,
        currentUser: action.user
      };
    case LOGOUT_USER:
      return{
        isAuthenticated: false,
        currentUser: undefined
      }
    default:
      return state;
  }
};

export default SessionReducer;