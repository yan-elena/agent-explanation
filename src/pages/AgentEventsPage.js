import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import EventComponents from "../component/event/EventComponents";
import ControlForm from "../component/ControlForm";

function AgentEventsPage(props) {
    return (
        <div>
            <h2 className="m-4">{props.agent ? "Agent " + props.agent.name : ""}</h2>
            <ControlForm/>
            <MDBContainer xs={12} className="my-5">
                <ul className="timeline">
                    {props.agent && props.agent.log.map(event => (
                        <li className="timeline-item mb-5">
                            {
                                //todo: level
                                React.cloneElement(EventComponents[event.message.type]["JASON"], {event: event})
                            }
                        </li>
                    ))}
                </ul>
            </MDBContainer>
        </div>
    )
}

export default AgentEventsPage;