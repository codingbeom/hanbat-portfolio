import{r as a,j as e}from"./react-YOz2hQel.js";import{l as vn,d as y}from"./styled-components-DSn1G4Go.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var v=function(){return v=Object.assign||function(n){for(var i,p=1,l=arguments.length;p<l;p++)for(var o in i=arguments[p])Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);return n},v.apply(this,arguments)};function x(n,i){return Object.defineProperty?Object.defineProperty(n,"raw",{value:i}):n.raw=i,n}var Q,W,_,$,nn,xn=vn(Q||(Q=x([`
  display: flex;
  align-items: center;
  min-width: 322px;
  max-width: 508px;
  height: 48px;
  border: dashed 2px `,`;
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 0;

  &.is-disabled {
    border: dashed 2px `,`;
    cursor: no-drop;
    svg {
      fill: `,`;
      color: `,`;
      path {
        fill: `,`;
        color: `,`;
      }
    }
  }
`],[`
  display: flex;
  align-items: center;
  min-width: 322px;
  max-width: 508px;
  height: 48px;
  border: dashed 2px `,`;
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 0;

  &.is-disabled {
    border: dashed 2px `,`;
    cursor: no-drop;
    svg {
      fill: `,`;
      color: `,`;
      path {
        fill: `,`;
        color: `,`;
      }
    }
  }
