import React from "react";

function FoundMean(props) {

    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalInfo.goalStates
    const reason = props.event.message.event.reasonInfo.value

    return (
        <div>
            <h5 className="fw-bold">Found mean</h5>
            <p className="text-muted fw-bold">I improve the means to pursue the intention {functor + (reason ? " by selecting plan " + reason.terms.value : "")} </p>
            <p className="text-muted my-1">State: {state}</p>
            <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
        </div>
    )
}

export default FoundMean;