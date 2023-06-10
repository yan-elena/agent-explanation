// import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";
import React, {useState} from "react";

function LogForm(props) {

    const [selectedFile, setSelectedFile] = useState(null);

    function SubmitHandler(event) {
        event.preventDefault();
        props.setLogFiles(selectedFile);
    }

    return (
        <Form className="m-5" onSubmit={SubmitHandler}>
            <Row>
                <Col md={1} lg={2}></Col>
                <Col xs={12} md={10} lg={8}>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Upload the logging files in .json format generated for your multi-agent system:</Form.Label>
                        <Form.Control type="file" accept=".json" required multiple onChange={(e) => setSelectedFile(e.target.files)}/>
                    </Form.Group>

                    <div className="col-10 mt-5" id="items"></div>

                    {/*<div className="mt-5 d-flex justify-content-center align-items-center">*/}
                    <Button className="mt-2" variant="primary" id="continue" type="submit">Continue</Button>
                </Col>
                <Col md={1} lg={2}></Col>
            </Row>
        </Form>
    )
}

export default LogForm;