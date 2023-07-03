import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import EventComponents from "../component/event/EventComponents";

function AgentEventsPage(props) {
    console.log(props.agent && React.createElement(EventComponents[props.agent.log[1].message.type], {event: "event"}))

    return (
        <MDBContainer className="py-5">
            <ul className="timeline">
                {props.agent && props.agent.log.map(event => (
                    <li className="timeline-item mb-5">
                        {
                            //todo: level
                            React.cloneElement(EventComponents[event.message.type]["jason"], {event: event})
                        }
                    </li>
                ))}
            </ul>
        </MDBContainer>
    )
}

export default AgentEventsPage;