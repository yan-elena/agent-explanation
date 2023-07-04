import React from "react";
import Event from "../../Event";

function DesireCommitted(props) {

    const type = "Desire committed";
    const desire = props.event.message.event.intentionInfo.intendedMeansInfo.slice(-1)[0].trigger
    const description = "I committed to desire " + desire + ", and it became a new intention"

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default DesireCommitted;