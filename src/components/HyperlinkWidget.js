import React from 'react'
import { Button } from 'react-bootstrap';
import { faTrashAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HyperlinkWidget = ({ widget, deleteWidget }) => {
    return(
        <li className="list-group-item"> 
            {widget.type} 
            <div align="right">
                <Button 
                    onClick={() => deleteWidget(widget.id)}
                    variant="warning"
                    className="col-1 mr-2">
                    <FontAwesomeIcon icon={faArrowUp} />
                </Button>
                <Button 
                    onClick={() => deleteWidget(widget.id)}
                    variant="warning"
                    className="col-1 mr-2">
                    <FontAwesomeIcon icon={faArrowDown} />
                </Button>
                <Button 
                    onClick={() => deleteWidget(widget.id)}
                    variant="danger"
                    className="col-1">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </div>
        </li> 
    )
}

export default HyperlinkWidget;