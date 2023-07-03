import React from "react";
import Event from "../../../Event";

function ExternalActionTriggered(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default ExternalActionTriggered;