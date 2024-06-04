import {MDBContainer} from "mdb-react-ui-kit";
import React from "react";
import EventMapping from "../component/event/EventMapping";
import {Modal} from "react-bootstrap";

function EventExplanationPage(props) {
    if (props.explanation && props.explanation.length > 0 && props.show) {
        return (
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header>
                    <h5 className="">Explanation of the event: "{props.event}"</h5>
                </Modal.Header>
                <Modal.Body>
                    <MDBContainer xs={12}>
                            <ul className="timeline">
                                {props.explanation.map((ex) => (
                                    <li className={"timeline-item mb-5"} key={ex.timestamp}>
                                        {React.cloneElement(EventMapping[ex.message.type][props.level], {
                                            log: props.log,
                                            event: ex,
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