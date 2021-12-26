"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[89517],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45981:function(e,t,n){var r=n(161),a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=a?"ios":"android",i=a?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var r=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},12120:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(52685),a=n(27378),l=n(76457),o=n(84956);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(92373),s=n(38944),c="tabItem_c0e5";function d(e){var t,n,l,o=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),N=y.tabGroupChoices,w=y.setTabGroupChoices,C=(0,a.useState)(g),T=C[0],O=C[1],x=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=N[h];null!=E&&E!==T&&k.some((function(e){return e.value===E}))&&O(E)}var q=function(e){var t=e.currentTarget,n=x.indexOf(t),r=k[n].value;r!==T&&(S(t),O(r),null!=h&&w(h,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:q,onClick:q},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},61583:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(52685),a=n(1244),l=(n(27378),n(35318)),o=n(12120),i=n(70517),u=n(45981),s=["components"],c={id:"appearance",title:"Appearance"},d=void 0,p={unversionedId:"appearance",id:"version-0.63/appearance",title:"Appearance",description:"The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).",source:"@site/versioned_docs/version-0.63/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/0.63/appearance",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appearance.md",tags:[],version:"0.63",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"version-0.63/api",previous:{title:"Animated.ValueXY",permalink:"/docs/0.63/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/0.63/appregistry"}},m=[{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>getColorScheme()</code>",id:"getcolorscheme",children:[],level:3},{value:"<code>addChangeListener()</code>",id:"addchangelistener",children:[],level:3},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",children:[{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(64.44%), sunnylqm(35.56%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm6444-sunnylqm3556",children:[],level:5}],level:3}],level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Appearance } from "react-native";\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,l.kt)("h4",{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"},"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),(0,l.kt)(o.Z,{groupId:"guide",defaultValue:"web",values:u.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"web",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",(0,l.kt)("a",{parentName:"p",href:"https://drafts.csswg.org/mediaqueries-5/"},"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},(0,l.kt)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),(0,l.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"},"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),(0,l.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"},"Dark Mode")," preference on iOS 13 devices and higher.")))),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Appearance")," module to determine if the user prefers a dark color scheme:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'const colorScheme = Appearance.getColorScheme();\nif (colorScheme === "dark") {\n  // Use dark color scheme\n}\n')),(0,l.kt)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,l.kt)("a",{parentName:"p",href:"usecolorscheme"},(0,l.kt)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,l.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,l.kt)("h1",{id:"reference"},"Reference"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getcolorscheme"},(0,l.kt)("inlineCode",{parentName:"h3"},"getColorScheme()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static getColorScheme()\n")),(0,l.kt)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,l.kt)("p",null,"Supported color schemes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"light"')),(0,l.kt)("td",{parentName:"tr",align:null},"The user prefers a light color theme.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"dark"')),(0,l.kt)("td",{parentName:"tr",align:null},"The user prefers a dark color theme.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The user has not indicated a preferred color theme.")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"getColorScheme()"),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"light"),"\u3002")),(0,l.kt)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"usecolorscheme"},(0,l.kt)("inlineCode",{parentName:"a"},"useColorScheme")),"\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"addchangelistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"addChangeListener()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static addChangeListener(listener)\n")),(0,l.kt)("p",null,"Add an event handler that is fired when appearance preferences change."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removechangelistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"removeChangeListener()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeChangeListener(listener)\n")),(0,l.kt)("p",null,"Remove an event handler."),(0,l.kt)("hr",null),(0,l.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm6444-sunnylqm3556"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,l.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(64.44%), ",(0,l.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(35.56%)"))}f.isMDXComponent=!0}}]);