import React from "react";

function DesireCommitted(props) {

    const desire = props.event.message.event.intentionInfo.intendedMeansInfo.slice(-1)[0].trigger

    return (
        <div>
            <h5 className="fw-bold">Desire committed</h5>
            <p className="text-muted fw-bold">I committed to desire {desire}, and it became a new intention</p>
            <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
        </div>
    )
}

export default DesireCommitted;