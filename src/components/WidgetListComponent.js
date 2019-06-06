import React from 'react'
import HeadingWidget from './HeadingWidget';


const WidgetListComponent = ({ widgets }) => {
    return(
        <ul className="nav nav-pills nav-fill">
            {widgets.map((widget) => 
                <HeadingWidget
                    key={widget.id}
                    widget={widget}/>
            )}
        </ul>
    )
}

export default WidgetListComponent;