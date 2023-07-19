import React from "react";

function Event(props) {

    const string = (props.type + " " + props.description + " " + props.info + " " + props.timestamp).toLowerCase()
    const filter = props.filter.toLowerCase()

    if (string.includes(filter)) {
        return (
            <div>
                <h5 className="fw-bold">{props.description}</h5>
                <p className="text-muted fw-bold my-2">Event type: {props.type}</p>
                <p className="text-muted my-1">{props.info && props.info}</p>
                <p className="text-muted my-1">Timestamp: {props.timestamp}</p>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default Event;