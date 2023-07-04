import React from "react";
import Event from "../../Event";

function BDIBeliefRemoved(props) {

    const type = "Belief Removed";
    const description = "I no longer believe in " + props.event.message.event.beliefInfo.literal

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp}/>
    )
}

export default BDIBeliefRemoved;