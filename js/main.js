console.log(location.hash)

function getContent(fragmentId, callback){

    const pages = {
        'upload-log': '<upload-log/>',
        'agents': 'agents'
    };

    callback(pages[fragmentId]);
}

function loadContent(){

    const contentDiv = document.getElementById("content"),
        fragmentId = location.hash.substring(1);

    getContent(fragmentId, function (content) {
        contentDiv.innerHTML = content;
    });

}

if(!location.hash) {
    location.hash = "#upload-log";
}

loadContent();

window.addEventListener("hashchange", loadContent)