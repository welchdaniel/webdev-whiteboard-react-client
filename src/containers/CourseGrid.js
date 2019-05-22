import React from 'react'

const CourseGrid = () => {
    return(
        <div className="card-deck">
            {courses.map((course, key) =>
                <CourseCard course={course}
                            key={key}/>)}
        </div>
    )
}

export default CourseGrid;