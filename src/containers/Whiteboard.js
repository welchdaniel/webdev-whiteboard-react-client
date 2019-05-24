import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseTable from './CourseTable';
import CourseGrid from './CourseGrid';
import CourseEditor from './CourseEditor';
import CourseService from '../services/CourseService'
let courseService = CourseService.getInstance();
const initialCourses = courseService.findAllCourses();

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: initialCourses,
            selectedCourse: initialCourses[0],
            addedCourse: {
                id: -1,
                title: '',
                modifiedAt: '',
                modules: []
            }
        }
    }

    selectCourse = course => this.setState({selectedCourse:course})

    createCourse = () => {
        this.setState({
            courses: [this.state.addedCourse, ...this.state.courses],
            addedCourse: {
                title: ''
            }
        })
        console.log(this.state.courses)
    }

    deleteCourse = (id) => {
        console.log("delete course" + id);
        this.setState({
        courses: this.state.courses.filter(course => course.id !== id)
        })
    }

    titleChanged = (event) => {
        console.log(event.target.value);
        this.setState({
            addedCourse: {
                id: new Date().getTime(),
                title: event.target.value,
                modifiedAt: this.getModificationTime(),
                modules: []
            }
        })
    }

    getModificationTime = () => {
        let currDate = new Date();
        let day = currDate.getDate();
        let month = currDate.getMonth() + 1;
        let year = currDate.getFullYear();
        let hours = currDate.getHours() % 12;
        let minutes = currDate.getMinutes();
        let seconds = currDate.getSeconds();
        let leadingMinutes = (minutes < 10 ? "0" : "");
        let leadingSeconds = (seconds < 10 ? "0" : "");
        let fullDate = hours + ':' + leadingMinutes + minutes + ':' + leadingSeconds + seconds + ' ' + month + '/' + day + '/' + year;
        return(fullDate)
    }

    render() {
        return (
            <Router>
                <div className="container-fluid pt-5 mt-3">
                    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
                        <Navbar.Brand href="#">Course Manager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                        <Navbar.Collapse id="webdev-navbar-nav">
                            <Nav className="mr-auto"/>
                            <Form inline>
                                <Form.Control 
                                    onChange={this.titleChanged}
                                    value={this.state.addedCourse.title}
                                    type="text" 
                                    placeholder="New Course Title" 
                                    className="mr-xs-2"
                                    id="new-course-title" />
                                <Button 
                                    onClick={this.createCourse}
                                    variant="danger">
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <h1>WhiteBoard</h1>
                    <Link to="/course/table">Table</Link>
                    <Link to="/course/grid">Grid</Link>
                    <Link to="/course/editor">Editor</Link>





                    <Route path="/course/table"
                        render={() => <CourseTable
                                        selectCourse={this.selectCourse}
                                        deleteCourse={this.deleteCourse}
                                        courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                        render={() => <CourseGrid
                                        selectCourse={this.selectCourse}
                                        deleteCourse={this.deleteCourse}
                                        courses={this.state.courses}/>}/>
                    <Route
                        path="/course/editor/:courseId"
                        render={(props) => <CourseEditor
                                        {...props}
                                        courses={this.state.courses}/>}/>
                </div>
            </Router>
        )
    }
}