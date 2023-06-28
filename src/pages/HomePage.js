import React from "react";
import Agent from "../component/Agent";
import {Col, Row} from "react-bootstrap";

function HomePage(props) {

    return (
        <Row>
            {Array.from(props.files).map(file => (
                <Col xs={12} md={4} lg={3}>
                    <Agent name={file.name.replace(".json", "")} key={file.name} loadAgentLog={props.loadAgentLog}/>
                </Col>
            ))}
        </Row>
    )
}

export default HomePage;