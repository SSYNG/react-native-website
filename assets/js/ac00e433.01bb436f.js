"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27317],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97083:(e,t,n)=>{n.d(t,{ZP:()=>m});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&d(e,n,t[n]);return e};const p={toc:[]};function m(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},p),d),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,r.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,r.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,r.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},95330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>y,frontMatter:()=>m,metadata:()=>b,toc:()=>f});var r=n(35318),a=n(97083),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))d.call(t,n)&&c(e,n,t[n]);return e};const m={id:"new-architecture-app-modules-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 TurboModule"},g=void 0,b={unversionedId:"new-architecture-app-modules-ios",id:"version-0.69/new-architecture-app-modules-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 TurboModule",description:"Make sure your application meets all the prerequisites.",source:"@site/versioned_docs/version-0.69/new-architecture-app-modules-ios.md",sourceDirName:".",slug:"/new-architecture-app-modules-ios",permalink:"/docs/0.69/new-architecture-app-modules-ios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-modules-ios.md",tags:[],version:"0.69",frontMatter:{id:"new-architecture-app-modules-ios",title:"\u5728 iOS \u4e0a\u542f\u7528 TurboModule"},sidebar:"docs",previous:{title:"\u5728 Android \u4e0a\u542f\u7528 TurboModule",permalink:"/docs/0.69/new-architecture-app-modules-android"},next:{title:"\u5728 Android \u4e0a\u542f\u7528 Fabric",permalink:"/docs/0.69/new-architecture-app-renderer-android"}},h={},f=[{value:"1. Provide a TurboModuleManager Delegate",id:"1-provide-a-turbomodulemanager-delegate",level:2},{value:"TurboModuleManagerDelegate Example",id:"turbomodulemanagerdelegate-example",level:4},{value:"2. Install TurboModuleManager JavaScript Bindings",id:"2-install-turbomodulemanager-javascript-bindings",level:2},{value:"3. Enable TurboModule System",id:"3-enable-turbomodule-system",level:2},{value:"Example",id:"example",level:4}],T={toc:f};function y(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},T),c),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,r.kt)("p",null,"Make sure your application meets all the ",(0,r.kt)("a",p({parentName:"p"},{href:"new-architecture-app-intro"}),"prerequisites"),"."),(0,r.kt)("h2",p({},{id:"1-provide-a-turbomodulemanager-delegate"}),"1. Provide a TurboModuleManager Delegate"),(0,r.kt)("p",null,"Add the following imports at the top of your bridge delegate (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"AppDelegate.mm"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-objc"}),"#import <ReactCommon/RCTTurboModuleManager.h>\n#import <React/CoreModulesPlugins.h>\n")),(0,r.kt)("p",null,"You will also need to declare that your AppDelegate conforms to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTTurboModuleManagerDelegate")," protocol, as well as create an instance variable for our Turbo Module manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-objc"}),"@interface AppDelegate () <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {\n  // ...\n  RCTTurboModuleManager *_turboModuleManager;\n}\n@end\n")),(0,r.kt)("p",null,"To conform to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTTurboModuleManagerDelegate")," protocol, you will implement these three methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getModuleClassFromName:")," - This method should return the Class for a native module. You may use the ",(0,r.kt)("inlineCode",{parentName:"li"},"RCTCoreModulesClassProvider()")," method to handle the default, core modules."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getTurboModule:jsInvoker:")," - This should return ",(0,r.kt)("inlineCode",{parentName:"li"},"nullptr"),". This method may be used later to support C++ TurboModules."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getModuleInstanceFromClass:moduleClass:")," - This method allows you to perform any side-effects when your TurboModules are initialized. This is the TurboModule analogue to your bridge delegate\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"extraModulesForBridge")," method. At this time, you\u2019ll need to initialize the default RCTNetworking and RCTImageLoader modules as indicated below.")),(0,r.kt)("h4",p({},{id:"turbomodulemanagerdelegate-example"}),"TurboModuleManagerDelegate Example"),(0,r.kt)("p",null,"Take note of ",(0,r.kt)("inlineCode",{parentName:"p"},"getModuleInstanceFromClass:")," in the following example, as it includes some necessary instantiation of several core modules that you will need to include in your application. Eventually, this may not be required."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-objc",metastring:"title='AppDelegate.mm'",title:"'AppDelegate.mm'"}),"// ...\n\n#import <React/RCTDataRequestHandler.h>\n#import <React/RCTHTTPRequestHandler.h>\n#import <React/RCTFileRequestHandler.h>\n#import <React/RCTNetworking.h>\n#import <React/RCTImageLoader.h>\n#import <React/RCTGIFImageDecoder.h>\n#import <React/RCTLocalAssetImageLoader.h>\n\n#import <React/CoreModulesPlugins.h>\n\n#import <ReactCommon/RCTTurboModuleManager.h>\n\n// ...\n\n#pragma mark RCTTurboModuleManagerDelegate\n\n- (Class)getModuleClassFromName:(const char *)name\n{\n  return RCTCoreModulesClassProvider(name);\n}\n\n- (std::shared_ptr<facebook::react::TurboModule>)\n    getTurboModule:(const std::string &)name\n         jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker {\n  return nullptr;\n}\n\n- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass\n{\n  // Set up the default RCTImageLoader and RCTNetworking modules.\n  if (moduleClass == RCTImageLoader.class) {\n    return [[moduleClass alloc] initWithRedirectDelegate:nil\n        loadersProvider:^NSArray<id<RCTImageURLLoader>> *(RCTModuleRegistry * moduleRegistry) {\n          return @ [[RCTLocalAssetImageLoader new]];\n        }\n        decodersProvider:^NSArray<id<RCTImageDataDecoder>> *(RCTModuleRegistry * moduleRegistry) {\n          return @ [[RCTGIFImageDecoder new]];\n        }];\n  } else if (moduleClass == RCTNetworking.class) {\n     return [[moduleClass alloc]\n        initWithHandlersProvider:^NSArray<id<RCTURLRequestHandler>> *(\n            RCTModuleRegistry *moduleRegistry) {\n          return @[\n            [RCTHTTPRequestHandler new],\n            [RCTDataRequestHandler new],\n            [RCTFileRequestHandler new],\n          ];\n        }];\n  }\n  // No custom initializer here.\n  return [moduleClass new];\n}\n")),(0,r.kt)("h2",p({},{id:"2-install-turbomodulemanager-javascript-bindings"}),"2. Install TurboModuleManager JavaScript Bindings"),(0,r.kt)("p",null,"Next, you will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"RCTTurboModuleManager")," in your bridge delegate\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"jsExecutorFactoryForBridge:")," method, and install the JavaScript bindings:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-objc"}),'#pragma mark - RCTCxxBridgeDelegate\n\n- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n{\n  // Add these lines to create a TurboModuleManager\n  if (RCTTurboModuleEnabled()) {\n    _turboModuleManager =\n        [[RCTTurboModuleManager alloc] initWithBridge:bridge\n                                             delegate:self\n                                            jsInvoker:bridge.jsCallInvoker];\n\n    // Necessary to allow NativeModules to lookup TurboModules\n    [bridge setRCTTurboModuleRegistry:_turboModuleManager];\n\n    if (!RCTTurboModuleEagerInitEnabled()) {\n      /**\n       * Instantiating DevMenu has the side-effect of registering\n       * shortcuts for CMD + d, CMD + i,  and CMD + n via RCTDevMenu.\n       * Therefore, when TurboModules are enabled, we must manually create this\n       * NativeModule.\n       */\n       [_turboModuleManager moduleForName:"DevMenu"];\n    }\n  }\n\n  // Add this line...\n  __weak __typeof(self) weakSelf = self;\n\n  // If you want to use the `JSCExecutorFactory`, remember to add the `#import <React/JSCExecutorFactory.h>`\n  // import statement on top.\n  return std::make_unique<facebook::react::HermesExecutorFactory>(\n    facebook::react::RCTJSIExecutorRuntimeInstaller([weakSelf, bridge](facebook::jsi::Runtime &runtime) {\n      if (!bridge) {\n        return;\n      }\n\n      // And add these lines to install the bindings...\n      __typeof(self) strongSelf = weakSelf;\n      if (strongSelf) {\n        facebook::react::RuntimeExecutor syncRuntimeExecutor =\n            [&](std::function<void(facebook::jsi::Runtime & runtime_)> &&callback) { callback(runtime); };\n        [strongSelf->_turboModuleManager installJSBindingWithRuntimeExecutor:syncRuntimeExecutor];\n      }\n    }));\n}\n')),(0,r.kt)("h2",p({},{id:"3-enable-turbomodule-system"}),"3. Enable TurboModule System"),(0,r.kt)("p",null,"Finally, enable TurboModules in your app by executing the following statement before React Native is initialized in your app delegate (e.g. within ",(0,r.kt)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions:"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-objc"}),"RCTEnableTurboModule(YES);\n")),(0,r.kt)("h4",p({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-objc"}),"@implementation AppDelegate\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  RCTEnableTurboModule(YES);\n\n  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self\n                                            launchOptions:launchOptions];\n\n  // ...\n\n  return YES;\n}\n")))}y.isMDXComponent=!0}}]);