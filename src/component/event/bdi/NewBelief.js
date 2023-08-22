import React from "react";
import Event from "../Event";

function NewBelief(props) {

    const eventType = "New Belief"
    const beliefEvent = props.event.message.event.beliefInfo
    const belief = beliefEvent.literal
    const source = beliefEvent.source.value ? beliefEvent.source.value : ""
    let reason

    switch (String(source)) {
        case "self":
            reason = " because I noted it in my mind for future reference"
            break;
        case "percept":
            reason = " because I perceived it"
            break;
        case "":
            reason = ""
            break;
        default:
            reason = " because " + source + " told me"
            break;
    }

    const description = "I believe " + belief + reason

    return (
        <Event type={eventType} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewBelief;