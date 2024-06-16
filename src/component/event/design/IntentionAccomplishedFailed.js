import Event from "../Event";
import {Level} from "../../../model/Level";
import React from "react";

function IntentionAccomplishedFailed(props) {
    const event = props.event.message
    const id = event.event.intentionInfo.id
    let description = "Intention "
    let type

    const goalRemoved = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalRemoved" && e.message.event.goalInfo.intention.value.id === id)
    const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "ExternalActionFinished")]

    if (goalRemoved) {
        const goal = goalRemoved.message.event.goalInfo.goalFunctor
        const im = goalRemoved.message.event.goalInfo.intention.value.intendedMeansInfo[0]
        description += "int-" + id + "-" + goal
        if (goalRemoved.message.event.result === "achieved") {
            type = "Intention Accomplished"
            description += " accomplished for goal "
        } else {
            type = "Intention Failed"
            description += "failed to accomplish goal "
        }
        description += goal + (im ? " using plan " + im.plan.label : "")

        return (
            <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}
                   log={props.log} level={Level.DESIGN} explanation={explanation} />
        )
    }
}

export default IntentionAccomplishedFailed;