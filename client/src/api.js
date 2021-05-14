import axios from 'axios';

const invitesAPI = axios.create({
  baseURL: 'http://localhost:3005',
});

export default invitesAPI;
