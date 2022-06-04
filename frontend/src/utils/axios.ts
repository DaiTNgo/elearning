import axios from 'axios';
const BASE_URL = 'http://localhost:5000';
export default axios.create({
  baseURL: BASE_URL,
});
export const axiosAuth = axios.create({
  baseURL: `${BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosCourse = axios.create({
  baseURL: `${BASE_URL}/course`,
  headers: {
    'Content-Type': 'application/json',
  },
});
