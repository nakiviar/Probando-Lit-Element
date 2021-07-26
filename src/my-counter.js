import { LitElement, html } from 'lit-element';

/*
THEME COBALT2
Font: Operator Mono
*/

export class MyCounter extends LitElement {


static get properties() {
    return {
    counter:{Number}
    };
}
// para inicializar las propiedades se inicializan en el constructor

constructor() {
    super(); //invoca el constructor del objeto padre
    this.counter=0;  //inicializa la propiedad counter
}

    render() {
        return html`

        <style>
        div {
            border: 1px solid #ddd;
        }
        .x {
            background-color:red;
            color:white;
        }
        </style>

        <h4>componente my-counter</h4>
        <div class="x">llevas ${this.counter} clicks!! </div>
        <div>
        <button @click="${this.incrementar}">+</button>
        </div>
        <div>
        <button @click="${this.decrementar}">-</button>
        </div>
        `;
    }

    //metodo incrementar
    incrementar(){
        this.counter++;
    }
    //metodo decrementar
    decrementar(){
        this.counter--;
    }
}
customElements.define('my-counter', MyCounter);