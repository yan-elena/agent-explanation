import React, {useState} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import EventComponents from "../component/event/EventComponents";
import ControlForm from "../component/ControlForm";

function AgentEventsPage(props) {

    const [filter, setFilter] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("JASON");

    return (
        <div>
            <h2 className="m-4">{props.agent && props.agent.name}</h2>
            <ControlForm filterEvents={setFilter} level={selectedLevel} selectLevel={setSelectedLevel}/>
            <MDBContainer xs={12} className="my-5">
                <ul className="timeline">
                    {props.agent && props.agent.log.map((event, i) => (
                        <li className="timeline-item mb-5" key={i}>
                            {React.cloneElement(EventComponents[event.message.type][selectedLevel], {event: event, filter: filter})}
                        </li>
                    ))}
                </ul>
            </MDBContainer>
        </div>
    )
}

export default AgentEventsPage;