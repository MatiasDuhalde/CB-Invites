import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../actions/types';

const INITIAL_STATE = {
  showingNotification: false,
  notificationMessage: '',
  notificationType: 'info',
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        showingNotification: true,
        notificationMessage: action.payload.message,
        notificationType: action.payload.type,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        showingNotification: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
