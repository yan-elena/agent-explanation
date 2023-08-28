import React from "react";
import Event from "../Event";

function BDIBeliefRemoved(props) {

    const type = "Belief Removed";
    const beliefEvent = props.event.message.event.beliefInfo
    const belief = beliefEvent.literal
    const description = "I no longer believe in " + belief
    // const source = beliefEvent.source.value ? beliefEvent.source.value : ""
    // let reason
    //
    // switch (String(source)) {
    //     case "self":
    //         reason = " because I noted it in my mind for future reference"
    //         break;
    //     case "percept":
    //         reason = " because I perceived it"
    //         break;
    //     case "":
    //         reason = ""
    //         break;
    //     default:
    //         reason = " because " + source + " told me"
    //         break;
    // }

    return (
        <Event type={type} description={description} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default BDIBeliefRemoved;