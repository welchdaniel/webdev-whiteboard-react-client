import React from 'react'
import LessonTabs from '../components/LessonTabs'
import TopicPills from '../components/TopicPills'
import ModuleList from '../components/ModuleList'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        const pathName = window.location.pathname;
        const paths = pathName.split("/")
        const courseId = paths[3];
        this.courses = props.courses;
        this.course = this.courses.find(course => course.id == courseId);
        this.state = {
            courseId: courseId,
            course: this.course,
            modules: this.course.modules,
            selectedModule: '',
            selectedTopic: {
                id: -1,
                title: '',
                widgets: []
            },
            selectedLesson: {
                id: -1,
                title: '',
                topics: [this.selectedTopic]
            },
            addedModule: {
                id: -1,
                title: '',
                lessons: [this.selectedLesson]
            }
        }
    }

    createModule = () => {
        this.setState({
            modules: [this.state.addedModule, ...this.state.modules],
            addedModule: {
                title: ''
            }
        })
    }


    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]
            }
        )
    }

    selectLesson = lesson => {
        this.setState({ 
            selectedLesson: lesson, 
            selectedTopic: lesson.topics[0]
            }
        )
    }

    titleChanged = (event) => {
        this.setState({
            addedModule: {
                id: new Date().getTime(),
                title: event.target.value,
                lessons: []
            }
        })
    }

    deleteModule = id => {
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
                    <Link to="/course/grid">
                        <FontAwesomeIcon 
                            icon={faTimes}
                            className="fa-lg text-light mr-4"/>
                    </Link>
                    <Navbar.Brand href="#">{this.state.course.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                    <Navbar.Collapse id="webdev-navbar-nav">
                        <Nav className="mr-auto"/>
                    </Navbar.Collapse>
                </Navbar>


                <div className="row">
                    <div className="col-3">
                    <ModuleList
                        titleChanged={this.titleChanged}
                        createModule={this.createModule}
                        selectedModule={this.state.selectedModule}
                        selectModule={this.selectModule}
                        deleteModule={this.deleteModule}
                        modules={this.state.modules}/>
                    </div>
                </div>
            </div>
        )
    }
}

/*
    <div className="col-3">
        <LessonTabs
            selectLesson={this.selectLesson}
            selectedLesson={this.state.selectedLesson}
            lessons={this.state.selectedModule.lessons}/>
        <TopicPills/>
    </div>
*/