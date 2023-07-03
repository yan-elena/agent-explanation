import React from "react";
import Event from "../../../Event";

function NewAgentSignal(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default NewAgentSignal;