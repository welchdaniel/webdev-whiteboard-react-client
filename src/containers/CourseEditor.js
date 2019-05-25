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
            moduleNewTitle: '',
            selectedModule: '',
            selectedTopic: '',
            selectedLesson: '',
            editingModule: false,
            newLesson: {
                id: -1,
                title: '',
                topics: []
            },
            newTopic: {
                id: -1,
                title: '',
                widgets: []
            },
            addedModule: {
                id: -1,
                title: '',
                lessons: []
            },
        }
    }

    createModule = () => {
        this.state.addedModule.title = this.state.addedModule.title == '' ? 'New Module' : this.state.addedModule.title;
        this.setState({
            modules: [this.state.addedModule, ...this.state.modules],
            addedModule: {
                title: ''
            }
        })
    }


    selectModule = module => {
        let firstLesson = module.lessons.length > 0 ? module.lessons[0] : this.state.newTopic;
        let firstTopic = this.state.newLesson;
        if (module.lessons.length > 0 && module.lessons[0].topics.length > 0) {
            firstTopic = module.lessons[0].topics[0]
        }
        this.setState({
            selectedModule: module,
            selectedLesson: firstLesson,
            selectedTopic: firstTopic
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

    editModule = event => {
        let titleInput = event.target.value == undefined ? '' : event.target.value;
        this.setState({
            editingModule: true,
            moduleNewTitle: titleInput
        })
    }

    renameModule = () => {
        console.log(this.state.moduleNewTitle);
        this.state.modules.map((module) => {
            if (module.id == this.state.selectedModule.id) {
                module.title = this.state.moduleNewTitle;
            }
        })
        this.setState({
            modules: this.state.modules,
            editingModule: false
        })
        console.log(this.state.modules);
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
                        editModule={this.editModule}
                        editingModule={this.state.editingModule}
                        renameModule={this.renameModule}
                        moduleTitle={this.state.addedModule.title}
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