import React from "react";
import Event from "../Event";

function FoundMean(props) {

    const type = "Found mean"
    const reason = props.event.message.event.reasonInfo.value
    const description = "I improve the means to pursue the intention " + props.event.message.event.goalInfo.goalFunctor + (reason ? " by selecting plan " + reason.terms.value : "")
    const info = "State: " + props.event.message.event.goalInfo.goalStates

    return (
        <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default FoundMean;