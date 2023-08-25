import React, {useEffect, useState} from "react";
import Event from "../Event";
import {agentState} from "../../../model/agentState";

function DesireCommitted(props) { //todo test goal

    const type = "Desire committed";
    const desire = props.event.message.event.event
    const selectedPlan = props.event.message.event.selectedPlan
    const context = selectedPlan.context ? " because I believe " + selectedPlan.context.replace("&", "and").replace("|", "or") : ""
    const body = "Plan body: " + selectedPlan.body
    const [updated, setUpdated] = useState(false)

    const intention = props.log.slice(props.log.indexOf(props.event)).find(e => e.message.type === "IntentionCreated" && e.message.event.intentionInfo.intendedMeansInfo[0].trigger === desire);
    const im = intention.message.event.intentionInfo.intendedMeansInfo
    const id = intention.message.event.intentionInfo.id
    const parentDesire = im[1] ? ["Intention " + id + ": " + desire + " is an intention created from the intention " + im[1].trigger, <br/>] : []
    const description = "I committed to desire " + desire + context + ", and it became a new intention"

    useEffect(() => {
        const i = desire + "/" + id
        if (!agentState.intention.includes(i)) {
            agentState.intention.push(i)
            setUpdated(true)
        }
    }, [])

    if (updated) {
        return (
            <Event type={type} description={description} info={[...parentDesire, body]} timestamp={props.event.timestamp}
                   filter={props.filter}/>
        )
    }
}

export default DesireCommitted;