import React from "react";
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";

function ControlForm(props) {

    return (
        <Form.Group className="row m-4" controlId="formBasicSelect">
            <Col sm={5}>
                <Form.Label>Filter events:</Form.Label>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Event"
                        className="me-2"
                        aria-label="Event"
                        value={props.filter}
                        onChange={e =>{ props.filterEvents(e.target.value)}}
                    />
                </Form>
            </Col>
            <Col sm={1}/>
            <Col sm={5}>
                <Form.Label>Select the level:</Form.Label>
                <Form.Select value={props.level} onChange={e => props.selectLevel(e.target.value)}>
                    <option value="JASON">Implementation Level</option>
                    <option value="BDI">Design Level</option>
                </Form.Select>
            </Col>

        </Form.Group>
    )
}

export default ControlForm;