import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CoTransferAcceptUi-styles.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon';
import {bbvaCheckmark, bbvaPrint} from '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default';
import '@bbva-web-components/bbva-web-link/bbva-web-link';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<co-transfer-accept-ui></co-transfer-accept-ui>
```

##styling-doc

@customElement co-transfer-accept-ui
*/
export class CoTransferAcceptUi extends LitElement {
  static get is() {
    return 'co-transfer-accept-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('co-transfer-accept-ui-shared-styles')
    ];
  }

  _transferPanel(){
    return html`
      <div class="transfer-panel">
        <bbva-core-icon icon="${bbvaCheckmark()}" id="icono-check" size="56"></bbva-core-icon>
        <p id="tituloUno">Transferencia pendiente por aceptar</p>
        <br>
        <p id="strong-text">La persona que recibe el dinero debe aceptar la transferencia antes de 24 horas, de lo contrario el dinero regresará a tu cuenta BBVA.</p>
        <p>Recibirás un correo a nombre@email.com con la información de tu transferencia realizada.</p>
        <br>
        <bbva-web-button-default variant="primary" active="" id="continue-btn">Continuar</bbva-web-button-default>
        <br>
        _____
        <br>
        <bbva-web-link class="icono" id="print-link" href="" target="_blank" icon="${bbvaPrint()}">Imprimir comprobante</bbva-web-link>
      </div>
    `
  }

  _operationPanel(){
    return html`
      <div class="operation-panel">
        <img src="https://logos-marcas.com/wp-content/uploads/2021/03/BBVA-Logo.png"></img>
        <bbva-web-divider class="table-divider"></bbva-web-divider>

        <p id="operation-title">Operación en proceso</p>
        <p id="operation-value">$250.000</p>
        <p id="operation-date">10 de agosto del 2022, 12:45 p.m.</p>

        <bbva-web-divider class="table-divider"></bbva-web-divider>
        <table class="table-transfer">
          <tr>
            <td><strong>Tipo de transferencia</strong></td>
            <td>A celulares</td>
          </tr>
          <tr>
            <td></td>
            <td><strong>TransfiYa</strong></td>
          </tr>
        </table>
        <table class="table-transfer">
          <tr>
            <td><strong>Cuenta de origen</strong></td>
            <td>Cuenta ahorro</td>
          </tr>
          <tr>
            <td></td>
            <td><strong>*1234</strong></td>
          </tr>
        </table>
        <table class="table-transfer">
          <tr>
            <td><strong>Persona que recibe</strong></td>
            <td>Pepito Perez</td>
          </tr>
          <tr>
            <td></td>
            <td><strong>301 513 4333</strong></td>
          </tr>
        </table>
        <table class="table-transfer">
          <tr>
            <td><strong>CUS</strong></td>
            <td>00000000</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table class="table-transfer">
          <tr>
            <td><strong>Comisión</strong></td>
            <td>Sin costo</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
        <table class="table-transfer">
          <tr>
            <td><strong>GMF</strong></td>
            <td>Exento</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    `
  }


  // Define a template
  render() {
    return html`
      <div class="main-container">
        ${this._transferPanel()}
        ${this._operationPanel()}
      </div>
    `;
  }
}
