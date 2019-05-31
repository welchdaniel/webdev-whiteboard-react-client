import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ModuleListItem = ({module, selectModule, editModule, deleteModule, selectedModule}) => {
    return(
        <li
            onClick={() => selectModule(module)}
            className={module.id === selectedModule.id ? 
                "list-group-item active row" : "list-group-item row"}>
            <h6 className="align-middle">
                {module.title}
                <span className="label">
                    <Dropdown 
                        className="float-lg-right">
                        <Dropdown.Toggle
                            className="block-under-lg"
                            variant="warning">
                            <FontAwesomeIcon 
                                icon={faPencilAlt}
                                className="mr-1"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={editModule}>
                                    <span 
                                        className="label">
                                        <FontAwesomeIcon 
                                            icon={faEdit}
                                            className="mr-1"/>
                                    </span>
                                    Edit Module
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => deleteModule(module.id)}>
                                <span className="label">
                                    <FontAwesomeIcon 
                                        icon={faTrashAlt}
                                        className="mr-2"/>
                                </span>
                                Delete Module
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
            </h6>
        </li>
    )
}

export default ModuleListItem