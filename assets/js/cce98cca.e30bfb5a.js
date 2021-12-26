"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[78457],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(52685),o=n(1244),a=(n(27378),n(35318)),r=["components"],l={id:"actionsheetios",title:"ActionSheetIOS"},s=void 0,c={unversionedId:"actionsheetios",id:"version-0.63/actionsheetios",title:"ActionSheetIOS",description:"\u663e\u793a\u4e00\u4e2a iOS \u539f\u751f\u7684Action Sheet\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-0.63/actionsheetios.md",sourceDirName:".",slug:"/actionsheetios",permalink:"/docs/0.63/actionsheetios",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/actionsheetios.md",tags:[],version:"0.63",frontMatter:{id:"actionsheetios",title:"ActionSheetIOS"},sidebar:"version-0.63/api",previous:{title:"ToastAndroid",permalink:"/docs/0.63/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/0.63/dynamiccolorios"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",children:[],level:3},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",children:[{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(98.18%), sunnylqm(1.82%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9818-sunnylqm182",children:[],level:5}],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u663e\u793a\u4e00\u4e2a iOS \u539f\u751f\u7684",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/"},"Action Sheet"),"\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("div",{className:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%22%F0%9F%94%AE%22)%3B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%0A%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20options%3A%20%5B%22Cancel%22%2C%20%22Generate%20number%22%2C%20%22Reset%22%5D%2C%0A%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%0A%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(%22%F0%9F%94%AE%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%22Show%20Action%20Sheet%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20result%3A%20%7B%0A%20%20%20%20fontSize%3A%2064%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,a.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,a.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,a.kt)("h3",{id:"showactionsheetwithoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"static showActionSheetWithOptions(options, callback)\n")),(0,a.kt)("p",null,"\u5728 iOS \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a ActionSheet \u5f39\u51fa\u6846\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u4e00\u9879\u6216\u591a\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," \uff08\u5b57\u7b26\u4e32\u6570\u7ec4\uff09 - \u4e00\u7ec4\u6309\u94ae\u7684\u6587\u5b57\uff08\u5fc5\u9009\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cancelButtonIndex")," \uff08\u6574\u578b\uff09 - \u53d6\u6d88\u6027\u8d28\u7684\u6309\u94ae\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"options"),"\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," \uff08\u6574\u578b\uff09 - \u5220\u9664\u6027\u8d28\u7684\u6309\u94ae\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"options"),"\u4e2d\u7684\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title")," \uff08\u5b57\u7b26\u4e32\uff09 - \u5f39\u51fa\u6846\u9876\u90e8\u7684\u6807\u9898"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," \uff08\u5b57\u7b26\u4e32\uff09 - \u5f39\u51fa\u6846\u9876\u90e8\u6807\u9898\u4e0b\u65b9\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tintColor")," (\u5b57\u7b26\u4e32) - \u6307\u5b9a\u5220\u9664\u6027\u8d28\u7684\u6309\u94ae\u7684\u6587\u5b57\u7684",(0,a.kt)("a",{parentName:"li",href:"/docs/0.63/colors"},"\u989c\u8272"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disabledButtonIndices")," (array of numbers) - a list of button indices which should be disabled")),(0,a.kt)("p",null,"'callback'\u51fd\u6570\u5219\u4ec5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u6240\u70b9\u51fb\u6309\u94ae\u7684\u7d22\u5f15\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ActionSheetIOS.showActionSheetWithOptions({\n  options: ['\u53d6\u6d88', '\u5220\u9664'],\n  destructiveButtonIndex: 1,\n  cancelButtonIndex: 0,\n},\n(buttonIndex) => {\nif (buttonIndex === 1) { /* \u5f53\u63a5\u6536\u5230\u7684\u7d22\u5f15\u4e3a1\uff0c\u5373\u70b9\u51fb\u4e86\u5220\u9664\u6309\u94ae\u65f6\uff0c\u6267\u884c\u5bf9\u5e94\u64cd\u4f5c */ }\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"showshareactionsheetwithoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),(0,a.kt)("p",null,"\u5728 iOS \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u5206\u4eab\u5f39\u51fa\u6846\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u5c5e\u6027\u5305\u542b\u4ee5\u4e0b\u51e0\u9879\uff08\u5fc5\u987b\u81f3\u5c11\u6709 message \u6216 url\uff09:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684 URL \u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subject")," \uff08\u5b57\u7b26\u4e32\uff09 - \u8981\u5206\u4eab\u7684\u4fe1\u606f\u4e3b\u9898"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"excludedActivityTypes")," \uff08\u6570\u7ec4\uff09 - \u6307\u5b9a\u5728 actionsheet \u4e2d\u4e0d\u663e\u793a\u7684\u6d3b\u52a8")),(0,a.kt)("p",null,"\u6ce8\uff1a\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\u6307\u5411\u672c\u5730\u6587\u4ef6\uff0c\u6216\u8005\u662f\u4e00\u4e2a base64 \u7f16\u7801\u7684 url\uff0c\u5219\u4f1a\u76f4\u63a5\u8bfb\u53d6\u5e76\u5206\u4eab\u76f8\u5e94\u7684\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u5206\u4eab\u56fe\u7247\u3001\u89c6\u9891\u4ee5\u53ca PDF \u6587\u4ef6\u7b49\u3002If ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," points to a remote file or address it must conform to URL format as described in ",(0,a.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2396.txt"},"RFC 2396"),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared."),(0,a.kt)("p",null,"'failureCallback'\u51fd\u6570\u4ec5\u63a5\u53d7\u4e00\u4e2a\u9519\u8bef\u5bf9\u8c61\u53c2\u6570\u3002\u6b64\u5bf9\u8c61\u4e2d\u4ec5\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"stack"),"\u5c5e\u6027\uff0c\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"'successCallback'\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u793a\u6210\u529f\u4e0e\u5426\u7684\u5e03\u5c14\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u6210\u529f\u7684\u8bdd\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u5206\u4eab\u65b9\u5f0f\u7684\u5b57\u7b26\u4e32")),(0,a.kt)("hr",null),(0,a.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9818-sunnylqm182"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(98.18%), ",(0,a.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(1.82%)"))}d.isMDXComponent=!0}}]);