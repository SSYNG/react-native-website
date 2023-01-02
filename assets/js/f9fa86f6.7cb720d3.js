"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88377],{35318:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=o(a),m=l,c=s["".concat(d,".").concat(m)]||s[m]||k[m]||r;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},29684:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>b});var n=a(35318),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))o.call(e,a)&&u(t,a,e[a]);return t};const s={id:"statusbar",title:"StatusBar"},m=void 0,c={unversionedId:"statusbar",id:"version-0.69/statusbar",title:"StatusBar",description:"\u63a7\u5236\u5e94\u7528\u72b6\u6001\u680f\u7684\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.69/statusbar.md",sourceDirName:".",slug:"/statusbar",permalink:"/docs/0.69/statusbar",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/statusbar.md",tags:[],version:"0.69",frontMatter:{id:"statusbar",title:"StatusBar"},sidebar:"\u7ec4\u4ef6",previous:{title:"SectionList",permalink:"/docs/0.69/sectionlist"},next:{title:"Switch",permalink:"/docs/0.69/switch"}},N={},b=[{value:"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u9759\u6001 API",id:"\u9759\u6001-api",level:3},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"Props",id:"props",level:2},{value:"<code>animated</code>",id:"animated",level:3},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>barStyle</code>",id:"barstyle",level:3},{value:"<code>hidden</code>",id:"hidden",level:3},{value:"<code>networkActivityIndicatorVisible</code>",id:"networkactivityindicatorvisible",level:3},{value:"<code>showHideTransition</code>",id:"showhidetransition",level:3},{value:"<code>translucent</code>",id:"translucent",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>popStackEntry()</code>",id:"popstackentry",level:3},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",level:3},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",level:3},{value:"<code>setBackgroundColor()</code>",id:"setbackgroundcolor",level:3},{value:"<code>setBarStyle()</code>",id:"setbarstyle",level:3},{value:"<code>setHidden()</code>",id:"sethidden",level:3},{value:"<code>setNetworkActivityIndicatorVisible()</code>",id:"setnetworkactivityindicatorvisible",level:3},{value:"<code>setTranslucent()</code>",id:"settranslucent",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"StatusBarAnimation",id:"statusbaranimation",level:3},{value:"StatusBarStyle",id:"statusbarstyle",level:3}],g={toc:b};function h(t){var e,a=t,{components:l}=a,u=((t,e)=>{var a={};for(var n in t)d.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=k(k({},g),u),r(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u63a7\u5236\u5e94\u7528\u72b6\u6001\u680f\u7684\u7ec4\u4ef6\u3002"),(0,n.kt)("h3",k({},{id:"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879"}),"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("p",null,"\u7531\u4e8e",(0,n.kt)("inlineCode",{parentName:"p"},"StatusBar"),"\u53ef\u4ee5\u5728\u4efb\u610f\u89c6\u56fe\u4e2d\u52a0\u8f7d\uff0c\u53ef\u4ee5\u653e\u7f6e\u591a\u4e2a\u4e14\u540e\u52a0\u8f7d\u7684\u4f1a\u8986\u76d6\u5148\u52a0\u8f7d\u7684\u3002\u56e0\u6b64\u5728\u914d\u5408\u5bfc\u822a\u5668\u4f7f\u7528\u65f6\uff0c\u8bf7\u52a1\u5fc5\u8003\u8651\u6e05\u695a",(0,n.kt)("inlineCode",{parentName:"p"},"StatusBar"),"\u7684\u653e\u7f6e\u987a\u5e8f\u3002"),(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"StatusBar Android and iOS Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Text%2C%20StyleSheet%2C%20StatusBar%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnimport%20Constants%20from%20%5C%22expo-constants%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20styleTypes%20%3D%20%5B'default'%2C'dark-content'%2C%20'light-content'%5D%3B%5Cn%20%20const%20%5BvisibleStatusBar%2C%20setVisibleStatusBar%5D%20%3D%20useState(false)%3B%5Cn%20%20const%20%5BstyleStatusBar%2C%20setStyleStatusBar%5D%20%3D%20useState(styleTypes%5B0%5D)%3B%5Cn%5Cn%20%20const%20changeVisibilityStatusBar%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20setVisibleStatusBar(!visibleStatusBar)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20const%20changeStyleStatusBar%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20styleId%20%3D%20styleTypes.indexOf(styleStatusBar)%20%2B%201%3B%5Cn%5Cn%20%20%20%20if(styleId%20%3D%3D%3D%20styleTypes.length)%7B%5Cn%20%20%20%20%20%20return%20setStyleStatusBar(styleTypes%5B0%5D)%3B%5Cn%20%20%20%20%7D%5Cn%20%20%20%20return%20setStyleStatusBar(styleTypes%5BstyleId%5D)%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EStatusBar%20Style%3A%20%7BstyleStatusBar%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EStatusBar%20Visibility%3A%20%7B!visibleStatusBar%20%3F%20'Visible'%3A%20'Hidden'%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CStatusBar%20backgroundColor%3D%5C%22blue%5C%22%20barStyle%3D%7BstyleStatusBar%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%3E%5Cn%20%20%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7BvisibleStatusBar%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Toggle%20StatusBar%5C%22%20onPress%3D%7B()%20%3D%3E%20changeVisibilityStatusBar()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CButton%20title%3D%5C%22Change%20StatusBar%20Style%5C%22%20onPress%3D%7B()%20%3D%3E%20changeStyleStatusBar()%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20'%23ECF0F1'%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20buttonContainer%3A%7B%5Cn%20%20%20%20padding%3A%2010%5Cn%20%20%7D%2C%5Cn%20%20textStyle%3A%7B%5Cn%20%20%20%20textAlign%3A%20'center'%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("h3",k({},{id:"\u9759\u6001-api"}),"\u9759\u6001 API"),(0,n.kt)("p",null,"\u6709\u4e9b\u573a\u666f\u5e76\u4e0d\u9002\u5408\u4f7f\u7528\u7ec4\u4ef6\uff0c\u56e0\u6b64",(0,n.kt)("inlineCode",{parentName:"p"},"StatusBar"),"\u4e5f\u66b4\u9732\u4e86\u4e00\u4e2a\u9759\u6001 API\u3002\u7136\u800c\u4e0d\u63a8\u8350\u5927\u5bb6\u540c\u65f6\u901a\u8fc7\u9759\u6001 API \u548c\u7ec4\u4ef6\u6765\u5b9a\u4e49\u76f8\u540c\u7684\u5c5e\u6027\uff0c\u56e0\u4e3a\u9759\u6001 API \u5b9a\u4e49\u7684\u5c5e\u6027\u503c\u5728\u540e\u7eed\u7684\u6e32\u67d3\u4e2d\u4f1a\u88ab\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u503c\u6240\u8986\u76d6\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",k({},{id:"\u5e38\u91cf"}),"\u5e38\u91cf"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"currentHeight")," (\u4ec5\u9650 Android)\u72b6\u6001\u680f\u7684\u5f53\u524d\u9ad8\u5ea6\u3002"),(0,n.kt)("h2",k({},{id:"props"}),"Props"),(0,n.kt)("h3",k({},{id:"animated"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animated")),(0,n.kt)("p",null,"\u6307\u5b9a\u72b6\u6001\u680f\u7684\u53d8\u5316\u662f\u5426\u5e94\u4ee5\u52a8\u753b\u5f62\u5f0f\u5448\u73b0\u3002\u76ee\u524d\u652f\u6301\u8fd9\u51e0\u79cd\u6837\u5f0f\uff1abackgroundColor, barStyle \u548c hidden\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"backgroundcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,n.kt)("p",null,"\u72b6\u6001\u680f\u7684\u80cc\u666f\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/docs/0.69/colors"}),"color")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"barstyle"}),(0,n.kt)("inlineCode",{parentName:"h3"},"barStyle")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u72b6\u6001\u680f\u6587\u672c\u7684\u989c\u8272\u3002"),(0,n.kt)("p",null,"\u5728 Android \u4e0a\u6b64\u5c5e\u6027\u4ec5\u5bf9 6.0 \uff08API 23\uff09\u53ca\u4ee5\u4e0a\u7248\u672c\u751f\u6548\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enum('default', 'light-content', 'dark-content')"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"hidden"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hidden")),(0,n.kt)("p",null,"\u662f\u5426\u9690\u85cf\u72b6\u6001\u680f\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"networkactivityindicatorvisible"}),(0,n.kt)("inlineCode",{parentName:"h3"},"networkActivityIndicatorVisible")),(0,n.kt)("p",null,"\u6307\u5b9a\u662f\u5426\u663e\u793a\u7f51\u7edc\u6d3b\u52a8\u63d0\u793a\u7b26\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"showhidetransition"}),(0,n.kt)("inlineCode",{parentName:"h3"},"showHideTransition")),(0,n.kt)("p",null,"\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"hidden"),"\u5c5e\u6027\u6765\u663e\u793a\u6216\u9690\u85cf\u72b6\u6001\u680f\u65f6\u6240\u4f7f\u7528\u7684\u52a8\u753b\u6548\u679c\u3002\u9ed8\u8ba4\u503c\u4e3a'fade'\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"enum('fade', 'slide')"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"translucent"}),(0,n.kt)("inlineCode",{parentName:"h3"},"translucent")),(0,n.kt)("p",null,"\u6307\u5b9a\u72b6\u6001\u680f\u662f\u5426\u900f\u660e\u3002\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5e94\u7528\u4f1a\u5ef6\u4f38\u5230\u72b6\u6001\u680f\u4e4b\u4e0b\u7ed8\u5236\uff08\u5373\u6240\u8c13\u201c\u6c89\u6d78\u5f0f\u201d\u2014\u2014\u88ab\u72b6\u6001\u680f\u906e\u4f4f\u4e00\u90e8\u5206\uff09\u3002\u5e38\u548c\u5e26\u6709\u534a\u900f\u660e\u80cc\u666f\u8272\u7684\u72b6\u6001\u680f\u642d\u914d\u4f7f\u7528\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h2",k({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",k({},{id:"popstackentry"}),(0,n.kt)("inlineCode",{parentName:"h3"},"popStackEntry()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static popStackEntry(entry: any)\n")),(0,n.kt)("p",null,"Get and remove the last StatusBar entry from the stack."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"entry ",(0,n.kt)("div",{class:"label basic required"},"\u5fc5\u9700")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Entry returned from ",(0,n.kt)("inlineCode",{parentName:"td"},"pushStackEntry"),".")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"pushstackentry"}),(0,n.kt)("inlineCode",{parentName:"h3"},"pushStackEntry()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static pushStackEntry(props: any)\n")),(0,n.kt)("p",null,"\u5c06\u5f53\u524d\u5bfc\u822a\u680f\u7684\u5c5e\u6027\u538b\u5165\u6808\u4e2d\u4fdd\u5b58\u3002The return value should be passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"popStackEntry")," when complete."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"props ",(0,n.kt)("div",{class:"label basic required"},"\u5fc5\u9700")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the stack entry.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"replacestackentry"}),(0,n.kt)("inlineCode",{parentName:"h3"},"replaceStackEntry()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static replaceStackEntry(entry: any, props: any)\n")),(0,n.kt)("p",null,"Replace an existing StatusBar stack entry with new props."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"entry ",(0,n.kt)("div",{class:"label basic required"},"\u5fc5\u9700")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Entry returned from ",(0,n.kt)("inlineCode",{parentName:"td"},"pushStackEntry")," to replace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"props ",(0,n.kt)("div",{class:"label basic required"},"\u5fc5\u9700")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"any"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the replacement stack entry.")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"setbackgroundcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setBackgroundColor()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setBackgroundColor(color: string, [animated]: boolean)\n")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u72b6\u6001\u680f\u7684\u80cc\u666f\u8272\u3002\u4ec5\u9650 Android\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u80cc\u666f\u8272")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"animated"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f\u5426\u542f\u7528\u8fc7\u6e21\u52a8\u753b")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"setbarstyle"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setBarStyle()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setBarStyle(style: StatusBarStyle, [animated]: boolean)\n")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u72b6\u6001\u680f\u7684\u6837\u5f0f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"style"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/docs/0.69/statusbar#statusbarstyle"}),"StatusBarStyle")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u8981\u8bbe\u7f6e\u7684\u72b6\u6001\u680f\u6837\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"animated"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f\u5426\u542f\u7528\u8fc7\u6e21\u52a8\u753b")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"sethidden"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setHidden()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setHidden(hidden: boolean, [animation]: StatusBarAnimation)\n")),(0,n.kt)("p",null,"\u663e\u793a\uff0f\u9690\u85cf\u72b6\u6001\u680f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"hidden"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f\u5426\u9690\u85cf\u72b6\u6001\u680f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"animation"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),(0,n.kt)("a",k({parentName:"td"},{href:"/docs/0.69/statusbar#statusbaranimation"}),"StatusBarAnimation")),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6539\u53d8\u72b6\u6001\u680f\u663e\u793a\u72b6\u6001\u7684\u52a8\u753b\u8fc7\u6e21\u6548\u679c")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"setnetworkactivityindicatorvisible"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setNetworkActivityIndicatorVisible()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setNetworkActivityIndicatorVisible(visible: boolean)\n")),(0,n.kt)("p",null,"\u663e\u793a\uff0f\u9690\u85cf\u7f51\u7edc\u6d3b\u52a8\u6307\u793a\u5668\u3002\u4ec5\u9650 iOS\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"visible"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f\u5426\u663e\u793a\u7f51\u7edc\u6d3b\u52a8\u6307\u793a\u5668")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"settranslucent"}),(0,n.kt)("inlineCode",{parentName:"h3"},"setTranslucent()")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static setTranslucent(translucent: boolean)\n")),(0,n.kt)("p",null,"\u6307\u5b9a\u72b6\u6001\u680f\u662f\u5426\u900f\u660e\u3002\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5e94\u7528\u4f1a\u5728\u72b6\u6001\u680f\u4e4b\u4e0b\u7ed8\u5236\uff08\u5373\u6240\u8c13\u201c\u6c89\u6d78\u5f0f\u201d\u2014\u2014\u88ab\u72b6\u6001\u680f\u906e\u4f4f\u4e00\u90e8\u5206\uff09\u3002\u5e38\u548c\u5e26\u6709\u534a\u900f\u660e\u80cc\u666f\u8272\u7684\u72b6\u6001\u680f\u642d\u914d\u4f7f\u7528\u3002\u4ec5\u9650 Android\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"translucent"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Set as translucent.")))),(0,n.kt)("h2",k({},{id:"\u7c7b\u578b\u5b9a\u4e49"}),"\u7c7b\u578b\u5b9a\u4e49"),(0,n.kt)("h3",k({},{id:"statusbaranimation"}),"StatusBarAnimation"),(0,n.kt)("p",null,"\u72b6\u6001\u680f\u52a8\u753b\u8fc7\u6e21\u6548\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\\$Enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"none"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6ca1\u6709\u52a8\u753b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"fade"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6e10\u53d8\u6548\u679c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"slide"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u6ed1\u52a8\u6548\u679c")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"statusbarstyle"}),"StatusBarStyle"),(0,n.kt)("p",null,"\u72b6\u6001\u680f\u6837\u5f0f"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\\$Enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"default"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7684\u6837\u5f0f\uff08IOS \u4e3a\u767d\u5e95\u9ed1\u5b57\u3001Android \u4e3a\u9ed1\u5e95\u767d\u5b57\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"light-content"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u9ed1\u5e95\u767d\u5b57")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"dark-content"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u767d\u5e95\u9ed1\u5b57\uff08\u9700\u8981 Android API>=23\uff09")))),(0,n.kt)("hr",null))}h.isMDXComponent=!0}}]);