import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function NewBelief(props) {

    const eventType = "New Belief"
    const beliefEvent = props.event.message.event.beliefInfo
    const functor= beliefEvent.functor
    const belief = beliefEvent.literal
    const source = beliefEvent.source.value ? beliefEvent.source.value : ""
    let reason
    let info

    switch (String(source)) {
        case "self":
            reason = " because I noted it in my mind for future reference"
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

    const description = "I believe " + belief + reason

    return (
        <Event type={eventType} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
    )
}

export default NewBelief;