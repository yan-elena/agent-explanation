import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function PlanSelected(props) {

    const type = "Plan Selected"
    const description = "Plan " + props.event.message.event.goalInfo.goalFunctor + " selected"
    const info = "State: " + props.event.message.event.goalStates

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
        </div>
    )
}

export default PlanSelected;