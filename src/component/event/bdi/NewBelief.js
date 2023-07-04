import React from "react";

function NewBelief(props) {

    const type = props.event.message.type
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

    return (
        <div>
            <h5 className="fw-bold">New Belief</h5>
            <p className="text-muted fw-bold">I believe {belief + reason}</p>
            <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
        </div>
    )
}

export default NewBelief;