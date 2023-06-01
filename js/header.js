import {CustomHTMLElement} from "./customHTMLElement.js";

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<!-- As a heading -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Agent Explanation</span>
  </div>
</nav>
`

class Header extends CustomHTMLElement {
    constructor() {
        super(headerTemplate);
    }
}

customElements.define('header-component', Header);