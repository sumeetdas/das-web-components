// create web component using lit-element
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * Layout web component using lit-element with two slots -
 * one for header and one for content
 */
@customElement('das-layout-2parts')
export default class DasLayout2Parts extends LitElement {
    static override styles = css`
        :host {
            display: grid;
            height: 100vh; 
            grid-template-columns: 1fr;
            grid-template-rows: 0.2fr 1.8fr;
            gap: 0px 0px;
            grid-auto-flow: row;
            grid-template-areas:
              "header"
              "content";
        }
        slot[name="x-header"] { 
            display: grid;
            grid-area: header;
        }
        slot[name="x-content"] { 
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

    getHeaderSlot(): TemplateResult<1> | string {
        return this.getSlot("x-header");
    }

    getContentSlot(): TemplateResult<1> | string {
        return this.getSlot("x-content");
    }

    override render() {
        return html`
        ${this.getHeaderSlot()}
        ${this.getContentSlot()}
        `;
    }
}

