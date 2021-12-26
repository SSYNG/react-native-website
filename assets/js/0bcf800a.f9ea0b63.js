"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[49115],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},12120:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(52685),r=n(27378),i=n(76457),l=n(84956);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(92373),u=n(38944),p="tabItem_c0e5";function c(e){var t,n,i,l=e.lazy,c=e.block,d=e.defaultValue,m=e.values,v=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=o(),g=T.tabGroupChoices,w=T.setTabGroupChoices,y=(0,r.useState)(N),V=y[0],E=y[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=g[v];null!=O&&O!==V&&f.some((function(e){return e.value===O}))&&E(O)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==V&&(x(t),E(a),null!=v&&w(v,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:V===t?0:-1,"aria-selected":V===t,key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:_,onClick:_},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":V===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===V}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==V})}))))}function d(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},68330:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return v}});var a=n(52685),r=n(1244),i=(n(27378),n(35318)),l=n(12120),o=n(70517),s=(n(45981),["components"]),u={id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",hide_table_of_contents:!0},p=void 0,c={unversionedId:"building-for-tv",id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",description:"\u76ee\u524d\u7684 React Native \u5e94\u7528\u53ea\u9700\u5728 JavaScript \u7aef\u7b80\u5355\u4fee\u6539\u751a\u81f3\u65e0\u9700\u4fee\u6539\uff0c\u5728\u7535\u89c6\u548c\u673a\u9876\u76d2\u8bbe\u5907\u4e0a\u5c31\u57fa\u672c\u53ef\u7528\u4e86\u3002",source:"@site/../cndocs/building-for-tv.md",sourceDirName:".",slug:"/building-for-tv",permalink:"/docs/next/building-for-tv",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/building-for-tv.md",tags:[],version:"current",frontMatter:{id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"\u96c6\u6210\u5230 Android Fragment",permalink:"/docs/next/integration-with-android-fragment"},next:{title:"\u591a\u5e73\u53f0\u652f\u6301",permalink:"/docs/next/out-of-tree-platforms"}},d=[{value:"\u7f16\u8bd1\u4fee\u6539",id:"\u7f16\u8bd1\u4fee\u6539",children:[],level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539",children:[],level:2},{value:"\u7f16\u8bd1\u53d8\u66f4",id:"\u7f16\u8bd1\u53d8\u66f4",children:[],level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539-1",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76ee\u524d\u7684 React Native \u5e94\u7528\u53ea\u9700\u5728 JavaScript \u7aef\u7b80\u5355\u4fee\u6539\u751a\u81f3\u65e0\u9700\u4fee\u6539\uff0c\u5728\u7535\u89c6\u548c\u673a\u9876\u76d2\u8bbe\u5907\u4e0a\u5c31\u57fa\u672c\u53ef\u7528\u4e86\u3002"),(0,i.kt)(l.Z,{groupId:"tv",defaultValue:"androidtv",values:[{label:"Android TV",value:"androidtv"},{label:"\ud83d\udea7 tvOS",value:"tvos"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"androidtv",mdxType:"TabItem"},(0,i.kt)("h2",{id:"\u7f16\u8bd1\u4fee\u6539"},"\u7f16\u8bd1\u4fee\u6539"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\u539f\u751f\u7aef"),": \u5728 Android TV \u4e0a\u8fd0\u884c React Native \u9879\u76ee\u8bf7\u5148\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),"\u4e2d\u52a0\u5165\u4e0b\u5217\u914d\u7f6e\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- \u52a0\u5165\u81ea\u5b9a\u4e49\u7684banner\u56fe\u4f5c\u4e3aTV\u8bbe\u5907\u4e0a\u7684\u56fe\u6807 --\x3e\n <application\n  ...\n  android:banner="@drawable/tv_banner"\n  >\n    ...\n    <intent-filter>\n      ...\n      \x3c!-- Needed to properly create a launch intent when running on Android TV --\x3e\n      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>\n    </intent-filter>\n    ...\n  </application>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"JavaScript \u7aef"),": \u5bf9\u4e8e\u7535\u89c6\u8bbe\u5907\u7684\u68c0\u6d4b\u4ee3\u7801\u5df2\u7ecf\u52a0\u5165\u5230\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"Platform"),"\u6a21\u5757\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u8fd0\u884c\u8bbe\u5907\u662f\u5426\u662f\u7535\u89c6\u8bbe\u5907\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Platform } from 'react-native';\nconst running_on_tv = Platform.isTV;\n")),(0,i.kt)("h2",{id:"\u4ee3\u7801\u4fee\u6539"},"\u4ee3\u7801\u4fee\u6539"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"\u8bbf\u95ee\u53ef\u70b9\u51fb\u7684\u63a7\u4ef6"),": When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," will work as expected. In particular:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactAndroidTVRootViewHelper"),", sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({board: cmp.state.board.move(2)});\n      } else if(evt && evt.eventType === 'up') {\n        cmp.setState({board: cmp.state.board.move(1)});\n      } else if(evt && evt.eventType === 'left') {\n        cmp.setState({board: cmp.state.board.move(0)});\n      } else if(evt && evt.eventType === 'down') {\n        cmp.setState({board: cmp.state.board.move(3)});\n      } else if(evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Dev Menu support"),": On the emulator, cmd-M will bring up the developer menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"\u5df2\u77e5\u95ee\u9898"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TextInput"),"\u7ec4\u4ef6\u4e0d\u80fd\u83b7\u5f97\u7126\u70b9\uff0c\u8bf7\u53c2\u8003\u8fd9\u91cc\u8ba8\u8bba\u7684",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/pull/16500#issuecomment-629285638"},"\u4e34\u65f6\u89e3\u51b3\u65b9\u6848"),"\u3002"))))),(0,i.kt)(o.Z,{value:"tvos",mdxType:"TabItem"},(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," \u8bf7\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tvos"},"react-native-tvos"),"\u4ee3\u66ff\u3002")),(0,i.kt)("h2",{id:"\u7f16\u8bd1\u53d8\u66f4"},"\u7f16\u8bd1\u53d8\u66f4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"\u539f\u751f\u7aef"),": React Native \u751f\u6210\u7684 Xcode \u9879\u76ee\u73b0\u90fd\u5df2\u5305\u542b Apple TV \u7f16\u8bd1\u76ee\u6807\uff0c\u5176\u540d\u5b57\u90fd\u5e26\u6709'-tvOS'\u540e\u7f00\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"react-native init"),": \u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"react-native init"),"\u547d\u4ee4\u521b\u5efa\u7684\u65b0\u9879\u76ee\u4f1a\u81ea\u52a8\u5728 Xcode \u65b0\u9879\u76ee\u4e2d\u5305\u542b Apple TV \u7f16\u8bd1\u76ee\u6807\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"JavaScript \u7aef"),": \u5bf9\u4e8e\u7535\u89c6\u8bbe\u5907\u7684\u68c0\u6d4b\u4ee3\u7801\u5df2\u7ecf\u52a0\u5165\u5230\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"Platform"),"\u6a21\u5757\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u8fd0\u884c\u8bbe\u5907\u662f\u5426\u662f\u7535\u89c6\u8bbe\u5907\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nconst running_on_tv = Platform.isTV;\n\n// \u5982\u679c\u4f60\u60f3\u66f4\u7cbe\u786e\u5730\u9488\u5bf9tvOS\u8bbe\u5907\uff08\u5373\u6392\u9664Android\u8bbe\u5907\uff09\uff0c\n// \u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\uff1a\nconst running_on_apple_tv = Platform.isTVOS;\n")),(0,i.kt)("h2",{id:"\u4ee3\u7801\u4fee\u6539-1"},"\u4ee3\u7801\u4fee\u6539"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"General support for tvOS"),": Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Common codebase"),": Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"\u8bbf\u95ee\u53ef\u70b9\u51fb\u7684\u63a7\u4ef6"),": When running on Apple TV, the native view class is ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTTVView"),", which has additional methods to make use of the tvOS focus engine. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," will work as expected. In particular:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTTVRemoteHandler"),", sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTTVNavigationEventEmitter")," (a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTEventEmitter"),"), that fires a JS event. This event will be picked up by instances of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"TV remote animations"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTTVView")," native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Back navigation with the TV remote menu button"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"BackHandler")," component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote."))))))}v.isMDXComponent=!0}}]);