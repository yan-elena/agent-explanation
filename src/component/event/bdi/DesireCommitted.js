import React from "react";
import Event from "../Event";

function DesireCommitted(props) { //todo plans

    const type = "Desire committed";
    const im = props.event.message.event.intentionInfo.intendedMeansInfo
    const desire = im[0].trigger
    const parentDesire = im[1] ? "Intention " + props.event.message.event.intentionInfo.id + ": " + desire + " is an intention created from the intention " + im[1].trigger : ""
    const selectedPlan = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "SelectPlanEvent" && e.message.event.event === desire).message.event.selectedPlan;
    const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""

    const description = "I committed to desire " + desire + context + ", and it became a new intention"

    return (
        <Event type={type} description={description} info={parentDesire} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default DesireCommitted;