"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2529],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16053:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(52685),r=n(1244),i=(n(27378),n(35318)),o=["components"],d={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},l=void 0,c={unversionedId:"datepickerandroid",id:"version-0.65/datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.65/datepickerandroid.md",sourceDirName:".",slug:"/datepickerandroid",permalink:"/docs/0.65/datepickerandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/datepickerandroid.md",tags:[],version:"0.65",frontMatter:{id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3},{value:"\u67e5\u770b\u65b9\u6cd5",id:"\u67e5\u770b\u65b9\u6cd5",children:[],level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>open()</code>",id:"open",children:[],level:3},{value:"<code>dateSetAction()</code>",id:"datesetaction",children:[],level:3},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[],level:3}],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.directory/?search=datepicker"},"community packages")," instead.")),(0,i.kt)("p",null,"\u672c\u7ec4\u4ef6\u4f1a\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65e5\u671f\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"try {\n  const {action, year, month, day} = await DatePickerAndroid.open({\n    // \u8981\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u4e3a\u4eca\u5929\u7684\u8bdd\uff0c\u4f7f\u7528`new Date()`\u5373\u53ef\u3002\n    // \u4e0b\u9762\u663e\u793a\u7684\u4f1a\u662f2020\u5e745\u670825\u65e5\u3002\u6708\u4efd\u662f\u4ece0\u5f00\u59cb\u7b97\u7684\u3002\n    date: new Date(2020, 4, 25)\n  });\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // \u8fd9\u91cc\u5f00\u59cb\u53ef\u4ee5\u5904\u7406\u7528\u6237\u9009\u597d\u7684\u5e74\u6708\u65e5\u4e09\u4e2a\u53c2\u6570\uff1ayear, month (0-11), day\n  }\n} catch ({code, message}) {\n  console.warn('Cannot open date picker', message);\n}\n")),(0,i.kt)("h3",{id:"\u67e5\u770b\u65b9\u6cd5"},"\u67e5\u770b\u65b9\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.65/datepickerandroid#open"},(0,i.kt)("inlineCode",{parentName:"a"},"open"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.65/datepickerandroid#datesetaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dateSetAction"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.65/datepickerandroid#dismissedaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dismissedAction")))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("h3",{id:"open"},(0,i.kt)("inlineCode",{parentName:"h3"},"open()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static open(options)\n")),(0,i.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65e5\u671f\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),(0,i.kt)("p",null,"\u53ef\u9009\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"\u5bf9\u8c61\u7684 key \u503c\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u9ed8\u8ba4\u663e\u793a\u7684\u65e5\u671f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minDate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxDate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u53ef\u9009\u7684\u6700\u5927\u65e5\u671f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode")," (",(0,i.kt)("inlineCode",{parentName:"li"},"enum('calendar', 'spinner', 'default')"),") - \u8bbe\u7f6e\u9009\u62e9\u5668\u7684\u6a21\u5f0f\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"'calendar': Show a date picker in calendar mode."),(0,i.kt)("li",{parentName:"ul"},"'spinner': Show a date picker in spinner mode."),(0,i.kt)("li",{parentName:"ul"},"'default': Show a default native date picker(spinner/calendar) based on android versions.")))),(0,i.kt)("p",null,"\u5728\u7528\u6237\u9009\u597d\u65e5\u671f\u540e\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u56de\u8c03\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"month")," (0-11), ",(0,i.kt)("inlineCode",{parentName:"p"},"day"),"\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u4e86\u5bf9\u8bdd\u6846\uff0cPromise \u4ecd\u7136\u4f1a\u6267\u884c\uff0c\u8fd4\u56de\u7684 action \u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid.dismissedAction"),"\uff0c\u5176\u4ed6\u51e0\u9879\u53c2\u6570\u5219\u4e3a undefined\u3002\u6240\u4ee5\u8bf7\u5728\u4f7f\u7528\u5176\u4ed6\u503c\u4e4b\u524d",(0,i.kt)("strong",{parentName:"p"},"\u52a1\u5fc5"),"\u5148\u68c0\u67e5",(0,i.kt)("inlineCode",{parentName:"p"},"action"),"\u7684\u503c\u662f\u5426\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid.dateSetAction"),"\u3002"),(0,i.kt)("p",null,"Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"minDate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxDate")," options."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datesetaction"},(0,i.kt)("inlineCode",{parentName:"h3"},"dateSetAction()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static dateSetAction()\n")),(0,i.kt)("p",null,"\u5df2\u9009\u4e2d\u4e00\u4e2a\u65e5\u671f\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dismissedaction"},(0,i.kt)("inlineCode",{parentName:"h3"},"dismissedAction()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction()\n")),(0,i.kt)("p",null,"\u5bf9\u8bdd\u6846\u5df2\u88ab\u53d6\u6d88\u3002"))}u.isMDXComponent=!0}}]);