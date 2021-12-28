import $api from "../http";

class FolderService {

    async getUserFolders(userId) {
        return $api.get(`/users/${userId}/folders`).then((response) => {
            return response.data;
        })
    }

    async createFolder(userId, parentFolderId, title) {
        return $api.post(`/users/${userId}/folders`,
            {userId, parentFolderId, title})
            .then((response) => {
            return response.data;
        })
    }
}

export default new FolderService();