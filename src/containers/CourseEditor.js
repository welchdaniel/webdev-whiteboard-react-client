import React from 'react';
import LessonTabs from '../components/LessonTabs';
import TopicPills from '../components/TopicPills';
import ModuleList from '../components/ModuleList';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Navbar, Nav, Button, Form, Dropdown } from 'react-bootstrap';
import { faTimes, faPlus, faTrashAlt, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WidgetListContainer from '../containers/WidgetListContainer';
import CourseService from '../services/CourseService';
import ModuleService from '../services/ModuleService';
import LessonService from '../services/LessonService';
import TopicService from '../services/TopicService';
import WidgetService from '../services/WidgetService';
import WidgetReducer from '../reducers/WidgetReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(WidgetReducer)

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance();
        this.moduleService = ModuleService.getInstance();
        this.lessonService = LessonService.getInstance();
        this.topicService = TopicService.getInstance();
        this.widgetService = WidgetService.getInstance();
        const pathName = window.location.pathname;
        const paths = pathName.split("/")
        const courseId = paths[3];
        this.state = {
            widgets: [],
            courseId: courseId,
            course: {},
            modules: [],
            currentLessons: [],
            currentTopics: [],
            moduleNewTitle: '',
            tabNewTitle: '',
            pillNewTitle: '',
            editorNavExpanded: false,
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
            testWidget: {
                id: 45,
                name: 'foo',
                type: 'HEADING'
            },
            testWidget2: {
                id: 45,
                name: 'poo',
                type: 'HEADING'
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

        this.courseService.findCourseById(courseId)
            .then(response => {
                console.log(response);
                this.setState({
                    course: response,
                    modules: response.modules
                })
            });
        this.widgetService.findAllWidgets().then(response => this.setState({widgets: response}));
    }

    createModule = () => {
        this.state.addedModule.title = this.state.addedModule.title == '' ? 'New Module' : this.state.addedModule.title;
        this.moduleService.createModule(this.state.addedModule).then(response => {
            this.courseService.addModuleUnderCourse(this.state.course.id, response.id)
                .then(response => {
                    this.setState({
                        modules: response.modules,
                        addedModule: {
                            title: ''
                        }
                    })
                })
        })
    }

    createLesson = () => {
        this.state.addedLesson.title = this.state.addedLesson.title == '' ? 'New Lesson' : this.state.addedLesson.title;
        if (this.state.selectedModule !== undefined) {
            this.state.currentLessons.push(this.state.addedLesson);
            this.setState({
                selectedModule: {
                    id: this.state.selectedModule.id,
                    title: this.state.selectedModule.title,
                    lessons: this.state.currentLessons
                },
                selectedLesson: this.state.addedLesson,
                addedLesson: {
                    title: ''
                }
            })
        }
    }

    createTopic = () => {
        this.state.addedTopic.title = this.state.addedTopic.title == '' ? 'New Topic' : this.state.addedTopic.title;
        if (this.state.selectedLesson !== undefined) {
            this.state.selectedLesson.topics.push(this.state.addedTopic)
            this.setState({
                selectedLesson: {
                    id: this.state.selectedLesson.id,
                    title: this.state.selectedLesson.title,
                    topics: this.state.selectedLesson.topics
                },
                selectedTopic: this.state.addedTopic,
                addedTopic: {
                    title: ''
                }
            })
        }
    }

    selectModule = module => {
        let firstLesson = module.lessons.length > 0 ? module.lessons[0] : this.state.newLesson;
        let shownTopics = [];
        let firstTopic = this.state.newTopic;
        if (module.lessons.length > 0 && module.lessons[0].topics.length > 0) {
            shownTopics = module.lessons[0].topics
            firstTopic = shownTopics[0]
        }
        this.setState({
            selectedModule: module,
            currentLessons: module.lessons,
            currentTopics: shownTopics,
            selectedLesson: firstLesson,
            selectedTopic: firstTopic
            }, 
                () => this.updateModule()
        )
    }

    selectLesson = lesson => {
        let firstTopic = lesson.topics.length > 0 ? lesson.topics[0] : this.state.newTopic;
        this.setState({ 
            selectedLesson: lesson, 
            selectedTopic: firstTopic,
            currentTopics: lesson.topics,
            editingTab: false
            },
                () => this.updateLesson()
        )
    }

    selectTopic = topic => {
        this.setState({
            currentWidgets: topic.widgets,
            selectedTopic: topic,
            editingPill: false
        })
    }

    titleChanged = (event) => {
        this.setState({
            addedModule: {
                id: new Date().getTime() % 1000,
                title: event.target.value,
                lessons: []
            }
        })
    }

    tabTitleChanged = (event) => {
        this.setState({
            addedLesson: {
                id: new Date().getTime() % 1000,
                title: event.target.value,
                topics: []
            }
        })
    }

    pillTitleChanged = (event) => {
        this.setState({
            addedTopic: {
                id: new Date().getTime() % 1000,
                title: event.target.value,
                widgets: []
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

    stopEditing = () => {
        this.setState({
            editingModule: false,
            editingTab: false,
            editingPill: false,
            moduleNewTitle: '',
            tabNewTitle: '',
            pillNewTitle: ''
        })
    }

    renameModule = () => {
        let newTitle = this.state.moduleNewTitle;
        this.setState({
            selectedModule: {
                id: this.state.selectedModule.id,
                title: newTitle,
                lessons: this.state.selectedModule.lessons
            },
            modules: this.state.modules,
            editingModule: false,
            moduleNewTitle: ''
        },
        () => this.updateModule()
        )
    }

    renameTab = () => {
        this.state.currentLessons.map((lesson) => {
            if (lesson.id == this.state.selectedLesson.id) {
                lesson.title = this.state.tabNewTitle;
            }
        })
        this.setState({
            currentLessons: this.state.currentLessons,
            editingTab: false,
            tabNewTitle: ''
        })
    }

    renamePill = () => {
        this.state.selectedLesson.topics.map((topic) => {
            if (topic.id == this.state.selectedTopic.id) {
                topic.title = this.state.pillNewTitle;
            }
        })
        this.setState({
            currentTopics: this.state.selectedLesson.topics,
            editingPill: false,
            pillNewTitle: ''
        })
    }


    deleteModule = id => {
        let newSelectedModule = {
            id: -1,
            title: '',
            lessons: []
        }
        this.moduleService.deleteModule(id)
            .then(() => {
                this.courseService.findCourseById(this.state.course.id)
                    .then(response => {
                        if(response.modules.length > 0) {
                            newSelectedModule = response.modules[0];
                        }
                        this.setState({
                            modules: response.modules
                        })
                        this.selectModule(newSelectedModule)
                    })
            })
    }

    deleteTab = id => {
        let filteredTabs = this.state.currentLessons.filter(ls => ls.id !== id);
        let newSelectedLesson = {
            id:-1,
            title: '',
            topics: []
        };
        if(filteredTabs.length > 0) {
            newSelectedLesson = filteredTabs[0];
        }
        this.setState({
            selectedModule: {
                id: this.state.selectedModule.id,
                title: this.state.selectedModule.title,
                lessons: filteredTabs
            },
            selectedLesson: newSelectedLesson,
            currentLessons: filteredTabs
        },
            () => this.selectModule(this.state.selectedModule)
        )
    }

    deletePill = id => {
        let filteredTopics = this.state.currentTopics.filter(topic => topic.id !== id)
        let newSelectedTopic = {
            id: -1,
            title: '',
            widgets: []
        }
        if(filteredTopics.length > 0) {
            newSelectedTopic = filteredTopics[0];
        }
        this.setState({
            selectedLesson: {
                id: this.state.selectedLesson.id,
                title: this.state.selectedLesson.title,
                topics: filteredTopics
            },
            selectedTopic: newSelectedTopic,
            currentTopics: filteredTopics
        },
            () => this.selectLesson(this.state.selectedLesson)
        )
    }

    updateLesson = () => {
        let newLessons = this.state.currentLessons.map(les => {
            if(les.id == this.state.selectedLesson.id) {
                les.title = this.state.selectedLesson.title;
                les.topics = this.state.currentTopics;
            }
            return les;
        })
        this.setState({
            currentLessons: newLessons
        },
            () => this.updateModule()
        )
    }

    updateModule = () => {
        this.moduleService.updateModule(this.state.selectedModule.id, this.state.selectedModule)
            .then(() => 
                this.courseService.addModuleUnderCourse(this.state.course.id, this.state.selectedModule.id)
                    .then(() => {
                        this.courseService.findCourseById(this.state.course.id)
                            .then(response => {
                                this.setState({
                                    modules: response.modules
                                },
                                () => this.updateCourse())
                            })
                    })
            )
    }

    setEditorNavExpanded = (expanded) => {
        this.setState({ editorNavExpanded: expanded });
    }

    closeEditorNav = () => {
        this.setState({ editorNavExpanded: false });
    }

    updateCourse = () => {
        let updatedCourse = {
            id: this.state.course.id,
            title: this.state.course.title,
            modifiedAt: this.state.course.modifiedAt,
        }
        this.props.updateCourse(updatedCourse.id, updatedCourse);
    }

    render() {
        return(
            <Provider store={store}>
                <div className="container-fluid">
                    <Navbar bg="dark" 
                            variant="dark" 
                            expand="lg" 
                            fixed="top"
                            onToggle={this.setEditorNavExpanded}
                            expanded={this.state.editorNavExpanded}>
                        <Link to="/course/grid" className={this.state.editorNavExpanded ? "d-none" : ""}>
                            <FontAwesomeIcon 
                                onClick={this.updateCourse}
                                icon={faTimes}
                                className="fa-lg text-danger mr-5 mr-lg-4"/>
                        </Link>
                        <FontAwesomeIcon 
                            onClick={this.closeEditorNav}
                            icon={faTimes}
                            className={this.state.editorNavExpanded ? 
                                "fa-lg text-light mr-5 mr-lg-4" : "d-none"}>
                        </FontAwesomeIcon>
                        <Navbar.Brand href="#">{this.state.course.title}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                        <Navbar.Collapse id="webdev-navbar-nav">
                            <Nav className="mr-auto" onSelect={this.closeEditorNav}/>
                            <LessonTabs inline
                                deleteTab={this.deleteTab}
                                editTab={this.editTab}
                                editingTab={this.state.editingTab}
                                selectLesson={this.selectLesson}
                                selectedLesson={this.state.selectedLesson}
                                lessons={this.state.currentLessons}/>
                            <div className="row ml-lg-3 mt-2 mb-4 mb-md-0">
                                <Dropdown 
                                    alignRight 
                                    className={this.state.currentLessons.length > 0 ? 
                                        "float-right col-12 col-md-3 mt-4 mt-sm-3 mt-lg-0 mb-4 mb-sm-3 mb-lg-0" 
                                        : "col-12 col-md-3 invisible"}>
                                    <Dropdown.Toggle
                                        className="block-under-md"
                                        variant="warning">
                                        <FontAwesomeIcon 
                                            icon={faPencilAlt}
                                            className="mr-1"/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={this.editTab}>
                                                <span 
                                                    className="label">
                                                    <FontAwesomeIcon 
                                                        icon={faEdit}
                                                        className="mr-1"/>
                                                </span>
                                                Edit Selected Lesson
                                        </Dropdown.Item>
                                        <Dropdown.Item 
                                            onClick={() => this.deleteTab(this.state.selectedLesson.id)}>
                                            <span className="label">
                                                <FontAwesomeIcon 
                                                    icon={faTrashAlt}
                                                    className="mr-2"/>
                                            </span>
                                            Delete Selected Lesson
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form inline className={(this.state.selectedModule.id > 0) && !this.state.editingTab ? 
                                        "col-12 col-md-9" : "row d-none"}>
                                    <Form.Control 
                                        type="text"
                                        onChange={this.tabTitleChanged}
                                        value={this.state.addedLesson.title}
                                        placeholder="New Lesson" 
                                        className="mr-xs-2 col-9 col-md-9 col-lg-9"
                                        id="new-lesson" />
                                    <Button 
                                        onClick={this.createLesson}
                                        variant="danger"
                                        className="col-3 col-md-3 col-lg-2">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </Form>
                                <Form inline className={(this.state.selectedModule.id > 0) && this.state.editingTab ? 
                                        "col-12 col-md-9" : "row d-none"}>
                                    <Form.Control 
                                        type="text"
                                        onChange={this.editTab}
                                        value={this.state.tabNewTitle}
                                        placeholder="Rename Lesson" 
                                        className="mr-xs-2 col-9 col-md-9 col-lg-9"
                                        id="new-lesson" />
                                    <Button 
                                        onClick={this.renameTab}
                                        variant="success"
                                        className="col-3 col-md-3 col-lg-2">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </Form>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>


                    <div className="row mt-2" onClick={this.closeEditorNav}>
                        <div className="col-6 col-md-3">
                            <ModuleList
                                editModule={this.editModule}
                                editingModule={this.state.editingModule}
                                stopEditing={this.stopEditing}
                                renameModule={this.renameModule}
                                editingTitle={this.state.moduleNewTitle}
                                moduleTitle={this.state.addedModule.title}
                                titleChanged={this.titleChanged}
                                createModule={this.createModule}
                                selectedModule={this.state.selectedModule}
                                selectModule={this.selectModule}
                                deleteModule={this.deleteModule}
                                modules={this.state.modules}/>
                        </div>
                        <div className="col-6 col-md-9 mt-2">
                            <div className="row justify-content-center justify-content-md-end">
                                <Form inline className={(this.state.selectedLesson.id > 0) && !this.state.editingPill ? 
                                            "row col-12 col-md-8 col-lg-4 mb-0 mb-md-3" : "d-none"}>
                                    <Form.Control 
                                        type="text"
                                        onChange={this.pillTitleChanged}
                                        value={this.state.addedTopic.title}
                                        placeholder="New Topic" 
                                        className="col-12 col-lg-10 col-sm-9"
                                        id="new-topic" />
                                    <Button 
                                        onClick={this.createTopic}
                                        variant="secondary"
                                        className="col-12 col-lg-2 col-sm-3">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </Form>
                                <Form inline className={(this.state.selectedLesson.id > 0) && this.state.editingPill ? 
                                            "row col-12 col-md-8 col-lg-4 mb-0 mb-md-3" : "d-none"}>
                                    <Form.Control 
                                        type="text"
                                        onChange={this.editPill}
                                        value={this.state.pillNewTitle}
                                        placeholder="Rename Topic" 
                                        className="col-12 col-lg-10 col-sm-9"
                                        id="new-topic" />
                                    <Button 
                                        onClick={this.renamePill}
                                        variant="success"
                                        className="col-12 col-lg-2 col-sm-3">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                </Form>
                                <Dropdown 
                                    alignRight 
                                    className={this.state.selectedTopic.id > 0 ? 
                                        "float-right col-12 col-md-2 col-lg-1 mt-3 mt-md-0 mb-4 mb-sm-3 mb-lg-0" 
                                        : "col-12 col-md-2 col-lg-1 invisible"}>
                                    <Dropdown.Toggle
                                        className="block-under-md"
                                        variant="warning">
                                        <FontAwesomeIcon 
                                            icon={faPencilAlt}
                                            className="mr-1"/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={this.editPill}>
                                                <span 
                                                    className="label">
                                                    <FontAwesomeIcon 
                                                        icon={faEdit}
                                                        className="mr-1"/>
                                                </span>
                                                Edit Selected Topic
                                        </Dropdown.Item>
                                        <Dropdown.Item 
                                            onClick={() => this.deletePill(this.state.selectedTopic.id)}>
                                            <span className="label">
                                                <FontAwesomeIcon 
                                                    icon={faTrashAlt}
                                                    className="mr-2"/>
                                            </span>
                                            Delete Selected Topic
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="col-12">
                                    <TopicPills
                                        topics={this.state.selectedLesson.topics}
                                        selectedTopic={this.state.selectedTopic}
                                        selectTopic={this.selectTopic}/>
                                </div>
                            </div>
                            <WidgetListContainer/>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}