import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function BeliefAdded(props) {
    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
        </div>
    )
}

export default BeliefAdded;