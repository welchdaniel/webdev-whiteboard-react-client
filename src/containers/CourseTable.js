import React from 'react'
import CourseRow from '../components/CourseRow'

const CourseTable = () => {
    return(
        <table className="table">
            <tbody>
            { courses.map((course, key) =>
                <CourseRow course={course}key={key}/>
            )}
            </tbody>
        </table>
    )
}

export default CourseTable;