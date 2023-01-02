"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[44255],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,f=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},920:(e,t,r)=>{r.d(t,{ZP:()=>d});var n=r(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e};const h={toc:[]};function d(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",u({},{title:"\u6ce8\u610f",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}d.isMDXComponent=!0},66267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>f,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var n=r(35318),a=r(920),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={id:"landing-page",title:"Introduction"},f=void 0,m={unversionedId:"the-new-architecture/landing-page",id:"version-0.70/the-new-architecture/landing-page",title:"Introduction",description:"Starting from version 0.68, React Native provides the New Architecture, which offers developers new capabilities for building highly performant and responsive apps. Visit Why a New Architecture to learn more about what drove the decision to re-architect, and the benefits it provides.",source:"@site/versioned_docs/version-0.70/the-new-architecture/landing-page.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/landing-page",permalink:"/docs/the-new-architecture/landing-page",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/landing-page.md",tags:[],version:"0.70",frontMatter:{id:"landing-page",title:"Introduction"},sidebar:"docs",previous:{title:"\u76f4\u63a5\u64cd\u4f5c",permalink:"/docs/direct-manipulation"},next:{title:"Why A New Architecture",permalink:"/docs/the-new-architecture/why"}},w={},b=[{value:"Get started with the New Architecture",id:"get-started-with-the-new-architecture",level:2},{value:"For app developers",id:"for-app-developers",level:3},{value:"For library maintainers",id:"for-library-maintainers",level:3}],v={toc:b};function g(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),u),o(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"Starting from version 0.68, React Native provides the New Architecture, which offers developers new capabilities for building highly performant and responsive apps. Visit ",(0,n.kt)("a",h({parentName:"p"},{href:"why"}),"Why a New Architecture")," to learn more about what drove the decision to re-architect, and the benefits it provides."),(0,n.kt)("p",null,"In order to achieve these benefits, we had to rethink how Native Modules and Native Components work. This led us to develop the ",(0,n.kt)("a",h({parentName:"p"},{href:"pillars"}),"Pillars of the New Architecture"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"pillars-turbomodules"}),"TurboModules"),", a framework to support efficient and flexible integration with native code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"pillars-fabric-components"}),"Fabric renderer and components"),", which offer improved capabilities, cross-platform consistency, and performance in rendering"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"pillars-codegen"}),"Codegen"),", which generates boilerplate C++ required by the New Architecture, via static typing in JavaScript")),(0,n.kt)("h2",h({},{id:"get-started-with-the-new-architecture"}),"Get started with the New Architecture"),(0,n.kt)("h3",h({},{id:"for-app-developers"}),"For app developers"),(0,n.kt)("p",null,"To ",(0,n.kt)("strong",{parentName:"p"},"create a new app")," using the New Architecture, head over to ",(0,n.kt)("a",h({parentName:"p"},{href:"use-app-template"}),"Creating a New Architecture App"),", which will get you up and running in a few quick steps with the new app template."),(0,n.kt)("p",null,"To ",(0,n.kt)("strong",{parentName:"p"},"migrate an existing app")," to the New Architecture, follow ",(0,n.kt)("a",h({parentName:"p"},{href:"../new-architecture-intro"}),"Adopting the New Architecture"),"."),(0,n.kt)("h3",h({},{id:"for-library-maintainers"}),"For library maintainers"),(0,n.kt)("p",null,"First, read up on the core concepts outlined in the ",(0,n.kt)("a",h({parentName:"p"},{href:"pillars"}),"Pillars")," section."),(0,n.kt)("p",null,"Then, for a ",(0,n.kt)("strong",{parentName:"p"},"how-to guide")," on supporting the New Architecture, check out the ",(0,n.kt)("a",h({parentName:"p"},{href:"../new-architecture-library-intro"}),"Migration")," guide."),(0,n.kt)("p",null,"For information on ",(0,n.kt)("strong",{parentName:"p"},"supporting both the Old and New Architectures"),", see the ",(0,n.kt)("a",h({parentName:"p"},{href:"backward-compatibility"}),"Backwards Compatibility")," guide."))}g.isMDXComponent=!0}}]);