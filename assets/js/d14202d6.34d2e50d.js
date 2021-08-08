"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9525],{35318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,w=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return t?o.createElement(w,r(r({ref:n},u),{},{components:t})):o.createElement(w,r({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},63785:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var o=t(25773),i=t(30808),a=(t(27378),t(35318)),r=["components"],s={id:"custom-webview-ios",title:"Custom WebView"},l=void 0,p={unversionedId:"custom-webview-ios",id:"version-0.64/custom-webview-ios",isDocsHomePage:!1,title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/versioned_docs/version-0.64/custom-webview-ios.md",sourceDirName:".",slug:"/custom-webview-ios",permalink:"/docs/custom-webview-ios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/custom-webview-ios.md",version:"0.64",lastUpdatedAt:1628418991,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"custom-webview-ios",title:"Custom WebView"}},u=[{value:"Native Code",id:"native-code",children:[{value:"Adding New Events and Properties",id:"adding-new-events-and-properties",children:[]},{value:"Extending Existing Events",id:"extending-existing-events",children:[]}]},{value:"JavaScript Interface",id:"javascript-interface",children:[]}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."),(0,a.kt)("p",null,"Before you do this, you should be familiar with the concepts in ",(0,a.kt)("a",{parentName:"p",href:"native-components-ios"},"native UI components"),". You should also familiarise yourself with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebViewManager.m"},"native code for web views"),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."),(0,a.kt)("h2",{id:"native-code"},"Native Code"),(0,a.kt)("p",null,"Like for regular native components, you need a view manager and an web view."),(0,a.kt)("p",null,"For the view, you'll need to make a subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTWebView"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'// RCTCustomWebView.h\n#import <React/RCTWebView.h>\n\n@interface RCTCustomWebView : RCTWebView\n\n@end\n\n// RCTCustomWebView.m\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebView ()\n\n@end\n\n@implementation RCTCustomWebView { }\n\n@end\n')),(0,a.kt)("p",null,"For the view manager, you need to make a subclass ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTWebViewManager"),". You must still include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(UIView *)view")," that returns your custom view"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()")," tag")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'// RCTCustomWebViewManager.h\n#import <React/RCTWebViewManager.h>\n\n@interface RCTCustomWebViewManager : RCTWebViewManager\n\n@end\n\n// RCTCustomWebViewManager.m\n#import "RCTCustomWebViewManager.h"\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebViewManager () <RCTWebViewDelegate>\n\n@end\n\n@implementation RCTCustomWebViewManager { }\n\nRCT_EXPORT_MODULE()\n\n- (UIView *)view\n{\n  RCTCustomWebView *webView = [RCTCustomWebView new];\n  webView.delegate = self;\n  return webView;\n}\n\n@end\n')),(0,a.kt)("h3",{id:"adding-new-events-and-properties"},"Adding New Events and Properties"),(0,a.kt)("p",null,"Adding new properties and events is the same as regular UI components. For properties, you define an ",(0,a.kt)("inlineCode",{parentName:"p"},"@property")," in the header. For events, you define a ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTDirectEventBlock")," in the view's ",(0,a.kt)("inlineCode",{parentName:"p"},"@interface"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},"// RCTCustomWebView.h\n@property (nonatomic, copy) NSString *finalUrl;\n\n// RCTCustomWebView.m\n@interface RCTCustomWebView ()\n\n@property (nonatomic, copy) RCTDirectEventBlock onNavigationCompleted;\n\n@end\n")),(0,a.kt)("p",null,"Then expose it in the view manager's ",(0,a.kt)("inlineCode",{parentName:"p"},"@implementation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},"// RCTCustomWebViewManager.m\nRCT_EXPORT_VIEW_PROPERTY(onNavigationCompleted, RCTDirectEventBlock)\nRCT_EXPORT_VIEW_PROPERTY(finalUrl, NSString)\n")),(0,a.kt)("h3",{id:"extending-existing-events"},"Extending Existing Events"),(0,a.kt)("p",null,"You should refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebView.m"},"RCTWebView.m")," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."),(0,a.kt)("p",null,"By default, most methods aren't exposed from RCTWebView. If you need to expose them, you need to create an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html"},"Objective C category"),", and then expose all the methods you need to use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},"// RCTWebView+Custom.h\n#import <React/RCTWebView.h>\n\n@interface RCTWebView (Custom)\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;\n- (NSMutableDictionary<NSString *, id> *)baseEvent;\n@end\n")),(0,a.kt)("p",null,"Once these are exposed, you can reference them in your custom web view class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'// RCTCustomWebView.m\n\n// Remember to import the category file.\n#import "RCTWebView+Custom.h"\n\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request\n navigationType:(UIWebViewNavigationType)navigationType\n{\n  BOOL allowed = [super webView:webView shouldStartLoadWithRequest:request navigationType:navigationType];\n\n  if (allowed) {\n    NSString* url = request.URL.absoluteString;\n    if (url && [url isEqualToString:_finalUrl]) {\n      if (_onNavigationCompleted) {\n        NSMutableDictionary<NSString *, id> *event = [self baseEvent];\n        _onNavigationCompleted(event);\n      }\n    }\n  }\n\n  return allowed;\n}\n')),(0,a.kt)("h2",{id:"javascript-interface"},"JavaScript Interface"),(0,a.kt)("p",null,"To use your custom web view, you'll need to create a class for it. Your class must:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Export all the prop types from ",(0,a.kt)("inlineCode",{parentName:"li"},"WebView.propTypes")),(0,a.kt)("li",{parentName:"ul"},"Return a ",(0,a.kt)("inlineCode",{parentName:"li"},"WebView")," component with the prop ",(0,a.kt)("inlineCode",{parentName:"li"},"nativeConfig.component")," set to your native component (see below)")),(0,a.kt)("p",null,"To get your native component, you must use ",(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView.extraNativeComponentConfig"),". This third argument contains prop types that are only required for native code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {Component, PropTypes} from 'react';\nimport {WebView, requireNativeComponent, NativeModules} from 'react-native';\nconst {CustomWebViewManager} = NativeModules;\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n")),(0,a.kt)("p",null,"If you want to add custom props to your native component, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeConfig.props")," on the web view. For iOS, you should also set the ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeConfig.viewManager")," prop with your custom WebView ViewManager as in the example above."),(0,a.kt)("p",null,"For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props"),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,a.kt)("inlineCode",{parentName:"p"},"this.props")," if it exists."),(0,a.kt)("p",null,"If you are unsure how something should be implemented from the JS side, look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.ios.js"},"WebView.ios.js")," in the React Native source."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = (event) => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n")),(0,a.kt)("p",null,"Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeOnly")," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," instead of a regular prop type."),(0,a.kt)("p",null,"For example, if you wanted to add an internal event handler called ",(0,a.kt)("inlineCode",{parentName:"p"},"onScrollToBottom"),", you would use,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  }\n);\n")))}c.isMDXComponent=!0}}]);