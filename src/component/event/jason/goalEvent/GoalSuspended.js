import React from "react";
import Event from "../../../Event";

function GoalSuspended(props) {
    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} timestamp={props.event.timestamp} filter={props.filter}/>
        </div>
    )
}

export default GoalSuspended;