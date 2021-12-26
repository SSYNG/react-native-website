"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64921],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45981:function(e,n,t){var r=t(161),a=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=a?"ios":"android",i=a?"macos":o?"windows":"linux";n.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,n,t){var r=t(27378);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},12120:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(52685),a=t(27378),o=t(76457),l=t(84956);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(92373),c=t(38944),s="tabItem_c0e5";function d(e){var n,t,o,l=e.lazy,d=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),w=k.tabGroupChoices,O=k.setTabGroupChoices,C=(0,a.useState)(g),N=C[0],T=C[1],D=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=w[f];null!=x&&x!==N&&h.some((function(e){return e.value===x}))&&T(x)}var E=function(e){var n=e.currentTarget,t=D.indexOf(n),r=h[t].value;r!==N&&(S(n),T(r),null!=f&&O(f,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;t=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;t=D[a]||D[D.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,c.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function p(e){var n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1391:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return v}});var r=t(52685),a=t(1244),o=(t(27378),t(35318)),l=t(12120),i=t(70517),u=t(45981),c=["components"],s={id:"dynamiccolorios",title:"DynamicColorIOS"},d=void 0,p={unversionedId:"dynamiccolorios",id:"version-0.63/dynamiccolorios",title:"DynamicColorIOS",description:"The DynamicColorIOS function is a platform color type specific to iOS.",source:"@site/versioned_docs/version-0.63/dynamiccolorios.md",sourceDirName:".",slug:"/dynamiccolorios",permalink:"/docs/0.63/dynamiccolorios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dynamiccolorios.md",tags:[],version:"0.63",frontMatter:{id:"dynamiccolorios",title:"DynamicColorIOS"},sidebar:"version-0.63/api",previous:{title:"ActionSheetIOS",permalink:"/docs/0.63/actionsheetios"},next:{title:"Settings",permalink:"/docs/0.63/settings"}},m=[{value:"Developer notes",id:"developer-notes",children:[],level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(73.33%), sunnylqm(26.67%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm7333-sunnylqm2667",children:[],level:5}],level:2}],f={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is a platform color type specific to iOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"DynamicColorIOS({ light: color, dark: color });\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," takes a single argument as an object with two keys: ",(0,o.kt)("inlineCode",{parentName:"p"},"dark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"light"),'. These correspond to the colors you want to use for "light mode" and "dark mode" on iOS.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the future, more keys might become available for different user preferences, like high contrast.")),(0,o.kt)("p",null,"At runtime, the system will choose which of the two colors to display depending on the current system appearance settings. Dynamic colors are useful for branding colors or other app specific colors that still respond automatically to system setting changes."),(0,o.kt)("h4",{id:"developer-notes"},"Developer notes"),(0,o.kt)(l.Z,{groupId:"guide",defaultValue:"web",values:u.Z.getDevNotesTabs(["ios","web"]),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"web",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you\u2019re familiar with ",(0,o.kt)("inlineCode",{parentName:"p"},"@media (prefers-color-scheme: dark)")," in CSS, this is similar! Only instead of defining all the colors in a media query, you define which color to use under what circumstances right there where you're using it. Neat!"))),(0,o.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicColorIOS")," function is similar to the iOS native methods ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uicolor/3238040-colorwithdynamicprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"UIColor colorWithDynamicProvider:")))))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { DynamicColorIOS } from "react-native";\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: "lightskyblue",\n  light: "midnightblue",\n});\n')),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm7333-sunnylqm2667"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,o.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(73.33%), ",(0,o.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(26.67%)"))}v.isMDXComponent=!0}}]);