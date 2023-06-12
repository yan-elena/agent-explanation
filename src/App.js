import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadLogPage from "./pages/UploadLogPage";
import NavBar from "./component/NavBar";
import {useEffect, useState} from "react";

function App() {
    const navigate = useNavigate();
    // const [agents, setAgents] = useState(JSON.parse(sessionStorage.getItem('agents')));
    const [agents, setAgents] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // sessionStorage.setItem("agents", JSON.stringify(agents));
        if (files.length !== 0 && agents.length === Array.from(files).length) {
            navigate("/agents");
        }
    }, [agents, files, navigate]);

    function setLogFiles(files) {
        setAgents([]);
        setFiles(files);
        Array.from(files).forEach(async file => {
            let result = await new Promise((resolve) => {
                let fileReader = new FileReader();
                fileReader.onload = _ => resolve(fileReader.result);
                fileReader.readAsText(file);
            });

            console.log("setAgents " + file.name)
            setAgents(agents => ([
                ...agents,
                {name: file.name.replace(".json", ""), log: JSON.parse(result.toString())}
                ])
            );
        });
    }

    return (
      <div className="flex-container">
          <NavBar/>
          <Routes className="content">
            <Route path="/" element={<UploadLogPage setLogFiles={setLogFiles}/>}/>
            <Route path="/agents" element={<HomePage agents={agents}/>}/>
          </Routes>
      </div>
    );
}

export default App;
