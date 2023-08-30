import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadLogPage from "./pages/UploadLogPage";
import AgentEventsPage from "./pages/AgentEventsPage";
import NavBar from "./component/NavBar";
import {useEffect, useState} from "react";

function App() {
    const navigate = useNavigate();
    const [files, setFiles] = useState(JSON.parse(sessionStorage.getItem('files')));
    const [selectedAgent, setSelectedAgent] = useState(JSON.parse(sessionStorage.getItem('selectedAgent')));

    useEffect(() => {
        sessionStorage.setItem("selectedAgent", JSON.stringify(selectedAgent));
    }, [selectedAgent]);

    useEffect(() => {
        sessionStorage.setItem("files", JSON.stringify(files));
    }, [files]);

    function setLogFiles(files) {
        setFiles(files);
        navigate("agents");
    }

    async function loadAgentLog(agent) {
        const file = Array.from(files).find(f => f.name === agent + ".json");
        let result = await new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = _ => resolve(fileReader.result);
            fileReader.readAsText(file);
        });

        setSelectedAgent({name: file.name.replace(".json", ""), log: JSON.parse(result.toString())})
    }

    return (
      <div className="flex-container">
          <NavBar/>
          <Routes className="content">
              <Route path="/agents" element={<HomePage files={files} loadAgentLog={loadAgentLog}/>}/>
              <Route path="/agents/:agentName/" element={<AgentEventsPage agent={selectedAgent} filter={""} level={"JASON"}/>}/>
              <Route path="/agents/:agentName/beliefs" element={<AgentEventsPage agent={selectedAgent} filter={"belief"} level={"BDI"}/>}/>
              <Route path="/agents/:agentName/desires" element={<AgentEventsPage agent={selectedAgent} filter={"desire"} level={"BDI"}/>}/>
              <Route path="/agents/:agentName/intentions" element={<AgentEventsPage agent={selectedAgent} filter={"intention"} level={"BDI"}/>}/>
              <Route path="/" exact element={<UploadLogPage setLogFiles={setLogFiles}/>}/>
          </Routes>
      </div>
    );
}

export default App;
