import invitesAPI from '../api';
import { CREATE_INVITE_LINK, CREATE_USER, FETCH_RANKING } from './types';

export const fetchRanking = () => async dispatch => {
  const response = await invitesAPI.get('/ranking');
  dispatch({ type: FETCH_RANKING, payload: response.data });
};

export const createUser = formValues => async dispatch => {
  const sentData = (({ fullName, sex, email, address, inviteCode }) => ({
    fullName,
    sex,
    email,
    address,
    inviteCode,
  }))(formValues);
  const response = await invitesAPI.post('/user', sentData);
  dispatch({ type: CREATE_USER, payload: response.data });
};

export const createInviteLink = formValues => async dispatch => {
  const sentData = (({ fullName, email }) => ({
    fullName,
    email,
  }))(formValues);
  const response = await invitesAPI.post('/invite', sentData);
  dispatch({ type: CREATE_INVITE_LINK, payload: response.data });
};
