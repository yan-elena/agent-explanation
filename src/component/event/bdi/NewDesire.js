import React from "react";
import Event from "../Event";

function NewDesire(props) {
    const eventType = "New Desire"
    const functor = props.event.message.event.goalInfo.goalFunctor
    const intention = props.event.message.event.goalInfo.intention.value
    const state = props.event.message.event.goalStates
    const info = "State: " + state

    let description = "I have a new desire " + functor

    if (intention) {
        let im = intention.intendedMeansInfo
        description = description + " because " + (!im.length > 0 ? " it is an initial desire" : " it is a desire created from " + im[0].trigger)
    } else {
        description = description + " because it is an initial desire"
    }

    return (
        <Event type={eventType} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewDesire;