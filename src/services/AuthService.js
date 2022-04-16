import axios from "axios";
import $api, {API_URL} from "../http";

export const AUTH_URL = '/auth'

class AuthService {

    login(email, password) {
        return axios.post(`${API_URL + AUTH_URL}/login`, {email, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify({id: response.data.id, email: response.data.email}));
                    localStorage.setItem('access-token', response.data.accessToken)
                    localStorage.setItem('refresh-token', response.data.refreshToken)
                }
                return response.data;
            });
    }

    register(username, email, password, passwordConfirm) {
        return axios.post(`${API_URL + AUTH_URL}/register`, {username, email, password, passwordConfirm})
            .then((response) => {
                return response.data;
            })
    }

    exchangeOAuthToken(token) {
        return axios.get(`${API_URL + AUTH_URL}/exchange-oauth?token=${token}`)
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify({id: response.data.id, email: response.data.email}));
                    localStorage.setItem('access-token', response.data.accessToken)
                    localStorage.setItem('refresh-token', response.data.refreshToken)
                }
                return response.data;
            });
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