"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[78048],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:o?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(27378),o=n(38944);const r="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(27378),o=n(38944),r=n(14185),i=n(27886),l=n(77184),p=n(12112);const c="tabList_J5MA",s="tabItem_l0OV";var d=Object.defineProperty,m=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&w(e,n,t[n]);if(h)for(var n of h(t))b.call(t,n)&&w(e,n,t[n]);return e};function v(e){var t,n;const{lazy:r,block:d,defaultValue:h,values:f,groupId:b,className:w}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,i.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===h?h:null!=(n=null!=h?h:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:v[0].props.value;if(null!==C&&!y.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:M}=(0,l.U)(),[O,T]=(0,a.useState)(C),E=[],{blockElementScrollPositionUntilNextRender:V}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const A=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==O&&(V(t),T(a),null!=b&&M(b,String(a)))},j=e=>{var t,n;let a=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},w)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=g({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>E.push(e),onKeyDown:j,onClick:A},n),i={className:(0,o.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":O===e})},m(r,u(i))),null!=t?t:e);var r,i}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function y(e){const t=(0,r.Z)();return a.createElement(v,g({key:String(t)},e))}},38286:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const m={toc:[]};function u(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},m),s),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}u.isMDXComponent=!0},39456:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const m={toc:[]};function u(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},m),s),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,":::\u6ce8\u610f\n\u65b0\u67b6\u6784\u5bf9\u4e8e TypeScript \u7684\u652f\u6301\u5c1a\u5904\u4e8e beta \u6d4b\u8bd5\u9636\u6bb5\u3002\n:::"))}u.isMDXComponent=!0},36895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>N,frontMatter:()=>w,metadata:()=>v,toc:()=>k});var a=n(35318),o=n(27789),r=n(86386),i=n(11674),l=n(39456),p=n(38286),c=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&f(e,n,t[n]);return e};const w={id:"backward-compatibility-fabric-components",title:"Fabric Components as Native Components"},g=void 0,v={unversionedId:"the-new-architecture/backward-compatibility-fabric-components",id:"the-new-architecture/backward-compatibility-fabric-components",title:"Fabric Components as Native Components",description:"The creation of a backward compatible Fabric Component requires the knowledge of how to create a Fabric Component. To recall these concepts, have a look at this guide.",source:"@site/../cndocs/the-new-architecture/backward-compatibility-fabric-components.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility-fabric-components",permalink:"/docs/next/the-new-architecture/backward-compatibility-fabric-components",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/backward-compatibility-fabric-components.md",tags:[],version:"current",frontMatter:{id:"backward-compatibility-fabric-components",title:"Fabric Components as Native Components"},sidebar:"docs",previous:{title:"TurboModules as Native Modules",permalink:"/docs/next/the-new-architecture/backward-compatibility-turbomodules"},next:{title:"\u8fc1\u79fb\u5230\u65b0\u67b6\u6784",permalink:"/docs/next/new-architecture-intro"}},y={},k=[{value:"Configure the Fabric Component Dependencies",id:"configure-the-fabric-component-dependencies",level:2},{value:'<a name="dependencies-ios" />iOS',id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Update the codebase",id:"update-the-codebase",level:2},{value:"iOS",id:"ios-1",level:3},{value:"Android",id:"android-1",level:3},{value:"Unify the JavaScript specs",id:"unify-the-javascript-specs",level:2}],C={toc:k};function N(e){var t,n=e,{components:c}=n,f=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=b(b({},C),f),s(t,d({components:c,mdxType:"MDXLayout"}))),(0,a.kt)(p.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("admonition",b({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The creation of a backward compatible Fabric Component requires the knowledge of how to create a Fabric Component. To recall these concepts, have a look at this ",(0,a.kt)("a",b({parentName:"p"},{href:"pillars-fabric-components"}),"guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"Fabric Components only work when the New Architecture is properly setup. If you already have a library that you want to migrate to the New Architecture, have a look at the ",(0,a.kt)("a",b({parentName:"p"},{href:"../new-architecture-intro"}),"migration guide")," as well.")),(0,a.kt)("p",null,"Creating a backward compatible Fabric Component lets your users continue leverage your library, independently from the architecture they use. The creation of such a component requires a few steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the library so that dependencies are prepared set up properly for both the Old and the New Architecture."),(0,a.kt)("li",{parentName:"ol"},"Update the codebase so that the New Architecture types are not compiled when not available."),(0,a.kt)("li",{parentName:"ol"},"Uniform the JavaScript API so that your user code won't need changes.")),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"While the last step is the same for all the platforms, the first two steps are different for iOS and Android."),(0,a.kt)("h2",b({},{id:"configure-the-fabric-component-dependencies"}),"Configure the Fabric Component Dependencies"),(0,a.kt)("h3",b({},{id:"ios"}),(0,a.kt)("a",{name:"dependencies-ios"}),"iOS"),(0,a.kt)("p",null,"The Apple platform installs Fabric Components using ",(0,a.kt)("a",b({parentName:"p"},{href:"https://cocoapods.org"}),"Cocoapods")," as dependency manager."),(0,a.kt)("p",null,"Every Fabric Component defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ruby"}),'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\nfolly_version = \'2021.07.22.00\'\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<FC Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n  s.dependency "React-Core"\n\n  #\xa0The following lines are required by the New Architecture.\n  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n  s.pod_target_xcconfig    = {\n      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n      "OTHER_CPLUSPLUSFLAGS" => "-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1",\n      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n\n  s.dependency "React-RCTFabric"\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly", folly_version\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\nend\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to avoid installing the dependencies when the app is prepared for the Old Architecture."),(0,a.kt)("p",null,"When we want to install the dependencies, we use the following commands depending on the architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-sh"}),"# For the Old Architecture, we use:\npod install\n\n# For the New Architecture, we use:\nRCT_NEW_ARCH_ENABLED=1 pod install\n")),(0,a.kt)("p",null,"Therefore, we can leverage this environment variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," to exclude the settings and the dependencies that are related to the New Architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-diff"}),"+ if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then\n    #\xa0The following lines are required by the New Architecture.\n    s.compiler_flags = folly_compiler_flags + \" -DRCT_NEW_ARCH_ENABLED=1\"\n    # ... other dependencies ...\n    s.dependency \"ReactCommon/turbomodule/core\"\n+ end\nend\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," guard prevents the dependencies from being installed when the environment variable is not set."),(0,a.kt)("h3",b({},{id:"android"}),"Android"),(0,a.kt)("p",null,"To create a module that can work with both architectures, you need to configure Gradle to choose which files need to be compiled depending on the chosen architecture. This can be achieved by using ",(0,a.kt)("strong",{parentName:"p"},"different source sets")," in the Gradle configuration."),(0,a.kt)("admonition",b({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that this is currently the suggested approach. While it might lead to some code duplication, it will ensure the maximum compatibility with both architectures. You will see how to reduce the duplication in the next section.")),(0,a.kt)("p",null,"To configure the Fabric Component so that it picks the proper sourceset, you have to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-diff",metastring:'title="build.gradle"',title:'"build.gradle"'}),"+// Add this function in case you don't have it already\n+ def isNewArchitectureEnabled() {\n+    return project.hasProperty(\"newArchEnabled\") && project.newArchEnabled == \"true\"\n+}\n// ... other parts of the build file\ndefaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 31)\n+        buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", isNewArchitectureEnabled().toString())\n+    }\n+\n+    sourceSets {\n+        main {\n+            if (isNewArchitectureEnabled()) {\n+                java.srcDirs += ['src/newarch']\n+            } else {\n+                java.srcDirs += ['src/oldarch']\n+            }\n+        }\n    }\n}\n")),(0,a.kt)("p",null,"This changes do three main things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first lines define a function that returns whether the New Architecture is enabled or not."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"buildConfigField")," line defines a build configuration boolean field called ",(0,a.kt)("inlineCode",{parentName:"li"},"IS_NEW_ARCHITECTURE_ENABLED"),", and initialize it using the function declared in the first step. This allows you to check at runtime if a user has specified the ",(0,a.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," property or not."),(0,a.kt)("li",{parentName:"ol"},"The last lines leverage the function declared in step one to decide which source sets we need to build, depending on the choosen architecture.")),(0,a.kt)("h2",b({},{id:"update-the-codebase"}),"Update the codebase"),(0,a.kt)("h3",b({},{id:"ios-1"}),"iOS"),(0,a.kt)("p",null,"The second step is to instruct Xcode to avoid compiling all the lines using the New Architecture types and files when we are building an app with the Old Architecture."),(0,a.kt)("p",null,"A Fabric Component requires an header file and an implementation file to add the actual ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," to the module."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMyComponentView.h")," header file could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-objective-c"}),"#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\n#ifndef NativeComponentExampleComponentView_h\n#define NativeComponentExampleComponentView_h\n\nNS_ASSUME_NONNULL_BEGIN\n\n@interface RNMyComponentView : RCTViewComponentView\n@end\n\nNS_ASSUME_NONNULL_END\n\n#endif /* NativeComponentExampleComponentView_h */\n")),(0,a.kt)("p",null,"The implementation ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMyComponentView.mm")," file, instead, could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-objective-c"}),'#import "RNMyComponentView.h"\n\n// <react/renderer imports>\n\n#import "RCTFabricComponentsPlugins.h"\n\nusing namespace facebook::react;\n\n@interface RNMyComponentView () <RCTMyComponentViewViewProtocol>\n\n@end\n\n@implementation RNMyComponentView {\n    UIView * _view;\n}\n\n+ (ComponentDescriptorProvider)componentDescriptorProvider\n{\n    // ... return the descriptor ...\n}\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  // ... initialize the object ...\n}\n\n- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps\n{\n  // ... set up the props ...\n\n  [super updateProps:props oldProps:oldProps];\n}\n\nClass<RCTComponentViewProtocol> MyComponentViewCls(void)\n{\n  return RNMyComponentView.class;\n}\n\n@end\n')),(0,a.kt)("p",null,"To make sure that Xcode skips these files, we can wrap ",(0,a.kt)("strong",{parentName:"p"},"both")," of them in some ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef RCT_NEW_ARCH_ENABLED")," compilation pragma. For example, the header file could change as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-diff"}),"+ #ifdef RCT_NEW_ARCH_ENABLED\n#import <React/RCTViewComponentView.h>\n#import <UIKit/UIKit.h>\n\n// ... rest of the header file ...\n\n#endif /* NativeComponentExampleComponentView_h */\n+ #endif\n")),(0,a.kt)("p",null,"The same two lines should be added in the implementation file, as first and last lines."),(0,a.kt)("p",null,"The above snippet uses the same ",(0,a.kt)("inlineCode",{parentName:"p"},"RCT_NEW_ARCH_ENABLED")," flag used in the previous ",(0,a.kt)("a",b({parentName:"p"},{href:"#dependencies-ios"}),"section"),". When this flag is not set, Xcode skips the lines within the ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef")," during compilation and it does not include them into the compiled binary. The compiled binary will have a the ",(0,a.kt)("inlineCode",{parentName:"p"},"RNMyComponentView.o")," object but it will be an empty object."),(0,a.kt)("h3",b({},{id:"android-1"}),"Android"),(0,a.kt)("p",null,"As we can't use conditional compilation blocks on Android, we will define two different source sets. This will allow to create a backward compatible TurboModule with the proper source that is loaded and compiled depending on the used architecture."),(0,a.kt)("p",null,"Therefore, you have to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Native Component in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/oldarch")," path. See ",(0,a.kt)("a",b({parentName:"li"},{href:"../native-components-android"}),"this guide")," to learn how to create a Native Component."),(0,a.kt)("li",{parentName:"ol"},"Create a Fabric Component in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/newarch")," path. See ",(0,a.kt)("a",b({parentName:"li"},{href:"pillars-fabric-components"}),"this guide")," to learn how to create a Fabric Component.")),(0,a.kt)("p",null,"and then instruct Gradle to decide which implementation to pick."),(0,a.kt)("p",null,"Some files can be shared between a Native and a Fabric Component: these should be created or moved into a folder that is loaded by both the architectures. These files are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponentView>.java")," that instantiate and configure the Android View for both the components."),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponentView>ManagerImpl.java")," file where which contains the logic of the ViewManager that can be shared between the Native and the Fabric Component."),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponentView>Package.java")," file used to load the component.")),(0,a.kt)("p",null,"The final folder structure looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-sh"}),"my-component\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 build.gradle\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 main\n\u2502       \u2502   \u251c\u2500\u2500 AndroidManifest.xml\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyComponent\n\u2502       \u2502               \u251c\u2500\u2500 MyComponentView.java\n\u2502       \u2502               \u251c\u2500\u2500 MyComponentViewManagerImpl.java\n\u2502       \u2502               \u2514\u2500\u2500 MyComponentViewPackage.java\n\u2502       \u251c\u2500\u2500 newarch\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyComponentViewManager.java\n\u2502       \u2514\u2500\u2500 oldarch\n\u2502           \u2514\u2500\u2500 java\n\u2502               \u2514\u2500\u2500 com\n\u2502                   \u2514\u2500\u2500 MyComponentViewManager.java\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,"The code that should go in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyComponentViewManagerImpl.java")," and that can be shared between the Native Component and the Fabric Component is, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-java",metastring:'title="example of MyComponentViewManager.java"',title:'"example',of:!0,'MyComponentViewManager.java"':!0}),'package com.MyComponent;\nimport androidx.annotation.Nullable;\nimport com.facebook.react.uimanager.ThemedReactContext;\n\npublic class MyComponentViewManagerImpl {\n\n    public static final String NAME = "MyComponent";\n\n    public static MyComponentView createViewInstance(ThemedReactContext context) {\n        return new MyComponentView(context);\n    }\n\n    public static void setFoo(MyComponentView view, String param) {\n        // implement the logic of the foo function using the view and the param passed.\n    }\n}\n')),(0,a.kt)("p",null,"Then, the Native Component and the Fabric Component can be updated using the function declared in the shared manager."),(0,a.kt)("p",null,"For example, for a Native Component:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-java",metastring:'title="Native Component using the ViewManagerImpl"',title:'"Native',Component:!0,using:!0,the:!0,'ViewManagerImpl"':!0}),'public class MyComponentViewManager extends SimpleViewManager<MyComponentView> {\n\n    ReactApplicationContext mCallerContext;\n\n    public MyComponentViewManager(ReactApplicationContext reactContext) {\n        mCallerContext = reactContext;\n    }\n\n    @Override\n    public String getName() {\n        // static NAME property from the shared implementation\n        return MyComponentViewManagerImpl.NAME;\n    }\n\n    @Override\n    public MyComponentView createViewInstance(ThemedReactContext context) {\n        // static createViewInstance function from the shared implementation\n        return MyComponentViewManagerImpl.createViewInstance(context);\n    }\n\n    @ReactProp(name = "foo")\n    public void setFoo(MyComponentView view, String param) {\n        // static custom function from the shared implementation\n        MyComponentViewManagerImpl.setFoo(view, param);\n    }\n\n}\n')),(0,a.kt)("p",null,"And, for a Fabric Component:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-java",metastring:'title="Fabric Component using the ViewManagerImpl"',title:'"Fabric',Component:!0,using:!0,the:!0,'ViewManagerImpl"':!0}),'// Use the static NAME property from the shared implementation\n@ReactModule(name = MyComponentViewManagerImpl.NAME)\npublic class MyComponentViewManager extends SimpleViewManager<MyComponentView>\n        implements MyComponentViewManagerInterface<MyComponentView> {\n\n    private final ViewManagerDelegate<MyComponentView> mDelegate;\n\n    public MyComponentViewManager(ReactApplicationContext context) {\n        mDelegate = new MyComponentViewManagerDelegate<>(this);\n    }\n\n    @Nullable\n    @Override\n    protected ViewManagerDelegate<MyComponentView> getDelegate() {\n        return mDelegate;\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        // static NAME property from the shared implementation\n        return MyComponentViewManagerImpl.NAME;\n    }\n\n    @NonNull\n    @Override\n    protected MyComponentView createViewInstance(@NonNull ThemedReactContext context) {\n        // static createViewInstance function from the shared implementation\n        return MyComponentViewManagerImpl.createViewInstance(context);\n    }\n\n    @Override\n    @ReactProp(name = "foo")\n    public void setFoo(MyComponentView view, @Nullable String param) {\n        // static custom function from the shared implementation\n        MyComponentViewManagerImpl.setFoo(view, param]);\n    }\n}\n')),(0,a.kt)("p",null,"For a step-by-step example on how to achieve this, have a look at ",(0,a.kt)("a",b({parentName:"p"},{href:"https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/back-fabric-comp"}),"this repo"),"."),(0,a.kt)("h2",b({},{id:"unify-the-javascript-specs"}),"Unify the JavaScript specs"),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"The last step makes sure that the JavaScript behaves transparently to chosen architecture."),(0,a.kt)("p",null,"For a Fabric Component, the source of truth is the ",(0,a.kt)("inlineCode",{parentName:"p"},"<YourModule>NativeComponent.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),") spec file. The app accesses the spec file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"import MyComponent from 'your-component/src/index';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to conditionally ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," file the proper object, given the architecture chosen by the user. We can achieve this with a code that looks like this:"),(0,a.kt)(o.Z,{groupId:"fabric-component-backward-compatibility",defaultValue:i.Z.defaultFabricComponentSpecLanguage,values:i.Z.fabricComponentSpecLanguages,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"// @flow\nimport { requireNativeComponent } from 'react-native';\n\nconst isFabricEnabled = global.nativeFabricUIManager != null;\n\nconst myComponent = isFabricEnabled\n  ? require('./MyComponentNativeComponent').default\n  : requireNativeComponent('MyComponent');\n\nexport default myComponent;\n"))),(0,a.kt)(r.Z,{value:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-ts"}),"import requireNativeComponent from 'react-native/Libraries/ReactNative/requireNativeComponent';\n\nconst isFabricEnabled = global.nativeFabricUIManager != null;\n\nconst myComponent = isFabricEnabled\n  ? require('./MyComponentNativeComponent').default\n  : requireNativeComponent('MyComponent');\n\nexport default myComponent;\n")))),(0,a.kt)("p",null,"Whether you are using Flow or TypeScript for your specs, we understand which architecture is running by checking if the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.nativeFabricUIManager")," object has been set or not."),(0,a.kt)("admonition",b({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that the New Architecture is still experimental. The ",(0,a.kt)("inlineCode",{parentName:"p"},"global.nativeFabricUIManager")," API might change in the future for a function that encapsulate this check.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If that object is ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),", the app has not enabled the Fabric feature. It's running on the Old Architecture, and the fallback is to use the default Native Components implementation (",(0,a.kt)("a",b({parentName:"li"},{href:"../native-components-ios"}),"iOS")," or ",(0,a.kt)("a",b({parentName:"li"},{href:"../native-components-android"}),"Android"),")."),(0,a.kt)("li",{parentName:"ul"},"If that object is set, the app is running with Fabric enabled and it should use the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyComponent>NativeComponent")," spec to access the Fabric Component.")))}N.isMDXComponent=!0}}]);