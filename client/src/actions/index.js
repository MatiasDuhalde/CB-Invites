import invitesAPI from '../api';
import { FETCH_RANKING } from './types';

export const fetchRanking = () => async dispatch => {
  const response = await invitesAPI.get('/ranking');
  dispatch({ type: FETCH_RANKING, payload: response.data });
};
