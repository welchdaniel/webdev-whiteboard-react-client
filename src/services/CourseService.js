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
        let temp = [];
        var crs = {};
        for(var i = 0; i < this.coursesJSON.length; i++) {
            if(this.coursesJSON[i].id == id) {
                crs = {
                    id: course.id,
                    title: course.title,
                    modifiedAt: course.modifiedAt,
                    modules: course.modules
                }
                temp.push(crs);
            }
            else {
                temp.push(this.coursesJSON[i]);
            }
        }
        this.coursesJSON = temp;
        return this.coursesJSON;
    }

    deleteCourse = id => {
        this.coursesJSON = this.coursesJSON.filter(crs => crs.id !== id);
        return this.coursesJSON;
    }
}