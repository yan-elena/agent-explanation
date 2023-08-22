import React from "react";

function Event(props) {

    const string = (props.type + " " + props.description + " " + props.info + " " + props.timestamp).toLowerCase()
    const filter = props.filter.toLowerCase()

    const description = [];
    if (props.description) {
        props.description.split("\n").forEach(item => {
            description.push(item);
            description.push(<br/>);
        });
    }

    if (string.includes(filter) && props.type) {
        return (
            <div>
                <h6 className="fw-bold">{description}</h6>
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