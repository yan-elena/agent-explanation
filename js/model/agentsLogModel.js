class AgentsLogModel {

    agentsLog;
    reader;

    constructor() {
        this.agentsLog = [];
        this.reader = new FileReader();
        this.reader.onload = function () {
            model.addAgentLog(JSON.parse(model.reader.result))
        }
    }

    setSelectedFiles(files) {
        files.forEach(file => {
            model.reader.readAsText(file);
        })
    }

    addAgentLog(log) {
        this.agentsLog.push(log)
    }
}

const model = new AgentsLogModel();