import React from "react";

function Event(props) {
    return (
        <li className="timeline-item mb-5">
            <h5 className="fw-bold">{props.event.message.type}</h5>
            <p className="text-muted mb-2 fw-bold">{props.event.message.log}</p>
            <p className="text-muted">Timestamp: {props.event.timestamp}</p>
        </li>
    )
}

export default Event;