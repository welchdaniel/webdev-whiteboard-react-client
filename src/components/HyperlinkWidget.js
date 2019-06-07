import React from 'react'

const HyperlinkWidget = ({ widget, deleteWidget }) => {
    return(
        <li className="nav-item"> 
            {widget.type} 
            <button onClick={() => deleteWidget(widget.id)}>Delete</button>
        </li> 
    )
}

export default HyperlinkWidget;