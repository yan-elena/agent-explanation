import React from "react";
import Event from "../../../Event";

function SelectedMessage(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default SelectedMessage;