import Event from "../Event";
import React from "react";
import {Level} from "../../../model/Level";

function SelectPlan(props) {

    const event = props.event.message
    const type = "Select Plan"
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === event.event.event.split('[')[0])
    const selectPlan = event.event
    const trigger = selectPlan.event
    let description = "I am choosing the plan for "
    const goal = trigger.split(')[')[0]

    if (trigger.includes("error(no_applicable)")) {
        description += "the failure of "
    }

    description = description + goal + ") from: \n" + selectPlan.planOptions.map(p => "\t"+p.log).join("\n") //todo plan selected [plan-name] for goal [goal]
    description = description + "\n\nI selected the plan @" + selectPlan.selectedPlan.label

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
    )
}

export default SelectPlan;