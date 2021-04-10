import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const requestAllUsers = () => dispatch => UserApiUtil.fetchUsers()
  .then(users => dispatch(receiveAllUsers(users)))
  .catch(err => console.log(err));

export const requestUser = user_id => dispatch => UserApiUtil.fetchUser(user_id)
  .then(user => dispatch(receiveUser(user)))
  .catch(err => console.log(err));

export const requestCurrentUser = user_id => dispatch => UserApiUtil.fetchUser(user_id)
  .then(user => dispatch(receiveCurrentUser(user)))
  .catch(err => console.log(err));

export const editUser = user => dispatch => UserApiUtil.updateUser(user)
  .then(modifiedUser => dispatch(receiveUser(modifiedUser)))
  .catch(err => console.log(err));