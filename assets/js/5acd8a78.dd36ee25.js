"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64019],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const l="tabItem_wHwb";var i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},27789:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(27378),r=a(38944),l=a(14185),i=a(27886),o=a(77184),s=a(12112);const c="tabList_J5MA",d="tabItem_l0OV";var p=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&f(e,a,t[a]);if(v)for(var a of v(t))C.call(t,a)&&f(e,a,t[a]);return e};function k(e){var t,a;const{lazy:l,block:p,defaultValue:v,values:b,groupId:C,className:f}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===v?v:null!=(a=null!=v?v:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,o.U)(),[D,A]=(0,n.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=C){const e=N[C];null!=e&&e!==D&&h.some((t=>t.value===e))&&A(e)}const j=e=>{const t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==D&&(x(t),A(n),null!=C&&O(C,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>E.push(e),onKeyDown:P,onClick:j},a),i={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":D===e})},u(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function h(e){const t=(0,l.Z)();return n.createElement(k,y({key:String(t)},e))}},26994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>C,default:()=>g,frontMatter:()=>b,metadata:()=>f,toc:()=>k});var n=a(35318),r=a(27789),l=a(86386),i=a(11674),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))u.call(t,a)&&m(e,a,t[a]);return e};const b={id:"activityindicator",title:"ActivityIndicator"},C=void 0,f={unversionedId:"activityindicator",id:"version-0.63/activityindicator",title:"ActivityIndicator",description:"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002",source:"@site/versioned_docs/version-0.63/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/0.63/activityindicator",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/activityindicator.md",tags:[],version:"0.63",frontMatter:{id:"activityindicator",title:"ActivityIndicator"},sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI",permalink:"/docs/0.63/components-and-apis"},next:{title:"Button",permalink:"/docs/0.63/button"}},y={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",level:3},{value:"<code>size</code>",id:"size",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(66.93%), sunnylqm(33.07%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm6693-sunnylqm3307",level:5}],h={toc:k};function g(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},h),m),s(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002"),(0,n.kt)("h2",v({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"ActivityIndicator Function Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"ActivityIndicator Class Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%5Cn%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%5Cn%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22small%5C%22%20color%3D%5C%22%230000ff%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3CActivityIndicator%20size%3D%5C%22large%5C%22%20color%3D%5C%22%2300ff00%5C%22%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20horizontal%3A%20%7B%5Cn%20%20%20%20flexDirection%3A%20%5C%22row%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h1",v({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",v({},{id:"props"}),"Props"),(0,n.kt)("h3",v({},{id:"view-props"}),(0,n.kt)("a",v({parentName:"h3"},{href:"/docs/0.63/view#props"}),"View Props")),(0,n.kt)("p",null,"\u7ee7\u627f\u4e86\u6240\u6709\u7684",(0,n.kt)("a",v({parentName:"p"},{href:"/docs/0.63/view#props"}),"View Props"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",v({},{id:"animating"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animating")),(0,n.kt)("p",null,"\u662f\u5426\u8981\u663e\u793a\u6307\u793a\u5668\u52a8\u753b\uff0c\u9ed8\u8ba4\u4e3a true \u8868\u793a\u663e\u793a\uff0cfalse \u5219\u9690\u85cf\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",v({},{id:"color"}),(0,n.kt)("inlineCode",{parentName:"h3"},"color")),(0,n.kt)("p",null,"\u6eda\u8f6e\u7684\u524d\u666f\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("a",v({parentName:"td"},{href:"colors"}),"color")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"null")," (\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5f3a\u8c03\u8272)",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("hr",null),(0,n.kt)("ins",{style:{background:"#999"},className:"color-box"}),(0,n.kt)("inlineCode",{parentName:"td"},"'#999999'")," ",(0,n.kt)("div",{className:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",v({},{id:"hideswhenstopped-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"animating"),"\u4e3a false \u7684\u65f6\u5019\uff0c\u662f\u5426\u8981\u9690\u85cf\u6307\u793a\u5668\uff08\u9ed8\u8ba4\u4e3a true\uff09\u3002\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"p"},"animating"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"hidesWhenStopped"),"\u90fd\u4e3a false\uff0c\u5219\u663e\u793a\u4e00\u4e2a\u9759\u6b62\u7684\u6307\u793a\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",v({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a'small'\u3002\u76ee\u524d\u53ea\u80fd\u5728 Android \u4e0a\u8bbe\u5b9a\u5177\u4f53\u7684\u6570\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",v({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),"enum(",(0,n.kt)("inlineCode",{parentName:"td"},"'small'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'large'"),")",(0,n.kt)("hr",null),"number ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'small'"))))),(0,n.kt)("hr",null),(0,n.kt)("h5",v({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm6693-sunnylqm3307"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",v({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(66.93%), ",(0,n.kt)("a",v({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(33.07%)"))}g.isMDXComponent=!0}}]);