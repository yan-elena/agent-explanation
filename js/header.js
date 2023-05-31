const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<!-- As a heading -->
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Agent Explanation</span>
  </div>
</nav>
`

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const shadowRoot = this.attachShadow({mode: 'open'});

        if (bootstrap) {
            shadowRoot.appendChild(bootstrap.cloneNode());
        }
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);