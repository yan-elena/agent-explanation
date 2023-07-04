import React from "react";
import Event from "../../Event";

function InternalActionFinished(props) {
    const type = "Internal Action Finished"
    const action = props.event.message.event.action
    let description = "Internal action " + action.term + " finished"
    let info = "Type: " + action.type

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
        </div>
    )
}

export default InternalActionFinished;