`])),"#0658c2","#666","#666","#666","#666","#666"),hn=y.label(W||(W=x([`
  position: relative;
  `,`;
  &:focus-within {
    outline: 2px solid black;
  }
  & > input {
    display: block;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
`],[`
  position: relative;
  `,`;
  &:focus-within {
    outline: 2px solid black;
  }
  & > input {
    display: block;
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
`])),function(n){return n.overRide?"":xn}),gn=y.div(_||(_=x([`
  border: dashed 2px `,`;
  border-radius: 5px;
  background-color: `,`;
  opacity: 0.9;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`],[`
  border: dashed 2px `,`;
  border-radius: 5px;
  background-color: `,`;
  opacity: 0.9;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`])),"#666","#999"),bn=y.div($||($=x([`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    font-size: 12px;
    color: `,`;
  }
  .file-types {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`],[`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    font-size: 12px;
    color: `,`;
  }
  .file-types {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`])),function(n){return n.error?"red":"#666"}),mn=y.span(nn||(nn=x([`
  font-size: 14px;
  color: `,`;
  span {
    text-decoration: underline;
  }
`],[`
  font-size: 14px;
  color: `,`;
  span {
    text-decoration: underline;
  }
`])),"#666"),en=function(n){return n/1024/1024},yn=function(n){return n===void 0?"":n.map(function(i){return".".concat(i.toLowerCase())}).join(",")};function wn(n){var i=n.types,p=n.minSize,l=n.maxSize;if(i){var o=i.toString(),c="";return l&&(c+="size >= ".concat(l,", ")),p&&(c+="size <= ".concat(p,", ")),e.jsx("span",v({title:"".concat(c,"types: ").concat(o),className:"file-types"},{children:o}),void 0)}return null}function jn(){return e.jsxs("svg",v({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[e.jsx("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"},void 0),e.jsx("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"},void 0),e.jsx("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"},void 0)]}),void 0)}var T=0,Cn=function(n,i,p,l,o,c){return p?e.jsx("span",{children:"File type/size error, Hovered on types!"},void 0):e.jsx(mn,{children:l?e.jsx("span",{children:"Upload disabled"},void 0):e.jsx(e.Fragment,n||i?{children:c?e.jsx(e.Fragment,{children:e.jsx("span",{children:c},void 0)},void 0):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Uploaded Successfully!"},void 0)," Upload another?"]},void 0)}:{children:e.jsxs(e.Fragment,o?{children:[e.jsx("span",{children:o.split(" ")[0]},void 0)," ",o.substr(o.indexOf(" ")+1)]}:{children:[e.jsx("span",{children:"Upload"},void 0)," or drop a file right here"]},void 0)},void 0)},void 0)},En=function(n){var i=n.name,p=n.hoverTitle,l=n.types,o=n.handleChange,c=n.classes,w=n.children,j=n.maxSize,C=n.minSize,z=n.fileOrFiles,h=n.onSizeError,M=n.onTypeError,U=n.onSelect,rn=n.onDrop,L=n.disabled,tn=n.label,on=n.uploadedLabel,E=n.multiple,an=n.required,Z=n.onDraggingStateChange,sn=n.dropMessageStyle,ln=n.ariaLabel,dn=n.ariaDescribedby,q=a.useRef(null),u=a.useRef(null),N=a.useState(!1),pn=N[0],k=N[1],X=a.useState(null),cn=X[0],S=X[1],Y=a.useState(!1),B=Y[0],g=Y[1],A=function(t){return l&&!function(s,d){var f=s.name.split(".").pop();return d.map(function(b){return b.toLowerCase()}).includes(f.toLowerCase())}(t,l)?(g(!0),M&&M("File type is not supported"),!1):j&&en(t.size)>j?(g(!0),h&&h("File size is too big"),!1):!(C&&en(t.size)<C)||(g(!0),h&&h("File size is too small"),!1)},G=function(t){var s=!1;if(t){if(t instanceof File)s=!A(t);else for(var d=0;d<t.length;d++){var f=t[d];s=!A(f)||s}return!s&&(o&&o(t),S(t),k(!0),g(!1),!0)}return!1},H=function(t){var s=t.labelRef,d=t.inputRef,f=t.multiple,b=t.handleChanges,I=t.onDrop,J=a.useState(!1),un=J[0],F=J[1],D=a.useCallback(function(){d.current.click()},[d]),V=a.useCallback(function(r){r.preventDefault(),r.stopPropagation(),T++,r.dataTransfer.items&&r.dataTransfer.items.length!==0&&F(!0)},[]),P=a.useCallback(function(r){r.preventDefault(),r.stopPropagation(),--T>0||F(!1)},[]),R=a.useCallback(function(r){r.preventDefault(),r.stopPropagation()},[]),O=a.useCallback(function(r){r.preventDefault(),r.stopPropagation(),F(!1),T=0;var m=r.dataTransfer.files;if(m&&m.length>0){var K=f?m:m[0],fn=b(K);I&&fn&&I(K)}},[b]);return a.useEffect(function(){var r=s.current;return r.addEventListener("click",D),r.addEventListener("dragenter",V),r.addEventListener("dragleave",P),r.addEventListener("dragover",R),r.addEventListener("drop",O),function(){r.removeEventListener("click",D),r.removeEventListener("dragenter",V),r.removeEventListener("dragleave",P),r.removeEventListener("dragover",R),r.removeEventListener("drop",O)}},[D,V,P,R,O,s]),un}({labelRef:q,inputRef:u,multiple:E,handleChanges:G,onDrop:rn});return a.useEffect(function(){Z==null||Z(H)},[H]),a.useEffect(function(){z?(k(!0),S(z)):(u.current&&(u.current.value=""),k(!1),S(null))},[z]),e.jsxs(hn,v({overRide:w,className:"".concat(c||""," ").concat(L?"is-disabled":""),ref:q,htmlFor:i,onClick:function(t){t.preventDefault(),t.stopPropagation()},"aria-describedby":dn,role:"button","aria-label":ln},{children:[e.jsx("input",{onClick:function(t){t.stopPropagation(),u&&u.current&&(u.current.value="",u.current.click())},onChange:function(t){var s=t.target.files,d=E?s:s[0],f=G(d);U&&f&&U(d)},accept:yn(l),ref:u,type:"file",id:i,name:i,disabled:L,multiple:E,required:an},void 0),H&&e.jsx(gn,v({style:sn},{children:e.jsx("span",{children:p||"Drop Here"},void 0)}),void 0),!w&&e.jsxs(e.Fragment,{children:[e.jsx(jn,{},void 0),e.jsxs(bn,v({error:B},{children:[Cn(cn,pn,B,L,tn,on),e.jsx(wn,{types:l,minSize:C,maxSize:j},void 0)]}),void 0)]},void 0),w]}),void 0)};export{En as E};
