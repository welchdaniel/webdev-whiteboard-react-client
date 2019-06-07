import React from 'react'
import { Button } from 'react-bootstrap';
import { faTrashAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HyperlinkWidget = ({ widget, deleteWidget, editing }) => {
    return(
        <li className="list-group-item">
        <div className={editing ? "container" : "d-none"}>
            <div className="row">
                <h3 className="col-8">Hyperlink widget</h3>
                <div className="col-4 d-flex justify-content-end">
                    <Button 
                        onClick={() => {}}
                        variant="warning"
                        className="mr-2">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    <Button 
                        onClick={() => {}}
                        variant="warning"
                        className="mr-2">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                    <Button 
                        onClick={() => deleteWidget(widget.id)}
                        variant="danger"
                        className="mr-2">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </div>
            </div>
            <div className="row mt-4">
                <h4>Preview</h4>
            </div>
        </div>
        <div>
            
        </div>
    </li> 
    )
}

export default HyperlinkWidget;