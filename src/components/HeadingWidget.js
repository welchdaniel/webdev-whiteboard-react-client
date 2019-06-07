import React from 'react'
import { Button } from 'react-bootstrap';
import { faTrashAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeadingWidget = ({ widget, deleteWidget, editing }) => {
    return(
        <li className="list-group-item">
            <div className={editing ? "container" : "d-none"}>
                <div className="row mb-4">
                    <h3 className="col-8">Heading widget</h3>
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
                            <option selected value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                            <option value="HYPERLINK">Hyperlink</option>
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
                        <label for="headingText">Heading text</label>
                        <input type="text" class="form-control" id="headingText" aria-describedby="headingText" placeholder="Heading text"/>
                    </div>
                    <div class="form-group">
                        <label for="headingSize">Heading size</label>
                        <select className="form-control input-sm" id="headingSize">
                            <option value="h1">Heading 1</option>
                            <option value="h2">Heading 2</option>
                            <option value="h3">Heading 3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="widgetName">Widget name</label>
                        <input type="text" class="form-control" id="widgetName" aria-describedby="widgetName" placeholder="Widget name"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
                <div className="row mt-4">
                    <h4 className="mb-4">Preview</h4>
                </div>
            </div>
            <div>
                <div className={widget.size == 1 ? "" : "d-none"}>
                    <h1>{widget.text}</h1>
                </div>
                <div className={widget.size == 2 ? "" : "d-none"}>
                    <h2>{widget.text}</h2>
                </div>
                <div className={widget.size == 3 ? "" : "d-none"}>
                    <h3>{widget.text}</h3>
                </div>
            </div>
        </li> 
    )
}

export default HeadingWidget;