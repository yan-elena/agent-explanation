import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function ExternalActionTriggered(props) {
    const deed = props.event.message.event.action
    const type = "External Action Triggered"
    let description = "External action "  + deed.term + " triggered"
    let info = "Type: external action"
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.intention.value && e.message.event.goalInfo.intention.value.id === props.event.message.event.action.intention.id)

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default ExternalActionTriggered;