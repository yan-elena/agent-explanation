import React from "react";
import Event from "../../Event";

function DesireRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalInfo.goalStates
    const result = props.event.message.event.result
    const info = "Result: " + result + ", state: " + state

    let type
    let description

    if (result === "achieved") {
        type = "Desire satisfied";
        description = "I have satisfied my desire " + functor
    } else if (result === "failed") {
        type = "Desire failed";
        description = "I gave up desire " + functor + "  because its intention failed"
    }

    return (
        <Event type={type} description={description} info={info} timestamp={props.event.timestamp}/>
    )
}

export default DesireRemoved;