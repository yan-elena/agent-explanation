import React from "react";

function ExecutedAction(props) {

    const type = props.event.message.type

    if (type === "InternalActionFinished") {
        const action = props.event.message.event.action
        return (
            <div>
                <h5 className="fw-bold">Executed action</h5>
                <p className="text-muted fw-bold">I'm executed action {action.term}</p>
                <p className="text-muted my-1">Type: {action.type}</p>
                <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
            </div>
        )
    } else {
        const deed = props.event.message.event.deedInfo
        return (
            <div>
                <h5 className="fw-bold">Executed action</h5>
                <p className="text-muted fw-bold">I'm executed action {deed.term}</p>
                <p className="text-muted my-1">Type: {(type === "ExternalActionFinished" ? "external " : "") + deed.type}</p>
                <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
            </div>
        )
    }
}

export default ExecutedAction;