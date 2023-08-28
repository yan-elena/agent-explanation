import React from "react";
import LogForm from "../component/LogForm";

function UploadLogPage(props) {
    return (
        <LogForm setLogFiles={props.setLogFiles}/>
    )
}

export default UploadLogPage;