import React from "react";
import Event from "../../Event";

function NewDesire(props) {
    const type = props.event.message.type
    const functor = props.event.message.event.goalInfo.goalFunctor
    const state = props.event.message.event.goalInfo.goalStates
    const intention = props.event.message.event.intention.value

    if (type === "GoalCreated") {
        return (
            <div>
                <h5 className="fw-bold">New Desire {functor}</h5>
                <p className="text-muted fw-bold">I have a new desire {functor} because
                    {intention === null || !intention.intendedMeansInfo.length > 0 ? " it is an initial desire" : " it is a desire created from " + intention.intendedMeansInfo.slice(-1)[0].trigger}</p>
                <p className="text-muted my-1">State: {state}</p>
                <p className="text-muted my-1">Timestamp: {props.event.timestamp}</p>
            </div>
        )
    } else {
        //todo: beliefAdded, newSpeechActMessage, newSignal, newPercept
        return (
            <Event event={props.event}/>
        )
    }
}

export default NewDesire;