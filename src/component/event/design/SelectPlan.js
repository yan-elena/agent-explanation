import Event from "../Event";
import React from "react";

function SelectPlan(props) {

    const event = props.event.message

    return (
        <Event type={event.type} description={event.log} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default SelectPlan;