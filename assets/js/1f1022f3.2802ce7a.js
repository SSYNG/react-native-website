"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41576],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),C=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=C(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=C(n),u=r,b=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var C=2;C<i;C++)l[C]=n[C];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"native",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),r=n(38944);const i="tabItem_wHwb";var l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))C.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(27378),r=n(38944),i=n(14185),l=n(27886),o=n(77184),s=n(12112);const C="tabList_J5MA",p="tabItem_l0OV";var d=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&f(e,n,t[n]);return e};function h(e){var t,n;const{lazy:i,block:d,defaultValue:b,values:m,groupId:v,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,l.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===b?b:null!=(n=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==E&&!y.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,o.U)(),[O,w]=(0,a.useState)(E),A=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=v){const e=g[v];null!=e&&e!==O&&y.some((t=>t.value===e))&&w(e)}const B=e=>{const t=e.currentTarget,n=A.indexOf(t),a=y[n].value;a!==O&&(S(t),w(a),null!=v&&N(v,String(a)))},T=e=>{var t,n;let a=null;switch(e.key){case"Enter":B(e);break;case"ArrowRight":{const n=A.indexOf(e.currentTarget)+1;a=null!=(t=A[n])?t:A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=null!=(n=A[t])?n:A[A.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",C)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=D({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>A.push(e),onKeyDown:T,onClick:B},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})},c(i,u(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function y(e){const t=(0,i.Z)();return a.createElement(h,D({key:String(t)},e))}},21403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var a=n(35318),r=n(27789),i=n(86386),l=n(11674),o=Object.defineProperty,s=Object.defineProperties,C=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"vibration",title:"Vibration"},v=void 0,f={unversionedId:"vibration",id:"version-0.64/vibration",title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.64/vibration.md",sourceDirName:".",slug:"/vibration",permalink:"/docs/0.64/vibration",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/vibration.md",tags:[],version:"0.64",frontMatter:{id:"vibration",title:"Vibration"},sidebar:"version-0.64/api",previous:{title:"Transforms",permalink:"/docs/0.64/transforms"},next:{title:"useColorScheme",permalink:"/docs/0.64/usecolorscheme"}},D={},h=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>vibrate()</code>",id:"vibrate",level:3},{value:"<code>cancel()</code>",id:"cancel",level:3}],y={toc:h};function k(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=b(b({},y),u),s(t,C({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Vibrates the device."),(0,a.kt)("h2",b({},{id:"example"}),"Example"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",b({},{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%203%20*%20ONE_SECOND_IN_MS%5Cn%20%20%5D%3B%5Cn%5Cn%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%3F%20%5C%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%5C%22%5Cn%20%20%20%20%20%20%3A%20%5C%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%5C%22%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22%23737373%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",b({},{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Separator%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%5C%22android%5C%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%5Cn%5Cn%20%20%20%20const%20PATTERN%20%3D%20%5B%5Cn%20%20%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%5Cn%20%20%20%20%20%203%20*%20ONE_SECOND_IN_MS%5Cn%20%20%20%20%5D%3B%5Cn%5Cn%20%20%20%20const%20PATTERN_DESC%20%3D%5Cn%20%20%20%20%20%20Platform.OS%20%3D%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%3F%20%5C%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%5C%22%5Cn%20%20%20%20%20%20%20%20%3A%20%5C%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%5C%22%3B%5Cn%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Vibrate%20once%5C%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%5C%22android%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%3F%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20for%2010%20seconds%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%3A%20null%7D%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Vibrate%20with%20pattern%20until%20cancelled%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%5C%22Stop%20vibration%20pattern%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%5Cn%20%20%20%20%20%20%20%20%20%20color%3D%5C%22%23FF0000%5C%22%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%2044%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20header%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2018%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20paragraph%3A%20%7B%5Cn%20%20%20%20margin%3A%2024%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20separator%3A%20%7B%5Cn%20%20%20%20marginVertical%3A%208%2C%5Cn%20%20%20%20borderBottomColor%3A%20%5C%22%23737373%5C%22%2C%5Cn%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Android apps should request the ",(0,a.kt)("inlineCode",{parentName:"p"},"android.permission.VIBRATE")," permission by adding ",(0,a.kt)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.VIBRATE"/>')," to ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Vibration API is implemented as a ",(0,a.kt)("inlineCode",{parentName:"p"},"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)")," call on iOS.")),(0,a.kt)("hr",null),(0,a.kt)("h1",b({},{id:"reference"}),"Reference"),(0,a.kt)("h2",b({},{id:"methods"}),"Methods"),(0,a.kt)("h3",b({},{id:"vibrate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"vibrate()")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"Vibration.vibrate(?pattern: number | Array<number>, ?repeat: boolean)\n")),(0,a.kt)("p",null,"Triggers a vibration with a fixed duration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On Android,")," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," argument. ",(0,a.kt)("strong",{parentName:"p"},"On iOS,")," the vibration duration is fixed at roughly 400 milliseconds."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"vibrate()")," method can take a ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," argument with an array of numbers that represent time in milliseconds. You may set ",(0,a.kt)("inlineCode",{parentName:"p"},"repeat")," to true to run through the vibration pattern in a loop until ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel()")," is called."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On Android,")," the odd indices of the ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," array represent the vibration duration, while the even ones represent the separation time. ",(0,a.kt)("strong",{parentName:"p"},"On iOS,")," the numbers in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern")," array represent the separation time, as the vibration duration is fixed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Platform"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"pattern"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Vibration duration in milliseconds. Defaults to 400 ms."),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"pattern"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Array of numbers"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Vibration pattern as an array of numbers in milliseconds."),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android, iOS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"repeat"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Repeat vibration pattern until cancel(), default to false."),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Android, iOS")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"cancel"}),(0,a.kt)("inlineCode",{parentName:"h3"},"cancel()")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"Vibration.cancel();\n")),(0,a.kt)("p",null,"Call this to stop vibrating after having invoked ",(0,a.kt)("inlineCode",{parentName:"p"},"vibrate()")," with repetition enabled."))}k.isMDXComponent=!0}}]);