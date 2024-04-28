import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function GoalSuspended(props) {

    const info = "State: " + props.event.message.event.goalStates

    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
        </div>
    )
}

export default GoalSuspended;