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
                <h1>Widget List {this.props.widgets.length}</h1>
                <ul className="nav nav-pills nav-fill">
                    {this.props.widgets.map((widget) => 
                        <Widget
                            key={widget.id}
                            widget={widget}/>
                    )}
                </ul>
                <button onClick={this.props.createWidget}>Create</button>
            </div>
        )
    }
}

export default WidgetListComponent;