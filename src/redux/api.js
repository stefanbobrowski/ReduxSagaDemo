import axios from 'axios';

export const api = axios.create({
	// baseURL: config.restApi,
	timeout: 3000,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'X-Requested-With',
	},
});

export default api;
