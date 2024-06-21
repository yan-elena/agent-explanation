import React from "react";
import Event from "../Event";
import {getIntentionReason} from "../../../model/agentState";
import {Level} from "../../../model/Level";

function GoalAchievedAndRemoved(props) {
    const functor = props.event.message.event.goalInfo.goalFunctor
    const intention = props.event.message.event.goalInfo.intention.value
    const result = props.event.message.event.result
    const info = "Result: " + result + ", state: " + props.event.message.event.goalStates

    if (!functor.includes("kqml")) {
        let id
        let type
        let description
        let parentDesire = []
        let explanation = []

        if (intention) {
            id = intention.id
            const im = intention.intendedMeansInfo

            if (im.length > 0) {
                let reason = getIntentionReason(functor, intention)
                parentDesire = reason ? ["Intention int-" + id + "-" + functor + " is an intention" + reason,
                    <br/>] : []
            }
            const intRemoved = props.log.slice(0, props.log.indexOf(props.event) + 3).findLast(e => e.message.type === "IntentionRemoved" && e.message.event.intentionInfo.id === intention.id)
            explanation = intRemoved !== undefined ? [intRemoved] : []
        }

        let intentionInfo = "int-" + id
        if (result === "achieved") {
            type = "Goal Achieved";
            description = "Goal " + functor + " achieved through intention " + intentionInfo
        } else if (result === "failed") {
            type = "Goal Failed";
            description = "Goal " + functor
            if (intention) {
                description += " failed through intention" + intentionInfo
            } else {
                type = "Goal Dropped"
                description += " cannot be accomplished because there was no applicable plan"
            }
        }

        return (
            <Event type={type} description={description} info={[...parentDesire, info]}
                   timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN}
                   explanation={explanation}/>
        )
    }
}

export default GoalAchievedAndRemoved;