import { CREATE_USER } from '../actions/types';

const INITIAL_STATE = {};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createdUser: action.payload.user,
        acceptedInvite: action.payload.invite,
      };
    default:
      return state;
  }
};

export default usersReducer;
