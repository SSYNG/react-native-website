"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[52046],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,y=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>p,metadata:()=>y,toc:()=>b});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const p={id:"publishing-forks",title:"\u53d1\u5e03\u81ea\u5df1\u5b9a\u5236\u7684ReactNative\u5305"},h=void 0,y={unversionedId:"publishing-forks",id:"version-0.66/publishing-forks",title:"\u53d1\u5e03\u81ea\u5df1\u5b9a\u5236\u7684ReactNative\u5305",description:"TL;DR",source:"@site/versioned_docs/version-0.66/publishing.md",sourceDirName:".",slug:"/publishing-forks",permalink:"/docs/0.66/publishing-forks",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/publishing.md",tags:[],version:"0.66",frontMatter:{id:"publishing-forks",title:"\u53d1\u5e03\u81ea\u5df1\u5b9a\u5236\u7684ReactNative\u5305"}},f={},b=[{value:"TL;DR",id:"tldr",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Building",id:"building",level:2},{value:"Publishing to Maven/Nexus",id:"publishing-to-mavennexus",level:3},{value:"Publishing to a git fork dependency",id:"publishing-to-a-git-fork-dependency",level:3}],m={toc:b};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},m),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("h2",d({},{id:"tldr"}),"TL;DR"),(0,r.kt)("p",null,"There is a docker image that helps you build the required Android sources without installing any additional tooling (other than ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.docker.com/install/"}),"Docker"),", which can be committed to a git branch as a fully functional React Native fork release."),(0,r.kt)("p",null,"Run this from a fork of the React Native ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native"}),"repo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"git checkout -d release/my-react-native-release\ndocker run --rm --name rn-build -v $PWD:/pwd -w /pwd reactnativecommunity/react-native-android /bin/sh -c \"./gradlew installArchives\"\ngit add android --force\ngit commit -a -m 'my react native forked release'\ngit push\n")),(0,r.kt)("p",null,"Install it in your app project package.json."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'"dependencies": {\n    ...\n    "react-native": "myName/react-native#release/my-react-native-release"\n}\n')),(0,r.kt)("h2",d({},{id:"rationale"}),"Rationale"),(0,r.kt)("p",null,"The recommended approach to working with React Native is to always update to the latest version. No support is provided on older versions and if you run into issues the contributors will always ask you to upgrade to the latest version before even looking at your particular issue. Sometimes, though, you are temporarily stuck on an older React Native version, but you require some changes from newer versions urgently (bugfixes) without having to do a full upgrade right now. This situation should be short lived by definition and once you have the time, the real solution is to upgrade to the latest version."),(0,r.kt)("p",null,"With this goal of a shortlived fork of React Native in mind, you can publish your own version of React Native. The facebook/react-native repository contains all the dependencies required to be used directly as a git dependency, except for the Android React Native library binary (.aar)."),(0,r.kt)("h2",d({},{id:"building"}),"Building"),(0,r.kt)("p",null,"This binary needs to become available in your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/react-native/android")," folder or directly in your gradle dependency of your Android app. You can achieve this in one of two ways: Git dependency branch, Android binary dependency through Maven."),(0,r.kt)("p",null,"To build the .aar React Native library, you can follow the steps to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/0.66/building-from-source"}),"build from source")," first to install all required tooling. Then to build the actual library, you can run the following in the root of your react-native checkout:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-$bash"}),"./gradlew :ReactAndroid:installArchives --no-daemon\n")),(0,r.kt)("p",null,"If you don't want to install the required toolchain for building from source, you can use a prebuilt docker image to create a react native binary;"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'docker run --rm --name rn-build -v $PWD:/pwd -w /pwd reactnativecommunity/react-native-android /bin/sh -c "./gradlew installArchives"\n')),(0,r.kt)("p",null,"If you haven't used the Android NDK before or if you have a NDK version not exactly matching the required version for building React Native, this is the recommended approach."),(0,r.kt)("p",null,"The resulting binary can be made available to app projects in one of the two ways described below."),(0,r.kt)("h3",d({},{id:"publishing-to-mavennexus"}),"Publishing to Maven/Nexus"),(0,r.kt)("p",null,"Upload the binaries from the ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," folder to maven and point your Android app project gradle dependency for React Native to your Maven/Nexus dependency."),(0,r.kt)("h3",d({},{id:"publishing-to-a-git-fork-dependency"}),"Publishing to a git fork dependency"),(0,r.kt)("p",null,"Instead of uploading to Maven/Nexus, you can add the binaries built in the previous steps to git, by changing the .gitignore and committing the binaries to your forked branch. This allows you to make your fork into a functioning git dependency for React Native app projects."),(0,r.kt)("p",null,"If you have changes that you want to actually merge to React Native, make them on another branch first and open a PR. To start making your dependency branch, make sure you are on a 'release/my-forked-release' branch, then merge any commits that you need from yourself or others into this branch. This release branch should never be merged into any other branch."),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-$bash"}),"# create .aar, then:\ngit add android --force\ngit commit -m 'my release commit'\ngit push\n")),(0,r.kt)("p",null,"Now you can use this branch as a git dependency in your app project, by pointing your package.json dependency to this branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'"dependencies": {\n    ...\n    "react-native": "my-name/react-native#release/my-forked-release,\n    ...\n}\n')),(0,r.kt)("p",null,"No other modifications to your dependencies should be necessary for your native changes to be included in your project."))}v.isMDXComponent=!0}}]);