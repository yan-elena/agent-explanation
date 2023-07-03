import React from "react";
import Event from "../../../Event";

function PlanAdded(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default PlanAdded;