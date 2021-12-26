"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41353],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98554:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(52685),i=n(1244),r=(n(27378),n(35318)),o=["components"],l={id:"custom-webview-android",title:"Custom WebView"},s=void 0,p={unversionedId:"custom-webview-android",id:"custom-webview-android",title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/../cndocs/custom-webview-android.md",sourceDirName:".",slug:"/custom-webview-android",permalink:"/docs/next/custom-webview-android",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/custom-webview-android.md",tags:[],version:"current",frontMatter:{id:"custom-webview-android",title:"Custom WebView"}},u=[{value:"Native Code",id:"native-code",children:[{value:"Adding New Properties",id:"adding-new-properties",children:[],level:3},{value:"Adding New Events",id:"adding-new-events",children:[],level:3}],level:2},{value:"JavaScript Interface",id:"javascript-interface",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."),(0,r.kt)("p",null,"Before you do this, you should be familiar with the concepts in ",(0,r.kt)("a",{parentName:"p",href:"native-components-android"},"native UI components"),". You should also familiarise yourself with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/webview/ReactWebViewManager.java"},"native code for web views"),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."),(0,r.kt)("h2",{id:"native-code"},"Native Code"),(0,r.kt)("p",null,"To get started, you'll need to create a subclass of ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactWebViewManager"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactWebView"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactWebViewClient"),". In your view manager, you'll then need to override:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createReactWebViewInstance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addEventEmitters"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ReactModule(name = CustomWebViewManager.REACT_CLASS)\npublic class CustomWebViewManager extends ReactWebViewManager {\n  /* This name must match what we\'re referring to in JS */\n  protected static final String REACT_CLASS = "RCTCustomWebView";\n\n  protected static class CustomWebViewClient extends ReactWebViewClient { }\n\n  protected static class CustomWebView extends ReactWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n  }\n\n  @Override\n  protected ReactWebView createReactWebViewInstance(ThemedReactContext reactContext) {\n    return new CustomWebView(reactContext);\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n\n  @Override\n  protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {\n    view.setWebViewClient(new CustomWebViewClient());\n  }\n}\n')),(0,r.kt)("p",null,"You'll need to follow the usual steps to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/native-modules-android#register-the-module"},"register the module"),"."),(0,r.kt)("h3",{id:"adding-new-properties"},"Adding New Properties"),(0,r.kt)("p",null,"To add a new property, you'll need to add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomWebView"),", and then expose it in ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomWebViewManager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class CustomWebViewManager extends ReactWebViewManager {\n  ...\n\n  protected static class CustomWebView extends ReactWebView {\n    public CustomWebView(ThemedReactContext reactContext) {\n      super(reactContext);\n    }\n\n    protected @Nullable String mFinalUrl;\n\n    public void setFinalUrl(String url) {\n        mFinalUrl = url;\n    }\n\n    public String getFinalUrl() {\n        return mFinalUrl;\n    }\n  }\n\n  ...\n\n  @ReactProp(name = "finalUrl")\n  public void setFinalUrl(WebView view, String url) {\n    ((CustomWebView) view).setFinalUrl(url);\n  }\n}\n')),(0,r.kt)("h3",{id:"adding-new-events"},"Adding New Events"),(0,r.kt)("p",null,"For events, you'll first need to make create event subclass."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// NavigationCompletedEvent.java\npublic class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n')),(0,r.kt)("p",null,"You can trigger the event in your web view client. You can hook existing handlers if your events are based on them."),(0,r.kt)("p",null,"You should refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/webview/ReactWebViewManager.java"},"ReactWebViewManager.java")," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class NavigationCompletedEvent extends Event<NavigationCompletedEvent> {\n  private WritableMap mParams;\n\n  public NavigationCompletedEvent(int viewTag, WritableMap params) {\n    super(viewTag);\n    this.mParams = params;\n  }\n\n  @Override\n  public String getEventName() {\n    return "navigationCompleted";\n  }\n\n  @Override\n  public void dispatch(RCTEventEmitter rctEventEmitter) {\n    init(getViewTag());\n    rctEventEmitter.receiveEvent(getViewTag(), getEventName(), mParams);\n  }\n}\n\n// CustomWebViewManager.java\nprotected static class CustomWebViewClient extends ReactWebViewClient {\n  @Override\n  public boolean shouldOverrideUrlLoading(WebView view, String url) {\n    boolean shouldOverride = super.shouldOverrideUrlLoading(view, url);\n    String finalUrl = ((CustomWebView) view).getFinalUrl();\n\n    if (!shouldOverride && url != null && finalUrl != null && new String(url).equals(finalUrl)) {\n      final WritableMap params = Arguments.createMap();\n      dispatchEvent(view, new NavigationCompletedEvent(view.getId(), params));\n    }\n\n    return shouldOverride;\n  }\n}\n')),(0,r.kt)("p",null,"Finally, you'll need to expose the events in ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomWebViewManager")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"getExportedCustomDirectEventTypeConstants"),". Note that currently, the default implementation returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", but this may change in the future."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class CustomWebViewManager extends ReactWebViewManager {\n  ...\n\n  @Override\n  public @Nullable\n  Map getExportedCustomDirectEventTypeConstants() {\n    Map<String, Object> export = super.getExportedCustomDirectEventTypeConstants();\n    if (export == null) {\n      export = MapBuilder.newHashMap();\n    }\n    export.put("navigationCompleted", MapBuilder.of("registrationName", "onNavigationCompleted"));\n    return export;\n  }\n}\n')),(0,r.kt)("h2",{id:"javascript-interface"},"JavaScript Interface"),(0,r.kt)("p",null,"To use your custom web view, you'll need to create a class for it. Your class must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Export all the prop types from ",(0,r.kt)("inlineCode",{parentName:"li"},"WebView.propTypes")),(0,r.kt)("li",{parentName:"ul"},"Return a ",(0,r.kt)("inlineCode",{parentName:"li"},"WebView")," component with the prop ",(0,r.kt)("inlineCode",{parentName:"li"},"nativeConfig.component")," set to your native component (see below)")),(0,r.kt)("p",null,"To get your native component, you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,r.kt)("inlineCode",{parentName:"p"},"WebView.extraNativeComponentConfig"),". This third argument contains prop types that are only required for native code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {Component, PropTypes} from 'react';\nimport {WebView, requireNativeComponent} from 'react-native';\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView {...this.props} nativeConfig={{component: RCTCustomWebView}} />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n")),(0,r.kt)("p",null,"If you want to add custom props to your native component, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeConfig.props")," on the web view."),(0,r.kt)("p",null,"For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props"),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,r.kt)("inlineCode",{parentName:"p"},"this.props")," if it exists."),(0,r.kt)("p",null,"If you are unsure how something should be implemented from the JS side, look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.android.js"},"WebView.android.js")," in the React Native source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = (event) => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n        }}\n      />\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeOnly")," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," instead of a regular prop type."),(0,r.kt)("p",null,"For example, if you wanted to add an internal event handler called ",(0,r.kt)("inlineCode",{parentName:"p"},"onScrollToBottom"),", you would use,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  }\n);\n")))}d.isMDXComponent=!0}}]);