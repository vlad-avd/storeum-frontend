import $api from "../http";

class FolderService {

    getUserFolders(userId) {
        return $api.get(`/users/${userId}/folders`)
            .then((response) => {
                return response.data;
            })
    }

    createFolder(userId, parentFolderId, title) {
        return $api.post(`/users/${userId}/folders`, {parentFolderId, title})
            .then((response) => {
                return response.data;
            })
    }

    editFolder(userId, parentFolderId, folderId, title) {
        return $api.post(`/users/${userId}/folders/${folderId}`, {parentFolderId, title})
            .then((response) => {
                return response.data;
            })
    }

    deleteFolder(userId, folderId) {
        return $api.delete(`/users/${userId}/folders/${folderId}`)
            .then((response) => {
                return response.data;
            })
    }
}

export default new FolderService();