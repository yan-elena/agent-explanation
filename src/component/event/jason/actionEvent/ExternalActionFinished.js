import React from "react";
import Event from "../../../Event";

function ExternalActionFinished(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default ExternalActionFinished;