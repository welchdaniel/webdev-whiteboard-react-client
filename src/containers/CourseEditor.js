import React from 'react'
import LessonTabs from '../components/LessonTabs'
import TopicPills from '../components/TopicPills'
import ModuleList from '../components/ModuleList'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Navbar, Nav, Button, Form, Dropdown } from 'react-bootstrap';
import { faTimes, faPlus, faTrashAlt, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
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
            tabNewTitle: '',
            pillNewTitle: '',
            selectedModule: {
                id: -1,
                title: '',
                lessons: []
            },
            selectedLesson: {
                id:-1,
                title: '',
                topics: []
            },
            selectedTopic: {
                id: -1,
                title: '',
                widgets: []
            },
            editingModule: false,
            editingTab: false,
            editingPill: false,
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
            addedLesson: {
                id: -1,
                title: '',
                topics: []
            },
            addedTopic: {
                id: -1,
                title: '',
                widgets: []
            },
        }
    }

    createModule = () => {
        this.state.addedModule.title = this.state.addedModule.title == '' ? 'New Module' : this.state.addedModule.title;
        this.state.modules.push(this.state.addedModule)
        this.setState({
            modules: this.state.modules,
            addedModule: {
                title: ''
            }
        })
    }

    createLesson = () => {
        console.log(this.selectedModule);
        this.state.addedLesson.title = this.state.addedLesson.title == '' ? 'New Lesson' : this.state.addedLesson.title;
        if (this.selectedModule !== undefined) {
            this.state.selectedModule.lessons.push(this.state.addedLesson)
            this.setState({
                selectedModule: {
                    lessons: this.state.selectedModule.lessons
                },
                addedLesson: {
                    title: ''
                }
            })
        }
    }

    createTopic = () => {
        this.state.addedModule.title = this.state.addedTopic.title == '' ? 'New Topic' : this.state.addedModule.title;
        this.state.modules.push(this.state.addedModule)
        this.setState({
            modules: this.state.modules,
            addedModule: {
                title: ''
            }
        })
    }


    selectModule = module => {
        let firstLesson = module.lessons.length > 0 ? module.lessons[0] : this.state.newLesson;
        let firstTopic = this.state.newTopic;
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
        let firstTopic = lesson.topics.length > 0 ? lesson.topics[0] : this.state.newTopic;
        this.setState({ 
            selectedLesson: lesson, 
            selectedTopic: firstTopic
            }
        )
    }

    selectTopic = topic => {
        this.setState({
            selectedTopic: topic
        })
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

    tabTitleChanged = (event) => {
        this.setState({
            addedLesson: {
                id: new Date().getTime(),
                title: event.target.value,
                topics: []
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

    editTab = event => {
        let titleInput = event.target.value == undefined ? '' : event.target.value;
        this.setState({
            editingTab: true,
            tabNewTitle: titleInput
        })
    }

    editPill = event => {
        let titleInput = event.target.value == undefined ? '' : event.target.value;
        this.setState({
            editingPill: true,
            pillNewTitle: titleInput
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
    }

    renameTab = () => {
        console.log(this.state.tabNewTitle);
        this.state.selectedModule.lessons.map((lesson) => {
            if (lesson.id == this.state.selectedLesson.id) {
                lesson.title = this.state.tabNewTitle;
            }
        })
        this.setState({
            selectedModule: this.state.selectedModule.lessons,
            editingTab: false
        })
    }

    renamePill = () => {
        console.log(this.state.pillNewTitle);
        this.state.selectedLesson.topics.map((topic) => {
            if (topic.id == this.state.selectedTopic.id) {
                topic.title = this.state.pillNewTitle;
            }
        })
        this.setState({
            selectedLesson: this.state.selectedLesson.topics,
            editingPill: false
        })
    }


    deleteModule = id => {
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    }

    deleteTab = id => {
        let newLessons = this.state.selectedModule.lessons.filter(lesson => lesson.id !== id)
        this.setState({
            selectedModule: {
                lessons: newLessons
            }
        })
    }

    deletePill = id => {
        let newTopics = this.state.selectedLesson.topics.filter(topic => topic.id !== id)
        this.setState({
            selectedLesson: {
                topics: newTopics
            }
        })
    }

    render() {
        return(
            <div className="container-fluid">
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Link to="/course/grid">
                        <FontAwesomeIcon 
                            icon={faTimes}
                            className="fa-lg text-light mr-4"/>
                    </Link>
                    <Navbar.Brand href="#">{this.state.course.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                    <Navbar.Collapse id="webdev-navbar-nav">
                        <Nav className="mr-auto"/>
                        <LessonTabs inline
                            deleteTab={this.deleteTab}
                            editTab={this.editTab}
                            editingTab={this.state.editingTab}
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}/>
                        <Form inline className={this.state.selectedModule.id > 0 ? "" : "d-none"}>
                            <Form.Control 
                                type="text"
                                onChange={this.tabTitleChanged}
                                value={this.state.addedLesson.title}
                                placeholder="New Lesson" 
                                className="mr-xs-2 ml-lg-3"
                                id="new-lesson" />
                            <Button 
                                onClick={this.createLesson}
                                variant="danger">
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>


                <div className="row">
                    <div className="col-6 col-md-3">
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
                    <div className="col-6 col-md-9 mt-2">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <Form inline className={this.state.selectedModule.id > 0 ? "row mb-3" : "d-none"}>
                                        <Form.Control 
                                            type="text"
                                            onChange={this.tabTitleChanged}
                                            value={this.state.addedLesson.title}
                                            placeholder="New Topic" 
                                            className="col-12 col-lg-10 col-sm-9"
                                            id="new-topic" />
                                        <Button 
                                            onClick={this.createLesson}
                                            variant="secondary"
                                            className="col-12 col-lg-2 col-sm-3">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </Form>
                                </div>
                                <div className="col-12">
                                    <TopicPills
                                        topics={this.state.selectedLesson.topics}
                                        selectedTopic={this.state.selectedTopic}
                                        selectTopic={this.selectTopic}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}