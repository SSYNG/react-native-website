"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[21111],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(52685),a=n(1244),o=(n(27378),n(35318)),i=["components"],u={id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},l=void 0,c={unversionedId:"native-modules-setup",id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e",description:"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find this guide useful.",source:"@site/../cndocs/native-module-setup.md",sourceDirName:".",slug:"/native-modules-setup",permalink:"/docs/next/native-modules-setup",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-module-setup.md",tags:[],version:"current",frontMatter:{id:"native-modules-setup",title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e"},sidebar:"docs",previous:{title:"iOS \u539f\u751f\u6a21\u5757",permalink:"/docs/next/native-modules-ios"},next:{title:"Android \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/next/native-components-android"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Native modules are usually distributed as npm packages, except that on top of the usual Javascript they will include some native code per platform. To understand more about npm packages you may find ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"},"this guide")," useful."),(0,o.kt)("p",null,"To get set up with the basic project structure for a native module we will use the community tool called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/bob"},"Bob"),". You can go ahead further and dive deep into how that library works, but for our needs we will only execute the basic ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx @react-native-community/bob create react-native-awesome-module\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-awesome-module")," is the name you would like for the new module. After doing this you will navigate into ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-awesome-module")," folder and bootstrap the example project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn bootstrap\n")),(0,o.kt)("p",null,"When the bootstrap is done, you will be able to start the example app by executing one of the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Android app\nyarn example android\n# iOS app\nyarn example ios\n")),(0,o.kt)("p",null,"When all steps above are done, you will be able to continue with ",(0,o.kt)("a",{parentName:"p",href:"native-modules-android"},"Android Native Modules")," or ",(0,o.kt)("a",{parentName:"p",href:"native-modules-ios"},"iOS Native Modules")," guides to add in some code."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a less opinionated setup, have a look at the third party tool ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brodybits/create-react-native-module"},"create-react-native-module"),".")))}d.isMDXComponent=!0}}]);