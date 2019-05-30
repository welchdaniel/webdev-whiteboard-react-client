import React from 'react'

const LessonTabs = ({lessons, selectedLesson, selectLesson, editTab, editingTab, deleteTab }) => {
    return(
        <ul className="nav tabs-no-border nav-tabs mt-2 mt-lg-0 justify-content-center row">
            {lessons.map((lesson, key) => 
                <li 
                    className="nav-item full-space-tab spaced-tab mt-2"
                    onClick={() => selectLesson(lesson)}
                    key={key}>
                <a className={lesson.id === selectedLesson.id ? 
                    "nav-link active text-center" : "nav-link text-center bg-secondary"}>
                    {lesson.title}
                </a>
             </li>
            )} 
        </ul>
    )
}

export default LessonTabs;