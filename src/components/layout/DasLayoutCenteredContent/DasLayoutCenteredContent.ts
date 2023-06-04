// create web component using lit-element
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * Layout web component for centered content using lit-element
 * with one slot for content
 */
@customElement('das-layout-center')
export default class DasLayoutCenteredContent extends LitElement {
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
        }
    `;
    getSlot(slotName: string): TemplateResult<1> | string {
        const slotElem = this.querySelector(slotName);
        const text = slotElem?.innerHTML;
        if (slotElem) {
            return html`
            <slot name="${slotElem.tagName.toLowerCase()}">
                    ${unsafeHTML(text || "")}
            </slot>`;
        }
        else {
            return "";
        }
    }

    override render() {
        return html`<slot></slot>`;
    }
}
