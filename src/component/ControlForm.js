import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {Button, Col} from "react-bootstrap";

function ControlForm(props) {

    const [searchEvent, setSearchEvent] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("JASON");

    return (
        <Form.Group className="row m-4" controlId="formBasicSelect">
            <Col sm={5}>
                <Form.Label>Search an event:</Form.Label>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Event"
                        className="me-2"
                        aria-label="Event"
                        onChange={e => setSearchEvent}
                    />
                    <Button>
                        Search
                    </Button>
                </Form>
            </Col>
            <Col sm={1}/>
            <Col sm={5}>
                <Form.Label>Select the level:</Form.Label>
                <Form.Select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}>
                    <option value="JASON">Jason Level</option>
                    <option value="BDI">BDI Level</option>
                </Form.Select>
            </Col>

        </Form.Group>
    )
}

export default ControlForm;