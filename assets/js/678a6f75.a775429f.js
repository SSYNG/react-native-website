"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[57267],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C=a.createContext({}),i=function(e){var t=a.useContext(C),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(C.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,C=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,u=p["".concat(C,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var C in t)hasOwnProperty.call(t,C)&&(l[C]=t[C]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),s=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":s?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),r=n(38944);const s="tabItem_wHwb";var o=Object.defineProperty,l=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))C.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(s,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(27378),r=n(38944),s=n(14185),o=n(27886),l=n(77184),C=n(12112);const i="tabList_J5MA",c="tabItem_l0OV";var d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&b(e,n,t[n]);if(u)for(var n of u(t))D.call(t,n)&&b(e,n,t[n]);return e};function B(e){var t,n;const{lazy:s,block:d,defaultValue:u,values:y,groupId:D,className:b}=e,B=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),x=null!=y?y:B.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,o.l)(x,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:null!=(n=null!=u?u:null==(t=B.find((e=>e.props.default)))?void 0:t.props.value)?n:B[0].props.value;if(null!==g&&!x.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${x.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:v}=(0,l.U)(),[h,A]=(0,a.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:T}=(0,C.o5)();if(null!=D){const e=E[D];null!=e&&e!==h&&x.some((t=>t.value===e))&&A(e)}const V=e=>{const t=e.currentTarget,n=k.indexOf(t),a=x[n].value;a!==h&&(T(t),A(a),null!=D&&v(D,String(a)))},O=e=>{var t,n;let a=null;switch(e.key){case"Enter":V(e);break;case"ArrowRight":{const n=k.indexOf(e.currentTarget)+1;a=null!=(t=k[n])?t:k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;a=null!=(n=k[t])?n:k[k.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",i)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},x.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(s=f({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:e=>k.push(e),onKeyDown:O,onClick:V},n),o={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":h===e})},p(s,m(o))),null!=t?t:e);var s,o}))),s?(0,a.cloneElement)(B.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},B.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function x(e){const t=(0,s.Z)();return a.createElement(B,f({key:String(t)},e))}},72585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>D,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>B});var a=n(35318),r=n(27789),s=n(86386),o=n(11674),l=Object.defineProperty,C=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const y={id:"transforms",title:"Transforms"},D=void 0,b={unversionedId:"transforms",id:"version-0.66/transforms",title:"Transforms",description:"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps.",source:"@site/versioned_docs/version-0.66/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/docs/0.66/transforms",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/transforms.md",tags:[],version:"0.66",frontMatter:{id:"transforms",title:"Transforms"},sidebar:"api",previous:{title:"Systrace",permalink:"/docs/0.66/systrace"},next:{title:"Vibration",permalink:"/docs/0.66/vibration"}},f={},B=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>transform()</code>",id:"transform",level:3},{value:"<code>decomposedMatrix</code>, <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>transformMatrix</code>, <code>translateX</code>, <code>translateY</code>",id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey",level:3}],x={toc:B};function w(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},x),m),C(t,i({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Transforms are style properties that will help you modify the appearance and position of your components using 2D or 3D transformations. However, once you apply transforms, the layouts remain the same around the transformed component hence it might overlap with the nearby components. You can apply margin to the transformed component, the nearby components or padding to the container to prevent such overlaps."),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",u({},{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%5Cn%20%20%20%20%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%5C%2230deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%5C%2230deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%5Cn%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%3C%2FSafeAreaView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20scrollContentContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingBottom%3A%2060%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20marginVertical%3A%2040%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20color%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(s.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",u({},{className:"snack-player","data-snack-name":"Transforms","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CScrollView%5Cn%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollContentContainer%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EOriginal%20Object%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scale%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScale%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleX%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleX%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20scaleY%3A%202%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EScaleY%20by%202%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20rotate%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateX%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20X%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateY%3A%20%5C%2245deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20rotateZ%3A%20%5C%2245deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ERotate%20Y%26Z%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewX%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewX%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20skewY%3A%20%5C%2245deg%5C%22%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkewY%20by%2045%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewX%3A%20%5C%2230deg%5C%22%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%20skewY%3A%20%5C%2230deg%5C%22%20%7D%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ESkew%20X%26Y%20by%2030%20deg%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20-50%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateX%20by%20-50%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateY%3A%2050%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5D%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETranslateY%20by%2050%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%5Cn%20%20%20%20%20%20%3C%2FSafeAreaView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%5Cn%20%20%7D%2C%5Cn%20%20scrollContentContainer%3A%20%7B%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingBottom%3A%2060%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20borderRadius%3A%205%2C%5Cn%20%20%20%20marginVertical%3A%2040%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%2361dafb%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20text%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%2C%5Cn%20%20%20%20margin%3A%208%2C%5Cn%20%20%20%20color%3A%20%5C%22%23000%5C%22%2C%5Cn%20%20%20%20textAlign%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"reference"}),"Reference"),(0,a.kt)("h2",u({},{id:"methods"}),"Methods"),(0,a.kt)("h3",u({},{id:"transform"}),(0,a.kt)("inlineCode",{parentName:"h3"},"transform()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"transform")," accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation. Objects should not be combined. Use a single key/value pair per object."),(0,a.kt)("p",null,"The rotate transformations require a string so that the transform may be expressed in degrees (deg) or radians (rad). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }]);\n")),(0,a.kt)("p",null,"The skew transformations require a string so that the transform may be expressed in degrees (deg). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"transform([{ skewX: '45deg' }]);\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"array of objects: {matrix: number[]}, {perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"decomposedmatrix-rotation-scalex-scaley-transformmatrix-translatex-translatey"}),(0,a.kt)("inlineCode",{parentName:"h3"},"decomposedMatrix"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"rotation"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"scaleX"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"scaleY"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"transformMatrix"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"translateX"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"translateY")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,a.kt)("a",u({parentName:"p"},{href:"transforms#transform"}),(0,a.kt)("inlineCode",{parentName:"a"},"transform"))," prop instead.")))}w.isMDXComponent=!0}}]);