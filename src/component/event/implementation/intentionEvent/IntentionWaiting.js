import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function IntentionWaiting(props) {
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.intention.value && e.message.event.goalInfo.intention.value.id === props.event.message.event.intentionInfo.id)

    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default IntentionWaiting;