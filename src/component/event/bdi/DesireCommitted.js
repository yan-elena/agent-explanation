import React from "react";
import Event from "../Event";
import {agentState, getIntentionReason} from "../../../model/agentState";

function DesireCommitted(props) {

    const type = "Desire committed";
    const desire = props.event.message.event.event
    const goal = props.log.slice(0, props.log.indexOf(props.event)).find(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === desire);
    const intention = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].trigger === desire);

    if (goal && intention) {
        const selectedPlan = props.event.message.event.selectedPlan
        const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""
        const body = selectedPlan.body ? "Plan body: " + selectedPlan.body : ""
        const im = intention.message.event.intentionInfo.intendedMeansInfo
        const id = intention.message.event.intentionInfo.id
        const description = "I committed to desire " + desire + context + ", and it became a new intention " + desire + "/" + id
        let parentDesire = []

        if (im.length > 0) {
            let reason = getIntentionReason(desire, intention.message.event.intentionInfo)
            parentDesire = reason ? ["Intention " + desire + "/" + id + " is an intention" + reason, <br/>] : []
        }

        if (agentState.intention[id]) {
            agentState.intention[id].push(desire)
        } else {
            agentState.intention[id] = [desire]
        }

        return (
            <Event type={type} description={description} info={[...parentDesire, body]}
                   timestamp={props.event.timestamp}
                   filter={props.filter}/>
        )
    }
}

export default DesireCommitted;