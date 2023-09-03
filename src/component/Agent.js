import React from "react";
import {Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";

function Agent(props) {
    return (
        <Row>
            <Col xs={10} className="circle_container my-5 ms-5">
                <div className="circle_main">
                    <div className="circle_text_container">
                        <div className="circle_text">
                            {props.name}
                        </div>
                    </div>
                </div>
            </Col>

            <Col className="mt-5 ms-3 me-3">
                <ListGroup>
                    <ListGroupItem  href={"#/agents/" + props.name} onClick={() => props.loadAgentLog(props.name)} action>Complete narrative</ListGroupItem >
                    <ListGroupItem  href={"#/agents/" + props.name + "/beliefs"} onClick={() => props.loadAgentLog(props.name)} action>Belief narrative</ListGroupItem >
                    <ListGroupItem  href={"#/agents/" + props.name + "/desires"} onClick={() => props.loadAgentLog(props.name)} action>Desire narrative</ListGroupItem >
                    <ListGroupItem  href={"#/agents/" + props.name + "/intentions"} onClick={() => props.loadAgentLog(props.name)} action>Intention narrative</ListGroupItem >
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Agent;