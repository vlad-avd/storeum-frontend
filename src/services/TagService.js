import $api from "../http";

class TagService {

    getFolderTags(userId, folderId) {
        return $api.get(`/users/${userId}/folders/${folderId}`)
            .then((response) => {
                return response.data;
            })
    }
}

export default new TagService();