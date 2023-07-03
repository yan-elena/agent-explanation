import React from "react";
import Event from "../../../Event";

function SendMessage(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default SendMessage;