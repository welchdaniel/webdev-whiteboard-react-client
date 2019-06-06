import React from 'react'

const HeadingWidget = ({ widget }) => {
    return(
        <li className="nav-item"> 
            {widget.type} 
        </li>
    )
}

export default HeadingWidget;