import React from 'react'

const HeadingWidget = ({ widget, deleteWidget, editing }) => {
    return(
        <li className={editing ? "list-group-item" : "d-none"}> 
            {widget.type}
            <button onClick={() => deleteWidget(widget.id)}>Delete</button>
        </li> 
    )
}

export default HeadingWidget;