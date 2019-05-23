import React from 'react'
import ModuleListItem from './ModuleListItem'

const ModuleList = ({modules, selectModule, selectedModule}) => {
    return(
        <ul className="list-group">
            { modules.map((module, key) =>
                    <ModuleListItem
                        module={module}
                        selectModule={selectModule}
                        selectedModule={selectedModule}
                        key={key}/>
                )
            }
        </ul>
    )
}

export default ModuleList;