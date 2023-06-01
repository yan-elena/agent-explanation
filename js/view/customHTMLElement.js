export class CustomHTMLElement extends HTMLElement {
    constructor(template) {
        super();
        this.template = template;
    }

    connectedCallback() {
        const bootstrap = document.querySelector('link[href*="bootstrap"]');
        const shadowRoot = this.attachShadow({mode: 'open'});

        if (bootstrap) {
            shadowRoot.appendChild(bootstrap.cloneNode());
        }
        shadowRoot.appendChild(this.template.content);
    }
}