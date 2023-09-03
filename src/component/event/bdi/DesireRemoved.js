import React from "react";
import Event from "../Event";
import {agentState, getIntentionReason} from "../../../model/agentState";

function DesireRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const intention = props.event.message.event.goalInfo.intention.value
    const result = props.event.message.event.result
    const info = "Result: " + result + ", state: " + props.event.message.event.goalStates

    let id
    let type
    let description
    let parentDesire = []

    let intentionInfo = "intention " + functor

    if (intention) {
        id = intention.id
        const im = intention.intendedMeansInfo

        if (im.length > 0) {
            let reason = getIntentionReason(functor, intention)
            parentDesire = reason ? ["Intention " + functor + "/" + id + " is an intention" + reason, <br/>] : []
        }
    } else {
        id = Object.keys(agentState.intention).find(key => agentState.intention[key].includes(functor))
    }

    intentionInfo = intentionInfo + "/" + id
    if (result === "achieved") {
        type = "Desire satisfied";
        description = "I have satisfied my desire " + functor + " because its " + intentionInfo + " has finished"
    } else if (result === "failed") {
        type = "Desire failed";
        description = "I gave up desire " + functor + "  because its " + intentionInfo + " failed"
    }

    return (
        <Event type={type} description={description} info={[...parentDesire, info]} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default DesireRemoved;