"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[53315],{35318:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),k=p(a),c=l,N=k["".concat(o,".").concat(c)]||k[c]||d[c]||r;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:l,i[1]=m;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},68220:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>s,frontMatter:()=>k,metadata:()=>N,toc:()=>b});var n=a(35318),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&u(t,a,e[a]);if(m)for(var a of m(e))p.call(e,a)&&u(t,a,e[a]);return t};const k={id:"slider",title:"\ud83d\udea7 Slider"},c=void 0,N={unversionedId:"slider",id:"version-0.70/slider",title:"\ud83d\udea7 Slider",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/slider instead.",source:"@site/versioned_docs/version-0.70/slider.md",sourceDirName:".",slug:"/slider",permalink:"/docs/slider",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/slider.md",tags:[],version:"0.70",frontMatter:{id:"slider",title:"\ud83d\udea7 Slider"}},h={},b=[{value:"Props",id:"props",level:2},{value:"<code>style</code>",id:"style",level:3},{value:"<code>disabled</code>",id:"disabled",level:3},{value:"<code>maximumValue</code>",id:"maximumvalue",level:3},{value:"<code>minimumTrackTintColor</code>",id:"minimumtracktintcolor",level:3},{value:"<code>minimumValue</code>",id:"minimumvalue",level:3},{value:"<code>onSlidingComplete</code>",id:"onslidingcomplete",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>step</code>",id:"step",level:3},{value:"<code>maximumTrackTintColor</code>",id:"maximumtracktintcolor",level:3},{value:"<code>testID</code>",id:"testid",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>thumbTintColor</code>",id:"thumbtintcolor",level:3},{value:"<code>maximumTrackImage</code>",id:"maximumtrackimage",level:3},{value:"<code>minimumTrackImage</code>",id:"minimumtrackimage",level:3},{value:"<code>thumbImage</code>",id:"thumbimage",level:3},{value:"<code>trackImage</code>",id:"trackimage",level:3}],g={toc:b};function s(t){var e,a=t,{components:l}=a,u=((t,e)=>{var a={};for(var n in t)o.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&m)for(var n of m(t))e.indexOf(n)<0&&p.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},g),u),r(e,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-community/react-native-slider"}),"@react-native-community/slider")," instead.")),(0,n.kt)("p",null,"\u7528\u4e8e\u9009\u62e9\u4e00\u4e2a\u8303\u56f4\u503c\u7684\u7ec4\u4ef6\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",d({},{id:"props"}),"Props"),(0,n.kt)("h3",d({},{id:"style"}),(0,n.kt)("inlineCode",{parentName:"h3"},"style")),(0,n.kt)("p",null,"Used to style and layout the ",(0,n.kt)("inlineCode",{parentName:"p"},"Slider"),". See ",(0,n.kt)("inlineCode",{parentName:"p"},"StyleSheet.js")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ViewStylePropTypes.js")," for more info."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"View.style"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"disabled"}),(0,n.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,n.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u7528\u6237\u5c31\u4e0d\u80fd\u79fb\u52a8\u6ed1\u5757\u3002\u9ed8\u8ba4\u4e3a false\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"maximumvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"maximumValue")),(0,n.kt)("p",null,"\u6ed1\u5757\u7684\u6700\u5927\u503c\uff08\u5f53\u6ed1\u5757\u6ed1\u5230\u6700\u53f3\u7aef\u65f6\u8868\u793a\u7684\u503c\uff09\u3002\u9ed8\u8ba4\u4e3a 1\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"minimumtracktintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minimumTrackTintColor")),(0,n.kt)("p",null,"\u6ed1\u5757\u5de6\u4fa7\u8f68\u9053\u7684\u989c\u8272\u3002\u5728 iOS \u4e0a\u9ed8\u8ba4\u4e3a\u4e00\u4e2a\u84dd\u8272\u7684\u6e10\u53d8\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/colors"}),"color")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"minimumvalue"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minimumValue")),(0,n.kt)("p",null,"\u6ed1\u5757\u7684\u6700\u5c0f\u503c\uff08\u5f53\u6ed1\u5757\u6ed1\u5230\u6700\u5de6\u7aef\u65f6\u8868\u793a\u7684\u503c\uff09\u3002\u9ed8\u8ba4\u4e3a 0\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"onslidingcomplete"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onSlidingComplete")),(0,n.kt)("p",null,"\u7528\u6237\u677e\u5f00\u6ed1\u5757\u7684\u65f6\u5019\u8c03\u7528\u6b64\u56de\u8c03\uff0c\u65e0\u8bba\u503c\u662f\u5426\u53d8\u5316\u3002\u56de\u8c03\u503c\u4e3a\u5f53\u524d\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"onvaluechange"}),(0,n.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,n.kt)("p",null,"\u5728\u7528\u6237\u62d6\u52a8\u6ed1\u5757\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u8c03\u7528\u6b64\u56de\u8c03\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"step"}),(0,n.kt)("inlineCode",{parentName:"h3"},"step")),(0,n.kt)("p",null,"\u6ed1\u5757\u7684\u6b65\u957f\uff08\u62d6\u52a8\u53d8\u5316\u7684\u6700\u5c0f\u5355\u5143\uff09\u3002\u8fd9\u4e2a\u503c\u5e94\u8be5\u5728 0 \u5230(maximumValue - minimumValue)\u4e4b\u95f4\u3002\u9ed8\u8ba4\u503c\u4e3a 0\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"maximumtracktintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"maximumTrackTintColor")),(0,n.kt)("p",null,"\u6ed1\u5757\u53f3\u4fa7\u8f68\u9053\u7684\u989c\u8272\u3002\u5728 iOS \u4e0a\u9ed8\u8ba4\u4e3a\u4e00\u4e2a\u7070\u8272\u7684\u6e10\u53d8\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/colors"}),"color")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"testid"}),(0,n.kt)("inlineCode",{parentName:"h3"},"testID")),(0,n.kt)("p",null,"Used to locate this view in UI automation tests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"value"}),(0,n.kt)("inlineCode",{parentName:"h3"},"value")),(0,n.kt)("p",null,"\u6ed1\u5757\u7684\u521d\u59cb\u503c\u3002\u8fd9\u4e2a\u503c\u5e94\u8be5\u5728\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u4e4b\u95f4\u3002\u9ed8\u8ba4\u503c\u662f 0\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u8fd9\u4e0d\u662f\u4e00\u4e2a\u53d7\u63a7\u7ec4\u4ef6\uff01"),"\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u4e0d\u9700\u8981\u5728\u6ed1\u52a8\u8fc7\u7a0b\u4e2d\u53bb\u624b\u52a8\u66f4\u65b0\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"thumbtintcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"thumbTintColor")),(0,n.kt)("p",null,"Color of the foreground switch grip."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/colors"}),"color")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"maximumtrackimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"maximumTrackImage")),(0,n.kt)("p",null,"\u6307\u5b9a\u4e00\u4e2a\u6ed1\u5757\u53f3\u4fa7\u8f68\u9053\u80cc\u666f\u56fe\u3002\u4ec5\u652f\u6301\u9759\u6001\u56fe\u7247\u3002\u56fe\u7247\u6700\u5de6\u8fb9\u7684\u50cf\u7d20\u4f1a\u88ab\u5e73\u94fa\u76f4\u81f3\u586b\u6ee1\u53f3\u4fa7\u8f68\u9053\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"minimumtrackimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"minimumTrackImage")),(0,n.kt)("p",null,"\u6307\u5b9a\u4e00\u4e2a\u6ed1\u5757\u5de6\u4fa7\u8f68\u9053\u80cc\u666f\u56fe\u3002\u4ec5\u652f\u6301\u9759\u6001\u56fe\u7247\u3002\u56fe\u7247\u6700\u53f3\u8fb9\u7684\u50cf\u7d20\u4f1a\u88ab\u5e73\u94fa\u76f4\u81f3\u586b\u6ee1\u5de6\u4fa7\u8f68\u9053\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"thumbimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"thumbImage")),(0,n.kt)("p",null,"\u7ed9\u6ed1\u5757\u8bbe\u7f6e\u4e00\u5f20\u56fe\u7247\u3002\u53ea\u652f\u6301\u9759\u6001\u56fe\u7247\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"trackimage"}),(0,n.kt)("inlineCode",{parentName:"h3"},"trackImage")),(0,n.kt)("p",null,"\u7ed9\u8f68\u9053\u8bbe\u7f6e\u4e00\u5f20\u80cc\u666f\u56fe\u3002\u53ea\u652f\u6301\u9759\u6001\u56fe\u7247\u3002\u56fe\u7247\u6700\u4e2d\u592e\u7684\u50cf\u7d20\u4f1a\u88ab\u5e73\u94fa\u76f4\u81f3\u586b\u6ee1\u8f68\u9053\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Image.propTypes.source"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"iOS")))))}s.isMDXComponent=!0}}]);