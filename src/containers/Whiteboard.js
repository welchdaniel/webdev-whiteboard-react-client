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
            courses: [],
            selectedCourse: initialCourses[0],
            navExpanded: false,
            addedCourse: {
                id: -1,
                title: '',
                modifiedAt: '',
                modules: []
            }
        }
        courseService.findAllCourses().then(response => {this.setState({
            courses: response
        })})
    }

    selectCourse = course => this.setState({selectedCourse:course})

    createCourse = () => {
        this.setState({
            courses: courseService.createCourse(this.state.addedCourse),
            addedCourse: {
                title: ''
            }
        })
        this.closeNav();
    }

    deleteCourse = (id) => {
        this.setState({
            courses: courseService.deleteCourse(id)
        })
    }

    titleChanged = (event) => {
        this.setState({
            addedCourse: {
                id: new Date().getTime(),
                title: event.target.value,
                modifiedAt: this.getModificationTime(),
                modules: []
            }
        })
    }

    setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
    }
    
    closeNav = () => {
        this.setState({ navExpanded: false });
    }

    updateCourse = (id, course) => {
        courseService.updateCourse(id, course);
        this.setState({
            courses: courseService.findAllCourses()
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
        hours = (hours == 0 ? 12 : hours);
        let fullDate = hours + ':' + leadingMinutes + minutes + ':' + leadingSeconds + seconds + ' ' + month + '/' + day + '/' + year;
        return(fullDate)
    }

    render() {
        return (
            <Router>
                <div className="container-fluid pt-5 mt-3">
                    <Navbar bg="primary" 
                            variant="dark" 
                            expand="sm" 
                            fixed="top" 
                            onToggle={this.setNavExpanded}
                            expanded={this.state.navExpanded}>
                        <Link to="/course/table">
                        <Navbar.Brand>Course Manager</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                        <Navbar.Collapse id="webdev-navbar-nav">
                            <Nav className="mr-auto" onSelect={this.closeNav}/>
                            <div className="row">
                                <Form inline
                                    className="col-12 center-under-md mt-3 mb-3 mt-sm-0 mb-sm-0">
                                    <Form.Control 
                                        onChange={this.titleChanged}
                                        value={this.state.addedCourse.title}
                                        type="text" 
                                        placeholder="New Course Title" 
                                        className="col-9"
                                        id="new-course-title" />
                                    <Button 
                                        onClick={this.createCourse}
                                        variant="danger"
                                        className="col-3">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </Form>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>





                    <Route path="/course/table"
                        render={() => <CourseTable
                            selectCourse={this.selectCourse}
                            deleteCourse={this.deleteCourse}
                            closeNav={this.closeNav}
                            courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                        render={() => <CourseGrid
                            selectCourse={this.selectCourse}
                            deleteCourse={this.deleteCourse}
                            closeNav={this.closeNav}
                            courses={this.state.courses}/>}/>
                    <Route
                        path="/course/edit/:courseId"
                        render={() => <CourseEditor 
                            updateCourse={this.updateCourse}
                            selectCourse={this.selectCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>}/>
                </div>
            </Router>
        )
    }
}