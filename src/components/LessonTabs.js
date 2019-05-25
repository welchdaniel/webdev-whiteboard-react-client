import React from 'react'

const LessonTabs = ({lessons, selectedLesson, selectLesson}) => {
    return(
        <ul className="nav nav-tabs">
            {lessons.map((lesson, key) => 
                <li 
                    className="nav-item"
                    onClick={() => selectLesson(lesson)}
                    key={key}>
                <a className={lesson === selectedLesson ? "nav-link active" : "nav-link bg-secondary"}>
                    {lesson.title}
                </a>
             </li>
            )} 
        </ul>
    )
}

export default LessonTabs;