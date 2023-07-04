import React from "react";
import Event from "../../Event";

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
        reason = " because " + message.sender + " told"
    } else if (type === "NewArtifactSignal") {
        belief = props.event.message.event.signalInfo.functor
        reason = " because artifact " + props.event.message.event.signalInfo.artifactName + " sent me a signal"
    } else if (type === "NewAgentSignal") {
        belief = props.event.message.event.signalInfo.functor
        reason = " because artifact " + props.event.message.event.signalInfo.source + " sent me a signal"
    }

    const description = "I believe " + belief + reason

    return (
        <Event type={eventType} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewBelief;