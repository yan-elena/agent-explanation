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
                    <ListGroupItem  href={"#/agents/" + props.name + "/implementation"} onClick={() => props.loadAgentLog(props.name)} action>Implementation Level</ListGroupItem >
                    <ListGroupItem  href={"#/agents/" + props.name + "/design"} onClick={() => props.loadAgentLog(props.name)} action>Design Level</ListGroupItem >
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Agent;