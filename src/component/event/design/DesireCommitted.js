import React from "react";
import Event from "../Event";
import {Level} from "../../../model/Level";

function DesireCommitted(props) {


    const type = "Desire committed"
    const goalInfo = props.event.message.event.goalInfo
    const goal = goalInfo.goalFunctor
    const description = "I committed to desire " + goal + " and it becomes a goal"
    const source = goalInfo.source.value
    const intention = goalInfo.intention.value
    const explanation = props.event
    let parentDesire

    if (source && source.includes("self")) {
        if (intention && intention.intendedMeansInfo.length > 0) {
            parentDesire = "Goal " + goal + " is a goal created from " + intention.intendedMeansInfo[0].plan.trigger
        }
    }

    return (
        <Event type={type} description={description} info={parentDesire}
               timestamp={props.event.timestamp}
               filter={props.filter}
               explanation={explanation}
               log={props.log}
               level={Level.DESIGN}/>
    )


    // const type = "Desire committed";
    //
    // const intention = props.event.message.event
    // const desire = intention.intentionInfo.trigger
    // let selectedPlan = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "SelectPlanEvent" && e.message.event.selectedPlan.trigger === desire)
    // const planSelected = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "PlanSelected" && e.message.event.goalInfo.goalFunctor === desire)
    //
    // const explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === desire)
    //
    // if (intention && selectedPlan && planSelected) {
    //     selectedPlan = selectedPlan.message.event.selectedPlan
    //     const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""
    //     const body = selectedPlan.body ? "Plan body: " + selectedPlan.body : ""
    //     const id = intention.intentionInfo.id
    //     const description = "I committed to desire " + desire + context + ", and it became a new intention int-" + id + "-" + intention.intentionInfo.trigger
    //
    //     let reason = getIntentionReason(desire, intention.intentionInfo)
    //     let parentDesire = reason ? ["Intention int-" + id + "-" + desire + " is an intention " + reason, <br/>] : []
    //
    //     if (agentState.intention[id]) {
    //         agentState.intention[id].push(desire)
    //     } else {
    //         agentState.intention[id] = [desire]
    //     }
    //
    //     return (
    //         <Event type={type} description={description} info={[...parentDesire, body]}
    //                timestamp={props.event.timestamp}
    //                filter={props.filter}
    //                explanation={explanation}
    //                log={props.log}
    //                level={Level.DESIGN}/>
    //     )
    // }
}

export default DesireCommitted;