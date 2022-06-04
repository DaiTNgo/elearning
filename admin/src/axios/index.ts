import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export const axiosAuth = axios.create({
	baseURL: `${BASE_URL}/auth`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export const axiosUser = axios.create({
	baseURL: `${BASE_URL}/user`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export const axiosInstructor = axios.create({
	baseURL: `${BASE_URL}/instructor`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export const axiosCourse = axios.create({
	baseURL: `${BASE_URL}/course`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});
