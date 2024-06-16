import React from "react";
import Event from "../Event";
import {Level} from "../../../model/Level";

function ActionExecuted(props) {
    const type = "Action Executed"
    if (props.event.message.type === "SendMessage") {
        const message = props.event.message.event.messageInfo
        const intendedMeansInfo = props.event.message.event.intentionInfo.intendedMeansInfo[0]
        const description = "Action send message " + message.message + " to " + message.receiver + " was executed following the intention int-" + intendedMeansInfo.id + "-" + intendedMeansInfo.trigger
        const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(intendedMeansInfo.trigger))]

        if (!intendedMeansInfo.trigger.includes("kqml")) {
            return (
                <Event type={"Executed action"} description={description} info={""} timestamp={props.event.timestamp}
                       filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
            )
        }
    } else {
        const deed = props.event.message.event.deedInfo
        const intention = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].plan.body.includes(deed.term))
        const intentionInfo = intention.message.event.intentionInfo
        const intentionId = intentionInfo.id
        const intentionTrigger = intentionInfo.intendedMeansInfo[0]
        const explanation = [intention]

        const int = "int-" + intentionId + "-" + intentionTrigger.plan.trigger
        const description = "Action " + deed.term + " executed following the intention " + int

        if (!int.includes("kqml") && deed.type !== "achieve" && !deed.type.includes("Bel")) {
            return (
                <Event type={type} description={description} timestamp={props.event.timestamp}
                       filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
            )
        }
    }
}

export default ActionExecuted;