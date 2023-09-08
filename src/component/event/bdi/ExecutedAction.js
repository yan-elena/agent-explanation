import React from "react";
import Event from "../Event";

function ExecutedAction(props) {

    const type = "Executed action"
    const intentionInfo = props.event.message.event.intentionInfo.value
    const deed = props.event.message.event.deedInfo
    let description
    let info = "Type: "
    let intentionTrigger
    let intentionId
    let intention

    if (intentionInfo) {
        intentionId = intentionInfo.id
        intentionTrigger = intentionInfo.intendedMeansInfo[0].trigger
    } else {
        const intention = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(deed.term)).message.event.intentionInfo;
        intentionId = intention.id
        intentionTrigger = intention.intendedMeansInfo[0].trigger
    }

    switch (deed.type) {
        case "addBel":
            description = "I believe "
            break;
        case "delBel":
            description = "I no longer believe in "
            break;
        case "delAddBel":
            description = "I updated belief "
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

    if (deed.type !== "achieve" && !deed.type.includes("Bel")) {
        return (
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp}
                   filter={props.filter}/>
        )
    }
}

export default ExecutedAction;