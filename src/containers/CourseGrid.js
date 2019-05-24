import React from 'react'
import CourseCard from '../components/CourseCard'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { faList, faSortAlphaDown, faCaretDown, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseGrid = ({courses, selectCourse, deleteCourse}) => {
    return(
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr className="d-flex">
                    <th className="col-7">Recent Documents</th>
                    <th className="col-2">
                        <a className="pr-2">Owned by</a>
                        <FontAwesomeIcon icon={faCaretDown} className="fa-md"/>
                    </th>
                    <th className="col-1">
                        <Link to="/course/table">
                            <FontAwesomeIcon 
                                icon={faList}
                                className="fa-lg text-dark"/>
                        </Link>
                    </th>
                    <th className="col-1">
                        <FontAwesomeIcon 
                            icon={faSortAlphaDown} 
                            className="fa-lg"/>
                    </th>
                    <th className="col-1">
                        <FontAwesomeIcon 
                                icon={faFolder} 
                                className="fa-lg"/>
                    </th>
                    </tr>
                </thead>
            </table>
        
            <div className="card-deck">
                {courses.map((course, key) =>
                    <CourseCard 
                        selectCourse={selectCourse}
                        deleteCourse={deleteCourse}
                        course={course}
                        key={key}/>
                    )
                }
            </div>
        </div>
    )
}

export default CourseGrid;