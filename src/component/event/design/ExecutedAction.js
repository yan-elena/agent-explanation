import React from "react";
import Event from "../Event";
import {Level} from "../../../model/Level";

function ExecutedAction(props) {
    const type = "Executed action"
    if (props.event.message.type === "SendMessage") {
        const message = props.event.message.event.messageInfo
        const description = "I sent a " + message.type + " message to " + message.receiver + ": " + message.message
        const intention = props.event.message.event.intentionInfo.intendedMeansInfo[0].trigger
        const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor.includes(intention))]

        return (
            <Event type={"Executed action"} description={description} info={""} timestamp={props.event.timestamp}
                   filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
        )
    } else {
        const deed = props.event.message.event.deedInfo
        let description
        let info = "Type: "
        const intentionInfo = props.event.message.event.intentionInfo.value ? props.event.message.event.intentionInfo.value : props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(deed.term)).message.event.intentionInfo
        const intentionId = intentionInfo.id
        const intentionTrigger = intentionInfo.intendedMeansInfo[0]
        //const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.intention.value && e.message.event.goalInfo.intention.value.id === intentionId)
        const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor.includes(intentionTrigger.trigger))]

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

        const intention = "intention int-" + intentionId + "-" + intentionTrigger.plan.trigger
        description = description + deed.term + " because of " + intention
        info = info + deed.type

        if (deed.type !== "achieve" && !deed.type.includes("Bel")) {
            return (
                <Event type={type} description={description} info={info} timestamp={props.event.timestamp}
                       filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
            )
        }
    }
}

export default ExecutedAction;