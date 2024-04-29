import Event from "../Event";
import React from "react";
import {Level} from "../../../model/Level";

function SelectPlan(props) {

    const event = props.event.message
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === event.event.event.split('[')[0])

    return (
        <Event type={event.type} description={event.log} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
    )
}

export default SelectPlan;