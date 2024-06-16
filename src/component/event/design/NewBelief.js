import React from "react";
import Event from "../Event";
import {getCycleEvents} from "../../../model/agentState";
import {Level} from "../../../model/Level";

function NewBelief(props) {

    const beliefEvent = props.event.message.event.beliefInfo
    const functor= beliefEvent.functor
    const belief = beliefEvent.literal
    const source = beliefEvent.source.value ? beliefEvent.source.value : ""
    const cycleEvents = getCycleEvents(props.log, props.log.indexOf(props.event))
    const beliefDeed = cycleEvents.find(e => e.message.type === "ExecutedDeed" && e.message.event.deedInfo.type.includes("Bel") && e.message.event.deedInfo.term.includes(functor));
    let eventType = "New Belief"
    let description
    let reason = ""
    let intention

    switch (String(source)) {
        case "self":
            if (beliefDeed) {
                const intentionInfo = beliefDeed.message.event.intentionInfo.value
                if (intentionInfo) {
                    intention = intentionInfo.id + " " + intentionInfo.intendedMeansInfo[0].trigger
                } else {
                    const intentionEvent = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(belief)).message.event.intentionInfo;
                    intention = intentionEvent.id + " " + intentionEvent.intendedMeansInfo[0].trigger
                }
                reason = " from " + intention
            }
            break;
        case "percept":
            const percept = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "NewPercept" && e.message.event.perceptInfo.functor === belief)
            if (percept) {
                const p = percept.message.event.perceptInfo;
                reason = " from " + (p.artifactName ? " from " +  p.artifactName : "perception")
            } else {
                reason = ""
            }
            break;
        case "":
            reason = ""
            break;
        default:
            reason = " from " + source
            break;
    }

    let beliefRemoved = cycleEvents.find(e => e.message.type === "BeliefRemoved" && e.message.event.beliefInfo.functor === functor);
    if (beliefRemoved) {
        eventType = "Belief Updated"
        description = "Belief updated from " + beliefRemoved.message.event.beliefInfo.literal + " to " + belief
    }

    if (!description) {
        description = "New Belief " + belief + reason
    }

    return (
        <Event type={eventType} description={description} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN}/>
    )
}

export default NewBelief;