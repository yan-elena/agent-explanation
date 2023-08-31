import React from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function DesireCommitted(props) {

    const type = "Desire committed";
    const desire = props.event.message.event.event
    const goal = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor === desire);
    const intention = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].trigger === desire);

    if (goal && intention) {
        const selectedPlan = props.event.message.event.selectedPlan
        const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""
        const body = selectedPlan.body ? "Plan body: " + selectedPlan.body : ""
        const im = intention.message.event.intentionInfo.intendedMeansInfo
        const id = intention.message.event.intentionInfo.id
        const description = "I committed to desire " + desire + context + ", and it became a new intention " + desire + "/" + id
        let parentDesire = []
        let reason

        if (im.length > 0) {
            const parent = im[0].trigger !== desire ? im[0].trigger : (im[1] ? im[1].trigger : "")

            if (parent) {
                if (agentState.speechAct.signal.includes(parent)) {
                    reason = " created from the signal " + parent
                } else if (agentState.speechAct.tell.includes(parent)) {
                    reason = " created from " + parent + " message"
                } else if (agentState.belief.self.includes(parent)) {
                    reason = " formed from the belief " + parent
                } else if (agentState.belief.percept.includes(parent)) {
                    reason = " created from the perception of " + parent
                } else if (agentState.intention[id].includes(parent)) {
                    reason = " created from intention " + parent + "/" + id
                }
                parentDesire = ["Intention " + desire + "/" + id + " is an intention" + reason, <br/>]
            }
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