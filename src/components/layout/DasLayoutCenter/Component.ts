// create web component using lit-element
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Layout web component for content centered horizontally
 * and aligned to the top of the page
 */
@customElement('das-layout-center')
export default class DasLayoutCenter extends LitElement {
    static override styles = css`
        :host {
            display: grid; 
            grid-template-columns: 1fr 3fr 1fr; 
            grid-template-rows: 1.8fr; 
            gap: 0px 0px; 
            grid-template-areas: 
            ". content ."; 
        }
        slot { 
            display: grid;
            grid-area: content;
            justify-content: center;
            align-content: start;
        }
    `;

    override render() {
        return html`<slot></slot>`;
    }
}
