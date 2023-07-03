import React from "react";
import Event from "../../../Event";

function PlanSelected(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default PlanSelected;