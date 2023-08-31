import React from "react";
import Event from "../Event";

function BDIBeliefRemoved(props) {

    const type = "Belief Removed";
    const beliefEvent = props.event.message.event.beliefInfo
    const belief = beliefEvent.literal
    const description = "I no longer believe in " + belief

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default BDIBeliefRemoved;