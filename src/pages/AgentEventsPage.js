import React, {useState} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import EventComponents from "../component/event/EventComponents";
import ControlForm from "../component/ControlForm";
import {resetState} from "../model/agentState";

function AgentEventsPage(props) {

    const [filter, setFilter] = useState(props.filter);
    const [selectedLevel, setSelectedLevel] = useState(props.level);

    resetState()

    return (
        <div>
            <h2 className="m-4">{props.agent && props.agent.name}</h2>
            <ControlForm filter={props.filter} filterEvents={setFilter} level={selectedLevel} selectLevel={setSelectedLevel}/>
            <MDBContainer xs={12} className="my-5">
                <ul className="timeline">
                    {props.agent && props.agent.log.map((event, i) => (
                        <li className="timeline-item mb-5" key={i}>
                            {React.cloneElement(EventComponents[event.message.type][selectedLevel], {log: props.agent.log, event: event, filter: filter, level: selectedLevel})}
                        </li>
                    ))}
                </ul>
            </MDBContainer>
        </div>
    )
}

export default AgentEventsPage;