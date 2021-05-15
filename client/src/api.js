import axios from 'axios';

const invitesAPI = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'http://localhost:3005',
});

export default invitesAPI;
