export default class TopicService {
    static myInstance = null;

    static getInstance() {
        if (TopicService.myInstance == null) {
            TopicService.myInstance = new TopicService();
        }
        return this.myInstance;
    }

    createTopic = topic => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/topics", {
            method: 'POST',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response =>response.json()) 
    }
     
    findAllTopics = () => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/topics")
            .then(function(response) {return response.json();})
    }

    findTopicById = id => {
        const findTopicUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/topics/USER_ID".replace('USER_ID', id);
        return fetch(findTopicUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    updateTopic = (id, topic) => {
        const updateTopicUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/topics/USER_ID".replace('USER_ID', id);
        return fetch(updateTopicUrl, {
            method: 'PUT',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    addTopicUnderLesson = (lessonId, topicId) => {
        const updateTopicUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/lessons/LESSON_ID/topics/TOPIC_ID"
            .replace('LESSON_ID', lessonId)
            .replace('TOPIC_ID', topicId);
        return fetch(updateTopicUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteTopic = id => {
        const deleteTopicUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/topics/USER_ID".replace('USER_ID', id);
        return fetch(deleteTopicUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}