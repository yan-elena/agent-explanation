import React from "react";
import Event from "../Event";

function ExecutedAction(props) {

    const type = "Executed action"
    let description = "I executed action "
    let info = "Type: "
    const intentionInfo = props.event.message.event.intentionInfo
    const intention =  "intention " + (intentionInfo.intendedMeansInfo[0] ? intentionInfo.intendedMeansInfo[0].trigger + "/" +  intentionInfo.id : intentionInfo.id)
    let reason = " because of " + intention

    if (props.event.message.type === "InternalActionFinished") {
        const action = props.event.message.event.action
        description = description + action.term
        info = info + action.type
    } else {
        const deed = props.event.message.event.deedInfo
        if (deed.type === "achieve") {
            description = "I am executing my desire " + deed.term //todo
        } else {
            description = description + deed.term
        }
        info = info + (type === "ExternalActionFinished" ? "external " : "") + deed.type
    }

    return (
        <Event type={type} description={description + reason} info={info} timestamp={props.event.timestamp}
               filter={props.filter}/>
    )
}

export default ExecutedAction;