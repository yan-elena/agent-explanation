import React from "react";
import Event from "../../../Event";

function GoalCreated(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default GoalCreated;