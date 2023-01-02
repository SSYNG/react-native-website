"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63013],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(63445);const n=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:n?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(27378),n=a(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},27789:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(27378),n=a(38944),l=a(14185),o=a(27886),i=a(77184),s=a(12112);const c="tabList_J5MA",p="tabItem_l0OV";var u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&f(e,a,t[a]);if(h)for(var a of h(t))v.call(t,a)&&f(e,a,t[a]);return e};function k(e){var t,a;const{lazy:l,block:u,defaultValue:h,values:b,groupId:v,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),w=(0,o.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===h?h:null!=(a=null!=h?h:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,i.U)(),[j,T]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=v){const e=O[v];null!=e&&e!==j&&y.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,a=x.indexOf(t),r=y[a].value;r!==j&&(S(t),T(r),null!=v&&C(v,String(r)))},E=e=>{var t,a;let r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;r=null!=(t=x[a])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(a=x[t])?a:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":u},f)},y.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:E,onClick:P},a),o={className:(0,n.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":j===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function y(e){const t=(0,l.Z)();return r.createElement(k,g({key:String(t)},e))}},55301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>w,frontMatter:()=>b,metadata:()=>f,toc:()=>k});var r=a(35318),n=a(27789),l=a(86386),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e};const b={id:"appearance",title:"Appearance"},v=void 0,f={unversionedId:"appearance",id:"version-0.65/appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.65/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.65/appearance",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appearance.md",tags:[],version:"0.65",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"version-0.65/api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.65/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.65/appregistry"}},g={},k=[{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getColorScheme()</code>",id:"getcolorscheme",level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",level:3},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",level:3}],y={toc:k};function w(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),m),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"import { Appearance } from 'react-native';\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,r.kt)("h4",h({},{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),(0,r.kt)(n.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",(0,r.kt)("a",h({parentName:"p"},{href:"https://drafts.csswg.org/mediaqueries-5/"}),"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",(0,r.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),(0,r.kt)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,r.kt)("a",h({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"}),"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),(0,r.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,r.kt)("a",h({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"}),"Dark Mode")," preference on iOS 13 devices and higher.")))),(0,r.kt)("h2",h({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Appearance")," \u6a21\u5757\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\uff08\u591c\u95f4\u6a21\u5f0f\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // \u7528\u6237\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\n}\n")),(0,r.kt)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,r.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,r.kt)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,r.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,r.kt)("hr",null),(0,r.kt)("h1",h({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",h({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",h({},{id:"getcolorscheme"}),(0,r.kt)("inlineCode",{parentName:"h3"},"getColorScheme()")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static getColorScheme()\n")),(0,r.kt)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,r.kt)("p",null,"Supported color schemes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u53d6\u503c"),(0,r.kt)("th",h({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'"light"')),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u9009\u62e9\u4e86\u6d45\u8272\u6a21\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'"dark"')),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u9009\u62e9\u4e86\u6df1\u8272\u6a21\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",h({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",h({parentName:"tr"},{align:null}),"\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u67d0\u79cd\u6a21\u5f0f\u3002")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"getColorScheme()"),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"light"),"\u3002")),(0,r.kt)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,r.kt)("a",h({parentName:"p"},{href:"usecolorscheme"}),(0,r.kt)("inlineCode",{parentName:"a"},"useColorScheme")),"\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",h({},{id:"addchangelistener"}),(0,r.kt)("inlineCode",{parentName:"h3"},"addChangeListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static addChangeListener(listener)\n")),(0,r.kt)("p",null,"Add an event handler that is fired when appearance preferences change."),(0,r.kt)("hr",null),(0,r.kt)("h3",h({},{id:"removechangelistener"}),(0,r.kt)("inlineCode",{parentName:"h3"},"removeChangeListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-jsx"}),"static removeChangeListener(listener)\n")),(0,r.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"))}w.isMDXComponent=!0}}]);