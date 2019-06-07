import React from 'react'
import HeadingWidget from './HeadingWidget';
import ParagraphWidget from './ParagraphWidget';
import ListWidget from './ListWidget';
import ImageWidget from './ImageWidget';
import HyperlinkWidget from './HyperlinkWidget';
import {connect} from 'react-redux'

import { Button } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Widget;

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets();
        this.props.toggleEditing();
    }
    render() {
        return(
            <div>
                <div className="custom-control custom-switch mb-2 col-12" align="right">
                    <input 
                        checked={!this.props.editing}
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customSwitch1" 
                        onChange={() => {this.props.toggleEditing(this.props.editing)}}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Preview</label>
                </div>
                <ul className="list-group col-12">
                    {this.props.widgets.map((widget) => {
                        switch (widget.type) {
                            case 'HEADING':
                                Widget = connect()(HeadingWidget);
                                break;
                            case 'PARAGRAPH':
                                Widget = connect()(ParagraphWidget);
                                break;
                            case 'LIST':
                                Widget = connect()(ListWidget);
                                break;
                            case 'IMAGE':
                                Widget = connect()(ImageWidget);
                                break;
                            case 'HYPERLINK':
                                Widget = connect()(HyperlinkWidget);
                                break;
                            default:
                                Widget = connect()(HeadingWidget);
                        }

                        return(<Widget
                            key={widget.id}
                            widget={widget}
                            editing={this.props.editing}
                            deleteWidget={this.props.deleteWidget}/>)
                    })}
                </ul>
                <Button 
                    onClick={this.props.createWidget}
                    variant="success"
                    className="col-1 float-right mr-3 mt-3">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
        )
    }
}

export default WidgetListComponent;