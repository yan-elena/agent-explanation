import React from "react";
import Event from "../../../Event";

function IntentionCreated(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default IntentionCreated;