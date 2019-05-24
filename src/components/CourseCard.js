import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { faFileAlt, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CourseCard = ({course, selectCourse, deleteCourse}) => {
    return(
        <div className="card" styles={{width: '18rem'}}>
            
            <img className="card-img-top"
                        src="https://picsum.photos/300/200"/>
            <div className="card-body">
                    <div className="row">
                        <h5 className="card-title">{course.title}</h5>
                    </div>
                    <div className="row">
                        <div>
                            <p className="card-modified">
                                    <span className="label">
                                    <FontAwesomeIcon 
                                        icon={faFileAlt}
                                        className="mr-2 text-primary"/> 
                                        Modified: </span>
                                    {course.modifiedAt}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <Dropdown>
                            <Dropdown.Toggle>
                                Options
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <LinkContainer to={`/course/edit/${course.id}`}>
                                <Dropdown.Item>
                                        <span className="label">
                                            <FontAwesomeIcon 
                                                icon={faEdit}
                                                className="mr-1"/>
                                        </span>
                                        Edit Course
                                </Dropdown.Item>
                                </LinkContainer>
                                <Dropdown.Item onClick={() => deleteCourse(course.id)}>
                                    <span className="label">
                                        <FontAwesomeIcon 
                                            icon={faTrashAlt}
                                            className="mr-2"/>
                                    </span>
                                    Delete Course
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                    </div>
                    
                
                
                
            </div>
        </div>
    )
}

export default CourseCard;