import{i as d,s as p,x as f}from"./lit-element-c57b4a79.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=t=>e=>typeof e=="function"?((s,n)=>(customElements.define(s,n),n))(t,e):((s,n)=>{const{kind:r,elements:o}=n;return{kind:r,elements:o,finisher(l){customElements.define(s,l)}}})(t,e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i;((i=window.HTMLSlotElement)===null||i===void 0?void 0:i.prototype.assignedElements)!=null;var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=(t,e,s,n)=>{for(var r=n>1?void 0:n?u(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(n?l(e,s,r):l(r))||r);return n&&r&&m(e,s,r),r};let a=class extends p{render(){return f`<slot></slot>`}};a.styles=d`
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
    `;a=g([c("das-layout-center")],a);export{c as e};
//# sourceMappingURL=Component-7f8f5f83.js.map
