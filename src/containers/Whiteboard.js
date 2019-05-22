import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseTable from './CourseTable';

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <CourseTable/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}