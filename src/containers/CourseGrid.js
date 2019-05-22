import React from 'react'
import CourseCard from '../components/CourseCard'

const CourseGrid = ({courses, selectCourse}) => {
    return(
        <div className="card-deck">
            {courses.map((course, key) =>
                <CourseCard 
                    selectCourse={selectCourse}
                    course={course}
                    key={key}/>
                )
            }
        </div>
    )
}

export default CourseGrid;