// create web component using lit-element
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * Layout web component using lit-element with default slot -
 * to display content in the center of horizontal layout
 */
@customElement('das-hlayout-center')
export default class DasHorizontalLayoutCentered extends LitElement {
    static override styles = css`
        :host {
            display: grid; 
            grid-template-columns: 1fr 3fr 1fr; 
            /*grid-template-rows: 1.8fr;*/ 
            gap: 0px 0px; 
            grid-template-areas: 
            ". content ."; 
        }
        slot { 
            display: grid;
            grid-area: content;
        }
    `;

    override render() {
        return html`<slot/>`;
    }
}

