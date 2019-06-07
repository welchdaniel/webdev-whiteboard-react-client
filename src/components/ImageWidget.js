import React from 'react'

const ImageWidget = ({ widget, deleteWidget }) => {
    return(
        <li className="list-group-item"> 
            {widget.type} 
            <button onClick={() => deleteWidget(widget.id)}>Delete</button>
        </li> 
    )
}

export default ImageWidget;