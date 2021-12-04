import $api from "../http";

class FolderService {

    async getUserFolders(userId) {
        return $api.get(`/users/${userId}/folders`).then((response) => {
            return response.data;
        })
    }
}

export default new FolderService();