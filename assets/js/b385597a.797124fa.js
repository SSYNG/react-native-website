"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[35933],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,w=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return t?o.createElement(w,r(r({ref:n},u),{},{components:t})):o.createElement(w,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},23868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>d,default:()=>C,frontMatter:()=>c,metadata:()=>w,toc:()=>b});var o=t(35318),i=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(s)for(var t of s(n))p.call(n,t)&&u(e,t,n[t]);return e};const c={id:"custom-webview-ios",title:"Custom WebView"},d=void 0,w={unversionedId:"custom-webview-ios",id:"version-0.63/custom-webview-ios",title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/versioned_docs/version-0.63/custom-webview-ios.md",sourceDirName:".",slug:"/custom-webview-ios",permalink:"/docs/0.63/custom-webview-ios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/custom-webview-ios.md",tags:[],version:"0.63",frontMatter:{id:"custom-webview-ios",title:"Custom WebView"}},v={},b=[{value:"Native Code",id:"native-code",level:2},{value:"Adding New Events and Properties",id:"adding-new-events-and-properties",level:3},{value:"Extending Existing Events",id:"extending-existing-events",level:3},{value:"JavaScript Interface",id:"javascript-interface",level:2},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000",level:5}],h={toc:b};function C(e){var n,t=e,{components:i}=t,u=((e,n)=>{var t={};for(var o in e)l.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&s)for(var o of s(e))n.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(n=m(m({},h),u),a(n,r({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."),(0,o.kt)("p",null,"Before you do this, you should be familiar with the concepts in ",(0,o.kt)("a",m({parentName:"p"},{href:"native-components-ios"}),"native UI components"),". You should also familiarise yourself with the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebViewManager.m"}),"native code for web views"),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."),(0,o.kt)("h2",m({},{id:"native-code"}),"Native Code"),(0,o.kt)("p",null,"Like for regular native components, you need a view manager and an web view."),(0,o.kt)("p",null,"For the view, you'll need to make a subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTWebView"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),'// RCTCustomWebView.h\n#import <React/RCTWebView.h>\n\n@interface RCTCustomWebView : RCTWebView\n\n@end\n\n// RCTCustomWebView.m\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebView ()\n\n@end\n\n@implementation RCTCustomWebView { }\n\n@end\n')),(0,o.kt)("p",null,"For the view manager, you need to make a subclass ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTWebViewManager"),". You must still include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"(UIView *)view")," that returns your custom view"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()")," tag")),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),'// RCTCustomWebViewManager.h\n#import <React/RCTWebViewManager.h>\n\n@interface RCTCustomWebViewManager : RCTWebViewManager\n\n@end\n\n// RCTCustomWebViewManager.m\n#import "RCTCustomWebViewManager.h"\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebViewManager () <RCTWebViewDelegate>\n\n@end\n\n@implementation RCTCustomWebViewManager { }\n\nRCT_EXPORT_MODULE()\n\n- (UIView *)view\n{\n  RCTCustomWebView *webView = [RCTCustomWebView new];\n  webView.delegate = self;\n  return webView;\n}\n\n@end\n')),(0,o.kt)("h3",m({},{id:"adding-new-events-and-properties"}),"Adding New Events and Properties"),(0,o.kt)("p",null,"Adding new properties and events is the same as regular UI components. For properties, you define an ",(0,o.kt)("inlineCode",{parentName:"p"},"@property")," in the header. For events, you define a ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTDirectEventBlock")," in the view's ",(0,o.kt)("inlineCode",{parentName:"p"},"@interface"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"// RCTCustomWebView.h\n@property (nonatomic, copy) NSString *finalUrl;\n\n// RCTCustomWebView.m\n@interface RCTCustomWebView ()\n\n@property (nonatomic, copy) RCTDirectEventBlock onNavigationCompleted;\n\n@end\n")),(0,o.kt)("p",null,"Then expose it in the view manager's ",(0,o.kt)("inlineCode",{parentName:"p"},"@implementation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"// RCTCustomWebViewManager.m\nRCT_EXPORT_VIEW_PROPERTY(onNavigationCompleted, RCTDirectEventBlock)\nRCT_EXPORT_VIEW_PROPERTY(finalUrl, NSString)\n")),(0,o.kt)("h3",m({},{id:"extending-existing-events"}),"Extending Existing Events"),(0,o.kt)("p",null,"You should refer to ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebView.m"}),"RCTWebView.m")," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."),(0,o.kt)("p",null,"By default, most methods aren't exposed from RCTWebView. If you need to expose them, you need to create an ",(0,o.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html"}),"Objective C category"),", and then expose all the methods you need to use."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"// RCTWebView+Custom.h\n#import <React/RCTWebView.h>\n\n@interface RCTWebView (Custom)\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;\n- (NSMutableDictionary<NSString *, id> *)baseEvent;\n@end\n")),(0,o.kt)("p",null,"Once these are exposed, you can reference them in your custom web view class."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),'// RCTCustomWebView.m\n\n// Remember to import the category file.\n#import "RCTWebView+Custom.h"\n\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request\n navigationType:(UIWebViewNavigationType)navigationType\n{\n  BOOL allowed = [super webView:webView shouldStartLoadWithRequest:request navigationType:navigationType];\n\n  if (allowed) {\n    NSString* url = request.URL.absoluteString;\n    if (url && [url isEqualToString:_finalUrl]) {\n      if (_onNavigationCompleted) {\n        NSMutableDictionary<NSString *, id> *event = [self baseEvent];\n        _onNavigationCompleted(event);\n      }\n    }\n  }\n\n  return allowed;\n}\n')),(0,o.kt)("h2",m({},{id:"javascript-interface"}),"JavaScript Interface"),(0,o.kt)("p",null,"To use your custom web view, you'll need to create a class for it. Your class must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Export all the prop types from ",(0,o.kt)("inlineCode",{parentName:"li"},"WebView.propTypes")),(0,o.kt)("li",{parentName:"ul"},"Return a ",(0,o.kt)("inlineCode",{parentName:"li"},"WebView")," component with the prop ",(0,o.kt)("inlineCode",{parentName:"li"},"nativeConfig.component")," set to your native component (see below)")),(0,o.kt)("p",null,"To get your native component, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,o.kt)("inlineCode",{parentName:"p"},"WebView.extraNativeComponentConfig"),". This third argument contains prop types that are only required for native code."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'import React, { Component, PropTypes } from "react";\nimport { WebView, requireNativeComponent, NativeModules } from "react-native";\nconst { CustomWebViewManager } = NativeModules;\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  "RCTCustomWebView",\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n')),(0,o.kt)("p",null,"If you want to add custom props to your native component, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeConfig.props")," on the web view. For iOS, you should also set the ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeConfig.viewManager")," prop with your custom WebView ViewManager as in the example above."),(0,o.kt)("p",null,"For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props"),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props")," if it exists."),(0,o.kt)("p",null,"If you are unsure how something should be implemented from the JS side, look at ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.ios.js"}),"WebView.ios.js")," in the React Native source."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: "about:blank",\n  };\n\n  _onNavigationCompleted = (event) => {\n    const { onNavigationCompleted } = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n')),(0,o.kt)("p",null,"Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeOnly")," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," instead of a regular prop type."),(0,o.kt)("p",null,"For example, if you wanted to add an internal event handler called ",(0,o.kt)("inlineCode",{parentName:"p"},"onScrollToBottom"),", you would use,"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'const RCTCustomWebView = requireNativeComponent(\n  "RCTCustomWebView",\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  }\n);\n')),(0,o.kt)("hr",null),(0,o.kt)("h5",m({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,o.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}C.isMDXComponent=!0}}]);