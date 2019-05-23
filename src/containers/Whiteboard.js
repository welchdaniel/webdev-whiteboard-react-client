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
const courses = courseService.findAllCourses();

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: courses[0]
        }
    }

    selectCourse = course => this.setState({selectedCourse:course})

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
                        <Navbar.Brand href="#">Course Manager</Navbar.Brand>
                        <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                        <Navbar.Collapse id="webdev-navbar-nav">
                            <Nav className="mr-auto"/>
                            <Form inline>
                                <FormControl type="text" placeholder="New Course Title" className="mr-xs-2" />
                                <Button 
                                    className=".ml-3"
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
                                        courses={courses}/>}/>
                    <Route path="/course/grid"
                        render={() => <CourseGrid
                                        selectCourse={this.selectCourse}
                                        courses={courses}/>}/>
                    <Route
                        path="/course/editor/:courseId"
                        render={(props) => <CourseEditor
                                        {...props}
                                        courses={courses}/>}/>
                </div>
            </Router>
        )
    }
}