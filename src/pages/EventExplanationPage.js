import {MDBContainer} from "mdb-react-ui-kit";
import React from "react";
import EventMapping from "../component/event/EventMapping";
import {Modal} from "react-bootstrap";

function EventExplanationPage(props) {
    if (props.explanation) {
        return (
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header>
                    <h6 className="fw-bold">Explanation of the event: "{props.event}"</h6>
                </Modal.Header>
                <Modal.Body>
                    <MDBContainer xs={12} className="my-5">
                        <ul className="timeline">
                            {props.explanation.map((event, i) => (
                                <li className="timeline-item mb-5" key={event.timestamp + "_" + i}>
                                    {React.cloneElement(EventMapping[event.message.type][props.level], {
                                        log: props.log,
                                        event: event,
                                        filter: "",
                                        level: props.level
                                    })}
                                </li>
                            ))}
                        </ul>
                    </MDBContainer>
                </Modal.Body>
            </Modal>
        )
    } else {
        return (<></>)
    }
}

export default EventExplanationPage;