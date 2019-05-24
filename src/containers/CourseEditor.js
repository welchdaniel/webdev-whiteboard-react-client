import React from 'react'
import LessonTabs from '../components/LessonTabs'
import TopicPills from '../components/TopicPills'
import ModuleList from '../components/ModuleList'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courseId: props.selectedCourse.id,
            course: props.selectedCourse,
            selectedModule: '',
            selectedLesson: '',
            selectedTopic: ''
        }
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

    render() {
        return(
            <div className="container-fluid">
                <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
                    <Navbar.Brand href="#">{this.state.course.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="webdev-navbar-nav"/>
                    <Navbar.Collapse id="webdev-navbar-nav">
                        <Nav className="mr-auto"/>
                    </Navbar.Collapse>
                </Navbar>


                <div className="row">
                    <div className="col-3">
                    <ModuleList
                        selectedModule={this.state.selectedModule}
                        selectModule={this.selectModule}
                        modules={this.state.course.modules}/>
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