import React from 'react'
import HeadingWidget from './HeadingWidget';
import {connect} from 'react-redux'

const Widget =  connect()(HeadingWidget);

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets(); 
    }
    render() {
        return(
            <div>
                <ul className="nav nav-pills nav-fill">
                    {this.props.widgets.map((widget) => 
                        <Widget
                            key={widget.id}
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}/>
                    )}
                </ul>
                <button onClick={this.props.createWidget}>Create</button>
            </div>
        )
    }
}

export default WidgetListComponent;