"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[70924],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(s,i(i({ref:t},u),{},{components:a})):n.createElement(s,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>v,frontMatter:()=>c,metadata:()=>s,toc:()=>N});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))d.call(t,a)&&u(e,a,t[a]);return e};const c={id:"pressevent",title:"\u70b9\u51fb\u4e8b\u4ef6\u5bf9\u8c61"},k=void 0,s={unversionedId:"pressevent",id:"version-0.69/pressevent",title:"\u70b9\u51fb\u4e8b\u4ef6\u5bf9\u8c61",description:"PressEvent object is returned in the callback as a result of user press interaction, for example onPress in Button component.",source:"@site/versioned_docs/version-0.69/pressevent.md",sourceDirName:".",slug:"/pressevent",permalink:"/docs/0.69/pressevent",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/pressevent.md",tags:[],version:"0.69",frontMatter:{id:"pressevent",title:"\u70b9\u51fb\u4e8b\u4ef6\u5bf9\u8c61"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61",permalink:"/docs/0.69/layoutevent"},next:{title:"React \u8282\u70b9\u5bf9\u8c61",permalink:"/docs/0.69/react-node"}},h={},N=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keys and values",id:"keys-and-values",level:2},{value:"<code>changedTouches</code>",id:"changedtouches",level:3},{value:'<code>force</code> <div class="label ios">iOS</div>',id:"force-ios",level:3},{value:"<code>identifier</code>",id:"identifier",level:3},{value:"<code>locationX</code>",id:"locationx",level:3},{value:"<code>locationY</code>",id:"locationy",level:3},{value:"<code>pageX</code>",id:"pagex",level:3},{value:"<code>pageY</code>",id:"pagey",level:3},{value:"<code>target</code>",id:"target",level:3},{value:"<code>timestamp</code>",id:"timestamp",level:3},{value:"<code>touches</code>",id:"touches",level:3},{value:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",level:2}],b={toc:N};function v(e){var t,a=e,{components:r}=a,u=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PressEvent")," object is returned in the callback as a result of user press interaction, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"onPress")," in ",(0,n.kt)("a",m({parentName:"p"},{href:"button"}),"Button")," component."),(0,n.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"{\n    changedTouches: [PressEvent],\n    identifier: 1,\n    locationX: 8,\n    locationY: 4.5,\n    pageX: 24,\n    pageY: 49.5,\n    target: 1127,\n    timestamp: 85131876.58868201,\n    touches: []\n}\n")),(0,n.kt)("h2",m({},{id:"keys-and-values"}),"Keys and values"),(0,n.kt)("h3",m({},{id:"changedtouches"}),(0,n.kt)("inlineCode",{parentName:"h3"},"changedTouches")),(0,n.kt)("p",null,"Array of all PressEvents that have changed since the last event."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"array of PressEvents"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"force-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"force")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"Amount of force used during the 3D Touch press. Returns the float value in range from ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Yes")))),(0,n.kt)("h3",m({},{id:"identifier"}),(0,n.kt)("inlineCode",{parentName:"h3"},"identifier")),(0,n.kt)("p",null,"Unique numeric identifier assigned to the event."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"locationx"}),(0,n.kt)("inlineCode",{parentName:"h3"},"locationX")),(0,n.kt)("p",null,"Touch origin X coordinate inside touchable area (relative to the element)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"locationy"}),(0,n.kt)("inlineCode",{parentName:"h3"},"locationY")),(0,n.kt)("p",null,"Touch origin Y coordinate inside touchable area (relative to the element)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"pagex"}),(0,n.kt)("inlineCode",{parentName:"h3"},"pageX")),(0,n.kt)("p",null,"Touch origin X coordinate on the screen (relative to the root view)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"pagey"}),(0,n.kt)("inlineCode",{parentName:"h3"},"pageY")),(0,n.kt)("p",null,"Touch origin Y coordinate on the screen (relative to the root view)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"target"}),(0,n.kt)("inlineCode",{parentName:"h3"},"target")),(0,n.kt)("p",null,"The node id of the element receiving the PressEvent."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number, ",(0,n.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"timestamp"}),(0,n.kt)("inlineCode",{parentName:"h3"},"timestamp")),(0,n.kt)("p",null,"Timestamp value when a PressEvent occurred. Value is represented in milliseconds."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h3",m({},{id:"touches"}),(0,n.kt)("inlineCode",{parentName:"h3"},"touches")),(0,n.kt)("p",null,"Array of all current PressEvents on the screen."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"array of PressEvents"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h2",m({},{id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"}),"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"button"}),(0,n.kt)("inlineCode",{parentName:"a"},"Button"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"panresponder"}),(0,n.kt)("inlineCode",{parentName:"a"},"PanResponder"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"pressable"}),(0,n.kt)("inlineCode",{parentName:"a"},"Pressable"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"scrollview"}),(0,n.kt)("inlineCode",{parentName:"a"},"ScrollView"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"text"}),(0,n.kt)("inlineCode",{parentName:"a"},"Text"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"textinput"}),(0,n.kt)("inlineCode",{parentName:"a"},"TextInput"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"touchablenativefeedback"}),(0,n.kt)("inlineCode",{parentName:"a"},"TouchableHighlight"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"touchablewithoutfeedback"}),(0,n.kt)("inlineCode",{parentName:"a"},"TouchableOpacity"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"touchablenativefeedback"}),(0,n.kt)("inlineCode",{parentName:"a"},"TouchableNativeFeedback"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"touchablewithoutfeedback"}),(0,n.kt)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"view"}),(0,n.kt)("inlineCode",{parentName:"a"},"View")))))}v.isMDXComponent=!0}}]);