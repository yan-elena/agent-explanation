import React from "react";
import Event from "../../Event";
import {agentState} from "../../../../model/agentState";
import {Level} from "../../../../model/Level";

function NewSpeechActMessage(props) {

    if (props.level === Level.IMPLEMENTATION) {
        return (
            <div>
                <Event type={props.event.message.type.replace(/\B([A-Z])\B/g, ' $1')}
                       description={props.event.message.log} timestamp={props.event.timestamp} filter={props.filter}/>
            </div>
        )
    } else {
        const speechActEvent = props.event.message.event.message
        const message = speechActEvent.message
        switch (speechActEvent.type) {
            case "achieve":
                agentState.speechAct.achieve.push(message)
                break
            case "tell":
                agentState.speechAct.tell.push(message)
                break
            case "signal":
                agentState.speechAct.signal.push(message)
                break
            default:
                break;

        }
    }
}

export default NewSpeechActMessage;