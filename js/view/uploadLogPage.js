import {CustomHTMLElement} from "./customHTMLElement.js";

const uploadFileTemplate = document.createElement('template');
uploadFileTemplate.innerHTML = `
<div class="col-1"></div>
<div class="m-5 col-10 row d-flex justify-content-center align-items-center">
  <div>
      <label for="formFile" class="mx-5 mb-3 form-label">Upload the logging files in .json format generated for your agents:</label>
      <input class="mx-5 form-control" type="file" id="formFile" accept=".json" multiple>
  </div>
  
  <div class="mt-5 d-flex justify-content-center align-items-center">
    <a href="#agents" id="continue" type="button" class="btn btn-primary">Continue</a>
  </div>
</div>
<div class="col-1"></div>
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
               console.log(selectedFiles);
           }
       } else {
           location.reload()
       }
   }


}
customElements.define('upload-log', UploadLogPage)