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

            <Col className="mt-5 ms-3">
                <ListGroup>
                    <ListGroupItem  href={"/events"} action>All</ListGroupItem >
                    <ListGroupItem  href={"/beliefs"} action>Beliefs</ListGroupItem >
                    <ListGroupItem  href={"/plans"} action>Plans</ListGroupItem >
                    <ListGroupItem  href={"/intentions"} action>Intentions</ListGroupItem >
                    <ListGroupItem  href={"/goals"} action>Goals</ListGroupItem >
                    <ListGroupItem  href={"/messages"} action>Messages</ListGroupItem >
                </ListGroup>
            </Col>
        </Row>
    )
}

export default Agent;