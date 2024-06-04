import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function SelectPlanEvent(props) {
    const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === props.event.message.event.event.split("[")[0])]

    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default SelectPlanEvent;