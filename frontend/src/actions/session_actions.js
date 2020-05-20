import * as ApiUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const LOGIN_USER = 'LOGIN_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = user => ({
  type: LOGIN_USER,
  user
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => ApiUtil.signup(user)
  .then(
    () => dispatch(login(user)),
    err => dispatch(receiveErrors(err.response.data))
  );

export const login = user => dispatch => ApiUtil.login(user)
  .then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    ApiUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(loginUser(decoded))
  })
  .catch(err => dispatch(receiveErrors(err.response.data)));

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  ApiUtil.setAuthToken(false)
  dispatch(logoutUser())
};