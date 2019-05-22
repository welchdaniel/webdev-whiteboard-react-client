import React from 'react'
import CourseRow from '../components/CourseRow'

const CourseTable = ({courses, selectCourse}) => {
    return(
        <table className="table">
            <tbody>
            { courses.map((course, key) =>
                <CourseRow 
                    selectCourse={selectCourse}
                    course={course}
                    key={key}/>
            )}
            </tbody>
        </table>
    )
}

export default CourseTable;