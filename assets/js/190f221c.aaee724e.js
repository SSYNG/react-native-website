"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[33630],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(a),b=o,u=d["".concat(c,".").concat(b)]||d[b]||m[b]||n;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<n;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var r=a(35318),o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&p(e,a,t[a]);return e};const d={id:"javascript-environment",title:"JavaScript \u73af\u5883"},b=void 0,u={unversionedId:"javascript-environment",id:"javascript-environment",title:"JavaScript \u73af\u5883",description:"JavaScript \u8fd0\u884c\u65f6\u73af\u5883",source:"@site/../cndocs/javascript-environment.md",sourceDirName:".",slug:"/javascript-environment",permalink:"/docs/next/javascript-environment",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/javascript-environment.md",tags:[],version:"current",frontMatter:{id:"javascript-environment",title:"JavaScript \u73af\u5883"},sidebar:"docs",previous:{title:"Profiling with Hermes",permalink:"/docs/next/profile-hermes"},next:{title:"\u5b9a\u65f6\u5668",permalink:"/docs/next/timers"}},h={},f=[{value:"JavaScript \u8fd0\u884c\u65f6\u73af\u5883",id:"javascript-\u8fd0\u884c\u65f6\u73af\u5883",level:2},{value:"JavaScript \u8bed\u6cd5\u8f6c\u6362\u5668",id:"javascript-\u8bed\u6cd5\u8f6c\u6362\u5668",level:2},{value:"\u63a5\u53e3\u517c\u5bb9\uff08Polyfills\uff09",id:"\u63a5\u53e3\u517c\u5bb9polyfills",level:2},{value:"\u6d4f\u89c8\u5668",id:"\u6d4f\u89c8\u5668",level:4},{value:"ECMAScript 2015 (ES6)",id:"ecmascript-2015-es6",level:4},{value:"ECMAScript 2016 (ES7)",id:"ecmascript-2016-es7",level:4},{value:"ECMAScript 2017 (ES8)",id:"ecmascript-2017-es8",level:4},{value:"\u4e13\u6709\u7279\u6027",id:"\u4e13\u6709\u7279\u6027",level:4}],k=(v="TableRow",function(e){return console.warn("Component "+v+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",m({},e))});var v;const g={toc:f};function y(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&i.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),p),n(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"javascript-\u8fd0\u884c\u65f6\u73af\u5883"}),"JavaScript \u8fd0\u884c\u65f6\u73af\u5883"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 React Native \u65f6\uff0c\u4f60\u7684 JavaScript \u4ee3\u7801\u5c06\u4f1a\u8fd0\u884c\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u73af\u5883\u4e0a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cReact Native \u4f7f\u7528\u7684\u662f",(0,r.kt)("a",m({parentName:"li"},{href:"http://trac.webkit.org/wiki/JavaScriptCore"}),"JavaScriptCore"),"\uff0c\u4e5f\u5c31\u662f Safari \u6240\u4f7f\u7528\u7684 JavaScript \u5f15\u64ce\u3002\u4f46\u662f\u5728 iOS \u4e0a JavaScriptCore \u5e76\u6ca1\u6709\u4f7f\u7528\u5373\u65f6\u7f16\u8bd1\u6280\u672f\uff08JIT\uff09\uff0c\u56e0\u4e3a\u5728 iOS \u4e2d\u5e94\u7528\u65e0\u6743\u62e5\u6709\u53ef\u5199\u53ef\u6267\u884c\u7684\u5185\u5b58\u9875\uff08\u56e0\u6b64\u65e0\u6cd5\u52a8\u6001\u751f\u6210\u4ee3\u7801\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528 Chrome \u8c03\u8bd5\u65f6\uff0c\u6240\u6709\u7684 JavaScript \u4ee3\u7801\u90fd\u8fd0\u884c\u5728 Chrome \u4e2d\uff0c\u5e76\u4e14\u901a\u8fc7 WebSocket \u4e0e\u539f\u751f\u4ee3\u7801\u901a\u4fe1\u3002\u6b64\u65f6\u7684\u8fd0\u884c\u73af\u5883\u662f",(0,r.kt)("a",m({parentName:"li"},{href:"https://v8.dev"}),"V8 \u5f15\u64ce"),"\u3002")),(0,r.kt)("p",null,"\u867d\u7136\u4e24\u4e2a\u73af\u5883\u975e\u5e38\u7c7b\u4f3c\uff0c\u4f46\u5f00\u53d1\u8005\u8fd8\u662f\u53ef\u80fd\u78b0\u5230\u4e00\u4e9b\u4e0d\u4e00\u81f4\u7684\u5730\u65b9\u3002\u672a\u6765\u6211\u4eec\u5f88\u53ef\u80fd\u4f1a\u5c1d\u8bd5\u4e00\u4e9b\u5176\u4ed6\u7684 JS \u5f15\u64ce\uff0c\u6240\u4ee5\u8bf7\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u4f9d\u8d56\u4e8e\u7279\u5b9a\u8fd0\u884c\u73af\u5883\u7684\u4ee3\u7801\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e38\u89c1\u7684\u4e0d\u4e00\u81f4\u6bd4\u5982\u6709\uff1aiOS \u4e0a\u6709\u90e8\u5206\u65e5\u671f\u6784\u9020\u51fd\u6570\u672a\u5b9e\u73b0\uff1bAndroid \u4e0a\u91cd\u590d\u5b9a\u4e49\u7684 props \u53ef\u80fd\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002")),(0,r.kt)("h2",m({},{id:"javascript-\u8bed\u6cd5\u8f6c\u6362\u5668"}),"JavaScript \u8bed\u6cd5\u8f6c\u6362\u5668"),(0,r.kt)("p",null,"\u8bed\u6cd5\u8f6c\u6362\u5668\u53ef\u4ee5\u4f7f\u7f16\u5199\u4ee3\u7801\u7684\u8fc7\u7a0b\u66f4\u52a0\u4eab\u53d7\uff0c\u56e0\u4e3a\u5f00\u53d1\u8005\u53ef\u4ee5\u501f\u52a9\u8f6c\u6362\u5668\u76f4\u63a5\u4f7f\u7528\u65b0\u7684 JavaScript \u8bed\u6cd5\u6807\u51c6\uff0c\u800c\u65e0\u9700\u7b49\u5f85 JS \u89e3\u91ca\u5668\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"React Native \u5185\u7f6e\u4e86",(0,r.kt)("a",m({parentName:"p"},{href:"https://babeljs.io"}),"Babel \u8f6c\u6362\u5668"),"\u3002\u4f60\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",m({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#transform-plugins"}),"Babel \u7684\u6587\u6863"),"\u6765\u4e86\u89e3\u6709\u5173\u5b83\u53ef\u4ee5\u8f6c\u6362\u7684\u8bed\u6cd5\u7684\u8be6\u60c5\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset"}),"metro-react-native-babel-preset"),"\u4e2d\u53ef\u4ee5\u770b\u5230\u76ee\u524d React Native \u9ed8\u8ba4\u5f00\u542f\u7684\u8bed\u6cd5\u8f6c\u6362\u7279\u6027\u3002\u6ce8\uff1a\u82e5\u60f3\u5b66\u4e60\u76f8\u5173\u8bed\u6cd5\uff0c\u8bd1\u8005\u63a8\u8350\u962e\u4e00\u5cf0\u8001\u5e08\u7684",(0,r.kt)("a",m({parentName:"p"},{href:"http://es6.ruanyifeng.com/"}),"\u300aECMAScript 6 \u5165\u95e8\u300b"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Transformation"),(0,r.kt)("th",null,"Code"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 5")),(0,r.kt)(k,{name:"Reserved Words",code:"promise.catch(function() { ... });",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2015 (ES6)")),(0,r.kt)(k,{name:"Arrow functions",code:"<C onPress={() => this.setState({ pressed: true })} />",url:"http://babeljs.io/docs/learn-es2015/#arrows",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Block scoping",code:"let greeting = 'hi';",url:"https://babeljs.io/docs/learn-es2015/#let-const",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Call spread",code:"Math.max(...array);",url:"http://babeljs.io/docs/learn-es2015/#default-rest-spread",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Classes",code:"class C extends React.Component { render() { return <View />; } }",url:"http://babeljs.io/docs/learn-es2015/#classes",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Computed Properties",code:"const key = 'abc'; const obj = { [key]: 10 };",url:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Constants",code:"const answer = 42;",url:"https://babeljs.io/docs/learn-es2015/#let-const",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Destructuring",code:"const { isActive, style } = this.props;",url:"http://babeljs.io/docs/learn-es2015/#destructuring",mdxType:"TableRow"}),(0,r.kt)(k,{name:"for\u2026of",code:"for (var num of [1, 2, 3]) { ... };",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Function Name",code:"let number = x => x;",url:"https://babeljs.io/docs/en/babel-plugin-transform-function-name",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Literals",code:"const b = 0b11; const o = 0o7; const u = 'Hello\\u{000A}\\u{0009}!';",url:"https://babeljs.io/docs/en/babel-plugin-transform-literals",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Modules",code:"import React, { Component } from 'react';",url:"http://babeljs.io/docs/learn-es2015/#modules",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Object Concise Method",code:"const obj = { method() { return 10; } };",url:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Object Short Notation",code:"const name = 'vjeux'; const obj = { name };",url:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Parameters",code:"function test(x = 'hello', { a, b }, ...args) {}",url:"https://babeljs.io/docs/en/babel-plugin-transform-parameters",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Rest Params",code:"function(type, ...args) {};",url:"https://github.com/sebmarkbage/ecmascript-rest-spread",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Shorthand Properties",code:"const o = { a, b, c };",url:"https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Sticky Regex",code:"const a = /o+/y;",url:"https://babeljs.io/docs/en/babel-plugin-transform-sticky-regex",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Template Literals",code:"const who = 'world'; const str = `Hello ${who}`;",url:"https://babeljs.io/docs/learn-es2015/#template-strings",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Unicode Regex",code:"const string = 'foo\ud83d\udca9bar'; const match = string.match(/foo(.)bar/u);",url:"https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2016 (ES7)")),(0,r.kt)(k,{name:"Exponentiation Operator",code:"let x = 10 ** 2;",url:"https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2017 (ES8)")),(0,r.kt)(k,{name:"Async Functions",code:"async function doStuffAsync() { const foo = await doOtherStuffAsync(); };",url:"https://github.com/tc39/ecmascript-asyncawait",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Function Trailing Comma",code:"function f(a, b, c,) {};",url:"https://github.com/jeffmo/es-trailing-function-commas",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2018 (ES9)")),(0,r.kt)(k,{name:"Object Spread",code:"const extended = { ...obj, a: 10 };",url:"https://github.com/tc39/proposal-object-rest-spread",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2019 (ES10)")),(0,r.kt)(k,{name:"Optional Catch Binding",code:"try { throw 0; } catch { doSomethingWhichDoesNotCareAboutTheValueThrown(); }",url:"https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2020 (ES11)")),(0,r.kt)(k,{name:"Dynamic Imports",code:"const package = await import('package'); package.function()",url:"https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Nullish Coalescing Operator",code:"const foo = object.foo ?? 'default';",url:"https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Optional Chaining",code:"const name = obj.user?.name;",url:"https://github.com/tc39/proposal-optional-chaining",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"ECMAScript 2022 (ES13)")),(0,r.kt)(k,{name:"Class Fields",code:"class Bork { static a = 'foo'; static b; x = 'bar'; y; }",url:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"Stage 1 Proposal")),(0,r.kt)(k,{name:"Export Default From",code:"export v from 'mod';",url:"https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from",mdxType:"TableRow"}),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"table-heading",colSpan:"2"},"Miscellaneous")),(0,r.kt)(k,{name:"Babel Template",code:"template(`const %%importName%% = require(%%source%%);`);",url:"https://babeljs.io/docs/en/babel-template",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Flow",code:"function foo(x: ?number): string {};",url:"https://flowtype.org/",mdxType:"TableRow"}),(0,r.kt)(k,{name:"ESM to CJS",code:"export default 42;",url:"https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs",mdxType:"TableRow"}),(0,r.kt)(k,{name:"JSX",code:"<View style={{ color: 'red' }} />",url:"https://reactjs.org/docs/jsx-in-depth",mdxType:"TableRow"}),(0,r.kt)(k,{name:"Object Assign",code:"Object.assign(a, b);",url:"https://babeljs.io/docs/en/babel-plugin-transform-object-assign",mdxType:"TableRow"}),(0,r.kt)(k,{name:"React Display Name",code:"const bar = createReactClass({});",url:"https://babeljs.io/docs/en/babel-plugin-transform-react-display-name",mdxType:"TableRow"}),(0,r.kt)(k,{name:"TypeScript",code:"function foo(x: { hello: true, target: 'react native!' }): string {};",url:"https://www.typescriptlang.org/",mdxType:"TableRow"}))),(0,r.kt)("h2",m({},{id:"\u63a5\u53e3\u517c\u5bb9polyfills"}),"\u63a5\u53e3\u517c\u5bb9\uff08Polyfills\uff09"),(0,r.kt)("p",null,"\u8bb8\u591a\u6807\u51c6\u529f\u80fd\u4e5f\u90fd\u5728\u652f\u6301\u7684 JavaScript \u8fd0\u884c\u73af\u5883\u4e0a\u505a\u4e86\u517c\u5bb9\u652f\u6301\u3002"),(0,r.kt)("h4",m({},{id:"\u6d4f\u89c8\u5668"}),"\u6d4f\u89c8\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://nodejs.org/docs/latest/api/modules.html"}),"CommonJS require")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.chrome.com/devtools/docs/console-api"}),"console.{log, warn, error, info, trace, table, group, groupEnd}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/docs/next/network#content"}),"XMLHttpRequest, fetch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/docs/next/timers#content"}),"{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"))),(0,r.kt)("h4",m({},{id:"ecmascript-2015-es6"}),"ECMAScript 2015 (ES6)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"}),"Array.from")),(0,r.kt)("li",{parentName:"ul"},"Array.prototype.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"}),"find"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"}),"findIndex"),"}"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),"Object.assign")),(0,r.kt)("li",{parentName:"ul"},"String.prototype.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"}),"startsWith"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"}),"endsWith"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"}),"repeat"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"}),"includes"),"}")),(0,r.kt)("h4",m({},{id:"ecmascript-2016-es7"}),"ECMAScript 2016 (ES7)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array.prototype.",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"}),"includes"))),(0,r.kt)("h4",m({},{id:"ecmascript-2017-es8"}),"ECMAScript 2017 (ES8)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"}),"entries"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values"}),"values"),"}")),(0,r.kt)("h4",m({},{id:"\u4e13\u6709\u7279\u6027"}),"\u4e13\u6709\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__DEV__")," \u7528\u4e8e\u5224\u65ad\u5f53\u524d\u662f\u5426\u5f00\u53d1\u73af\u5883\u7684\u5168\u5c40\u53d8\u91cf")))}y.isMDXComponent=!0}}]);