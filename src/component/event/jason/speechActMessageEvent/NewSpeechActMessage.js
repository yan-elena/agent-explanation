import React from "react";
import Event from "../../../Event";

function NewSpeechActMessage(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default NewSpeechActMessage;