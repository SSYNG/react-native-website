"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71331],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>v});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},m=void 0,f={unversionedId:"native-modules-setup",id:"version-0.64/native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e",description:"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find this guide useful.",source:"@site/versioned_docs/version-0.64/native-module-setup.md",sourceDirName:".",slug:"/native-modules-setup",permalink:"/docs/0.64/native-modules-setup",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-module-setup.md",tags:[],version:"0.64",frontMatter:{id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},sidebar:"version-0.64/docs",previous:{title:"iOS \u539f\u751f\u6a21\u5757",permalink:"/docs/0.64/native-modules-ios"},next:{title:"Android \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/0.64/native-components-android"}},b={},v=[],y={toc:v};function h(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find ",(0,n.kt)("a",c({parentName:"p"},{href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"}),"this guide")," useful."),(0,n.kt)("p",null,"To get set up with the basic project structure for a native module we will use the community tool called ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/bob"}),"Bob"),". You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," script:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"npx @react-native-community/bob create react-native-awesome-module\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-awesome-module")," is the name you would like for the new module. After doing this you will navigate into ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-awesome-module")," folder and bootstrap the example project by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"yarn bootstrap\n")),(0,n.kt)("p",null,"When the bootstrap is done, you will be able to start the example app by executing one of the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"# Android app\nyarn example android\n# iOS app\nyarn example ios\n")),(0,n.kt)("p",null,"When all steps above are done, you will be able to continue with ",(0,n.kt)("a",c({parentName:"p"},{href:"native-modules-android"}),"Android Native Modules")," or ",(0,n.kt)("a",c({parentName:"p"},{href:"native-modules-ios"}),"iOS Native Modules")," guides to add in some code."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For a less opinionated setup, have a look at the third party tool ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/brodybits/create-react-native-module"}),"create-react-native-module"),".")))}h.isMDXComponent=!0}}]);