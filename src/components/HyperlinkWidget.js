import React from 'react'
import { Button } from 'react-bootstrap';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HyperlinkWidget = ({ widget, deleteWidget }) => {
    return(
        <li className="list-group-item"> 
            {widget.type} 
            <Button 
                onClick={() => deleteWidget(widget.id)}
                variant="danger"
                className="col-1 float-right">
                <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
        </li> 
    )
}

export default HyperlinkWidget;