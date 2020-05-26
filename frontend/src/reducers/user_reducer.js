import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_USERS:
      return Object.assign({}, state, action.users.data);
    case RECEIVE_USER:
      return Object.assign({}, state, {currentUser: action.user.data});
    default:
      return state;
  }
};

export default UserReducer;