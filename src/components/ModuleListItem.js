import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ModuleListItem = ({module, selectModule, deleteModule, selectedModule}) => {
    return(
        <li className="col-12"
            onClick={() => selectModule(module)}
            className={module === selectedModule ? "list-group-item active" : "list-group-item"}>
            <a>{module.title}</a>
            <Dropdown className="float-right">
                    <Dropdown.Toggle
                        variant="warning">
                        <FontAwesomeIcon 
                            icon={faPencilAlt}
                            className="mr-1"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                                <span 
                                    className="label">
                                    <FontAwesomeIcon 
                                        icon={faEdit}
                                        className="mr-1"/>
                                </span>
                                Edit Course
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => deleteModule(module.id)}>
                            <span className="label">
                                <FontAwesomeIcon 
                                    icon={faTrashAlt}
                                    className="mr-2"/>
                            </span>
                            Delete Course
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </li>
    )
}

export default ModuleListItem