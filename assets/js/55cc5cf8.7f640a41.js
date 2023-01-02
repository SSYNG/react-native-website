"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[80597],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var C=a.createContext({}),s=function(e){var t=a.useContext(C),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(C.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,C=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,m=p["".concat(C,".").concat(c)]||p[c]||d[c]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var C in t)hasOwnProperty.call(t,C)&&(l[C]=t[C]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(63445);const i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultGuide:"native",defaultOs:i?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),i=n(38944);const o="tabItem_wHwb";var r=Object.defineProperty,l=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))C.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,i.Z)(o,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>B});var a=n(27378),i=n(38944),o=n(14185),r=n(27886),l=n(77184),C=n(12112);const s="tabList_J5MA",u="tabItem_l0OV";var d=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))D.call(t,n)&&f(e,n,t[n]);return e};function k(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:y,groupId:D,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),B=null!=y?y:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,r.l)(B,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:null!=(n=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==h&&!B.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${B.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:x}=(0,l.U)(),[v,N]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,C.o5)();if(null!=D){const e=A[D];null!=e&&e!==v&&B.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=B[n].value;a!==v&&(w(t),N(a),null!=D&&x(D,String(a)))},O=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},f)},B.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=g({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:e=>E.push(e),onKeyDown:O,onClick:P},n),r={className:(0,i.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":v===e})},p(o,c(r))),null!=t?t:e);var o,r}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function B(e){const t=(0,o.Z)();return a.createElement(k,g({key:String(t)},e))}},67587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>D,default:()=>b,frontMatter:()=>y,metadata:()=>f,toc:()=>k});var a=n(35318),i=n(27789),o=n(86386),r=n(11674),l=Object.defineProperty,C=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&c(e,n,t[n]);return e};const y={id:"layoutanimation",title:"LayoutAnimation"},D=void 0,f={unversionedId:"layoutanimation",id:"version-0.68/layoutanimation",title:"LayoutAnimation",description:"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002",source:"@site/versioned_docs/version-0.68/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/0.68/layoutanimation",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/layoutanimation.md",tags:[],version:"0.68",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"api",previous:{title:"Keyboard",permalink:"/docs/0.68/keyboard"},next:{title:"Linking",permalink:"/docs/0.68/linking"}},g={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>configureNext()</code>",id:"configurenext",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"config",id:"config",level:5},{value:"<code>create()</code>",id:"create",level:3},{value:"Properties",id:"properties",level:2},{value:"Types",id:"types",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Presets",id:"presets",level:3},{value:"easeInEaseOut",id:"easeineaseout",level:3},{value:"linear",id:"linear",level:3},{value:"spring",id:"spring",level:3}],B={toc:k};function b(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},B),c),C(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e38\u7528\u7684\u8c03\u7528\u6b64 API \u7684\u529e\u6cd5\u662f\u5728\u72b6\u6001\u66f4\u65b0\u524d\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u8981\u5728",(0,a.kt)("strong",{parentName:"p"},"Android"),"\u4e0a\u4f7f\u7528\u6b64\u52a8\u753b\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u542f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"import { UIManager } from 'react-native';\n\nif (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u5e94\u8be5\u5199\u5728\u4efb\u4f55\u7ec4\u4ef6\u52a0\u8f7d\u4e4b\u524d\uff0c\u6bd4\u5982\u53ef\u4ee5\u5199\u5230 index.js \u7684\u5f00\u5934\u3002"),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableOpacity%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%5C%22collapse%5C%22%20%3A%20%5C%22expand%5C%22%7D!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%5Cn%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20)%7D%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20style%20%3D%20StyleSheet.create(%7B%5Cn%20%20tile%3A%20%7B%5Cn%20%20%20%20background%3A%20%5C%22lightGrey%5C%22%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderColor%3A%20%5C%22%23d6d7da%5C%22%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20overflow%3A%20%5C%22hidden%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",m({},{id:"configurenext"}),(0,a.kt)("inlineCode",{parentName:"h3"},"configureNext()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n")),(0,a.kt)("p",null,"\u8ba1\u5212\u4e0b\u4e00\u6b21\u5e03\u5c40\u8981\u53d1\u751f\u7684\u52a8\u753b\u3002"),(0,a.kt)("h4",m({},{id:"\u53c2\u6570"}),"\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"config"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u662f"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"onAnimationDidEnd"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u52a8\u753b\u7ed3\u675f\u540e\u7684\u56de\u8c03")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"onAnimationDidFail"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u52a8\u753b\u5931\u8d25\u540e\u7684\u56de\u8c03")))),(0,a.kt)("h5",m({},{id:"config"}),"config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration")," \u52a8\u753b\u6301\u7eed\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create"),"\uff0c\u914d\u7f6e\u521b\u5efa\u65b0\u89c6\u56fe\u65f6\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",(0,a.kt)("inlineCode",{parentName:"li"},"Anim"),"\u7c7b\u578b\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update"),"\uff0c\u914d\u7f6e\u88ab\u66f4\u65b0\u7684\u89c6\u56fe\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",(0,a.kt)("inlineCode",{parentName:"li"},"Anim"),"\u7c7b\u578b\uff09")),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"create"}),(0,a.kt)("inlineCode",{parentName:"h3"},"create()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static create(duration, type, creationProp)\n")),(0,a.kt)("p",null,"\u7528\u6765\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"configureNext"),"\u6240\u9700\u7684 config \u53c2\u6570\u7684\u8f85\u52a9\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultSyntax,values:r.Z.syntax,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%5Cn%20%20%20%20%20%20LayoutAnimation.create(%5Cn%20%20%20%20%20%20%20%20500%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%5Cn%20%20%20%20%20%20)%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20boxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(%5Cn%20%20%20%20%20%20LayoutAnimation.create(%5Cn%20%20%20%20%20%20%20%20500%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%5Cn%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%5Cn%20%20%20%20%20%20)%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20Layout%5C%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%2C%5Cn%20%20%20%20height%3A%20200%2C%5Cn%20%20%20%20width%3A%20200%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("h2",m({},{id:"properties"}),"Properties"),(0,a.kt)("h3",m({},{id:"types"}),"Types"),(0,a.kt)("p",null,"An enumeration of animation types to be used in the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.68/layoutanimation#create"}),(0,a.kt)("inlineCode",{parentName:"a"},"create"))," method, or in the ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," configs for ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.68/layoutanimation#configurenext"}),(0,a.kt)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Types"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"spring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"linear")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"easeInEaseOut")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"easeIn")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"easeOut")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"keyboard")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"properties-1"}),"Properties"),(0,a.kt)("p",null,"An enumeration of layout properties to be animated to be used in the ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.68/layoutanimation#create"}),(0,a.kt)("inlineCode",{parentName:"a"},"create"))," method, or in the ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," configs for ",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/0.68/layoutanimation#configurenext"}),(0,a.kt)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Properties"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"opacity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"scaleX")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"scaleY")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"scaleXY")))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"presets"}),"Presets"),(0,a.kt)("p",null,"A set of predefined animation config."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Presets"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"easeInEaseOut"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"linear"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"spring"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"easeineaseout"}),"easeInEaseOut"),(0,a.kt)("p",null,"Shortcut to bind ",(0,a.kt)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",(0,a.kt)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"linear"}),"linear"),(0,a.kt)("p",null,"Shortcut to bind ",(0,a.kt)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",(0,a.kt)("inlineCode",{parentName:"p"},"Presets.linear"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"spring"}),"spring"),(0,a.kt)("p",null,"Shortcut to bind ",(0,a.kt)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",(0,a.kt)("inlineCode",{parentName:"p"},"Presets.spring"),"."),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultSyntax,values:r.Z.syntax,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%5C%22left%5C%22)%3B%5Cn%5Cn%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20View%2C%5Cn%20%20Platform%2C%5Cn%20%20UIManager%2C%5Cn%20%20LayoutAnimation%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Button%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnif%20(%5Cn%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%26%26%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental%5Cn)%20%7B%5Cn%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20state%20%3D%20%7B%5Cn%20%20%20%20firstBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20secondBoxPosition%3A%20%5C%22left%5C%22%2C%5Cn%20%20%20%20thirdBoxPosition%3A%20%5C%22left%5C%22%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20firstBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20secondBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%5Cn%20%20%20%20this.setState(%7B%5Cn%20%20%20%20%20%20thirdBoxPosition%3A%5Cn%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20%5C%22right%5C%22%20%3A%20%5C%22left%5C%22%5Cn%20%20%20%20%7D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22EaseInEaseOut%5C%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Linear%5C%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Spring%5C%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%5C%22left%5C%22%20%3F%20null%20%3A%20styles.moveRight%5Cn%20%20%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22flex-start%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%5Cn%20%20%7D%2C%5Cn%20%20moveRight%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22flex-end%5C%22%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))))}b.isMDXComponent=!0}}]);