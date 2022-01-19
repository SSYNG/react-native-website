"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9489],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:function(e,t,n){var r=n(63445);const o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=o?"ios":"android",i=o?"macos":a?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},37785:function(e,t,n){var r=n(27378),o=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;t.Z=function({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))i.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},65941:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(27378),o=n(14185),a=n(40488);var l=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(18870),c=n(38944),s="tabItem_c0e5",u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&v(e,n,t[n]);return e};function h(e){var t,n,o;const{lazy:a,block:u,defaultValue:m,values:f,groupId:b,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,i.lx)(O,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(o=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(n=h[0])?void 0:n.props.value;if(null!==w&&!O.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:j}=l(),[x,C]=(0,r.useState)(w),D=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=b){const e=k[b];null!=e&&e!==x&&O.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=D.indexOf(t),r=O[n].value;r!==x&&(S(t),C(r),null!=b&&j(b,r))},N=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;t=D[n]||D[0];break}case"ArrowLeft":{const n=D.indexOf(e.currentTarget)-1;t=D[n]||D[D.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},v)},O.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(o=y({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>D.push(e),onKeyDown:N,onFocus:T,onClick:T},n),a={className:(0,c.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":x===e})},p(o,d(a))),null!=t?t:e);var o,a}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function O(e){const t=(0,o.Z)();return r.createElement(h,y({key:String(t)},e))}},73961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return v},metadata:function(){return y},toc:function(){return h},default:function(){return g}});var r=n(35318),o=n(65941),a=n(37785),l=n(11674),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&m(e,n,t[n]);return e};const b={id:"dynamiccolorios",title:"DynamicColorIOS"},v=void 0,y={unversionedId:"dynamiccolorios",id:"dynamiccolorios",title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/../cndocs/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/next/dynamiccolorios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dynamiccolorios.md",tags:[],version:"current",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"api",previous:{title:"ActionSheetIOS",permalink:"/docs/next/actionsheetios"},next:{title:"Settings",permalink:"/docs/next/settings"}},h=[{value:"Developer notes",id:"developer-notes",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2}],O={toc:h};function g(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},O),m),c(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"DynamicColorIOS({ light: color, dark: color });\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),(0,r.kt)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),(0,r.kt)("h4",f({},{id:"developer-notes"}),"Developer notes"),(0,r.kt)(o.Z,{groupId:"guide",defaultValue:"web",values:l.Z.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",(0,r.kt)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),(0,r.kt)(a.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",(0,r.kt)("a",f({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"}),(0,r.kt)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),(0,r.kt)("h2",f({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"import { DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n")))}g.isMDXComponent=!0}}]);