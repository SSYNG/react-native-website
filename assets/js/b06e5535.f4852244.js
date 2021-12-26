"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[52135],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12934:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=t(52685),i=t(1244),o=(t(27378),t(35318)),a=["components"],c={id:"running-on-simulator-ios",title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c"},u=void 0,l={unversionedId:"running-on-simulator-ios",id:"version-0.66/running-on-simulator-ios",title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c",description:"\u542f\u52a8\u6a21\u62df\u5668",source:"@site/versioned_docs/version-0.66/running-on-simulator-ios.md",sourceDirName:".",slug:"/running-on-simulator-ios",permalink:"/docs/running-on-simulator-ios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/running-on-simulator-ios.md",tags:[],version:"0.66",frontMatter:{id:"running-on-simulator-ios",title:"\u5728iOS\u6a21\u62df\u5668\u4e0a\u8fd0\u884c"},sidebar:"docs",previous:{title:"\u94fe\u63a5\u539f\u751f\u5e93",permalink:"/docs/linking-libraries-ios"},next:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/communication-ios"}},s=[{value:"\u542f\u52a8\u6a21\u62df\u5668",id:"\u542f\u52a8\u6a21\u62df\u5668",children:[],level:2},{value:"\u6307\u5b9a\u6a21\u62df\u7684\u8bbe\u5907\u7c7b\u578b",id:"\u6307\u5b9a\u6a21\u62df\u7684\u8bbe\u5907\u7c7b\u578b",children:[],level:2}],p={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u542f\u52a8\u6a21\u62df\u5668"},"\u542f\u52a8\u6a21\u62df\u5668"),(0,o.kt)("p",null,"\u5f53\u4f60\u5b8c\u6210\u4e86\u521d\u59cb\u5316 React Native \u65b0\u9879\u76ee\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npx react-native run-ios"),"\u6765\u542f\u52a8\u6a21\u62df\u5668\u3002\u5982\u679c\u4e00\u5207\u914d\u7f6e\u90fd\u6ca1\u6709\u95ee\u9898\uff0c\u5e94\u8be5\u5f88\u5feb\u5c31\u80fd\u770b\u5230\u4f60\u7684\u5e94\u7528\u5728 iOS \u6a21\u62df\u5668\u4e0a\u8fd0\u884c\u8d77\u6765\u3002"),(0,o.kt)("h2",{id:"\u6307\u5b9a\u6a21\u62df\u7684\u8bbe\u5907\u7c7b\u578b"},"\u6307\u5b9a\u6a21\u62df\u7684\u8bbe\u5907\u7c7b\u578b"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"--simulator"),'\u53c2\u6570\uff0c\u5728\u5176\u540e\u52a0\u4e0a\u8981\u4f7f\u7528\u7684\u8bbe\u5907\u540d\u79f0\u6765\u6307\u5b9a\u8981\u6a21\u62df\u7684\u8bbe\u5907\u7c7b\u578b\uff08\u76ee\u524d\u9ed8\u8ba4\u4e3a"iPhone 11"\uff09\u3002\u5982\u679c\u4f60\u8981\u6a21\u62df iPhone 4s\uff0c\u90a3\u4e48\u8fd9\u6837\u8fd0\u884c\u547d\u4ee4\u5373\u53ef\uff1a',(0,o.kt)("inlineCode",{parentName:"p"},'npx react-native run-ios --simulator "iPhone 4s"'),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u968f\u7740RN\u548cXcode\u7248\u672c\u8fed\u4ee3\u66f4\u65b0\uff0c\u9ed8\u8ba4\u548c\u53ef\u9009\u7684\u6a21\u62df\u8bbe\u5907\u53ef\u80fd\u6709\u53d8\u5316\u3002")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun simctl list devices"),"\u6765\u67e5\u770b\u5177\u4f53\u53ef\u7528\u7684\u8bbe\u5907\u540d\u79f0\u3002"))}m.isMDXComponent=!0}}]);