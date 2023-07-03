import React from "react";
import Event from "../../../Event";

function SelectPlanEvent(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default SelectPlanEvent;