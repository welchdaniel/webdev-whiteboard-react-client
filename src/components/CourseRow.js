import React from 'react'

const CourseRow = () => {
    return(
        <tr>
            <td>
                <Link to={`/course/edit/${course.id}`}>
                    {course.title}
                </Link>
            </td>
        </tr>
    )
}

export default CourseRow;