import React from 'react'
import { faTimes, faPlus, faTrashAlt, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LessonTabs = ({lessons, selectedLesson, selectLesson, editTab, editingTab, deleteTab }) => {
    return(
        <ul className="nav nav-tabs">
            {lessons.map((lesson, key) => 
                <li 
                    className="nav-item"
                    onClick={() => selectLesson(lesson)}
                    key={key}>
                <a className={lesson.id === selectedLesson.id ? "nav-link active" : "nav-link bg-secondary"}>
                    {lesson.title}
                </a>
             </li>
            )} 
        </ul>
    )
}

export default LessonTabs;