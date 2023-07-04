import React from "react";
import Event from "../../../Event";

function ReasoningCycleStarted(props) {
    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} timestamp={props.event.timestamp}/>
        </div>
    )
}

export default ReasoningCycleStarted;