"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[84034],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,c=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>N});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))o.call(t,a)&&d(e,a,t[a]);return e};const u={id:"appregistry",title:"AppRegistry"},m=void 0,c={unversionedId:"appregistry",id:"version-0.68/appregistry",title:"AppRegistry",description:"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee",source:"@site/versioned_docs/version-0.68/appregistry.md",sourceDirName:".",slug:"/appregistry",permalink:"/docs/0.68/appregistry",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appregistry.md",tags:[],version:"0.68",frontMatter:{id:"appregistry",title:"AppRegistry"},sidebar:"api",previous:{title:"Appearance",permalink:"/docs/0.68/appearance"},next:{title:"AppState",permalink:"/docs/0.68/appstate"}},g={},N=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>cancelHeadlessTask()</code>",id:"cancelheadlesstask",level:3},{value:"<code>enableArchitectureIndicator()</code>",id:"enablearchitectureindicator",level:3},{value:"<code>getAppKeys()</code>",id:"getappkeys",level:3},{value:"<code>getRegistry()</code>",id:"getregistry",level:3},{value:"<code>getRunnable()</code>",id:"getrunnable",level:3},{value:"<code>getSectionKeys()</code>",id:"getsectionkeys",level:3},{value:"<code>getSections()</code>",id:"getsections",level:3},{value:"<code>registerCancellableHeadlessTask()</code>",id:"registercancellableheadlesstask",level:3},{value:"<code>registerComponent()</code>",id:"registercomponent",level:3},{value:"<code>registerConfig()</code>",id:"registerconfig",level:3},{value:"<code>registerHeadlessTask()</code>",id:"registerheadlesstask",level:3},{value:"<code>registerRunnable()</code>",id:"registerrunnable",level:3},{value:"<code>registerSection()</code>",id:"registersection",level:3},{value:"<code>runApplication()</code>",id:"runapplication",level:3},{value:"<code>setComponentProviderInstrumentationHook()</code>",id:"setcomponentproviderinstrumentationhook",level:3},{value:"<code>setWrapperComponentProvider()</code>",id:"setwrappercomponentprovider",level:3},{value:"<code>startHeadlessTask()</code>",id:"startheadlesstask",level:3},{value:"<code>unmountApplicationComponentAtRootTag()</code>",id:"unmountapplicationcomponentatroottag",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"AppConfig",id:"appconfig",level:3},{value:"Registry",id:"registry",level:3},{value:"Runnable",id:"runnable",level:3},{value:"Runnables",id:"runnables",level:3},{value:"Task",id:"task",level:3},{value:"TaskCanceller",id:"taskcanceller",level:3},{value:"TaskCancelProvider",id:"taskcancelprovider",level:3},{value:"TaskProvider",id:"taskprovider",level:3}],b={toc:N};function h(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&o.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=k(k({},b),d),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("div",{class:"banner-native-code-required"},(0,n.kt)("h3",null,"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee"),(0,n.kt)("p",null,"If you are using the managed ",(0,n.kt)("code",null,"expo-cli")," workflow there is only ever one entry component registered with ",(0,n.kt)("code",null,"AppRegistry")," and it is handled automatically, you do not need to use this API.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AppRegistry"),"\u662f\u6240\u6709 React Native \u5e94\u7528\u7684 JS \u5165\u53e3\u3002\u5e94\u7528\u7684\u6839\u7ec4\u4ef6\u5e94\u5f53\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),"\u65b9\u6cd5\u6ce8\u518c\u81ea\u5df1\uff0c\u7136\u540e\u539f\u751f\u7cfb\u7edf\u624d\u53ef\u4ee5\u52a0\u8f7d\u5e94\u7528\u7684\u4ee3\u7801\u5305\u5e76\u4e14\u5728\u542f\u52a8\u5b8c\u6210\u4e4b\u540e\u901a\u8fc7\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"AppRegistry.runApplication"),"\u6765\u771f\u6b63\u8fd0\u884c\u5e94\u7528\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"import { Text, AppRegistry } from 'react-native';\n\nconst App = (props) => (\n  <View>\n    <Text>App1</Text>\n  </View>\n);\n\nAppRegistry.registerComponent('Appname', () => App);\n")),(0,n.kt)("p",null,"\u8981\u201c\u7ed3\u675f\u201d\u4e00\u4e2a\u5e94\u7528\u5e76\u9500\u6bc1\u89c6\u56fe\u7684\u8bdd\uff0c\u8bf7\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"AppRegistry.unmountApplicationComponentAtRootTag"),"\u65b9\u6cd5\uff0c\u53c2\u6570\u4e3a\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"runApplication"),"\u4e2d\u4f7f\u7528\u7684\u6807\u7b7e\u540d\u3002\u5b83\u4eec\u5fc5\u987b\u4e25\u683c\u5339\u914d\u3002"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AppRegistry"),"\u5e94\u5f53\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"require"),"\u5e8f\u5217\u4e2d\u5c3d\u53ef\u80fd\u65e9\u7684\u88ab require \u5230\uff0c\u4ee5\u786e\u4fdd JS \u8fd0\u884c\u73af\u5883\u5728\u5176\u5b83\u6a21\u5757\u4e4b\u524d\u88ab\u51c6\u5907\u597d\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",k({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",k({},{id:"cancelheadlesstask"}),(0,n.kt)("inlineCode",{parentName:"h3"},"cancelHeadlessTask()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static cancelHeadlessTask(taskId, taskKey)\n")),(0,n.kt)("p",null,"Only called from native code. Cancels a headless task. @param taskId the native id for this task instance that was used when startHeadlessTask was called @param taskKey the key for the task that was used when startHeadlessTask was called"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskId ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The native id for this task instance that was used when ",(0,n.kt)("inlineCode",{parentName:"td"},"startHeadlessTask")," was called.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The key for the task that was used when ",(0,n.kt)("inlineCode",{parentName:"td"},"startHeadlessTask")," was called.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"enablearchitectureindicator"}),(0,n.kt)("inlineCode",{parentName:"h3"},"enableArchitectureIndicator()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static enableArchitectureIndicator(enabled)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enabled ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"getappkeys"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getAppKeys()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static getAppKeys()\n")),(0,n.kt)("p",null,"Returns an Array of AppKeys"),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"getregistry"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getRegistry()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static getRegistry()\n")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("a",k({parentName:"p"},{href:"appregistry#registry"}),"Registry")," object."),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"getrunnable"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getRunnable()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static getRunnable(appKey)\n")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("a",k({parentName:"p"},{href:"appregistry#runnable"}),"Runnable")," object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"getsectionkeys"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getSectionKeys()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static getSectionKeys()\n")),(0,n.kt)("p",null,"Returns an array of strings."),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"getsections"}),(0,n.kt)("inlineCode",{parentName:"h3"},"getSections()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static getSections()\n")),(0,n.kt)("p",null,"Returns a ",(0,n.kt)("a",k({parentName:"p"},{href:"appregistry#runnables"}),"Runnables")," object."),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"registercancellableheadlesstask"}),(0,n.kt)("inlineCode",{parentName:"h3"},"registerCancellableHeadlessTask()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static registerCancellableHeadlessTask(taskKey, taskProvider, taskCancelProvider)\n")),(0,n.kt)("p",null,"Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskKey ",(0,n.kt)("div",{class:"label basic required two-lines"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The native id for this task instance that was used when startHeadlessTask was called.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskProvider ",(0,n.kt)("div",{class:"label basic required two-lines"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"appregistry#taskprovider"}),"TaskProvider")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskCancelProvider ",(0,n.kt)("div",{class:"label basic required two-lines"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"appregistry#taskcancelprovider"}),"TaskCancelProvider")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"registercomponent"}),(0,n.kt)("inlineCode",{parentName:"h3"},"registerComponent()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static registerComponent(appKey, componentProvider, section?)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"componentProvider ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ComponentProvider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"section"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"registerconfig"}),(0,n.kt)("inlineCode",{parentName:"h3"},"registerConfig()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static registerConfig(config)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"config ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"appregistry#appconfig"}),"AppConfig"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"registerheadlesstask"}),(0,n.kt)("inlineCode",{parentName:"h3"},"registerHeadlessTask()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static registerHeadlessTask(taskKey, taskProvider)\n")),(0,n.kt)("p",null,"Register a headless task. A headless task is a bit of code that runs without a UI."),(0,n.kt)("p",null,"This is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskKey",(0,n.kt)("br",null),(0,n.kt)("div",{class:"label basic required two-lines"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The native id for this task instance that was used when startHeadlessTask was called.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskProvider",(0,n.kt)("br",null),(0,n.kt)("div",{class:"label basic required two-lines"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"appregistry#taskprovider"}),"TaskProvider")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"A promise returning function that takes some data passed from the native side as the only argument. When the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"registerrunnable"}),(0,n.kt)("inlineCode",{parentName:"h3"},"registerRunnable()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static registerRunnable(appKey, run)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"run ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"registersection"}),(0,n.kt)("inlineCode",{parentName:"h3"},"registerSection()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static registerSection(appKey, component)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"component ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ComponentProvider")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"runapplication"}),(0,n.kt)("inlineCode",{parentName:"h3"},"runApplication()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static runApplication(appKey, appParameters)\n")),(0,n.kt)("p",null,"\u52a0\u8f7d JavaScript bundle \u5e76\u8fd0\u884c\u5e94\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appParameters ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"any")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"setcomponentproviderinstrumentationhook"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setComponentProviderInstrumentationHook()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setComponentProviderInstrumentationHook(hook)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"hook ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("p",null,"A valid ",(0,n.kt)("inlineCode",{parentName:"p"},"hook")," function accepts the following as arguments:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"component ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ComponentProvider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"scopedPerformanceLogger ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"IPerformanceLogger")))),(0,n.kt)("p",null,"The function must also return a React Component."),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"setwrappercomponentprovider"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setWrapperComponentProvider()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setWrapperComponentProvider(provider)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"provider ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ComponentProvider")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"startheadlesstask"}),(0,n.kt)("inlineCode",{parentName:"h3"},"startHeadlessTask()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static startHeadlessTask(taskId, taskKey, data)\n")),(0,n.kt)("p",null,"Only called from native code. Starts a headless task."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskId ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The native id for this task instance to keep track of its execution.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"taskKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The key for the task to start.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"data ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"The data to pass to the task.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"unmountapplicationcomponentatroottag"}),(0,n.kt)("inlineCode",{parentName:"h3"},"unmountApplicationComponentAtRootTag()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static unmountApplicationComponentAtRootTag(rootTag)\n")),(0,n.kt)("p",null,"Stops an application when a view should be destroyed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"rootTag ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"number")))),(0,n.kt)("h2",k({},{id:"\u7c7b\u578b\u5b9a\u4e49"}),"\u7c7b\u578b\u5b9a\u4e49"),(0,n.kt)("h3",k({},{id:"appconfig"}),"AppConfig"),(0,n.kt)("p",null,"Application configuration for the ",(0,n.kt)("inlineCode",{parentName:"p"},"registerConfig")," method."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"appKey ",(0,n.kt)("div",{class:"label basic required"},"Required")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"component"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ComponentProvider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"run"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"section"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Every config is expected to set either ",(0,n.kt)("inlineCode",{parentName:"p"},"component")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"run")," function.")),(0,n.kt)("h3",k({},{id:"registry"}),"Registry"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"runnables"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"array of ",(0,n.kt)("a",k({parentName:"td"},{href:"appregistry#runnable"}),"Runnables"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"sections"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"array of strings")))),(0,n.kt)("h3",k({},{id:"runnable"}),"Runnable"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Properties:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"component"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"ComponentProvider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"run"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("h3",k({},{id:"runnables"}),"Runnables"),(0,n.kt)("p",null,"An object with key of ",(0,n.kt)("inlineCode",{parentName:"p"},"appKey")," and value of type of ",(0,n.kt)("a",k({parentName:"p"},{href:"appregistry#runnable"}),(0,n.kt)("inlineCode",{parentName:"a"},"Runnable")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("h3",k({},{id:"task"}),"Task"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Task")," is a function that accepts any data as argument and returns a Promise that resolves to ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("h3",k({},{id:"taskcanceller"}),"TaskCanceller"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskCanceller")," is a function that accepts no argument and returns void."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("h3",k({},{id:"taskcancelprovider"}),"TaskCancelProvider"),(0,n.kt)("p",null,"A valid ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskCancelProvider")," is a function that returns a ",(0,n.kt)("a",k({parentName:"p"},{href:"appregistry#taskcanceller"}),(0,n.kt)("inlineCode",{parentName:"a"},"TaskCanceller")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))),(0,n.kt)("h3",k({},{id:"taskprovider"}),"TaskProvider"),(0,n.kt)("p",null,"A valid ",(0,n.kt)("inlineCode",{parentName:"p"},"TaskProvider")," is a function that returns a ",(0,n.kt)("a",k({parentName:"p"},{href:"appregistry#task"}),(0,n.kt)("inlineCode",{parentName:"a"},"Task")),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"function")))))}h.isMDXComponent=!0}}]);