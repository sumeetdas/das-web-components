import{T as u,x as c}from"./lit-element-c57b4a79.js";import{e as l,i as d,t as a}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",b=" !"+i,y=l(class extends d{constructor(s){var e;if(super(s),s.type!==a.ATTRIBUTE||s.name!=="style"||((e=s.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,o)=>{const t=s[o];return t==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(s,[e]){const{style:o}=s.element;if(this.ut===void 0){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach(t=>{e[t]==null&&(this.ut.delete(t),t.includes("-")?o.removeProperty(t):o[t]="")});for(const t in e){const n=e[t];if(n!=null){this.ut.add(t);const r=typeof n=="string"&&n.endsWith(b);t.includes("-")||r?o.setProperty(t,r?n.slice(0,-11):n,r?i:""):o[t]=n}}return u}});const p=({primary:s,backgroundColor:e,size:o,label:t,onClick:n})=>{const r=s?"storybook-button--primary":"storybook-button--secondary";return c`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${o||"medium"}`,r].join(" ")}
      style=${y({backgroundColor:e})}
      @click=${n}
    >
      ${t}
    </button>
  `};export{p as B};
//# sourceMappingURL=Button-75df280a.js.map
