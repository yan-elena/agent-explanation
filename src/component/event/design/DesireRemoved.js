import React from "react";
import Event from "../Event";
import {getIntentionReason} from "../../../model/agentState";
import {Level} from "../../../model/Level";

function DesireRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const intention = props.event.message.event.goalInfo.intention.value
    const result = props.event.message.event.result
    const info = "Result: " + result + ", state: " + props.event.message.event.goalStates

    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === functor)

    let id
    let type
    let description
    let parentDesire = []

    if (intention) {
        id = intention.id
        const im = intention.intendedMeansInfo

        if (im.length > 0) {
            let reason = getIntentionReason(functor, intention)
            parentDesire = reason ? ["Intention int-" + id + "-" + functor + " is an intention" + reason, <br/>] : []
        }
    }

    let intentionInfo = "intention int-" + id + "-" + functor.split(')[')[0]
    if (result === "achieved") {
        type = "Desire Satisfied";
        description = "I have satisfied my desire " + functor + " because its " + intentionInfo + " finished"
    } else if (result === "failed") {
        type = "Goal Failed"; //todo: check
        description = "I gave up the goal " + functor
        if (intention) {
            description += "  because its " + intentionInfo + " failed"
        } else {
            description += " because there was no applicable plan"
        }
    }

    return (
        <Event type={type} description={description} info={[...parentDesire, info]} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
    )
}

export default DesireRemoved;