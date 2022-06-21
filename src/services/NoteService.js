import $api from "../http";

class NoteService {

    getFolderNotes(userId, folderId) {
        return $api.get(`/users/${userId}/folders/${folderId}/notes?page=2`)
            .then((response) => {
                return response.data;
            })
    }

    createNote(userId, folderId, note) {
        return $api.post(`/users/${userId}/folders/${folderId}/notes`,
            {
                title: note.title,
                description: note.description,
                link: note.link,
                tags: note.tags
            })
            .then((response) => {
                return response.data;
            })
    }
}

export default new NoteService();