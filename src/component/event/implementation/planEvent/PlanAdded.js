import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function PlanAdded(props) {

    const body = props.event.message.event.planInfo.body

    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} info={body ? "Plan body: " + body : ""} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
        </div>
    )
}

export default PlanAdded;