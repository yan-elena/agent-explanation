import Event from "../Event";
import React from "react";
import {Level} from "../../../model/Level";

function SelectPlan(props) {

    const event = props.event.message
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === event.event.event.split('[')[0])
    const selectPlan = event.event
    const trigger = selectPlan.event
    let description = "I am choosing the plan for "

    if (trigger.includes("error(no_applicable)")) {
        description += "the failure of "
    }

    description = description + trigger.split(')[')[0] + ") from: \n" + selectPlan.planOptions.map(p => "\t"+p.log).join("\n")
    description = description + "\n\nI selected the plan @" + selectPlan.selectedPlan.label

    return (
        <Event type={event.type} description={description} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
    )
}

export default SelectPlan;