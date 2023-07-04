import React from "react";

function Event(props) {
    return (
        <div>
            <h5 className="fw-bold">{props.type}</h5>
            <p className="text-muted fw-bold my-2">{props.description}</p>
            <p className="text-muted my-1">{props.info && props.info}</p>
            <p className="text-muted my-1">Timestamp: {props.timestamp}</p>
        </div>
    )
}

export default Event;