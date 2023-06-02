function notifyLogFiles(logFiles) {
    const view = document.querySelector('upload-log')
    model.setSelectedFiles(logFiles);
    //todo: check log format and update view if needed
    view.updateErrorMessage();
}