import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CourseRow = ({course, selectCourse}) => {
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
                &nbsp;
            </td>
            <td>
                &nbsp;
            </td>
            <td>
                &nbsp;
            </td>
            <td>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </td>
        </tr>
    )
}

export default CourseRow;