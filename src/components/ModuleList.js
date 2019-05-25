import React from 'react'
import ModuleListItem from './ModuleListItem'

const ModuleList = ({modules, selectModule, deleteModule, selectedModule}) => {
    return(
        <ul className="list-group">
            { modules.map((module, key) =>
                    <ModuleListItem
                        module={module}
                        selectModule={selectModule}
                        selectedModule={selectedModule}
                        deleteModule={deleteModule}
                        key={key}/>
                )
            }
        </ul>
    )
}

export default ModuleList;