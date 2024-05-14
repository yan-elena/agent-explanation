import React from "react";
import Event from "../Event";
import {agentState, getIntentionReason} from "../../../model/agentState";
import {Level} from "../../../model/Level";

function DesireCommitted(props) {

    const type = "Desire committed";

    const intention = props.event.message.event
    const desire = intention.intentionInfo.trigger
    const selectedPlan = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "SelectPlanEvent" && e.message.event.selectedPlan.trigger === desire).message.event.selectedPlan
    const planSelected = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "PlanSelected" && e.message.event.goalInfo.goalFunctor === desire)

    const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === desire)

    if (selectedPlan && planSelected) {
        const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""
        const body = selectedPlan.body ? "Plan body: " + selectedPlan.body : ""
        const id = intention.intentionInfo.id
        const description = "I committed to desire " + desire + context + ", and it became a new intention " + id + " " + intention.intentionInfo.trigger

        let reason = getIntentionReason(desire, intention.intentionInfo)
        let parentDesire = reason ? ["Intention " + id + " " + desire + " is an intention " + reason, <br/>] : []

        if (agentState.intention[id]) {
            agentState.intention[id].push(desire)
        } else {
            agentState.intention[id] = [desire]
        }

        return (
            <div>
                <Event type={type} description={description} info={[...parentDesire, body]}
                       timestamp={props.event.timestamp}
                       filter={props.filter}
                       explanation={explanation}
                       log={props.log}
                       level={Level.DESIGN}/>
            </div>

        )
    }
}

export default DesireCommitted;