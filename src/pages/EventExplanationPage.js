import {MDBContainer} from "mdb-react-ui-kit";
import React from "react";
import EventMapping from "../component/event/EventMapping";
import {Modal} from "react-bootstrap";

function EventExplanationPage(props) {
    if (props.explanation) {
        return (
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header>
                    <h5 className="">Explanation of the event: "{props.event}"</h5>
                </Modal.Header>
                <Modal.Body>
                    <MDBContainer xs={12}>
                            <div>
                                {React.cloneElement(EventMapping[props.explanation.message.type][props.level], {
                                    log: props.log,
                                    event: props.explanation,
                                    filter: "",
                                    level: props.level
                                })}
                            </div>
                    </MDBContainer>
                </Modal.Body>
            </Modal>
        )
    } else {
        return (<></>)
    }
}

export default EventExplanationPage;