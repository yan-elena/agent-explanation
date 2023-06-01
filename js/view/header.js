import {CustomHTMLElement} from "./customHTMLElement.js";

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a href="#upload-log" class="navbar-brand mb-0 h1">Agent Explanation</a>
  </div>
</nav>
`

class Header extends CustomHTMLElement {
    constructor() {
        super(headerTemplate);
    }
}

customElements.define('header-component', Header);