import React, {useState} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import EventComponents from "../component/event/EventComponents";
import ControlForm from "../component/ControlForm";

function AgentEventsPage(props) {

    const [filteredEvents, setFilteredEvents] = useState(props.agent.log);
    const [selectedLevel, setSelectedLevel] = useState("JASON");

    const filterEvents = (event)  => {
        event.preventDefault();
        const filter = event.target.value.toLowerCase();
        setFilteredEvents(props.agent.log.filter(log =>
            (log.message.type.replace(/\B([A-Z])\B/g, ' $1') + " " + log.message.log).toLowerCase().includes(filter)))
    }

    return (
        <div>
            <h2 className="m-4">{props.agent ? "Agent " + props.agent.name : ""}</h2>
            <ControlForm filterEvents={filterEvents} level={selectedLevel} selectLevel={setSelectedLevel}/>
            <MDBContainer xs={12} className="my-5">
                <ul className="timeline">
                    {props.agent && filteredEvents.map(event => (
                        <li className="timeline-item mb-5">
                            {React.cloneElement(EventComponents[event.message.type][selectedLevel], {event: event})}
                        </li>
                    ))}
                </ul>
            </MDBContainer>
        </div>
    )
}

export default AgentEventsPage;