import { LitElement, html } from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

class RippleApp extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <style>
        #main-page {
          display:        flex;
          flex-direction: row;
          min-height:     100vh;

          background-color: red;
        }

        #side-menu {
          flex: 1;
          
          background-color: grey;
        }
        
        #content-area {
          flex: 5;

          background-color: green;
        }
      </style>
      <section id="main-page">
        <section id="side-menu">
          <ul>
            <li><span>+</span>Create User</li>
            <li><span>+</span>Make a Payment</li>
            <li><span>+</span>Health Check</li>
          </ul>
        </section>
        <section id="content-area">
          <section id="header">Header</section>
          <section id="body"><h1>Body</h1></section>
          <section id="foot">Foot</section>
        </section>
      </section>
    `;
  }
}

customElements.define('ripple-app', RippleApp);
