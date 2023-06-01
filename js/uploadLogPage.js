import {CustomHTMLElement} from "./customHTMLElement.js";

const uploadFileTemplate = document.createElement('template');
uploadFileTemplate.innerHTML = `
<div class="m-5 row d-flex justify-content-center align-items-center">
  <div class="col-1"></div>
  <div class="col-10 my-5" id="me">
      <label for="formFile" class="mx-5 mb-3 form-label">Upload the logging files in .json format generated for your agents</label>
      <input class="mx-5 form-control" type="file" id="formFile" accept=".json" multiple>
  </div>
  <div class="col-1"></div>
</div>
`

class UploadLogPage extends CustomHTMLElement {
    constructor() {
        super(uploadFileTemplate);
        // this.addEventListener('change', (e) => handleFiles(e))
    }

   connectedCallback() {
       super.connectedCallback();

       const fileInput = this.shadowRoot.querySelector("#formFile")

       fileInput.onchange = () => {
           const selectedFiles = [...fileInput.files];
           console.log(selectedFiles);
       }

   }
}
customElements.define('upload-file', UploadLogPage)