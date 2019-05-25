import React from 'react'
import ModuleListItem from './ModuleListItem'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap'

const ModuleList = ({modules, selectModule, createModule, deleteModule, selectedModule}) => {
    return(
        <div className="container-fluid">
            <div className="row mb-3 mt-2">
                <input 
                    className="col-10 form-control"
                    placeholder="New Module">
                </input>
                <Button 
                    className="col-2"
                    onClick={createModule}
                    variant="success">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <ul className="list-group row">
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
        </div>
    )
}

export default ModuleList;