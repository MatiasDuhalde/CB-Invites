import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../actions/types';

const INITIAL_STATE = {
  showingNotification: false,
  notificationMessage: '',
  notificationType: null,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        showingNotification: false,
        notificationMessage: action.payload.message,
        notificationType: action.payload.type,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        showingNotification: false,
        notificationMessage: '',
        notificationType: null,
      };
    default:
      return state;
  }
};

export default uiReducer;
