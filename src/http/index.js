import {AUTH_URL} from "../services/AuthService";

const axios = require("axios");

export const API_URL = `http://localhost:8080/api`

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('access-token')
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response && error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const refreshToken = localStorage.getItem('refresh-token')
            const response = await $api.post(`${AUTH_URL}/refresh-token`, {refreshToken})
            localStorage.setItem('access-token', response.data.accessToken)
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Unauthorized')
        }
    }
    throw error;
})

export default $api;