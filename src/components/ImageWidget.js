import React from 'react'
import { Button } from 'react-bootstrap';
import { faTrashAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageWidget = ({ widget, deleteWidget, editing }) => {
    return(
        <li className="list-group-item">
        <div className={editing ? "container" : "d-none"}>
            <div className="row mb-4">
                <h3 className="col-8">Image widget</h3>
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
            <form>
                <div class="form-group">
                    <label for="imageUrl">Image url</label>
                    <input type="url" class="form-control" id="imageUrl" rows="4" aria-describedby="imageUrl" placeholder="Image url"/>
                </div>
                <div class="form-group">
                    <label for="widgetName">Widget name</label>
                    <input type="text" class="form-control" id="widgetName" aria-describedby="widgetName" placeholder="Widget name"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div className="row mt-4">
                <h4>Preview</h4>
            </div>
        </div>
        <div>
            
        </div>
    </li> 
    )
}

export default ImageWidget;