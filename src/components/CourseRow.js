import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const CourseRow = ({course, selectCourse}) => {
    return(
        <tr>
            <td>
                <Link 
                    onClick={() => selectCourse(course)}
                    to={`/course/edit/${course.id}`}>
                {course.title}
                </Link>
            </td>
        </tr>
    )
}

export default CourseRow;