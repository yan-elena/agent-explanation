import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function DesireRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalStates
    const intention = props.event.message.event.goalInfo.intention.value
    const result = props.event.message.event.result
    const info = "Result: " + result + ", state: " + state

    let intentionInfo
    let id
    let type
    let description

    if (intention && intention.id) {
        id = intention.id
        intentionInfo = "intention " + (intention.intendedMeansInfo[0] ? intention.intendedMeansInfo[0].trigger : functor) + "/" + id
    } else {
        id = Object.keys(agentState.intention).find(key => agentState.intention[key] === functor)
        intentionInfo = "intention " + functor + "/" + id
    }

    if (result === "achieved") {
        type = "Desire satisfied";
        description = "I have satisfied my desire " + functor + " because " + intentionInfo + " finished"
    } else if (result === "failed") {
        type = "Desire failed";
        description = "I gave up desire " + functor + "  because " + intentionInfo + " failed"
    }

    return (
        <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default DesireRemoved;