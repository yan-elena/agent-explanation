import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function ExecutedAction(props) {

    const type = "Executed action"
    const intentionInfo = props.event.message.event.intentionInfo
    const deed = props.event.message.event.deedInfo
    let description
    let info = "Type: "
    let intentionTrigger
    let intentionId
    let intention

    if (intentionInfo.value) {
        intentionId = intentionInfo.value.id
        intentionTrigger = intentionInfo.value.intendedMeansInfo[0] ? intentionInfo.value.intendedMeansInfo[0].trigger : (agentState.intention[intentionId] ? agentState.intention[intentionId] : "")
    } else {
        intentionTrigger = props.event.message.event.goalInfo.goalFunctor
        intentionId = Object.keys(agentState.intention).find(key => agentState.intention[key] === intentionTrigger)
    }

    switch (deed.type) {
        case "addBel":
            description = "I added belief "
            break;
        case "delBel":
            description = "I deleted belief "
            break;
        case "test":
            description = "I executed test goal "
            break;
        case "internalAction":
            description = "I executed internal action "
            break;
        case "constraint":
            description = "I evaluated expression "
            break;
        default:
            description = "I executed action "
            break;
    }

    intention = "intention " + intentionTrigger + "/" + intentionId
    description = description + deed.term + " because of " + intention
    info = info + deed.type

    if (deed.type !== "achieve") {
        return (
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp}
                   filter={props.filter}/>
        )
    }
}

export default ExecutedAction;