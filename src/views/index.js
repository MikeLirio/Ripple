import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export default class MainContainer extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <style>
      </style>
      <section id="main-container">
        <h1>Index: Hello WOrkd</h1>
      </section>
    `;
  }
}

customElements.define('main-container', MainContainer);