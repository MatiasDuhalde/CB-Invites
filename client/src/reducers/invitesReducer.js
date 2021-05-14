import { CREATE_INVITE_LINK, FETCH_RANKING } from '../actions/types';

const INITIAL_STATE = {
  ranking: [],
};

const invitesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RANKING:
      const newState = { ...state };
      newState.ranking = action.payload;
      return newState;
    case CREATE_INVITE_LINK:
      return { ...state, invite: action.payload.user };
    default:
      return state;
  }
};

export default invitesReducer;
