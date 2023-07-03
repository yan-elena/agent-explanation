import React from "react";
import Event from "../../../Event";

function NewArtifactSignal(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default NewArtifactSignal;