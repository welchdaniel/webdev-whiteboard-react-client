import React from 'react'

const WidgetListComponent = ({ widgets }) => {
    return(
        <ul className="nav nav-pills nav-fill">
            {widgets.map((widget, key) => 
                <li 
                    className="nav-item"
                    key={key}>
                <a className="nav-link bg-light">
                    {widget.type}
                </a>
             </li>
            )}
        </ul>
    )
}

export default WidgetListComponent;