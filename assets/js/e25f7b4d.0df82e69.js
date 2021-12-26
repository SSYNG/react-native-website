"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[34989],{35318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},42634:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=t(52685),o=t(1244),r=(t(27378),t(35318)),a=["components"],s={id:"usewindowdimensions",title:"useWindowDimensions"},l=void 0,c={unversionedId:"usewindowdimensions",id:"version-0.63/usewindowdimensions",title:"useWindowDimensions",description:"useWindowDimensions automatically updates width and height values when screen size changes. You can get your application window's width and height like so:",source:"@site/versioned_docs/version-0.63/usewindowdimensions.md",sourceDirName:".",slug:"/usewindowdimensions",permalink:"/docs/0.63/usewindowdimensions",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/usewindowdimensions.md",tags:[],version:"0.63",frontMatter:{id:"usewindowdimensions",title:"useWindowDimensions"},sidebar:"version-0.63/api",previous:{title:"useColorScheme",permalink:"/docs/0.63/usecolorscheme"},next:{title:"BackHandler",permalink:"/docs/0.63/backhandler"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>fontScale</code>",id:"fontscale",children:[],level:3},{value:"<code>height</code>",id:"height",children:[],level:3},{value:"<code>scale</code>",id:"scale",children:[],level:3},{value:"<code>width</code>",id:"width",children:[{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(97.47%), sunnylqm(2.53%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9747-sunnylqm253",children:[],level:5}],level:3}],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useWindowDimensions } from "react-native";\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useWindowDimensions")," automatically updates ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," values when screen size changes. You can get your application window's width and height like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const windowWidth = useWindowDimensions().width;\nconst windowHeight = useWindowDimensions().height;\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("div",{className:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20window%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bwindow.height%7D%2C%20width%20-%20%24%7Bwindow.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-hooks#usedimensions"},"useDimensions")," hook from the community ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-hooks"},"React native hooks")," library aims to make handling screen/window size changes easier to work with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/DaniAkash/react-native-responsive-dimensions"},"React Native Responsive Dimensions")," also comes with responsive hooks.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"fontscale"},(0,r.kt)("inlineCode",{parentName:"h3"},"fontScale")),(0,r.kt)("p",null,"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().fontScale;\n")),(0,r.kt)("h3",{id:"height"},(0,r.kt)("inlineCode",{parentName:"h3"},"height")),(0,r.kt)("p",null,"The height in pixels of the window or screen your app occupies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().height;\n")),(0,r.kt)("h3",{id:"scale"},(0,r.kt)("inlineCode",{parentName:"h3"},"scale")),(0,r.kt)("p",null,"The pixel ratio of the device your app is running on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().scale;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," indicates PPI/DPI of 96 (76 on some platforms). ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," indicates a Retina or high DPI display.")),(0,r.kt)("h3",{id:"width"},(0,r.kt)("inlineCode",{parentName:"h3"},"width")),(0,r.kt)("p",null,"The width in pixels of the window or screen your app occupies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().width;\n")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9747-sunnylqm253"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(97.47%), ",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(2.53%)"))}p.isMDXComponent=!0}}]);