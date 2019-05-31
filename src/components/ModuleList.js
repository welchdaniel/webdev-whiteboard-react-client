import React from 'react'
import ModuleListItem from './ModuleListItem'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap'

const ModuleList = ({modules, moduleTitle, editModule, renameModule, editingTitle, editingModule, stopEditing, selectModule, titleChanged, createModule, deleteModule, selectedModule}) => {
    return(
        <div className="container-fluid">
            <div className="row mb-3 mt-2">
                <input 
                    className="col-12 col-lg-10 col-sm-9 form-control"
                    placeholder="New Module"
                    value={moduleTitle}
                    onChange={titleChanged}>
                </input>
                <Button 
                    className="col-12 col-lg-2 col-sm-3"
                    onClick={createModule}
                    variant="success">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <ul className="list-group">
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
                    className="col-12 col-lg-10 col-sm-9 form-control"
                    placeholder="Rename Module"
                    value={editingTitle}
                    onChange={editModule}>
                </input>
                <Button 
                    className="col-12 col-lg-2 col-sm-3"
                    onClick={renameModule}
                    type="text"
                    variant="danger">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                <Button 
                    className="col-12"
                    onClick={stopEditing}
                    type="text"
                    variant="secondary">
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default ModuleList;