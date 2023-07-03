import React from "react";
import Event from "../../../Event";

function GoalRemoved(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default GoalRemoved;