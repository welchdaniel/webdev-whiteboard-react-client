import React from 'react'
import CourseCard from '../components/CourseCard'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { faList, faSortAlphaDown, faCaretDown, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseGrid = ({courses, selectCourse, deleteCourse}) => {
    return(
        <div className="container-responsive">
            <h6 className="row mt-3 font-weight-bold">
                <div className="col-sm-7 col-10">Recent Documents</div>
                <div className="col-sm-2 col-0 d-none d-sm-block">
                    <a className="pr-2">Owned by</a>
                    <FontAwesomeIcon icon={faCaretDown} className="fa-md"/>
                </div>
                <div className="col-sm-1 col-2">
                    <Link to="/course/table">
                        <FontAwesomeIcon 
                            icon={faList}
                            className="fa-lg text-dark"/>
                    </Link>
                </div>
                <div className="col-sm-1 col-0 d-none d-sm-block">
                    <FontAwesomeIcon 
                        icon={faSortAlphaDown} 
                        className="fa-lg"/>
                </div>
                <div className="col-sm-1 col-0 d-none d-sm-block">
                    <FontAwesomeIcon 
                            icon={faFolder} 
                            className="fa-lg"/>
                </div>
            </h6>
    
            <div className="row mt-4">
                {courses.map((course, key) =>
                    <div className="col-lg-2 col-md-4 col-sm-12">
                    <CourseCard 
                        selectCourse={selectCourse}
                        deleteCourse={deleteCourse}
                        course={course}
                        key={key}/>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default CourseGrid;