import $api from "../http";

export const AUTH_URL = '/auth'

class AuthService {

    async login(username, password) {
        return $api.post(`${AUTH_URL}/login`, {username, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    localStorage.setItem('access-token', response.data.accessToken)
                    localStorage.setItem('refresh-token', response.data.refreshToken)
                }
                return response.data;
            });
    }

    async register(username, email, password) {
        return $api.post(`${AUTH_URL}/register`, {username, email, password})
    }

    async logout(userId) {
        localStorage.removeItem('access-token');
        localStorage.removeItem('user');
        return $api.post(`${AUTH_URL}/logout`, {userId})
    }
}

export default new AuthService();