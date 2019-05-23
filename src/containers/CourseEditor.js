import React from 'react'
import LessonTabs from '../components/LessonTabs'
import TopicPills from '../components/TopicPills'
import ModuleList from '../components/ModuleList'

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModule: this.props.course.modules[0],
            selectedLesson: this.props.course.modules[0].lessons[0]
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
            <div className="row">
                <div className="col-3">
                <ModuleList
                    selectedModule={this.state.selectedModule}
                    selectModule={this.selectModule}
                    modules={this.props.course.modules}/>
                </div>
                <div className="col-3">
                    <LessonTabs
                        selectLesson={this.selectLesson}
                        selectedLesson={this.state.selectedLesson}
                        lessons={this.state.selectedModule.lessons}/>
                    <TopicPills/>
                </div>
            </div>
        )
    }
}