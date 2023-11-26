import React, {useEffect, useState} from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import EventMapping from "../component/event/EventMapping";
import ControlForm from "../component/ControlForm";
import {resetState} from "../model/agentState";

function AgentEventsPage(props) {

    const [filter, setFilter] = useState(props.filter);
    const [selectedLevel, setSelectedLevel] = useState(props.level);

    useEffect(() => {
        setFilter(props.filter)
        setSelectedLevel(props.level)
    }, [props])

    resetState()

    return (
        <div>
            <h2 className="m-4">{props.agent && props.agent.name}</h2>
            <ControlForm filter={filter} filterEvents={setFilter} level={selectedLevel} selectLevel={setSelectedLevel}/>
            <MDBContainer xs={12} className="my-5">
                <ul className="timeline">
                    {props.agent && props.agent.log.map((event, i) => (
                        <li className="timeline-item mb-5" key={event.timestamp + "_" + i}>
                            {React.cloneElement(EventMapping[event.message.type][selectedLevel], {log: props.agent.log, event: event, filter: filter, level: selectedLevel})}
                        </li>
                    ))}
                </ul>
            </MDBContainer>
        </div>
    )
}

export default AgentEventsPage;