import React from "react";
import Event from "../../Event";

function IntentionCreated(props) {

    const im = props.event.message.event.intentionInfo.intendedMeansInfo
    const unifier = im[0].unifier

    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')}
                   description={props.event.message.log}
                   info={im.length > 0 && unifier && unifier !== "{}" ? "Unifier: " + unifier : ""}
                   timestamp={props.event.timestamp} filter={props.filter}/>
        </div>
    )
}

export default IntentionCreated;