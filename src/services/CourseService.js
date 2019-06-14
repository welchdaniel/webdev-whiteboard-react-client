import data from './courses'

export default class CourseService {
    static myInstance = null;

    constructor() {
        this.coursesJSON = data;
    }

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance = new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/courses", {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response =>response.json()) 
    }
     
    findAllCourses = () => {
        return fetch("https://webdev-su19-dwelch-server-java.herokuapp.com/api/courses")
            .then(function(response) {return response.json();})
    }

    findCourseById = id => {
        const findCourseUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/courses/USER_ID".replace('USER_ID', id);
        return fetch(findCourseUrl, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    updateCourse = (id, course) => {
        const updateCourseUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/courses/USER_ID".replace('USER_ID', id);
        return fetch(updateCourseUrl, {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    addModuleUnderCourse = (courseId, moduleId) => {
        const updateCourseUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/courses/COURSE_ID/modules/MODULE_ID"
            .replace('COURSE_ID', courseId)
            .replace('MODULE_ID', moduleId);
        return fetch(updateCourseUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        })
    }

    deleteCourse = id => {
        const deleteCourseUrl = "https://webdev-su19-dwelch-server-java.herokuapp.com/api/courses/USER_ID".replace('USER_ID', id);
        return fetch(deleteCourseUrl, {
            method: 'DELETE'
        }).then(function(response) {
            return response.json();
        })
    }
}