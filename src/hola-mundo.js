import { LitElement, html, property } from 'lit-element';

export class HolaMundo extends LitElement {

static get properties() {
    return {
        quien: { type:String}
    };
}

    render() {
        return html`
        <h4>componente hola-mundo</h4>
        <p>Hola ${this.quien} </p>
        `;
    }
}
customElements.define('hola-mundo', HolaMundo);