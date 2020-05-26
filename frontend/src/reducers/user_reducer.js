import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

const initialState = {
  list: null,
  user: null,
  current: null
};

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ALL_USERS:
      newState.list = action.users.data;
      return newState;
    case RECEIVE_USER:
      newState.user = action.user.data;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;