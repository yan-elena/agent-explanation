import React from "react";
import Agent from "../component/Agent";
import {Col, Row} from "react-bootstrap";

function HomePage(props) {

    return (
        <Row>
            {Array.from(props.files).map((file, i) => (
                <Col xs={12} md={4} key={i}>
                    <Agent name={file.name.replace(".json", "")} loadAgentLog={props.loadAgentLog}/>
                </Col>
            ))}
        </Row>
    )
}

export default HomePage;