import { combineReducers } from 'redux';
import invitesReducer from './invitesReducer';

export default combineReducers({
  invites: invitesReducer,
});
