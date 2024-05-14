import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function GoalCreated(props) {
    const type = "Goal Created"
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalStates
    const info = "State: " + state

    let description = "Goal " + functor + " created"
    const intention = props.event.message.event.goalInfo.intention.value
    let explanation
    if (intention) {
        explanation = props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && intention.intendedMeansInfo[0] && e.message.event.goalInfo.goalFunctor.split("(")[0] === intention.intendedMeansInfo[0].trigger)
        description += " from " + intention.trigger
    }

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION} explanation={explanation}/>
        </div>
    )
}

export default GoalCreated;