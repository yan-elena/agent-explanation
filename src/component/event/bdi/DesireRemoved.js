import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function DesireRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalStates
    const intention = props.event.message.event.goalInfo.intention.value
    const result = props.event.message.event.result
    const info = "Result: " + result + ", state: " + state

    let id = Object.keys(agentState.intention).find(key => agentState.intention[key].includes(functor))
    let intentionInfo = "intention " + functor + "/" + id
    let parentDesire = []
    let im
    let type
    let description

    if (intention) {
        im = intention.intendedMeansInfo

        if (im[0] && im[0].trigger !== functor) {
            parentDesire = ["Intention " + functor + "/" + id + " is an intention created from intention " + im[0].trigger + "/" + id, <br/>]
        }
    }

    if (result === "achieved") {
        type = "Desire satisfied";
        description = "I have satisfied my desire " + functor + " because " + intentionInfo + " finished"
    } else if (result === "failed") {
        type = "Desire failed";
        description = "I gave up desire " + functor + "  because " + intentionInfo + " failed"
    }

    return (
        <Event type={type} description={description} info={[...parentDesire, info]} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default DesireRemoved;