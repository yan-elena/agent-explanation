import React from "react";
import Event from "../../Event";

function ExternalActionFinished(props) {
    const deed = props.event.message.event.deedInfo
    const type = "External Action Finished"
    let description = "External action "  + deed.term + " executed"
    let info = "Type: external " + deed.type

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
        </div>
    )
}

export default ExternalActionFinished;