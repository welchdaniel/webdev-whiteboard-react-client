const WidgetListComponent = ({widget}) => {
    return(
        <ul className="nav nav-pills nav-fill">
            {widgets.map((widget, key) => {
                switch(widget.type) {
                }
                <li 
                    className="nav-item"
                    key={key}>
                <a className="nav-link bg-light">
                    {widget.title}
                </a>
             </li>
            })}
        </ul>
    )
}

export default WidgetListComponent;