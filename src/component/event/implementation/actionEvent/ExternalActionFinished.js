import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function ExternalActionFinished(props) {
    const deed = props.event.message.event.deedInfo
    const type = "External Action Finished"
    let description = "External action "  + deed.term + " executed"
    let info = "Type: external " + deed.type
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.intention.value && e.message.event.goalInfo.intention.value.id === props.event.message.event.intentionInfo.value.id)

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default ExternalActionFinished;