import $api from "../http";

export const USERS_URL = '/users'

class UserService {
  async getUsers() {
    return $api.get(USERS_URL);
  }

  async getUser(id) {
    return $api.get(`${USERS_URL}/${id}`)
  }
}

export default new UserService();