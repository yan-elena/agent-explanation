import React from "react";
import Event from "../Event";
import {agentState, getIntentionReason} from "../../../model/agentState";

function DesireCommitted(props) {

    const type = "Desire committed";

    const intention = props.event.message.event
    const desire = intention.intentionInfo.intendedMeansInfo[0].plan.trigger
    const selectedPlan = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "SelectPlanEvent" && e.message.event.selectedPlan.trigger === desire)
    const planSelected = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "PlanSelected" && e.message.event.goalInfo.goalFunctor === desire)

    if (selectedPlan && planSelected) {
        const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""
        const body = selectedPlan.body ? "Plan body: " + selectedPlan.body : ""
        const im = intention.intentionInfo.intendedMeansInfo
        const id = intention.intentionInfo.id
        const description = "I committed to desire " + desire + context + ", and it became a new intention " + id + " " + im[0].trigger

        let reason = getIntentionReason(desire, intention.intentionInfo)
        let parentDesire = reason ? ["Intention " + id + " " + desire + " is an intention" + reason, <br/>] : []

        if (agentState.intention[id]) {
            agentState.intention[id].push(desire)
        } else {
            agentState.intention[id] = [desire]
        }

        return (
            <div>
                <Event type={type} description={description} info={[...parentDesire, body]}
                       timestamp={props.event.timestamp}
                       filter={props.filter}/>
            </div>

        )
    }
}

export default DesireCommitted;