import React from "react";
import Event from "../Event";

function DesireCommitted(props) {

    const type = "Desire committed";
    const desire = props.event.message.event.intentionInfo.intendedMeansInfo.slice(-1)[0].trigger
    const selectedPlan = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "SelectPlanEvent" && e.message.event.event === desire).message.event.selectedPlan;

    const description = "I committed to desire " + desire + ", and it became a new intention"

    console.log(selectedPlan)
    console.log(props.event)
    console.log("------")
    //React.cloneElement(EventComponents[selectPlanEvent.message.type]["JASON"], {log: props.agent.log, event: selectPlanEvent, filter: props.filter})

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default DesireCommitted;