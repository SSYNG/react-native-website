"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[22630],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(a),k=r,b=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},27602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>h,frontMatter:()=>s,metadata:()=>b,toc:()=>f});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&d(e,a,t[a]);return e};const s={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},k=void 0,b={unversionedId:"touchablenativefeedback",id:"version-0.64/touchablenativefeedback",title:"TouchableNativeFeedback",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.64/touchablenativefeedback.md",sourceDirName:".",slug:"/touchablenativefeedback",permalink:"/docs/0.64/touchablenativefeedback",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchablenativefeedback.md",tags:[],version:"0.64",frontMatter:{id:"touchablenativefeedback",title:"TouchableNativeFeedback"},sidebar:"version-0.64/\u7ec4\u4ef6",previous:{title:"DrawerLayoutAndroid",permalink:"/docs/0.64/drawerlayoutandroid"},next:{title:"InputAccessoryView",permalink:"/docs/0.64/inputaccessoryview"}},m={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>background</code>",id:"background",level:3},{value:"<code>useForeground</code>",id:"useforeground",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>SelectableBackground()</code>",id:"selectablebackground",level:3},{value:"<code>SelectableBackgroundBorderless()</code>",id:"selectablebackgroundborderless",level:3},{value:"<code>Ripple()</code>",id:"ripple",level:3},{value:"<code>canUseNativeForeground()</code>",id:"canusenativeforeground",level:3}],C={toc:f};function h(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},C),d),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.64/pressable"}),"Pressable")," API.")),(0,n.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\uff08\u4ec5\u9650 Android \u5e73\u53f0\uff09\u3002\u5728 Android \u8bbe\u5907\u4e0a\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u5229\u7528\u539f\u751f\u72b6\u6001\u6765\u6e32\u67d3\u89e6\u6478\u7684\u53cd\u9988\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\u5b83\u53ea\u652f\u6301\u4e00\u4e2a\u5355\u72ec\u7684 View \u5b9e\u4f8b\u4f5c\u4e3a\u5b50\u8282\u70b9\u3002\u5728\u5e95\u5c42\u5b9e\u73b0\u4e0a\uff0c\u5b9e\u9645\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 RCTView \u8282\u70b9\u66ff\u6362\u5f53\u524d\u7684\u5b50 View\uff0c\u5e76\u9644\u5e26\u4e00\u4e9b\u989d\u5916\u7684\u5c5e\u6027\u3002"),(0,n.kt)("p",null,"\u539f\u751f\u89e6\u6478\u64cd\u4f5c\u53cd\u9988\u7684\u80cc\u666f\u53ef\u4ee5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"background"),"\u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u3002"),(0,n.kt)("h2",u({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",u({},{className:"snack-player","data-snack-name":"TouchableNativeFeedback Android Component Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20TouchableNativeFeedback%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cnimport%20Constants%20from%20%5C%22expo-constants%5C%22%3B%5Cn%5Cnconst%20randomHexColor%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20%5C%22%23000000%5C%22.replace(%2F0%2Fg%2C%20function()%20%7B%5Cn%20%20%20%20return%20(~~(Math.random()%20*%2016)).toString(16)%3B%5Cn%20%20%7D)%3B%5Cn%7D%3B%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BrippleColor%2C%20setRippleColor%5D%20%3D%20useState(randomHexColor())%3B%5Cn%20%20const%20%5BrippleOverflow%2C%20setRippleOverflow%5D%20%3D%20useState(false)%3B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CTouchableNativeFeedback%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20setRippleColor(randomHexColor())%3B%5Cn%20%20%20%20%20%20%20%20%20%20setRippleOverflow(!rippleOverflow)%3B%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple(rippleColor%2C%20rippleOverflow)%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.touchable%7D%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETouchableNativeFeedback%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20touchable%3A%20%7B%20flex%3A%200.5%2C%20borderColor%3A%20%5C%22black%5C%22%2C%20borderWidth%3A%201%20%7D%2C%5Cn%20%20text%3A%20%7B%20alignSelf%3A%20%5C%22center%5C%22%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",u({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/0.64/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),(0,n.kt)("h3",u({},{id:"background"}),(0,n.kt)("inlineCode",{parentName:"h3"},"background")),(0,n.kt)("p",null,"\u51b3\u5b9a\u5728\u89e6\u6478\u53cd\u9988\u7684\u65f6\u5019\u663e\u793a\u4ec0\u4e48\u7c7b\u578b\u7684\u80cc\u666f\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u6709\u7740",(0,n.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u548c\u4e00\u4e9b\u57fa\u4e8e",(0,n.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u7684\u989d\u5916\u6570\u636e\u7684\u5bf9\u8c61\u3002\u6211\u4eec\u63a8\u8350\u9009\u7528\u672c\u7ec4\u4ef6\u7684\u51e0\u4e2a\u9759\u6001\u65b9\u6cd5\u6765\u521b\u5efa\u8fd9\u4e2a\u5bf9\u8c61\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"backgroundPropType"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"useforeground"}),(0,n.kt)("inlineCode",{parentName:"h3"},"useForeground")),(0,n.kt)("p",null,"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."),(0,n.kt)("p",null,"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("h2",u({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",u({},{id:"selectablebackground"}),(0,n.kt)("inlineCode",{parentName:"h3"},"SelectableBackground()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackground(rippleRadius: ?number)\n")),(0,n.kt)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8868\u793a\u5b89\u5353\u4e3b\u9898\u9ed8\u8ba4\u7684\u5bf9\u4e8e\u88ab\u9009\u4e2d\u5bf9\u8c61\u7684\u80cc\u666f(?android:attr/selectableItemBackground)\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"selectablebackgroundborderless"}),(0,n.kt)("inlineCode",{parentName:"h3"},"SelectableBackgroundBorderless()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackgroundBorderless(rippleRadius: ?number)\n")),(0,n.kt)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8868\u793a\u5b89\u5353\u4e3b\u9898\u9ed8\u8ba4\u7684\u5bf9\u4e8e\u88ab\u9009\u4e2d\u7684\u65e0\u8fb9\u6846\u5bf9\u8c61\u7684\u80cc\u666f(?android:attr/selectableItemBackgroundBorderless)\u3002\u53ea\u9002\u7528\u4e8e Android API level 21+\u3002",(0,n.kt)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"ripple"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Ripple()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static Ripple(color: string, borderless: boolean, rippleRadius: ?number)\n")),(0,n.kt)("p",null,"\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5f53\u6309\u94ae\u88ab\u6309\u4e0b\u65f6\u4ea7\u751f\u4e00\u4e2a\u6d9f\u6f2a\u72b6\u7684\u80cc\u666f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 color \u53c2\u6570\u6765\u6307\u5b9a\u989c\u8272\uff0c\u5982\u679c\u53c2\u6570",(0,n.kt)("inlineCode",{parentName:"p"},"borderless"),"\u662f true\uff0c\u90a3\u4e48\u6d9f\u6f2a\u8fd8\u4f1a\u6e32\u67d3\u5230\u89c6\u56fe\u7684\u8303\u56f4\u4e4b\u5916\uff08\u53c2\u89c1\u539f\u751f\u7684 actionbar buttons \u4f5c\u4e3a\u8be5\u6548\u679c\u7684\u4e00\u4e2a\u4f8b\u5b50\uff09\u3002\u8fd9\u4e2a\u80cc\u666f\u7c7b\u578b\u53ea\u5728 Android API level 21+\u9002\u7528\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"The ripple color")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"borderless"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"If the ripple can render outside it's bounds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"rippleRadius"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"?number"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"controls the radius of the ripple effect")))),(0,n.kt)("hr",null),(0,n.kt)("h3",u({},{id:"canusenativeforeground"}),(0,n.kt)("inlineCode",{parentName:"h3"},"canUseNativeForeground()")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"static canUseNativeForeground()\n")))}h.isMDXComponent=!0}}]);