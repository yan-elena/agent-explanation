import React from "react";
import Event from "../Event";
import {getCycleEvents} from "../../../model/agentState";
import {Level} from "../../../model/Level";

function BDIBeliefRemoved(props) {

    const type = "Belief Removed";
    const beliefEvent = props.event.message.event.beliefInfo
    const belief = beliefEvent.literal
    const description = "I no longer believe in " + belief
    const beliefDeed = props.log[props.log.indexOf(props.event) + 3]
    let beliefAdded = getCycleEvents(props.log, props.log.indexOf(props.event)).find(e => e.message.type === "BeliefAdded" && e.message.event.beliefInfo.functor === beliefEvent.functor);
    const intention = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(belief));
    let reason = ""

    if (intention) {
        const intentionInfo = intention.message.event.intentionInfo
        reason = " because of intention " + intentionInfo.id + " " + intentionInfo.intendedMeansInfo[0].trigger
    }

    if (!beliefAdded && !(beliefDeed && beliefDeed.message.type === "ExecutedDeed" && beliefDeed.message.event.deedInfo.type === "delAddBel" && beliefDeed.message.event.deedInfo.term.includes(beliefEvent.functor))) {
        return (
            <Event type={type} description={description + reason} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN}/>
        )
    }
}

export default BDIBeliefRemoved;