import React from "react";
import Event from "../Event";
import {Level} from "../../../model/Level";

function NewGoal(props) {
    const eventType = "New Goal"
    const goalInfo = props.event.message.event.goalInfo
    const functor = goalInfo.goalFunctor
    const intention = goalInfo.intention.value
    const state = props.event.message.event.goalStates
    const source = goalInfo.source.value
    const info = "State: " + state

    if (!functor.includes("kqml")) {
        let description = "New goal adopted " + functor
        let reason = ""
        let explanation = []

        if (source) {
            if (source.includes("self")) {
                if (intention) {
                    let im = intention.intendedMeansInfo
                    if (im.length > 0) {
                        const parent = im[0].plan.trigger
                        const type = im[0].type

                        if (type === "belief") {
                            reason = " from " + parent
                        } else if (type === "achieve") {
                            explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor.includes(im[0].trigger))]
                            reason = " from " + parent
                        }
                    }
                }
            }
            // else { //speech act message
            //     const speechAct = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "NewSpeechActMessage" && e.message.event.message.sender === source[0] && e.message.event.message.message === goalInfo.goalFunctor)
            //     if (speechAct) {
            //         reason = " because I received a " + speechAct.message.event.message.type + " message " + speechAct.message.event.message.message + " from the agent " + speechAct.message.event.message.sender
            //     }
            // }
        }

        return (
            <Event type={eventType} description={description + reason} info={info} timestamp={props.event.timestamp}
                   filter={props.filter} log={props.log} level={Level.DESIGN} explanation={explanation}/>
        )
    }
}

export default NewGoal;