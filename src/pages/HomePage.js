import React from "react";
import Agent from "../component/Agent";

function HomePage(props) {

    return (
        <div>
            {Array.from(props.agents).map(agent => (
                <Agent name={agent.name} log={agent.log} key={agent.name}/>
            ))}
        </div>
    )
}

export default HomePage;