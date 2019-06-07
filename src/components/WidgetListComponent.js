import React from 'react'
import HeadingWidget from './HeadingWidget';
import ParagraphWidget from './ParagraphWidget';
import ListWidget from './ListWidget';
import ImageWidget from './ImageWidget';
import HyperlinkWidget from './HyperlinkWidget';
import {connect} from 'react-redux'

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
                <div className="custom-control custom-switch">
                    <input type="checkbox" 
                        className="custom-control-input" 
                        id="customSwitch1" 
                        onClick={() => {this.props.toggleEditing(this.props.editing)}}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Preview</label>
                </div>
                <ul className="nav nav-pills nav-fill">
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
                <button onClick={this.props.createWidget}>Create</button>
            </div>
        )
    }
}

export default WidgetListComponent;