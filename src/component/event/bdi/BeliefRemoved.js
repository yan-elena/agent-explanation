import React from "react";

function BDIBeliefRemoved(props) {
    return (
        <div>
            <h5 className="fw-bold">Belief Removed</h5>
            <p className="text-muted fw-bold">I no longer believe in {props.event.message.event.beliefInfo.literal}</p>
            <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
        </div>
    )
}

export default BDIBeliefRemoved;