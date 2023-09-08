import React from "react";
import Event from "../Event";

function BDIBeliefRemoved(props) {

    const type = "Belief Removed";
    const beliefEvent = props.event.message.event.beliefInfo
    const belief = beliefEvent.literal
    const description = "I no longer believe in " + belief
    const beliefDeed = props.log[props.log.indexOf(props.event) + 3]
    const intention = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(belief));
    let reason

    if (intention) {
        const intentionInfo = intention.message.event.intentionInfo
        reason = " because of intention " + intentionInfo.intendedMeansInfo[0].trigger + "/" + intentionInfo.id
    }

    if (!(beliefDeed && beliefDeed.message.type === "ExecutedDeed" && beliefDeed.message.event.deedInfo.type === "delAddBel" && beliefDeed.message.event.deedInfo.term.includes(beliefEvent.functor))) {
        return (
            <Event type={type} description={description + reason} timestamp={props.event.timestamp} filter={props.filter}/>
        )
    }
}

export default BDIBeliefRemoved;