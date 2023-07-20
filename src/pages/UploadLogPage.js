import React from "react";
import LogForm from "../component/LogForm";

function UploadLogPage(props) {
    return (
        // <p>Upload Log Page</p>
        <LogForm setLogFiles={props.setLogFiles}/>
    )
}

export default UploadLogPage;