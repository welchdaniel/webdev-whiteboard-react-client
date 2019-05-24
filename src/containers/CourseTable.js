import React from 'react'
import CourseRow from '../components/CourseRow'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { faGripHorizontal, faSortAlphaDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseTable = ({courses, selectCourse, deleteCourse}) => {
    return(
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr className="d-flex">
                    <th className="col-5">
                        Title
                    </th>
                    <th className="col-2">
                        <a className="pr-2">Owned by</a>
                        <FontAwesomeIcon icon={faCaretDown} className="fa-md"/>
                    </th>
                    <th className="col-2">
                        Last modified
                    </th>
                    <th className="col-1">
                        <Link to="/course/grid">
                            <FontAwesomeIcon 
                                icon={faGripHorizontal}
                                className="fa-lg text-dark"/>
                        </Link>
                        <FontAwesomeIcon 
                            icon={faSortAlphaDown} 
                            className="fa-lg ml-3"/>
                    </th>
                    <th className="col-1">
                        &nbsp;
                    </th>
                </tr>
                </thead>
                <tbody>
                    { courses.map((course, key) =>
                        <CourseRow 
                            selectCourse={selectCourse}
                            deleteCourse={deleteCourse}
                            course={course}
                            key={key}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CourseTable;