import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function PlanSelected(props) {

    const type = "Plan Selected"
    const description = "Plan " + props.event.message.event.goalInfo.goalFunctor + " selected"
    const info = "State: " + props.event.message.event.goalStates
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === props.event.message.event.goalInfo.goalFunctor)

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default PlanSelected;