"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[99370],{35318:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(a),k=l,c=m["".concat(i,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(c,p(p({ref:e},s),{},{components:a})):n.createElement(c,p({ref:e},s))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:l,p[1]=o;for(var u=2;u<r;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69490:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var n=a(35318),l=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))i.call(e,a)&&s(t,a,e[a]);if(o)for(var a of o(e))u.call(e,a)&&s(t,a,e[a]);return t};const m={id:"alertios",title:"AlertIOS"},k=void 0,c={unversionedId:"alertios",id:"version-0.63/alertios",title:"AlertIOS",description:"AlertIOS\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u901a\u77e5\u7528\u6237\u4e00\u4e9b\u4fe1\u606f\u6216\u662f\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u5b57\u3002",source:"@site/versioned_docs/version-0.63/alertios.md",sourceDirName:".",slug:"/alertios",permalink:"/docs/0.63/alertios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alertios.md",tags:[],version:"0.63",frontMatter:{id:"alertios",title:"AlertIOS"}},N={},g=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>alert()</code>",id:"alert",level:3},{value:"<code>prompt()</code>",id:"prompt",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"AlertType",id:"alerttype",level:3},{value:"AlertButtonStyle",id:"alertbuttonstyle",level:3},{value:"ButtonsArray",id:"buttonsarray",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(76.84%), sunnylqm(23.16%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm7684-sunnylqm2316",level:5}],b={toc:g};function y(t){var e,a=t,{components:l}=a,s=((t,e)=>{var a={};for(var n in t)i.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},b),s),r(e,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AlertIOS"),"\u7528\u4e8e\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u53ef\u4ee5\u901a\u77e5\u7528\u6237\u4e00\u4e9b\u4fe1\u606f\u6216\u662f\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u6587\u5b57\u3002"),(0,n.kt)("p",null,"\u5f39\u51fa\u4e00\u4e2a iOS \u63d0\u793a\u6846\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"AlertIOS.alert(\n 'Sync Complete',\n 'All your data are belong to us.'\n);\n")),(0,n.kt)("p",null,"\u5f39\u51fa\u4e00\u4e2a\u5e26\u8f93\u5165\u6846\u7684 iOS \u63d0\u793a\u6846\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"AlertIOS.prompt(\n  'Enter a value',\n  null,\n  text => console.log(\"You entered \"+text)\n);\n")),(0,n.kt)("p",null,"\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u5c24\u5176\u662f\u4ec5\u4ec5\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528\u8de8\u5e73\u53f0\u7684",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/0.63/alert"}),(0,n.kt)("inlineCode",{parentName:"a"},"Alert")),"\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",d({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",d({},{id:"alert"}),(0,n.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static alert(title: string, [message]: string, [callbackOrButtons]: ?(() => void), ButtonsArray, [type]: AlertType): [object Object]\n")),(0,n.kt)("p",null,"\u521b\u5efa\u5e76\u663e\u793a\u4e00\u4e2a\u63d0\u793a\u6846\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The dialog's title. Passing null or '' will hide the title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"An optional message that appears below the dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"?(() => void),",(0,n.kt)("a",d({parentName:"td"},{href:"/docs/0.63/alertios#buttonsarray"}),"ButtonsArray")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,n.kt)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",(0,n.kt)("inlineCode",{parentName:"td"},"onPress")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," keys. ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/0.63/alertios#alerttype"}),"AlertType")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Deprecated, do not use.")))),(0,n.kt)("p",null,"Example with custom buttons:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.alert(\n  'Update available',\n  'Keep your app up to date to enjoy the latest features',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'Install',\n      onPress: () => console.log('Install Pressed')\n    }\n  ]\n);\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"prompt"}),(0,n.kt)("inlineCode",{parentName:"h3"},"prompt()")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static prompt(title: string, [message]: string, [callbackOrButtons]: ?((text: string) => void), ButtonsArray, [type]: AlertType, [defaultValue]: string, [keyboardType]: string): [object Object]\n")),(0,n.kt)("p",null,"Create and display a prompt to enter some text."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"title"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The dialog's title.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"message"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"An optional message that appears above the text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"callbackOrButtons"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"?((text: string) => void),",(0,n.kt)("a",d({parentName:"td"},{href:"/docs/0.63/alertios#buttonsarray"}),"ButtonsArray")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'. If passed an array of button configurations, each button should include a ",(0,n.kt)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",(0,n.kt)("inlineCode",{parentName:"td"},"onPress")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," keys (see example). ",(0,n.kt)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/0.63/alertios#alerttype"}),"AlertType")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"defaultValue"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The default text in text input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"keyboardType"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The keyboard type of first text field(if exists). One of 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter' or 'web-search'.")))),(0,n.kt)("p",null,"Example with custom buttons:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt(\n  'Enter password',\n  'Enter your password to claim your $1.5B in lottery winnings',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'OK',\n      onPress: (password) =>\n        console.log('OK Pressed, password: ' + password)\n    }\n  ],\n  'secure-text'\n);\n")),(0,n.kt)("p",null,","),(0,n.kt)("p",null,"Example with the default button and a custom callback:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt(\n  'Update username',\n  null,\n  (text) => console.log('Your username is ' + text),\n  null,\n  'default'\n);\n")),(0,n.kt)("h2",d({},{id:"\u7c7b\u578b\u5b9a\u4e49"}),"\u7c7b\u578b\u5b9a\u4e49"),(0,n.kt)("h3",d({},{id:"alerttype"}),"AlertType"),(0,n.kt)("p",null,"An Alert button type"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\\$Enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"default"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Default alert with no inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"plain-text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Plain text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"secure-text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Secure text input alert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"login-password"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Login and password alert")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"alertbuttonstyle"}),"AlertButtonStyle"),(0,n.kt)("p",null,"An Alert button style"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\\$Enum")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"default"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Default button style")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cancel"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Cancel button style")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"destructive"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Destructive button style")))),(0,n.kt)("hr",null),(0,n.kt)("h3",d({},{id:"buttonsarray"}),"ButtonsArray"),(0,n.kt)("p",null,"Array or buttons"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Array")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[text]"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[onPress]"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Callback function when button pressed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"[style]"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/docs/0.63/alertios#alertbuttonstyle"}),"AlertButtonStyle")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button style")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"text"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"onPress"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Callback function when button pressed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"style"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Button style")))),(0,n.kt)("hr",null),(0,n.kt)("h5",d({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm7684-sunnylqm2316"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,n.kt)("a",d({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(76.84%), ",(0,n.kt)("a",d({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(23.16%)"))}y.isMDXComponent=!0}}]);