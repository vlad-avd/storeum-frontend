import axios from "axios";
import $api, {API_URL} from "../http";

export const AUTH_URL = '/auth'

class AuthService {

    login(username, password) {
        return axios.post(`${API_URL + AUTH_URL}/login`, {username, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify({id: response.data.id, username: response.data.username}));
                    localStorage.setItem('access-token', response.data.accessToken)
                    localStorage.setItem('refresh-token', response.data.refreshToken)
                }
                return response.data;
            });
    }

    register(username, email, password) {
        return axios.post(`${API_URL + AUTH_URL}/register`, {username, email, password})
            .then((response) => {
                return response.data;
            })
    }

    logout(userId) {
        return $api.post(`${AUTH_URL}/logout`, {userId})
            .then((response) => {
                localStorage.removeItem('access-token');
                localStorage.removeItem('refresh-token');
                localStorage.removeItem('user');
                return response.data;
            })
    }
}

export default new AuthService();