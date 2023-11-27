import React from "react";
import Form from 'react-bootstrap/Form';
import {Col} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import {Level} from "../model/Level";

function ControlForm(props) {

    const navigate = useNavigate();
    const location = useLocation()
    function selectLevel(ev) {
        const level = ev.target.value
        navigate(location.pathname.replace(/[^/]*$/, level))
        props.selectLevel(level)
    }

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
                <Form.Select value={props.level} onChange={selectLevel}>
                    <option value={Level.IMPLEMENTATION}>{Level.IMPLEMENTATION} level</option>
                    <option value={Level.DESIGN}>{Level.DESIGN} level</option>
                </Form.Select>
            </Col>

        </Form.Group>
    )
}

export default ControlForm;