import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.shrtco.de/v2/shorten?url=',
});
