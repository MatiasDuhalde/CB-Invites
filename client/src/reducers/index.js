import { combineReducers } from 'redux';
import invitesReducer from './invitesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  invites: invitesReducer,
  users: usersReducer,
});
