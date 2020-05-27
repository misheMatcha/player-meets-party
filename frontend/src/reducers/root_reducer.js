import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import ui from './ui_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  ui,
  errors
});

export default RootReducer;