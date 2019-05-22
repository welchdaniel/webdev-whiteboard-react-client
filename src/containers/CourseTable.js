import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Navbar bg="light" expand="sm" fixed="top">
                <Navbar.Brand href="#">Course Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Form inline>
                        <FormControl type="text" placeholder="New Course Title" className="mr-xs-2" />
                        <Button className=".ml-3">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}