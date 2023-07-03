import React from "react";
import Event from "../../../Event";

function MailBoxMessages(props) {
    return (
        <div>
            <Event event={props.event}/>
        </div>
    )
}

export default MailBoxMessages;