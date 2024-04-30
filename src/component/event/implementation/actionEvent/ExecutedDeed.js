import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function ExecutedDeed(props) {

    const deed = props.event.message.event.deedInfo
    const type = "Executed deed"
    let description = "Deed "  + deed.term + " executed"
    let info = "Type: " + deed.type
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.intention.value && props.event.message.event.intentionInfo.value && e.message.event.goalInfo.intention.value.id === props.event.message.event.intentionInfo.value.id)

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default ExecutedDeed;