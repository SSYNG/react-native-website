"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[49732],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(27378),r=n(38944),l=n(14185),i=n(27886),o=n(77184),d=n(12112);const s="tabList_J5MA",u="tabItem_l0OV";var p=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&C(e,n,t[n]);if(b)for(var n of b(t))y.call(t,n)&&C(e,n,t[n]);return e};function f(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:k,groupId:y,className:C}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=k?k:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:w}=(0,o.U)(),[O,B]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=y){const e=D[y];null!=e&&e!==O&&h.some((t=>t.value===e))&&B(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(E(t),B(a),null!=y&&w(y,String(a)))},j=e=>{var t,n;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},C)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=v({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:j,onClick:S},n),i={className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})},c(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,l.Z)();return a.createElement(f,v({key:String(t)},e))}},63783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>g,frontMatter:()=>k,metadata:()=>C,toc:()=>f});var a=n(35318),r=n(27789),l=n(86386),i=n(11674),o=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const k={id:"keyboard",title:"Keyboard"},y=void 0,C={unversionedId:"keyboard",id:"version-0.63/keyboard",title:"Keyboard",description:"Keyboard\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-0.63/keyboard.md",sourceDirName:".",slug:"/keyboard",permalink:"/docs/0.63/keyboard",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/keyboard.md",tags:[],version:"0.63",frontMatter:{id:"keyboard",title:"Keyboard"},sidebar:"version-0.63/api",previous:{title:"InteractionManager",permalink:"/docs/0.63/interactionmanager"},next:{title:"LayoutAnimation",permalink:"/docs/0.63/layoutanimation"}},v={},f=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addListener()</code>",id:"addlistener",level:3},{value:"<code>removeListener()</code>",id:"removelistener",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>dismiss()</code>",id:"dismiss",level:3},{value:"<code>scheduleLayoutAnimation</code>",id:"schedulelayoutanimation",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(91.75%), sunnylqm(8.25%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9175-sunnylqm825",level:5}],h={toc:f};function g(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=b(b({},h),m),d(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Keyboard"),"\u6a21\u5757\u7528\u6765\u63a7\u5236\u952e\u76d8\u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,a.kt)("h3",b({},{id:"\u7528\u6cd5\u793a\u4f8b"}),"\u7528\u6cd5\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Keyboard"),"\u6a21\u5757\u53ef\u4ee5\u76d1\u542c\u539f\u751f\u952e\u76d8\u4e8b\u4ef6\u4ee5\u505a\u51fa\u76f8\u5e94\u56de\u5e94\uff0c\u6bd4\u5982\u6536\u56de\u952e\u76d8\u3002"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",b({},{className:"snack-player","data-snack-name":"Keyboard Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22%5Cnimport%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Keyboard%2C%20TextInput%2C%20StyleSheet%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20Example%20%3D%20()%20%3D%3E%20%7B%5Cn%5Cn%20%20useEffect(()%20%3D%3E%20%7B%5Cn%20%20%20%20Keyboard.addListener(%5C%22keyboardDidShow%5C%22%2C%20_keyboardDidShow)%3B%5Cn%20%20%20%20Keyboard.addListener(%5C%22keyboardDidHide%5C%22%2C%20_keyboardDidHide)%3B%5Cn%5Cn%20%20%20%20%2F%2F%20cleanup%20function%5Cn%20%20%20%20return%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20Keyboard.removeListener(%5C%22keyboardDidShow%5C%22%2C%20_keyboardDidShow)%3B%5Cn%20%20%20%20%20%20Keyboard.removeListener(%5C%22keyboardDidHide%5C%22%2C%20_keyboardDidHide)%3B%5Cn%20%20%20%20%7D%3B%5Cn%20%20%7D%2C%20%5B%5D)%3B%5Cn%5Cn%20%20const%20_keyboardDidShow%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20alert(%5C%22Keyboard%20Shown%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20_keyboardDidHide%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20alert(%5C%22Keyboard%20Hidden%5C%22)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%5Cn%7D%5Cn%5Cnconst%20s%20%3D%20StyleSheet.create(%7B%5Cn%20%20%20input%3A%7B%5Cn%20%20%20%20margin%3A60%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%5Cn%20%20%20%7D%5Cn%7D)%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",b({},{className:"snack-player","data-snack-name":"Keyboard Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%5Cnimport%20%7BKeyboard%2C%20TextInput%20%2C%20StyleSheet%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20Example%20extends%20Component%20%7B%5Cn%20%20componentDidMount()%20%7B%5Cn%20%20%20%20this.keyboardDidShowListener%20%3D%20Keyboard.addListener(%5Cn%20%20%20%20%20%20'keyboardDidShow'%2C%5Cn%20%20%20%20%20%20this._keyboardDidShow%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%20%20this.keyboardDidHideListener%20%3D%20Keyboard.addListener(%5Cn%20%20%20%20%20%20'keyboardDidHide'%2C%5Cn%20%20%20%20%20%20this._keyboardDidHide%2C%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20componentWillUnmount()%20%7B%5Cn%20%20%20%20this.keyboardDidShowListener.remove()%3B%5Cn%20%20%20%20this.keyboardDidHideListener.remove()%3B%5Cn%20%20%7D%5Cn%5Cn%20%20_keyboardDidShow()%20%7B%5Cn%20%20%20%20alert('Keyboard%20Shown')%3B%5Cn%20%20%7D%5Cn%5Cn%20%20_keyboardDidHide()%20%7B%5Cn%20%20%20%20alert('Keyboard%20Hidden')%3B%5Cn%20%20%7D%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20%3CTextInput%20style%3D%7Bs.input%7D%20placeholder%3D'Click%20here%20...'%20onSubmitEditing%3D%7BKeyboard.dismiss%7D%20%2F%3E%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20s%20%3D%20StyleSheet.create(%7B%5Cn%20%20%20input%3A%7B%5Cn%20%20%20%20margin%3A60%2C%5Cn%20%20%20%20padding%3A%2010%2C%5Cn%20%20%20%20borderWidth%3A%200.5%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23fff%5C%22%5Cn%20%20%20%7D%5Cn%7D)%5Cn%5Cnexport%20default%20Example%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",b({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",b({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",b({},{id:"addlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static addListener(eventName, callback)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addListener"),"\u7528\u4e8e\u6ce8\u518c\u4e00\u4e2a JavaScript \u51fd\u6570\u6765\u76d1\u542c\u5904\u7406\u539f\u751f\u952e\u76d8\u901a\u77e5\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u6b64\u65b9\u6cd5\u4f1a\u8fd4\u56de\u76d1\u542c\u51fd\u6570\u7684\u5f15\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"eventName"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"nativeEvent"),"\u53c2\u6570\u7528\u6765\u6307\u660e\u8981\u76d1\u542c\u7684\u4e8b\u4ef6\uff0c\u5177\u4f53\u6709\u4ee5\u4e0b\u51e0\u79cd:")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u89e6\u53d1\u65f6\u8c03\u7528\u7684 js \u51fd\u6570")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"nativeEvent")),(0,a.kt)("p",null,"This can be any of the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyboardWillShow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyboardDidShow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyboardWillHide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyboardDidHide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),(0,a.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u4f60\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"adjustResize"),"\u6216\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"adjustPan"),"\uff0c\u5219\u5728 Android \u4e0a\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"keyboardDidShow"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"keyboardDidHide"),"\u4e8b\u4ef6\u6709\u6548\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"adjustNothing"),"\uff0c\u5219\u6ca1\u6709\u4efb\u4f55\u4e8b\u4ef6\u6709\u6548\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event."),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"removelistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static removeListener(eventName, callback)\n")),(0,a.kt)("p",null,"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",b({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"eventName"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u8981\u79fb\u9664\u76d1\u542c\u51fd\u6570\u7684\u539f\u751f\u4e8b\u4ef6\u7c7b\u578b\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",b({parentName:"tr"},{align:null}),"callback"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",b({parentName:"tr"},{align:null}),"\u8981\u79fb\u9664\u7684\u76d1\u542c\u51fd\u6570")))),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"removealllisteners"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static removeAllListeners(eventName)\n")),(0,a.kt)("p",null,"\u79fb\u9664\u67d0\u4e2a\u7c7b\u578b\u4e8b\u4ef6\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"dismiss"}),(0,a.kt)("inlineCode",{parentName:"h3"},"dismiss()")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static dismiss()\n")),(0,a.kt)("p",null,"\u628a\u5f39\u51fa\u7684\u952e\u76d8\u6536\u56de\u53bb\uff0c\u540c\u65f6\u4f7f\u5f53\u524d\u7684\u6587\u672c\u6846\u5931\u53bb\u7126\u70b9\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",b({},{id:"schedulelayoutanimation"}),(0,a.kt)("inlineCode",{parentName:"h3"},"scheduleLayoutAnimation")),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"static scheduleLayoutAnimation(event)\n")),(0,a.kt)("p",null,"Useful for syncing TextInput (or other keyboard accessory view) size of position changes with keyboard movements."),(0,a.kt)("hr",null),(0,a.kt)("h5",b({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9175-sunnylqm825"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",b({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(91.75%), ",(0,a.kt)("a",b({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(8.25%)"))}g.isMDXComponent=!0}}]);