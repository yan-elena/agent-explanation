import Event from "../Event";
import {Level} from "../../../model/Level";
import React from "react";

function NewIntention(props) {
    const event = props.event
    const type = "New Intention"
    const intention = event.message.event.intentionInfo
    const goal = intention.intendedMeansInfo[0].plan.trigger
    const id = "int-" + intention.id + "-" + goal
    const selectPlan = props.log.slice(props.log.indexOf(props.event)-5, props.log.indexOf(props.event)).findLast(e => e.message.type === "SelectPlanEvent" && e.message.event.selectedPlan.trigger.includes(goal))

    if (!goal.includes("kqml")) {
        if (selectPlan) {
            const description = "New intention " + id + " for goal " + goal + " using plan " + selectPlan.message.event.selectedPlan.label

            return (
                <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}
                       log={props.log} level={Level.DESIGN}/>
            )
        }
    }
}

export default NewIntention;