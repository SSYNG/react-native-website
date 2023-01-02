"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4816],{35318:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>C});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(a),C=l,m=c["".concat(s,".").concat(C)]||c[C]||u[C]||r;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function C(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11674:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(63445);const l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:l?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:l?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(t=["android","ios","web","windows"])=>[t.includes("android")?{label:"Android",value:"android"}:void 0,t.includes("ios")?{label:"iOS",value:"ios"}:void 0,t.includes("web")?{label:"Web",value:"web"}:void 0,t.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(27378),l=a(38944);const r="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;function u({children:t,hidden:e,className:a}){return n.createElement("div",((t,e)=>{for(var a in e||(e={}))s.call(e,a)&&p(t,a,e[a]);if(i)for(var a of i(e))d.call(e,a)&&p(t,a,e[a]);return t})({role:"tabpanel",className:(0,l.Z)(r,a)},{hidden:e}),t)}},27789:(t,e,a)=>{a.d(e,{Z:()=>f});var n=a(27378),l=a(38944),r=a(14185),o=a(27886),i=a(77184),s=a(12112);const d="tabList_J5MA",p="tabItem_l0OV";var u=Object.defineProperty,c=Object.defineProperties,C=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,y=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&g(t,a,e[a]);if(m)for(var a of m(e))b.call(e,a)&&g(t,a,e[a]);return t};function N(t){var e,a;const{lazy:r,block:u,defaultValue:m,values:k,groupId:b,className:g}=t,N=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=k?k:N.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),v=(0,o.l)(f,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:null!=(a=null!=m?m:null==(e=N.find((t=>t.props.default)))?void 0:e.props.value)?a:N[0].props.value;if(null!==h&&!f.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:A,setTabGroupChoices:D}=(0,i.U)(),[B,O]=(0,n.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const t=A[b];null!=t&&t!==B&&f.some((e=>e.value===t))&&O(t)}const E=t=>{const e=t.currentTarget,a=w.indexOf(e),n=f[a].value;n!==B&&(x(e),O(n),null!=b&&D(b,String(n)))},P=t=>{var e,a;let n=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const a=w.indexOf(t.currentTarget)+1;n=null!=(e=w[a])?e:w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;n=null!=(a=w[e])?a:w[w.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},g)},f.map((({value:t,label:e,attributes:a})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:B===t?0:-1,"aria-selected":B===t,key:t,ref:t=>w.push(t),onKeyDown:P,onClick:E},a),o={className:(0,l.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":B===t})},c(r,C(o))),null!=e?e:t);var r,o}))),r?(0,n.cloneElement)(N.filter((t=>t.props.value===B))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==B})))))}function f(t){const e=(0,r.Z)();return n.createElement(N,y({key:String(e)},t))}},85673:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>b,default:()=>v,frontMatter:()=>k,metadata:()=>g,toc:()=>N});var n=a(35318),l=a(27789),r=a(86386),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,C=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&C(t,a,e[a]);if(p)for(var a of p(e))c.call(e,a)&&C(t,a,e[a]);return t};const k={id:"alert",title:"Alert"},b=void 0,g={unversionedId:"alert",id:"version-0.66/alert",title:"Alert",description:"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-0.66/alert.md",sourceDirName:".",slug:"/alert",permalink:"/docs/0.66/alert",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alert.md",tags:[],version:"0.66",frontMatter:{id:"alert",title:"Alert"},sidebar:"api",previous:{title:"AccessibilityInfo",permalink:"/docs/0.66/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/0.66/animated"}},y={},N=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:'\u793a\u4f8b <div class="label android">Android</div>',id:"\u793a\u4f8b-android",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>alert()</code>",id:"alert",level:3},{value:'<code>prompt()</code> <div class="label ios">iOS</div>',id:"prompt-ios",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:'AlertButtonStyle <div class="label ios">iOS</div>',id:"alertbuttonstyle-ios",level:3},{value:'AlertType <div class="label ios">iOS</div>',id:"alerttype-ios",level:3},{value:"Buttons",id:"buttons",level:3},{value:'Options <div class="label android">Android</div>',id:"options-android",level:3}],f={toc:N};function v(t){var e,a=t,{components:i}=a,C=((t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&c.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=m(m({},f),C),s(e,d({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e00\u7cfb\u5217\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u6309\u94ae\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684 onPress \u56de\u8c03\u5e76\u4e14\u5173\u95ed\u63d0\u793a\u6846\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8bdd\u6846\u4f1a\u4ec5\u6709\u4e00\u4e2a'\u786e\u5b9a'\u6309\u94ae\u3002"),(0,n.kt)("p",null,"\u672c\u63a5\u53e3\u53ef\u4ee5\u5728 iOS \u548c Android \u4e0a\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u3002\u53ea\u6709 iOS \u7cfb\u7edf\u652f\u6301\u5728\u63d0\u793a\u6846\u4e2d\u52a0\u5165\u6587\u672c\u6846\u3002"),(0,n.kt)("h3",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Ask%20me%20later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Ask%20me%20later%20pressed%5C%22)%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%7B%5C%222-Button%20Alert%5C%22%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%20title%3D%7B%5C%223-Button%20Alert%5C%22%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%5Cn%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Ask%20me%20later%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Ask%20me%20later%20pressed%5C%22)%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%7B%20text%3A%20%5C%22OK%5C%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%5C%22OK%20Pressed%5C%22)%20%7D%5Cn%20%20%20%20%20%20%5D%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B%5C%222-Button%20Alert%5C%22%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%5Cn%5Cn%20%20%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20%20%20title%3D%7B%5C%223-Button%20Alert%5C%22%7D%5Cn%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",m({},{id:"ios"}),"iOS"),(0,n.kt)("p",null,"\u5728 iOS \u4e0a\u4f60\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u6309\u94ae\u3002\u6bcf\u4e2a\u6309\u94ae\u8fd8\u90fd\u53ef\u4ee5\u6307\u5b9a\u81ea\u5df1\u7684\u6837\u5f0f\uff0c\u6b64\u5916\u8fd8\u53ef\u4ee5\u6307\u5b9a\u63d0\u793a\u7684\u7c7b\u522b\u3002\u53c2\u9605",(0,n.kt)("a",m({parentName:"p"},{href:"#alertbuttonstyle.md"}),"AlertButtonStyle"),"\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),(0,n.kt)("h2",m({},{id:"android"}),"Android"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u6700\u591a\u80fd\u6307\u5b9a\u4e09\u4e2a\u6309\u94ae\uff0c\u8fd9\u4e09\u4e2a\u6309\u94ae\u5206\u522b\u5177\u6709\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\u7684\u6982\u5ff5\uff1a"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u6307\u5b9a\u4e00\u4e2a\u6309\u94ae\uff0c\u5219\u5b83\u5177\u6709\u201c\u79ef\u6781\u6001\u201d\u7684\u5c5e\u6027\uff08\u6bd4\u5982\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e24\u4e2a\u6309\u94ae\uff0c\u5219\u5206\u522b\u662f\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u53d6\u6d88\u201d\u548c\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e09\u4e2a\u6309\u94ae\u5219\u610f\u5473\u7740\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u7a0d\u5019\u518d\u8bf4\u201d\uff0c\u201c\u53d6\u6d88\u201d\uff0c\u201c\u786e\u5b9a\u201d\uff09\u3002"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u63d0\u793a\u6846\u7684\u5916\u9762\u6765\u53d6\u6d88\u63d0\u793a\u6846\uff0c\u4f46\u8fd9\u4e00\u884c\u4e3a\u9ed8\u8ba4\u6ca1\u6709\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u5728",(0,n.kt)("a",m({parentName:"p"},{href:"#options"}),(0,n.kt)("inlineCode",{parentName:"a"},"Options")),"\u4e2d\u63d0\u4f9b\u4e00\u4e2a\u989d\u5916\u53c2\u6570\u6765\u542f\u7528\u8fd9\u4e00\u884c\u4e3a\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"{ cancelable: true }"),"\u3002"),(0,n.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"\u4e2d\u6dfb\u52a0",(0,n.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u51fd\u6570\u6765\u6355\u83b7\u7528\u6237\u7684\u53d6\u6d88\u64cd\u4f5c\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"{ onDismiss: () => {} }"),"\u3002"),(0,n.kt)("h3",m({},{id:"\u793a\u4f8b-android"}),"\u793a\u4f8b ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"Alert Android Dissmissable Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20showAlert%20%3D%20()%20%3D%3E%5Cn%20%20Alert.alert(%5Cn%20%20%20%20%5C%22Alert%20Title%5C%22%2C%5Cn%20%20%20%20%5C%22My%20Alert%20Msg%5C%22%2C%5Cn%20%20%20%20%5B%5Cn%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20text%3A%20%5C%22Cancel%5C%22%2C%5Cn%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20Alert.alert(%5C%22Cancel%20Pressed%5C%22)%2C%5Cn%20%20%20%20%20%20%20%20style%3A%20%5C%22cancel%5C%22%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%5D%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20cancelable%3A%20true%2C%5Cn%20%20%20%20%20%20onDismiss%3A%20()%20%3D%3E%5Cn%20%20%20%20%20%20%20%20Alert.alert(%5Cn%20%20%20%20%20%20%20%20%20%20%5C%22This%20alert%20was%20dismissed%20by%20tapping%20outside%20of%20the%20alert%20dialog.%5C%22%5Cn%20%20%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%7D%5Cn%20%20)%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CButton%20title%3D%5C%22Show%20alert%5C%22%20onPress%3D%7BshowAlert%7D%20%2F%3E%5Cn)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",m({},{id:"alert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static alert(title, message?, buttons?, options?)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The dialog's title. Passing ",(0,n.kt)("inlineCode",{parentName:"td"},"null")," or empty string will hide the title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"An optional message that appears below the dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"buttons"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"alert#buttons"}),"Buttons")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"An optional array containg buttons configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"alert#options"}),"Options")," ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"An optional Alert configuration for the Android.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"prompt-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prompt()")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static prompt(title, message?, callbackOrButtons?, type?, defaultValue?, keyboardType?)\n")),(0,n.kt)("p",null,"Create and display a prompt to enter some text in form of Alert."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"An optional message that appears above the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function",(0,n.kt)("hr",null),(0,n.kt)("a",m({parentName:"td"},{href:"alert#buttons"}),"Buttons")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"If passed a function, it will be called with the prompt's value",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"(text: string) => void"),", when the user taps 'OK'.",(0,n.kt)("hr",null),"If passed an array, buttons will be configured based on the array content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"alert#alerttype"}),"AlertType")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"This configures the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"defaultValue"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The default text in text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"keyboardType"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The keyboard type of first text field (if exists). One of TextInput ",(0,n.kt)("a",m({parentName:"td"},{href:"textinput#keyboardtype"}),"keyboardTypes"),".")))),(0,n.kt)("hr",null),(0,n.kt)("h2",m({},{id:"\u7c7b\u578b\u5b9a\u4e49"}),"\u7c7b\u578b\u5b9a\u4e49"),(0,n.kt)("h3",m({},{id:"alertbuttonstyle-ios"}),"AlertButtonStyle ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"An iOS Alert button style."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Default button style.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'cancel'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Cancel button style.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'destructive'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Destructive button style.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"alerttype-ios"}),"AlertType ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"An iOS Alert type."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u503c"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'default'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Default alert with no inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'plain-text'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Plain text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'secure-text'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Secure text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'login-password'")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Login and password alert")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"buttons"}),"Buttons"),(0,n.kt)("p",null,"Array of objects containg Alert buttons configuration."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"array of objects")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Objects properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Button label.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onPress"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Callback function when button is pressed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"style ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"alert#alertbuttonstyle"}),"AlertButtonStyle")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Button style, on Android this property will be ignored.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"options-android"}),"Options ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cancelable"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Defines if alert can be dismissed by tapping outside of the alert box.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onDismiss"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Callback function fired when alert has been dismissed.")))))}v.isMDXComponent=!0}}]);