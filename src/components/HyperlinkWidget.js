import React from 'react'
import { Button } from 'react-bootstrap';
import { faTrashAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HyperlinkWidget = ({ widget, deleteWidget, editing }) => {
    return(
        <li className="list-group-item">
        <div className={editing ? "container" : "d-none"}>
            <div className="row mb-4">
                <h3 className="col-8">Link widget</h3>
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
                    <select className="mr-2">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option selected value="HYPERLINK">Hyperlink</option>
                    </select>
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
                    <label for="linkText">Link text</label>
                    <input type="text" class="form-control" id="linkText" aria-describedby="linkText" placeholder="Link text"/>
                </div>
                <div class="form-group">
                    <label for="linkUrl">Link url</label>
                    <input type="url" class="form-control" id="linkUrl" aria-describedby="imageUrl" placeholder="Link url"/>
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
            <a href={widget.src}>{widget.text}</a>   
        </div>
    </li> 
    )
}

export default HyperlinkWidget;