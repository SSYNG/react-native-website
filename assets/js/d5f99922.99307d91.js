"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41238],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21888:function(e,t,n){n.d(t,{ZP:function(){return f}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const u={toc:[]};function f(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},u),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Note for Mac M1 users"),(0,r.kt)("p",null,"Mac M1 architecture is not directly compatible with Cocoapods. If you encounter issues when installing pods, you can solve it by running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo arch -x86_64 gem install ffi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"))),(0,r.kt)("p",null,"These commands install the ",(0,r.kt)("inlineCode",{parentName:"p"},"ffi")," package, to load dynamically-linked libraries and let you run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," properly, and runs ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," with the proper architecture.")))}f.isMDXComponent=!0},38299:function(e,t,n){n.d(t,{ZP:function(){return f}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const u={toc:[]};function f(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},u),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"This documentation is still ",(0,r.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,r.kt)("p",{parentName:"div"},"Moreover, it contains several ",(0,r.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."))))}f.isMDXComponent=!0},40834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return b},metadata:function(){return h},toc:function(){return g},default:function(){return w}});var r=n(35318),a=n(21888),i=n(38299),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&u(e,n,t[n]);return e};const m={id:"new-architecture-app-renderer-ios",title:"Enabling Fabric on iOS"},b=void 0,h={unversionedId:"new-architecture-app-renderer-ios",id:"version-0.67/new-architecture-app-renderer-ios",title:"Enabling Fabric on iOS",description:"This section will go over how to enable the new renderer in your app. Make sure your application meets all the prerequisites.",source:"@site/versioned_docs/version-0.67/new-architecture-app-renderer-ios.md",sourceDirName:".",slug:"/new-architecture-app-renderer-ios",permalink:"/docs/new-architecture-app-renderer-ios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-renderer-ios.md",tags:[],version:"0.67",frontMatter:{id:"new-architecture-app-renderer-ios",title:"Enabling Fabric on iOS"}},g=[{value:"1. Enable Fabric in Podfile",id:"1-enable-fabric-in-podfile",children:[],level:2},{value:"2. Update your root view",id:"2-update-your-root-view",children:[],level:2},{value:"3. Add Babel Plugins",id:"3-add-babel-plugins",children:[],level:2},{value:"4. Run pod install",id:"4-run-pod-install",children:[],level:2}],v={toc:g};function w(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},v),u),l(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)(i.ZP,{mdxType:"NewArchitectureWarning"}),(0,r.kt)("p",null,"This section will go over how to enable the new renderer in your app. Make sure your application meets all the ",(0,r.kt)("a",f({parentName:"p"},{href:"new-architecture-app-intro"}),"prerequisites"),"."),(0,r.kt)("h2",f({},{id:"1-enable-fabric-in-podfile"}),"1. Enable Fabric in Podfile"),(0,r.kt)("p",null,"Add changes to your Podfile. You can see some examples in ",(0,r.kt)("a",f({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/Podfile"}),"RNTester")," and ",(0,r.kt)("a",f({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/rn-demo-app/ios/Podfile"}),"rn-demo-app"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-ruby",metastring:'title="Podfile"',title:'"Podfile"'}),"# Add the following line at the top of Podfile.\n# Codegen produces files/classes that share names, and it will show the warning.\n# deterministic_uuids option surpresses the warning.\ninstall! 'cocoapods', :deterministic_uuids => false\ntarget 'Some App' do\n  pods()\nend\ndef pods()\n  # Get config\n  config = use_native_modules!\n  # Use env variables to turn it on/off.\n  fabric_enabled = ENV['USE_FABRIC']\n  use_react_native!(\n    ...\n    # Modify here if your app root path isn't the same as this one.\n    :app_path => \"#{Dir.pwd}/..\",\n    # Pass the flag to enable fabric to use_react_native!.\n    :fabric_enabled => fabric_enabled\n  )\nend\n")),(0,r.kt)("h2",f({},{id:"2-update-your-root-view"}),"2. Update your root view"),(0,r.kt)("p",null,"The way to render your app with Fabric depends on your setup. Here is an example of how you can enable Fabric in your app with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RN_FABRIC_ENABLED")," compiler flag to enable/disable. Refer ",(0,r.kt)("a",f({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/main/packages/rn-tester/RNTester/AppDelegate.mm"}),"RN-Tester\u2019s AppDelegate")," as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-objc",metastring:'title="AppDelegate.mm"',title:'"AppDelegate.mm"'}),'#ifdef RN_FABRIC_ENABLED\n#import <React/RCTFabricSurfaceHostingProxyRootView.h>\n#import <React/RCTSurfacePresenter.h>\n#import <React/RCTSurfacePresenterBridgeAdapter.h>\n#import <react/config/ReactNativeConfig.h>\n#endif\n\n@interface AppDelegate () <RCTCxxBridgeDelegate,\n                           RCTTurboModuleManagerDelegate> {\n#ifdef RN_FABRIC_ENABLED\n  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;\n  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;\n  facebook::react::ContextContainer::Shared _contextContainer;\n#endif\n\n  // Find a line that define rootView and replace/edit with the following lines.\n\n#ifdef RN_FABRIC_ENABLED\n  _contextContainer = std::make_shared<facebook::react::ContextContainer const>();\n  _reactNativeConfig = std::make_shared<facebook::react::EmptyReactNativeConfig const>();\n\n  _contextContainer->insert("ReactNativeConfig", _reactNativeConfig);\n\n  _bridgeAdapter = [[RCTSurfacePresenterBridgeAdapter alloc]\n        initWithBridge:bridge\n      contextContainer:_contextContainer];\n\n  bridge.surfacePresenter = _bridgeAdapter.surfacePresenter;\n\n  UIView *rootView =\n      [[RCTFabricSurfaceHostingProxyRootView alloc] initWithBridge:bridge\n                                                        moduleName:<#moduleName#>\n                                                 initialProperties:@{}];\n#else\n  // Current implementation to define rootview.\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:<#moduleName#>\n                                            initialProperties:@{}];\n#endif\n')),(0,r.kt)("h2",f({},{id:"3-add-babel-plugins"}),"3. Add Babel Plugins"),(0,r.kt)("p",null,"This will trigger the codegen that will run at the metro building time."),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"module.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n  plugins: [\n    '@babel/plugin-proposal-class-properties',\n    './node_modules/react-native/packages/babel-plugin-codegen'\n  ]\n};\n")),(0,r.kt)("h2",f({},{id:"4-run-pod-install"}),"4. Run pod install"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"// Run pod install with the flags\nUSE_FABRIC=1 RCT_NEW_ARCH_ENABLED=1 pod install\n")),(0,r.kt)(a.ZP,{mdxType:"M1Cocoapods"}))}w.isMDXComponent=!0}}]);