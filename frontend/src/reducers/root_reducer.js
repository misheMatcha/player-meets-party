import { combineReducers } from 'redux';
import session from './session_reducer';
import ui from './ui_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  ui,
  errors
});

export default RootReducer;