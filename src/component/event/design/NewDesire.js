import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function NewDesire(props) {
    const eventType = "New Desire"
    const goalInfo = props.event.message.event.goalInfo
    const functor = goalInfo.goalFunctor
    const intention = goalInfo.intention.value
    const state = props.event.message.event.goalStates
    const source = goalInfo.source.value
    const info = "State: " + state

    let description = "I have a new desire " + functor
    let reason = " because it is an initial desire"
    if (intention) {
        let im = intention.intendedMeansInfo
        if (im.length > 0) {
            const parent = im[0].trigger
            if (agentState.speechAct.signal.includes(parent)) {
                reason = " because it is created from the signal " + parent
            } else if (agentState.speechAct.tell.includes(parent)) {
                reason = " because it is created from " + parent + " tell message"
            } else if (agentState.belief.self.includes(parent)) {
                reason = " because it is formed on the addition of a belief " + parent
            } else if (agentState.belief.percept.includes(parent)) {
                reason = " because it is created from the perception of " + parent
            } else {
                reason = " because it is created from " + parent
            }
        }
    } else if (source && source !== "self" && agentState.speechAct.achieve.includes(functor)) {
        reason = " created from agent " + source + " by an achieved message "
    }

    return (
        <Event type={eventType} description={description + reason} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewDesire;