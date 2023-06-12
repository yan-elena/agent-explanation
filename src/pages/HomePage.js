import React from "react";
import Agent from "../component/Agent";
import {Col, Row} from "react-bootstrap";

function HomePage(props) {

    return (
        <Row>
            {Array.from(props.agents).map(agent => (
                <Col xs={12} md={4} lg={3}>
                    <Agent name={agent.name} log={agent.log} key={agent.name}/>
                </Col>
            ))}
        </Row>
    )
}

export default HomePage;