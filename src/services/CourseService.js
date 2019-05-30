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
        this.coursesJSON.push(course)
        return this.coursesJSON;
    }
     
    findAllCourses = () => {
        return this.coursesJSON;
    }

    findCourseById = id => {
        const foundCourse = this.coursesJSON.find(course => course.id === id);
        if (foundCourse == undefined) {
            console.log("Could not find course with id " + id);
            return;
        }

        return foundCourse;
    }

    updateCourse = (id, course) => {
        console.log(this.coursesJSON);
        let temp = [];
        for(var crs in this.coursesJSON) {
            if(crs.id == id) {
                crs.title = course.title;
                crs.modifiedAt = course.modifiedAt;
                crs.modules = course.modules;
            }
            temp.push(crs);
        }
        this.coursesJSON = temp;
        console.log(this.coursesJSON);
        return this.coursesJSON;
    }

    deleteCourse = id => {
        this.coursesJSON = this.coursesJSON.filter(crs => crs.id !== id);
        return this.coursesJSON;
    }
}