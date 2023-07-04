import React from "react";
import Event from "../../Event";

function NewDesire(props) {
    const type = props.event.message.type
    const eventType = "New Desire"
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalInfo.goalStates
    const intention = props.event.message.event.intention.value
    const info = "State: " + state

    let description = ""

    if (type === "GoalCreated") {
        description = "I have a new desire " + functor + " because " +
            (intention === null || !intention.intendedMeansInfo.length > 0 ? " it is an initial desire"
                : " it is a desire created from " + intention.intendedMeansInfo.slice(-1)[0].trigger)
    } else {
        //todo: beliefAdded, newSpeechActMessage, newSignal, newPercept
    }

    return (
        <Event type={eventType} description={description} info={info} timestamp={props.event.timestamp}/>
    )
}

export default NewDesire;