import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function IntentionCreated(props) {

    const im = props.event.message.event.intentionInfo.intendedMeansInfo
    const unifier = im[0].unifier
    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === props.event.message.event.intentionInfo.trigger)

    if (props.event.message.event.intentionInfo.state === "undefined") {
        return (
            <div>
                <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')}
                    description={props.event.message.log}
                    info={im.length > 0 && unifier && unifier !== "{}" ? "Unifier: " + unifier : ""}
                    timestamp={props.event.timestamp} filter={props.filter}
                    log={props.log}
                    level={Level.IMPLEMENTATION}
                    explanation={explanation}/>
            </div>
        )
    }
}

export default IntentionCreated;