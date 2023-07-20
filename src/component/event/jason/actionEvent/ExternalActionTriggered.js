import React from "react";
import Event from "../../Event";

function ExternalActionTriggered(props) {
    const deed = props.event.message.event.action
    const type = "External Action Triggered"
    let description = "External action "  + deed.term + " triggered"
    let info = "Type: external action"

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
        </div>
    )
}

export default ExternalActionTriggered;