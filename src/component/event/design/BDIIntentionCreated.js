import Event from "../Event";
import {Level} from "../../../model/Level";
import React from "react";

function BDIIntentionCreated(props) {
    const event = props.event
    const type = "Intention Created"
    const intention = event.message.event.intentionInfo
    const goal = intention.intendedMeansInfo[0].plan.trigger
    const id = "int-" + intention.id + "-" + goal
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.intention.value && e.message.event.goalInfo.intention.value.id === intention.id)
    const selectPlan = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "PlanSelected" && e.message.event.goalInfo.goalFunctor === goal)
    const description = "I have a new intention " + id

    if (selectPlan) {
        return (
            <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}
                   log={props.log} level={Level.DESIGN} explanation={explanation}/>
        )
    }
}

export default BDIIntentionCreated;