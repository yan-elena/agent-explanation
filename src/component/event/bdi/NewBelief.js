import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function NewBelief(props) {

    const eventType = "New Belief"
    const beliefEvent = props.event.message.event.beliefInfo
    const functor= beliefEvent.functor
    const belief = beliefEvent.literal
    const source = beliefEvent.source.value ? beliefEvent.source.value : ""
    const beliefDeed = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "ExecutedDeed" && e.message.event.deedInfo.type.includes("Bel") && e.message.event.deedInfo.term === belief);

    let description
    let reason
    let info
    let intention

    switch (String(source)) {
        case "self":
            if (beliefDeed) {
                const intentionInfo = beliefDeed.message.event.intentionInfo.value
                if (intentionInfo) {
                    intention = intentionInfo.intendedMeansInfo[0].trigger + "/" + intentionInfo.id
                } else {
                    const intentionEvent = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(belief)).message.event.intentionInfo;
                    intention = intentionEvent.intendedMeansInfo[0].trigger + "/" + intentionEvent.id
                }
                reason = " because of intention " + intention
                if (beliefDeed.message.event.deedInfo.type === "delAddBel") {
                    description = "I updated belief " + functor + " to " + belief + " " + reason
                }
            } else {
                reason = " because I noted it in my mind for future reference"
            }
            agentState.belief.self.push(functor)
            break;
        case "percept":
            const percept = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "NewPercept" && e.message.event.perceptInfo.functor === belief).message.event.perceptInfo;
            reason = " because I perceived it from " +  percept.artifactName
            info = "Percept type: " + percept.perceptType
            agentState.belief.percept.push(functor)
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

    if (!description) {
        description = "I believe " + belief + reason
    }

    return (
        <Event type={eventType} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewBelief;