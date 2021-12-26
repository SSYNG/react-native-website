"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5810],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45981:function(e,t,a){var n=a(161),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,a){var n=a(27378);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},12120:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(52685),r=a(27378),l=a(76457),i=a(84956);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(92373),u=a(38944),c="tabItem_c0e5";function d(e){var t,a,l,i=e.lazy,d=e.block,p=e.defaultValue,m=e.values,v=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==A&&!k.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),g=y.tabGroupChoices,D=y.setTabGroupChoices,w=(0,r.useState)(A),N=w[0],C=w[1],B=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=g[v];null!=S&&S!==N&&k.some((function(e){return e.value===S}))&&C(S)}var O=function(e){var t=e.currentTarget,a=B.indexOf(t),n=k[a].value;n!==N&&(x(t),C(n),null!=v&&D(v,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=B.indexOf(e.currentTarget)+1;a=B[n]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;a=B[r]||B[B.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return B.push(e)},onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},66463:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=a(52685),r=a(1244),l=(a(27378),a(35318)),i=a(12120),o=a(70517),s=a(45981),u=["components"],c={id:"share",title:"Share"},d=void 0,p={unversionedId:"share",id:"share",title:"Share",description:"\u793a\u4f8b",source:"@site/../cndocs/share.md",sourceDirName:".",slug:"/share",permalink:"/docs/next/share",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/share.md",tags:[],version:"current",frontMatter:{id:"share",title:"Share"},sidebar:"api",previous:{title:"RootTag",permalink:"/docs/next/roottag"},next:{title:"StyleSheet",permalink:"/docs/next/stylesheet"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>share()</code>",id:"share",children:[],level:3}],level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>sharedAction</code>",id:"sharedaction",children:[],level:3},{value:'<code>dismissedAction</code> <div class="label ios">iOS</div>',id:"dismissedaction-ios",children:[],level:3}],level:2}],v={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)(i.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,l.kt)("div",{className:"snack-player","data-snack-name":"Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aconst%20ShareExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20ShareExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,l.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,l.kt)("div",{className:"snack-player","data-snack-name":"Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Share%2C%20View%2C%20Button%20%7D%20from%20'react-native'%3B%0A%0Aclass%20ShareExample%20extends%20Component%20%7B%0A%20%20onShare%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20const%20result%20%3D%20await%20Share.share(%7B%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20'React%20Native%20%7C%20A%20framework%20for%20building%20native%20apps%20using%20React'%2C%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20if%20(result.action%20%3D%3D%3D%20Share.sharedAction)%20%7B%0A%20%20%20%20%20%20%20%20if%20(result.activityType)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%20with%20activity%20type%20of%20result.activityType%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20shared%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%20else%20if%20(result.action%20%3D%3D%3D%20Share.dismissedAction)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20dismissed%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20alert(error.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20marginTop%3A%2050%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20onPress%3D%7Bthis.onShare%7D%20title%3D%22Share%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20ShareExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"share"},(0,l.kt)("inlineCode",{parentName:"h3"},"share()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static share(content, options)\n")),(0,l.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u5bf9\u8bdd\u6846\u6765\u5206\u4eab\u6587\u672c\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u5728 iOS \u4e2d\uff0c\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u6700\u7ec8\u4f1a\u89e3\u6790\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"action"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"activityType"),"\u4e24\u4e2a\u5c5e\u6027\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u5bf9\u8bdd\u6846\uff0c\u5219 Promise \u4ecd\u5c06\u88ab\u89e3\u6790\uff0c\u6700\u7ec8\u8fd4\u56de\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"action"),"\u5c5e\u6027\u4f1a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Share.dismissedAction"),"\uff0c\u800c\u5176\u4ed6\u5c5e\u6027\u4e3a undefined\u3002Note that some share options will not appear or work on the iOS simulator."),(0,l.kt)("p",null,"\u5728 Android \u4e2d\u540c\u6837\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u4f46\u8fd4\u56de\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"action"),"\u59cb\u7ec8\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Share.sharedAction"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content ",(0,l.kt)("div",{className:"label basic required"},"\u5fc5\u9700")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")," - \u8981\u5206\u4eab\u7684\u6d88\u606f",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"url")," - \u8981\u5206\u4eab\u7684\u7f51\u5740 ",(0,l.kt)("div",{class:"label ios"},"iOS"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"title")," - \u6d88\u606f\u7684\u6807\u9898 ",(0,l.kt)("div",{class:"label android"},"Android"),(0,l.kt)("hr",null),(0,l.kt)("inlineCode",{parentName:"td"},"url"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"message"),"\u81f3\u5c11\u8981\u63d0\u4f9b\u4e00\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dialogTitle")," ",(0,l.kt)("div",{class:"label android"},"Android"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"excludedActivityTypes")," ",(0,l.kt)("div",{class:"label ios"},"iOS"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"subject")," - \u901a\u8fc7\u90ae\u4ef6\u5206\u4eab\u7684\u6807\u9898 ",(0,l.kt)("div",{class:"label ios"},"iOS"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"tintColor")," ",(0,l.kt)("div",{class:"label ios"},"iOS"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("h3",{id:"sharedaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"sharedAction")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static sharedAction\n")),(0,l.kt)("p",null,"\u8868\u793a\u5185\u5bb9\u5df2\u6210\u529f\u5206\u4eab\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dismissedaction-ios"},(0,l.kt)("inlineCode",{parentName:"h3"},"dismissedAction")," ",(0,l.kt)("div",{class:"label ios"},"iOS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction\n")),(0,l.kt)("p",null,"\u8868\u793a\u5bf9\u8bdd\u6846\u88ab\u53d6\u6d88\u3002"))}f.isMDXComponent=!0}}]);