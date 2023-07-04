import React from "react";

function Event(props) {
    return (
        <div>
            <h5 className="fw-bold">{props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')}</h5>
            <p className="text-muted mb-2 fw-bold">{props.event.message.log}</p>
            <p className="text-muted">Timestamp: {props.event.timestamp}</p>
        </div>
    )
}

export default Event;