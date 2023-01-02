"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[54234],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>C});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),C=r,m=u["".concat(l,".").concat(C)]||u[C]||d[C]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>C,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"settings",title:"Settings"},C=void 0,m={unversionedId:"settings",id:"version-0.68/settings",title:"Settings",description:"Settings\u662f\u5bf9NSUserDefaults\u7684\u5c01\u88c5\u3002\u5b83\u662fiOS\u5e73\u53f0\u4e0a\u7684\u4e00\u79cd\u6301\u4e45\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u3002",source:"@site/versioned_docs/version-0.68/settings.md",sourceDirName:".",slug:"/settings",permalink:"/docs/0.68/settings",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/settings.md",tags:[],version:"0.68",frontMatter:{id:"settings",title:"Settings"},sidebar:"api",previous:{title:"DynamicColorIOS",permalink:"/docs/0.68/dynamiccolorios"}},f={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>clearWatch()</code>",id:"clearwatch",level:3},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>set()</code>",id:"set",level:3},{value:"<code>watchKeys()</code>",id:"watchkeys",level:3}],y={toc:k};function g(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),p),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),"\u662f\u5bf9",(0,a.kt)("a",d({parentName:"p"},{href:"https://developer.apple.com/documentation/foundation/nsuserdefaults"}),(0,a.kt)("inlineCode",{parentName:"a"},"NSUserDefaults")),"\u7684\u5c01\u88c5\u3002\u5b83\u662fiOS\u5e73\u53f0\u4e0a\u7684\u4e00\u79cd\u6301\u4e45\u7684\u952e\u503c\u5bf9\u5b58\u50a8\u3002"),(0,a.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"Settings Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Button%2C%20Settings%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5Bdata%2C%20setData%5D%20%3D%20useState(Settings.get(%5C%22data%5C%22))%3B%5Cn%5Cn%20%20const%20storeData%20%3D%20data%20%3D%3E%20%7B%5Cn%20%20%20%20Settings.set(data)%3B%5Cn%20%20%20%20setData(Settings.get(%5C%22data%5C%22))%3B%5Cn%20%20%7D%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EStored%20value%3A%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7Bdata%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20storeData(%7B%20data%3A%20%5C%22React%5C%22%20%7D)%7D%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Store%20'React'%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CButton%5Cn%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20storeData(%7B%20data%3A%20%5C%22Native%5C%22%20%7D)%7D%5Cn%20%20%20%20%20%20%20%20title%3D%5C%22Store%20'Native'%5C%22%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20value%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2024%2C%5Cn%20%20%20%20marginVertical%3A%2012%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",d({},{id:"reference"}),"Reference"),(0,a.kt)("h2",d({},{id:"methods"}),"Methods"),(0,a.kt)("h3",d({},{id:"clearwatch"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clearWatch()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static clearWatch(watchId: number)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"watchId")," is the number returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"watchKeys()")," when the subscription was originally configured."),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"get"}),(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static get(key: string): mixed\n")),(0,a.kt)("p",null,"Get the current value for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"set"}),(0,a.kt)("inlineCode",{parentName:"h3"},"set()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static set(settings: object)\n")),(0,a.kt)("p",null,"Set one or more values in ",(0,a.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"watchkeys"}),(0,a.kt)("inlineCode",{parentName:"h3"},"watchKeys()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static watchKeys(keys: string | array<string>, callback: function): number\n")),(0,a.kt)("p",null,"Subscribe to be notified when the value for any of the keys specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," parameter has been changed in ",(0,a.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),". Returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"watchId")," number that may be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"clearWatch()")," to unsubscribe."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"watchKeys()")," by design ignores internal ",(0,a.kt)("inlineCode",{parentName:"p"},"set()")," calls and fires callback only on changes preformed outside of React Native code.")))}g.isMDXComponent=!0}}]);