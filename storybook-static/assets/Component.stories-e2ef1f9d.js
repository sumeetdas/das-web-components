import{A as d,T as m,i as g,s as y,x as n}from"./lit-element-c57b4a79.js";import{e as N}from"./Component-7f8f5f83.js";import{e as x,i as v,t as w}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class u extends v{constructor(t){if(super(t),this.et=d,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this.ft=void 0,this.et=t;if(t===m)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}u.directiveName="unsafeHTML",u.resultType=1;const b=x(u);var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,S=(s,t,e,r)=>{for(var a=r>1?void 0:r?L(t,e):t,l=s.length-1,o;l>=0;l--)(o=s[l])&&(a=(r?o(t,e,a):o(a))||a);return r&&a&&D(t,e,a),a};let c=class extends y{getSlot(s){const t=this.querySelector(s),e=t==null?void 0:t.innerHTML;return t?n`
            <slot name="${t.tagName.toLowerCase()}">
                    ${b(e||"")}
            </slot>`:""}getHeaderSlot(){return this.getSlot("x-header")}getContentSlot(){return this.getSlot("x-content")}render(){return n`
        ${this.getHeaderSlot()}
        ${this.getContentSlot()}
        `}};c.styles=g`
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
    `;c=S([N("das-layout-2parts")],c);const P={title:"DasWebComponents/Layout/DasLayout2Parts",tags:["autodocs"],render:()=>n`
    <das-layout-2parts>
        <x-header>
            <das-layout-center>
                <h1>Main title</h1>
            </das-layout-center>
        </x-header>
        
        <x-content>
            <das-layout-center>
                <h3>DasLayoutCenter</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero in dui finibus, sit amet malesuada
                    nunc ultrices. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                    Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.

                    <button>Click me</button>
                </p>
            </das-layout-center>
        </x-content>
    </das-layout-2parts>
    `},i={};var f,p,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,P as default};
//# sourceMappingURL=Component.stories-e2ef1f9d.js.map
