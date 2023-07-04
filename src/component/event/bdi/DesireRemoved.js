import React from "react";

function DesireRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalInfo.goalStates
    const result = props.event.message.event.result

    if (result === "achieved") {
        return (
            <div>
                <h5 className="fw-bold">Desire satisfied</h5>
                <p className="text-muted fw-bold">I have satisfied my desire {functor}</p>
                <p className="text-muted my-1">Result: {result}, state: {state}</p>
                <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
            </div>
        )
    } else if (result === "failed") {
        return (
            <div>
                <h5 className="fw-bold">Desire {functor} failed</h5>
                <p className="text-muted fw-bold">I gave up desire {functor} because its intention failed</p>
                <p className="text-muted my-1">Result: {result}, state: {state}</p>
                <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
            </div>
        )
    }
}

export default DesireRemoved;