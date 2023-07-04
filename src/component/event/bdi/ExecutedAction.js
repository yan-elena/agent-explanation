import React from "react";
import Event from "../../Event";

function ExecutedAction(props) {

    const type = "Executed action"
    let description = "I executed action "
    let info = "Type: "

    if (props.event.message.type === "InternalActionFinished") {
        const action = props.event.message.event.action
        description = description + action.term
        info = info + action.type
    } else {
        const deed = props.event.message.event.deedInfo
        description = description + deed.term
        info = info + (type === "ExternalActionFinished" ? "external " : "") + deed.type
    }

    return (
        <Event type={type} description={description} info={info} timestamp={props.event.timestamp}/>
    )
}

export default ExecutedAction;