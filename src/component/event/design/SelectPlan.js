import Event from "../Event";
import React from "react";
import {Level} from "../../../model/Level";

function SelectPlan(props) {

    const event = props.event.message
    const type = "Select Plan"
    const selectPlan = event.event
    const trigger = selectPlan.event
    // const sources = selectPlan.sources
    //
    // if (sources.value) {
    //     if (sources.value.includes("self")) {
    //
    //     }
    // } todo: check the type, because not all events for select plan are goal.
    const goal = selectPlan.selectedPlan.trigger
    const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor.includes(selectPlan.event))]

    //description = description + goal + ") from: \n" + selectPlan.planOptions.map(p => "\t"+p.log).join("\n")
    const description = "I selected the plan @" + selectPlan.selectedPlan.label + " for " + (trigger.includes("error(no_applicable)") ? "the failure of" : "" ) + " goal " + goal

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
    )
}

export default SelectPlan;