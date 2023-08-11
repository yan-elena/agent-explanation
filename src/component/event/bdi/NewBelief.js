import React from "react";
import Event from "../Event";

function NewBelief(props) {

    const type = props.event.message.type
    const eventType = "New Belief"
    let belief = ""
    let reason = ""

    if (type === "BeliefAdded") {
        belief = props.event.message.event.beliefInfo.literal
    } else if (type === "NewPercept") {
        belief = props.event.message.event.perceptInfo.functor
        reason = " because I perceived from " + props.event.message.event.perceptInfo.artifactName
    } else if (type === "NewSpeechActMessage") {
        const message = props.event.message.event.message
        belief = message.message
        reason = " because " + message.sender + " told me"
    }

    const description = "I believe " + belief + reason

    return (
        <Event type={eventType} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewBelief;