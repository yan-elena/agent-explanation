import {Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadLogPage from "./pages/UploadLogPage";
import NavBar from "./component/NavBar";
import {useEffect, useState} from "react";

function App() {
    const navigate = useNavigate();
    const [logFiles, setLogFiles] = useState(JSON.parse(sessionStorage.getItem('logFiles')));

    useEffect(() => {
        sessionStorage.setItem("logFiles", JSON.stringify(logFiles));
    }, [logFiles]);

    function updateLogFiles(files) {
        console.log("App: " + files);
        setLogFiles(files);
        navigate("/agents");
    }

    return (
      <div className="flex-container">
          <NavBar/>
          <Routes className="content">
            <Route path="/" element={<UploadLogPage setLogFiles={updateLogFiles}/>}/>
            <Route path="/agents" element={<HomePage/>}/>
          </Routes>
      </div>
    );
}

export default App;
