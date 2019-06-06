import React from 'react';

const TopicPills = ({topics, selectedTopic, selectTopic}) => {
    return(
        <ul className="nav nav-pills nav-fill">
            {topics.map((topic, key) => 
                <li 
                    className="nav-item"
                    onClick={() => selectTopic(topic)}
                    key={key}>
                <a className={topic.id === selectedTopic.id ? "nav-link active text-white" : "nav-link bg-light"}>
                    {topic.title}
                </a>
             </li>
            )} 
        </ul>
    )
}

export default TopicPills;