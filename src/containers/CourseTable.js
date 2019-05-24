import React from 'react'
import CourseRow from '../components/CourseRow'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { faGripHorizontal, faSortAlphaDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseTable = ({courses, selectCourse, deleteCourse}) => {
    return(
        <div>
            <table className="table">
                <thead>
                <tr className="row">
                    <th className="col-sm-5 col-10">
                        Title
                    </th>
                    <th className="col-sm-1 col-0 d-none d-sm-block">
                        <a className="pr-2">Owned by</a>
                        <FontAwesomeIcon icon={faCaretDown} className="fa-md"/>
                    </th>
                    <th className="col-sm-2 col-0 d-none d-sm-block">
                        Last modified
                    </th>
                    <th className="col-sm-1 col-2">
                        <Link to="/course/grid">
                            <FontAwesomeIcon 
                                icon={faGripHorizontal}
                                className="fa-lg text-dark"/>
                        </Link>
                    </th>
                    <th className="col-sm-1 col-0 d-none d-sm-block">
                        <FontAwesomeIcon 
                                icon={faSortAlphaDown} 
                                className="fa-lg"/>
                    </th>
                    <th className="col-sm-2 col-0 d-none d-sm-block">
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