"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61032],{35318:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(m,i(i({ref:t},h),{},{components:r})):a.createElement(m,i({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38286:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&h(e,r,t[r]);return e};const u={toc:[]};function d(e){var t,r=e,{components:n}=r,h=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},u),h),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",p({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}d.isMDXComponent=!0},84390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>w,frontMatter:()=>d,metadata:()=>f,toc:()=>y});var a=r(35318),n=r(38286),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))h.call(t,r)&&p(e,r,t[r]);return e};const d={id:"why",title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784"},m=void 0,f={unversionedId:"the-new-architecture/why",id:"the-new-architecture/why",title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784",description:"The goal of the New Architecture is to solve some of the issues that afflicted the Old Architecture in terms of performance and flexibility. This section provides the basic context to understand the Old Architecture limitations and how it has been possible to overcome them with the New Architecture.",source:"@site/../cndocs/the-new-architecture/why.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/why",permalink:"/docs/next/the-new-architecture/why",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/why.md",tags:[],version:"current",frontMatter:{id:"why",title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/the-new-architecture/landing-page"},next:{title:"Creating a New Architecture App",permalink:"/docs/next/the-new-architecture/use-app-template"}},b={},y=[{value:"Old Architecture&#39;s Issues",id:"old-architectures-issues",level:2},{value:"New Architecture&#39;s Improvements",id:"new-architectures-improvements",level:2},{value:"Further Reading",id:"further-reading",level:2}],v={toc:y};function w(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&h.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),p),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)(n.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"The goal of the New Architecture is to solve some of the issues that afflicted the Old Architecture in terms of performance and flexibility. This section provides the basic context to understand the Old Architecture limitations and how it has been possible to overcome them with the New Architecture."),(0,a.kt)("p",null,"This is not a technical deep dive: for further technical information, refer to the ",(0,a.kt)("a",u({parentName:"p"},{href:"/architecture/overview"}),"Architecture")," tab of the website."),(0,a.kt)("h2",u({},{id:"old-architectures-issues"}),"Old Architecture's Issues"),(0,a.kt)("p",null,"The Old Architecture used to work by serializing all the data that has to be passed from the JS layer to the native layer using a component called ",(0,a.kt)("em",{parentName:"p"},"The Bridge"),". ",(0,a.kt)("em",{parentName:"p"},"The Bridge")," can be imagined as a bus where the producer layer sent some data for the consumer layer. The consumer could read the data, deserialize it and execute the required operations."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The Bridge")," had some intrinsic limitations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"It was asynchronous:"),' one layer submitted the data to the bridge and asynchronously "waited" for the other layer to process them, even when this was not really necessary.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"It was single threaded:")," JS used to work on a single thread, therefore the computation that happened in that world had to be performed on that single thread."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"It imposed extra overheads:")," everytime one layer had to use the other one, it had to serialize some data. The other layer had to deserialize them. The chosen format was JSON, for its simplicity and human-readability, but despite being lightweight, it was a cost to pay.")),(0,a.kt)("h2",u({},{id:"new-architectures-improvements"}),"New Architecture's Improvements"),(0,a.kt)("p",null,"The New Architecture dropped the concept of ",(0,a.kt)("em",{parentName:"p"},"The Bridge")," in favor of another communication mechanism: the ",(0,a.kt)("em",{parentName:"p"},"JavaScript Interface (JSI)"),". The ",(0,a.kt)("em",{parentName:"p"},"JSI")," is an interface that allows a JavaScript object to hold a reference to a C++ and viceversa."),(0,a.kt)("p",null,"Once an object has a reference to the other one, it can directly invoke methods on it. So, for example, a C++ object can now ask a JavaScript object to execute a method in the JavaScript world and viceversa."),(0,a.kt)("p",null,"This idea allowed to unlock several benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Synchronous execution:")," it is now possibile to execute synchronously those functions that should not have been asynchronous in the first place."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concurrency:")," it is possible from JavaScript to invoke functions that are executed on different thread."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lower overhead:")," the New Architecture don't have to serialize/deserialize the data anymore, therefore there are no serialization taxes to pay."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code sharing:")," by introducing C++, it is now possible to abstract all the platform agnostic code and to share it with ease between the plaforms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type safety:")," to make sure that JS can properly invoke methods on C++ objects and viceversa, a layer of code automatically generated has been added. The code is generated starting from some JS specification that must be typed through Flow or TypeScript.")),(0,a.kt)("p",null,"These advantages are the foundations of the ",(0,a.kt)("a",u({parentName:"p"},{href:"pillars-turbomodules"}),"TurboModule")," system and a jumping stone to further enhancements. For example, it has been possible to develop a new renderer which is faster and more performant: ",(0,a.kt)("a",u({parentName:"p"},{href:"/architecture/fabric-renderer"}),"Fabric")," and its ",(0,a.kt)("a",u({parentName:"p"},{href:"pillars-fabric-components"}),"Fabric Components"),"."),(0,a.kt)("h2",u({},{id:"further-reading"}),"Further Reading"),(0,a.kt)("p",null,"For a technical overview of the New Architecture, have a look at the ",(0,a.kt)("a",u({parentName:"p"},{href:"/architecture/overview"}),"Architecture tab"),"."),(0,a.kt)("p",null,"For more information on the Fabric Renderer, have a look at the ",(0,a.kt)("a",u({parentName:"p"},{href:"/architecture/fabric-renderer"}),"Fabric section"),"."))}w.isMDXComponent=!0}}]);