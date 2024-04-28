import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function ExecutedDeed(props) {

    const deed = props.event.message.event.deedInfo
    const type = "Executed deed"
    let description = "Deed "  + deed.term + " executed"
    let info = "Type: " + deed.type

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
        </div>
    )
}

export default ExecutedDeed;