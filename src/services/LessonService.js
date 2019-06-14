export default class LessonService {
    static myInstance = null;

    static getInstance() {
        if (LessonService.myInstance == null) {
            LessonService.myInstance = new LessonService();
        }
        return this.myInstance;
    }

    createLesson = lesson => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/lessons", {
            method: 'POST',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response =>response.json()) 
    }
     
    findAllLessons = () => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/lessons")
            .then(function(response) {return response.json();})
    }

    findLessonById = id => {
        const findLessonUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/lessons/USER_ID".replace('USER_ID', id);
        return fetch(findLessonUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    updateLesson = (id, lesson) => {
        const updateLessonUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/lessons/USER_ID".replace('USER_ID', id);
        return fetch(updateLessonUrl, {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteLesson = id => {
        const deleteLessonUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/lessons/USER_ID".replace('USER_ID', id);
        return fetch(deleteLessonUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}