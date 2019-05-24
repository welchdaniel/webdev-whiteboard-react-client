import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faTrashAlt, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CourseRow = ({course, selectCourse, deleteCourse}) => {
    return(
        <tr className="d-flex">
            <LinkContainer to={`/course/edit/${course.id}`}>
            <td className="col-5">
                <span className="label">
                    <FontAwesomeIcon 
                        icon={faFileAlt} 
                        className="text-primary mr-2"/>
                </span>
                {course.title}
            </td>
            </LinkContainer>
            <td className="col-2">
                me
            </td>
            <td className="col-2">
                {course.modifiedAt}
            </td>
            <td className="col-2">
                &nbsp;
            </td>
            <td className="col-1">
                <Dropdown>
                    <Dropdown.Toggle
                        variant="warning">
                        <FontAwesomeIcon 
                            icon={faPencilAlt}
                            className="mr-1"/>
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
            </td>
        </tr>
    )
}

export default CourseRow;