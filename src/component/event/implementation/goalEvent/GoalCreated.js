import React from "react";
import Event from "../../Event";

function GoalCreated(props) {
    const type = "Goal Created"
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalStates
    // const intention = props.event.message.event.intention.value
    const info = "State: " + state

    let description = "Goal " + functor + " created"

    return (
        <div>
            <Event type={type} description={description} info={info} timestamp={props.event.timestamp} filter={props.filter}/>
        </div>
    )
}

export default GoalCreated;