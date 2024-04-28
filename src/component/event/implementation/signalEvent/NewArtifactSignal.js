import React from "react";
import Event from "../../Event";
import {agentState} from "../../../../model/agentState";
import {Level} from "../../../../model/Level";

function NewArtifactSignal(props) {
    if (props.level === Level.IMPLEMENTATION) {
        return (
            <div>
                <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')}
                       description={props.event.message.log} timestamp={props.event.timestamp} filter={props.filter} log={props.log} level={Level.IMPLEMENTATION}/>
            </div>
        )
    } else {
        agentState.speechAct.signal.push(props.event.message.event.signalInfo.functor)
    }
}

export default NewArtifactSignal;