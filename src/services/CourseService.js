import data from './courses'

export default class CourseService {
    static myInstance = null;
    courses = data;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance = new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        this.courses.push(course)
    }
     
    findAllCourses = () => {
        return this.courses;
    }

    findCourseById = id => {

    }

    updateCourse = (id, course) => {

    }

    deleteCourse = id => {
        
    }
}