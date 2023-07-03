import React from "react";
import Event from "../../../Event";

function InternalActionFinished(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default InternalActionFinished;