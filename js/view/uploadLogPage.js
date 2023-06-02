import {CustomHTMLElement} from "./customHTMLElement.js";

const uploadFileTemplate = document.createElement('template');
uploadFileTemplate.innerHTML = `
<form class="row p-5" action="#agents">
    <div class="col-1"></div>
    <div class="col-10">
      <div>
          <label for="formFile" class="mb-3 form-label">Upload the logging files in .json format generated for your agents:</label>
          <input class="form-control" type="file" id="formFile" accept=".json" multiple required lang="en">
      </div>
      
      <div class="col-10 mt-5" id="items"></div>
      
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <input id="continue" type="submit" class="btn btn-primary" value="Continue">
      </div>
    </div>
    <div class="col-1"></div>
</form>
`

class UploadLogPage extends CustomHTMLElement {
    constructor() {
        super(uploadFileTemplate);
    }

   connectedCallback() {
       super.connectedCallback();

       const fileInput = this.shadowRoot.querySelector("#formFile")

       if (fileInput != null) {
           fileInput.onchange = () => {
               const selectedFiles = [...fileInput.files];

               const items = this.shadowRoot.querySelector("#items");
               const text = document.createTextNode("Selected agents:");
               const list = document.createElement("ul");
               selectedFiles.forEach(f => {
                   const node = document.createElement("li");
                   const textNode = document.createTextNode(f.name.replace(".json", ""));
                   node.className = "list-group-item my-1";
                   node.appendChild(textNode);
                   list.appendChild(node);
               })
               items.appendChild(text);
               items.appendChild(list);

               notifyLogFiles(selectedFiles);
           }
       } else {
           location.reload();
       }
   }

   updateErrorMessage() {
    //todo: handle error message
    }

}

customElements.define('upload-log', UploadLogPage);