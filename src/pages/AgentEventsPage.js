import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Event from "../component/Event";

function AgentEventsPage(props) {
    return (
        <MDBContainer className="py-5">
            <ul className="timeline">
                {props.agent.log.map(event => (
                    <Event event={event}/>
                ))}
            </ul>
        </MDBContainer>
    )
}

export default AgentEventsPage;