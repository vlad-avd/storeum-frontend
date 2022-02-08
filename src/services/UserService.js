import $api from "../http";

export const USERS_URL = '/users'

class UserService {

  getUsers() {
    return $api.get(USERS_URL)
        .then((response) => {
          return response.data;
        });
  }

  getUser(id) {
    return $api.get(`${USERS_URL}/${id}`)
        .then((response) => {
          return response.data;
        })
  }
}

export default new UserService();