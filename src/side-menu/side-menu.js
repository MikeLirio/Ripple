import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

export default class SideMenu extends LitElement {
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
      <section id="side-menu">
      </section>
    `;
  }
}

customElements.define('side-menu', SideMenu);