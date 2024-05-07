import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function InternalActionFinished(props) {
    const type = "Internal Action Finished"
    const action = props.event.message.event.deedInfo
    const intention = props.event.message.event.intentionInfo.value
    let description = "Internal action " + action.term + " finished"
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && intention && e.message.event.goalInfo.goalFunctor === intention.trigger)
    const info = "Type: " + action.type + (intention ? ", Intention: " + intention.id + " " + intention.trigger : "")

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default InternalActionFinished;