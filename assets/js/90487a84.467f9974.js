"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[74874],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},670:function(e,t,n){n.d(t,{ZP:function(){return m}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={toc:[]};function m(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},d),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Note for Mac M1 users"),(0,r.kt)("p",null,"Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo arch -x86_64 gem install ffi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"))),(0,r.kt)("p",null,"These commands install the ",(0,r.kt)("inlineCode",{parentName:"p"},"ffi")," package, to load dynamically-linked libraries and let you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," properly, and runs ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," with the proper architecture.")))}m.isMDXComponent=!0},67311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return f},default:function(){return k}});var r=n(35318),a=n(670),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"hermes",title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce"},h=void 0,b={unversionedId:"hermes",id:"hermes",title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce",description:"Hermes \u662f\u4e13\u95e8\u9488\u5bf9 React Native \u5e94\u7528\u800c\u4f18\u5316\u7684\u5168\u65b0\u5f00\u6e90 JavaScript \u5f15\u64ce\u3002\u5bf9\u4e8e\u5f88\u591a\u5e94\u7528\u6765\u8bf4\uff0c\u542f\u7528 Hermes \u5f15\u64ce\u53ef\u4ee5\u4f18\u5316\u542f\u52a8\u65f6\u95f4\uff0c\u51cf\u5c11\u5185\u5b58\u5360\u7528\u4ee5\u53ca\u7a7a\u95f4\u5360\u7528\u3002\u76ee\u524d Hermes \u662f\u4e00\u4e2a\u53ef\u9009\u7684\u7279\u6027\uff0c\u672c\u6587\u6863\u4f1a\u4e3a\u4f60\u4ecb\u7ecd\u5982\u4f55\u5c06\u5176\u542f\u7528\u3002",source:"@site/../cndocs/hermes.md",sourceDirName:".",slug:"/hermes",permalink:"/docs/next/hermes",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/hermes.md",tags:[],version:"current",frontMatter:{id:"hermes",title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce"},sidebar:"docs",previous:{title:"\u5b9a\u65f6\u5668",permalink:"/docs/next/timers"},next:{title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",permalink:"/docs/next/native-modules-intro"}},f=[{value:"\u542f\u7528 Hermes \u5f15\u64ce",id:"\u542f\u7528-hermes-\u5f15\u64ce",children:[{value:"Android",id:"android",children:[],level:3},{value:"iOS",id:"ios",children:[],level:3}],level:2},{value:"\u68c0\u67e5 Hermes \u5f15\u64ce\u662f\u5426\u542f\u7528",id:"\u68c0\u67e5-hermes-\u5f15\u64ce\u662f\u5426\u542f\u7528",children:[],level:2},{value:"\u4f7f\u7528 Chrome \u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u5de5\u5177\u6765\u8c03\u8bd5 Hermes \u4e2d\u8fd0\u884c\u7684 JS",id:"\u4f7f\u7528-chrome-\u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u5de5\u5177\u6765\u8c03\u8bd5-hermes-\u4e2d\u8fd0\u884c\u7684-js",children:[],level:2}],g={toc:f};function k(e){var t,o=e,{components:u}=o,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=d(d({},g),m),i(t,l({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("a",{href:"https://hermesengine.dev"},(0,r.kt)("img",{width:300,height:300,style:{float:"right",margin:"-30px 4px 0"},src:"/docs/assets/HermesLogo.svg"})),(0,r.kt)("p",null,(0,r.kt)("a",d({parentName:"p"},{href:"https://hermesengine.dev"}),"Hermes")," \u662f\u4e13\u95e8\u9488\u5bf9 React Native \u5e94\u7528\u800c\u4f18\u5316\u7684\u5168\u65b0\u5f00\u6e90 JavaScript \u5f15\u64ce\u3002\u5bf9\u4e8e\u5f88\u591a\u5e94\u7528\u6765\u8bf4\uff0c\u542f\u7528 Hermes \u5f15\u64ce\u53ef\u4ee5\u4f18\u5316\u542f\u52a8\u65f6\u95f4\uff0c\u51cf\u5c11\u5185\u5b58\u5360\u7528\u4ee5\u53ca\u7a7a\u95f4\u5360\u7528\u3002\u76ee\u524d Hermes \u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009\u7684"),"\u7279\u6027\uff0c\u672c\u6587\u6863\u4f1a\u4e3a\u4f60\u4ecb\u7ecd\u5982\u4f55\u5c06\u5176\u542f\u7528\u3002"),(0,r.kt)("p",null,"First, ensure you're using at least version 0.60.4 of React Native."),(0,r.kt)("p",null,"If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/upgrading"}),"Upgrading to new React Native Versions")," for how to do this. After upgrading the app, make sure everything works before trying to switch to Hermes."),(0,r.kt)("blockquote",null,(0,r.kt)("h2",d({parentName:"blockquote"},{id:"\u5173\u4e8e\u517c\u5bb9\u6027\u7684\u6ce8\u610f\u4e8b\u9879"}),"\u5173\u4e8e\u517c\u5bb9\u6027\u7684\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",{parentName:"blockquote"},"Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/hermes/releases"}),"Hermes releases")," strictly. Version mismatch can result in instant crash of your apps in the worst case scenario.")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",d({parentName:"blockquote"},{id:"\u5bf9\u4e8e-windows-\u7528\u6237\u7684\u6ce8\u610f\u4e8b\u9879"}),"\u5bf9\u4e8e Windows \u7528\u6237\u7684\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",{parentName:"blockquote"},"Hermes requires ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"}),"Microsoft Visual C++ 2015 Redistributable"))),(0,r.kt)("h2",d({},{id:"\u542f\u7528-hermes-\u5f15\u64ce"}),"\u542f\u7528 Hermes \u5f15\u64ce"),(0,r.kt)("h3",d({},{id:"android"}),"Android"),(0,r.kt)("p",null,"Edit your ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file and make the change illustrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-diff"}),'  project.ext.react = [\n      entryFile: "index.js",\n-     enableHermes: false  // clean and rebuild if changing\n+     enableHermes: true  // clean and rebuild if changing\n  ]\n')),(0,r.kt)("p",null,"Also, if you're using ProGuard, you will need to add these rules in ",(0,r.kt)("inlineCode",{parentName:"p"},"proguard-rules.pro")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n")),(0,r.kt)("p",null,"Next, if you've already built your app at least once, clean the build:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"$ cd android && ./gradlew clean\n")),(0,r.kt)("p",null,"That's it! You should now be able to develop and deploy your app as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-android\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",d({parentName:"blockquote"},{id:"\u5173\u4e8e-android-app-bundles-\u683c\u5f0f\u7684\u652f\u6301"}),"\u5173\u4e8e Android App Bundles \u683c\u5f0f\u7684\u652f\u6301"),(0,r.kt)("p",{parentName:"blockquote"},"Android app bundles \u683c\u5f0f\u4ece react-native 0.62.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("h3",d({},{id:"ios"}),"iOS"),(0,r.kt)("p",null,"Since React Native 0.64, Hermes also runs on iOS. To enable Hermes for iOS, edit your ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/Podfile")," file and make the change illustrated below:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"   use_react_native!(\n     :path => config[:reactNativePath],\n     # to enable hermes on iOS, change `false` to `true` and then install pods\n-    :hermes_enabled => false\n+    :hermes_enabled => true\n   )\n")),(0,r.kt)("p",null,"Next, install the Hermes pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"$ cd ios && pod install\n")),(0,r.kt)(a.ZP,{mdxType:"M1Cocoapods"}),(0,r.kt)("p",null,"That's it! You should now be able to develop and deploy your app as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-ios\n")),(0,r.kt)("h2",d({},{id:"\u68c0\u67e5-hermes-\u5f15\u64ce\u662f\u5426\u542f\u7528"}),"\u68c0\u67e5 Hermes \u5f15\u64ce\u662f\u5426\u542f\u7528"),(0,r.kt)("p",null,"If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Where to find JS engine status in AwesomeProject",src:n(74485).Z})),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesInternal")," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const isHermes = () => !!global.HermesInternal;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using a non-standard way of loading the JS bundle, it is possible that the ",(0,r.kt)("inlineCode",{parentName:"p"},"HermesInternal")," variable is available but you aren't using the highly optimised pre-compiled bytecode. Confirm that you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},".hbc")," file and also benchmark the before/after as detailed below.")),(0,r.kt)("p",null,"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-android --variant release\n")),(0,r.kt)("p",null,"or for iOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-ios --configuration Release\n")),(0,r.kt)("p",null,"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."),(0,r.kt)("h2",d({},{id:"\u4f7f\u7528-chrome-\u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u5de5\u5177\u6765\u8c03\u8bd5-hermes-\u4e2d\u8fd0\u884c\u7684-js"}),"\u4f7f\u7528 Chrome \u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u5de5\u5177\u6765\u8c03\u8bd5 Hermes \u4e2d\u8fd0\u884c\u7684 JS"),(0,r.kt)("p",null,"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note that this is very different with the "Remote JS Debugging" from the In-App Developer Menu documented in the ',(0,r.kt)("a",d({parentName:"p"},{href:"debugging#debugging-using-a-custom-javascript-debugger"}),"Debugging")," section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop).")),(0,r.kt)("p",null,"Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8081"),", but this is ",(0,r.kt)("a",d({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration"}),"configurable"),". When running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," the address is written to stdout on startup."),(0,r.kt)("p",null,"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://inspect")," in a Chrome browser instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure...")," button to add the Metro server address (typically ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:8081")," as described above)."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure button in Chrome DevTools devices page",src:n(80237).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dialog for adding Chrome DevTools network targets",src:n(99615).Z})),(0,r.kt)("ol",d({},{start:3}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',(0,r.kt)("img",{alt:"Target inspect link",src:n(95887).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",(0,r.kt)("img",{alt:"Pause button in debug tools",src:n(28301).Z})))))}k.isMDXComponent=!0},74485:function(e,t,n){t.Z=n.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},80237:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},95887:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},99615:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},28301:function(e,t,n){t.Z=n.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"}}]);