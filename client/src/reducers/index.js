import { combineReducers } from 'redux';
import invitesReducer from './invitesReducer';
import uiReducer from './uiReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  invites: invitesReducer,
  users: usersReducer,
  ui: uiReducer,
});
