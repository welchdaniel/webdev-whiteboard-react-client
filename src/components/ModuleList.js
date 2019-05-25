import React from 'react'
import ModuleListItem from './ModuleListItem'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap'

const ModuleList = ({modules, moduleTitle, editModule, renameModule, editingModule, selectModule, titleChanged, createModule, deleteModule, selectedModule}) => {
    return(
        <div className="container-fluid">
            <div className="row mb-3 mt-2">
                <input 
                    className="col-10 form-control"
                    placeholder="New Module"
                    value={moduleTitle}
                    onChange={titleChanged}>
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
                            editModule={editModule}
                            selectModule={selectModule}
                            selectedModule={selectedModule}
                            deleteModule={deleteModule}
                            key={key}/>
                    )
                }
            </ul>
            <div className={editingModule ? "row mb-3 mt-2" : "d-none"}>
                <input 
                    className="col-10 form-control"
                    placeholder="Rename Module"
                    onChange={editModule}>
                </input>
                <Button 
                    className="col-2"
                    onClick={renameModule}
                    type="text"
                    variant="danger">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
        </div>
    )
}

export default ModuleList;