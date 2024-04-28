import Event from "../Event";
import React from "react";
import {Level} from "../../../model/Level";

function SelectPlan(props) {

    const event = props.event.message

    return (
        <Event type={event.type} description={event.log} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN}/>
    )
}

export default SelectPlan;