"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[88617],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,b=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38286:(e,t,r)=>{r.d(t,{ZP:()=>f});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e};const u={toc:[]};function f(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},u),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",d({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,n.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,n.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,n.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}f.isMDXComponent=!0},16663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>v,frontMatter:()=>f,metadata:()=>m,toc:()=>g});var n=r(35318),a=r(38286),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&d(e,r,t[r]);return e};const f={id:"new-architecture-app-renderer-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric"},b=void 0,m={unversionedId:"new-architecture-app-renderer-ios",id:"new-architecture-app-renderer-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric",description:"This section will go over how to enable the new renderer in your app. Make sure your application meets all the prerequisites.",source:"@site/../cndocs/new-architecture-app-renderer-ios.md",sourceDirName:".",slug:"/new-architecture-app-renderer-ios",permalink:"/docs/next/new-architecture-app-renderer-ios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-ios.md",tags:[],version:"current",frontMatter:{id:"new-architecture-app-renderer-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric"},sidebar:"docs",previous:{title:"\u5728 Android \u4e0a\u542f\u7528 Fabric",permalink:"/docs/next/new-architecture-app-renderer-android"},next:{title:"React 18 \u4e0e React Native",permalink:"/docs/next/react-18-and-react-native"}},h={},g=[{value:"1. Enable Fabric in Podfile",id:"1-enable-fabric-in-podfile",level:2},{value:"2. Update your root view",id:"2-update-your-root-view",level:2},{value:"3. Run pod install",id:"3-run-pod-install",level:2}],w={toc:g};function v(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},w),d),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"This section will go over how to enable the new renderer in your app. Make sure your application meets all the ",(0,n.kt)("a",u({parentName:"p"},{href:"new-architecture-app-intro"}),"prerequisites"),"."),(0,n.kt)("h2",u({},{id:"1-enable-fabric-in-podfile"}),"1. Enable Fabric in Podfile"),(0,n.kt)("p",null,"Add changes to your Podfile. You can see some examples in ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/Podfile"}),"RNTester")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/ios/Podfile"}),"rn-demo-app"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ruby",metastring:'title="Podfile"',title:'"Podfile"'}),"# Add the following line at the top of Podfile.\n# Codegen produces files/classes that share names, and it will show the warning.\n# deterministic_uuids option surpresses the warning.\ninstall! 'cocoapods', :deterministic_uuids => false\ntarget 'Some App' do\n  pods()\nend\ndef pods()\n  # Get config\n  config = use_native_modules!\n  # Use env variables to turn it on/off.\n  fabric_enabled = ENV['USE_FABRIC']\n  use_react_native!(\n    ...\n    # Modify here if your app root path isn't the same as this one.\n    :app_path => \"#{Dir.pwd}/..\",\n    # Pass the flag to enable fabric to use_react_native!.\n    :fabric_enabled => fabric_enabled\n  )\nend\n")),(0,n.kt)("h2",u({},{id:"2-update-your-root-view"}),"2. Update your root view"),(0,n.kt)("p",null,"How to render your app with Fabric depends on your setup. Here is an example of how you can enable Fabric in your app with the ",(0,n.kt)("inlineCode",{parentName:"p"},"RN_FABRIC_ENABLED")," compiler flag to enable/disable. Refer ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/RNTester/AppDelegate.mm"}),"RN-Tester\u2019s AppDelegate")," as an example."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-objc",metastring:'title="AppDelegate.mm"',title:'"AppDelegate.mm"'}),'#ifdef RN_FABRIC_ENABLED\n#import <React/RCTFabricSurfaceHostingProxyRootView.h>\n#import <React/RCTSurfacePresenter.h>\n#import <React/RCTSurfacePresenterBridgeAdapter.h>\n#import <react/config/ReactNativeConfig.h>\n#endif\n\n@interface AppDelegate () <RCTCxxBridgeDelegate,\n                           RCTTurboModuleManagerDelegate> {\n#ifdef RN_FABRIC_ENABLED\n  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;\n  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;\n  facebook::react::ContextContainer::Shared _contextContainer;\n#endif\n\n  // Find a line that define rootView and replace/edit with the following lines.\n\n#ifdef RN_FABRIC_ENABLED\n  _contextContainer = std::make_shared<facebook::react::ContextContainer const>();\n  _reactNativeConfig = std::make_shared<facebook::react::EmptyReactNativeConfig const>();\n\n  _contextContainer->insert("ReactNativeConfig", _reactNativeConfig);\n\n  _bridgeAdapter = [[RCTSurfacePresenterBridgeAdapter alloc]\n        initWithBridge:bridge\n      contextContainer:_contextContainer];\n\n  bridge.surfacePresenter = _bridgeAdapter.surfacePresenter;\n\n  UIView *rootView =\n      [[RCTFabricSurfaceHostingProxyRootView alloc] initWithBridge:bridge\n                                                        moduleName:<#moduleName#>\n                                                 initialProperties:@{}];\n#else\n  // Current implementation to define rootview.\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:<#moduleName#>\n                                            initialProperties:@{}];\n#endif\n')),(0,n.kt)("h2",u({},{id:"3-run-pod-install"}),"3. Run pod install"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"// Run pod install with the flags\nUSE_FABRIC=1 RCT_NEW_ARCH_ENABLED=1 pod install\n")))}v.isMDXComponent=!0}}]);