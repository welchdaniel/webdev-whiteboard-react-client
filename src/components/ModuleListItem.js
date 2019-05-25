import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ModuleListItem = ({module, selectModule, deleteModule, selectedModule}) => {
    return(
        <li 
            onClick={() => selectModule(module)}
            className={module === selectedModule ? "list-group-item active" : "list-group-item"}>
            <a>{module.title}</a>
            <FontAwesomeIcon
                onClick={() => deleteModule(module.id)}
                icon={faTrashAlt}
                className="float-right"/>
        </li>
    )
}

export default ModuleListItem