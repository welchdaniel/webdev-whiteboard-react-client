import React from 'react'
import {BrowserRouter as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CourseRow = ({course, selectCourse, deleteCourse}) => {
    return(
        <tr>
            <td>
                <FontAwesomeIcon icon={faFileAlt} className="text-primary"/>
            </td>
            <td>
                <Link 
                    onClick={() => selectCourse(course)}
                    to={`/course/edit/${course.id}`}>
                {course.title}
                </Link>
            </td>
            <td>
                me
            </td>
            <td>
                {course.modifiedAt}
            </td>
            <td>
                &nbsp;
            </td>
            <td>
                &nbsp;
            </td>
            <td>
                <FontAwesomeIcon
                    onClick={() => deleteCourse(course.id)}
                    icon={faTrashAlt}/>
            </td>
        </tr>
    )
}

export default CourseRow;