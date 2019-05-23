import React from 'react'

const ModuleListItem = ({module, selectModule, selectedModule}) => {
    return(
        <li 
            onClick={() => selectModule(module)}
            className={module === selectedModule ? "list-group-item active" : "list-group-item"}>
            <a>{module.title}</a>
        </li>
    )
}

export default ModuleListItem