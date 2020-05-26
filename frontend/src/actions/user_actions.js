import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = () => dispatch => UserApiUtil.requestAllUsers()
  .then(users => dispatch(receiveAllUsers(users)))
  .catch(err => console.log(err));