import React from "react";
import Event from "../Event";
import {agentState, getCycleEvents} from "../../../model/agentState";
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
    let reason
    let info
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
                reason = " because of intention " + intention
            } else {
                reason = " because I noted it in my mind for future reference"
            }
            agentState.belief.self.push(functor)
            break;
        case "percept":
            const percept = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "NewPercept" && e.message.event.perceptInfo.functor === belief)
            if (percept) {
                const p = percept.message.event.perceptInfo;
                reason = " because I perceived it" + (p.artifactName ? " from " +  p.artifactName : "")
                info = p.perceptType ? "Percept type: " + p.perceptType : ""
                agentState.belief.percept.push(functor)
            } else {
                reason = ""
            }
            break;
        case "":
            reason = ""
            break;
        default:
            reason = " because " + source + " told me"
            if (agentState.belief.others[source]) {
                agentState.belief.others[source].push(functor)
            } else {
                agentState.belief.others[source] = [functor]
            }
            break;
    }

    let beliefRemoved = cycleEvents.find(e => e.message.type === "BeliefRemoved" && e.message.event.beliefInfo.functor === functor);
    if (beliefRemoved) {
        eventType = "Belief Updated"
        description = "I updated the belief " + beliefRemoved.message.event.beliefInfo.literal + " to " + belief + " " + reason
    }

    if (!description) {
        description = "I believe " + belief + reason
    }

    return (
        <Event type={eventType} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.DESIGN}/>
    )
}

export default NewBelief;