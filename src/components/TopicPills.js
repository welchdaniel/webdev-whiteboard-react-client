import React from 'react'

const TopicPills = ({topics, selectedTopic, selectTopic}) => {
    return(
        <ul className="nav nav-pills">
            {topics.map((topic, key) => 
                <li 
                    className="nav-item"
                    onClick={() => selectTopic(topic)}
                    key={key}>
                <a className={topic === selectedTopic ? "nav-link active" : "nav-link bg-secondary"}>
                    {topic.title}
                </a>
             </li>
            )} 
        </ul>
    )
}

export default TopicPills;