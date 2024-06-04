import React from "react";
import Event from "../../Event";
import {Level} from "../../../../model/Level";

function SendMessage(props) {

    const intention = props.event.message.event.intentionInfo.intendedMeansInfo[0].trigger
    const explanation = [props.log.slice(0, props.log.indexOf(props.event)).findLast(e => e.message.type === "GoalCreated" && e.message.event.goalInfo.goalFunctor.includes(intention))]

    return (
        <div>
            <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')} description={props.event.message.log}
                   explanation={explanation} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
        </div>
    )
}

export default SendMessage;