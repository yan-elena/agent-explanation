import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadLogPage from "./pages/UploadLogPage";
import AgentEventsPage from "./pages/AgentEventsPage";
import NavBar from "./component/NavBar";
import {useState} from "react";

function App() {
    const navigate = useNavigate();
    // const [agents, setAgents] = useState(JSON.parse(sessionStorage.getItem('agents')));
    // const [agents, setAgents] = useState([]);
    const [files, setFiles] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState(null);

    // useEffect(() => {
    //     // sessionStorage.setItem("agents", JSON.stringify(agents));
    //
    // }, [navigate, selectedAgent]);

    function setLogFiles(files) {
        // setAgents([]);
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
        console.log({name: file.name.replace(".json", ""), log: JSON.parse(result.toString())})
    }

    return (
      <div className="flex-container">
          <NavBar/>
          <Routes className="content">
              <Route path="/agents" element={<HomePage files={files} loadAgentLog={loadAgentLog}/>}/>
              <Route path="/agents/:agentName/" element={<AgentEventsPage agent={selectedAgent}/>}/>
              <Route path="/" exact element={<UploadLogPage setLogFiles={setLogFiles}/>}/>
          </Routes>
      </div>
    );
}

export default App;
