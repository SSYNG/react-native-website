"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24278],{35318:function(e,t,a){a.d(t,{Zo:function(){return A},kt:function(){return u}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},A=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=l,y=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(y,r(r({ref:t},A),{},{components:a})):n.createElement(y,r({ref:t},A))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},33109:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return A},default:function(){return p}});var n=a(52685),l=a(1244),o=(a(27378),a(35318)),r=["components"],i={id:"stylesheet",title:"StyleSheet"},s=void 0,c={unversionedId:"stylesheet",id:"version-0.65/stylesheet",title:"StyleSheet",description:"StyleSheet \u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b\u4f3c CSS \u6837\u5f0f\u8868\u7684\u62bd\u8c61\u3002",source:"@site/versioned_docs/version-0.65/stylesheet.md",sourceDirName:".",slug:"/stylesheet",permalink:"/docs/0.65/stylesheet",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/stylesheet.md",tags:[],version:"0.65",frontMatter:{id:"stylesheet",title:"StyleSheet"},sidebar:"version-0.65/api",previous:{title:"Share",permalink:"/docs/0.65/share"},next:{title:"Systrace",permalink:"/docs/0.65/systrace"}},A=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>compose()</code>",id:"compose",children:[],level:3},{value:"<code>create()</code>",id:"create",children:[],level:3},{value:"<code>flatten()</code>",id:"flatten",children:[],level:3},{value:"<code>setStyleAttributePreprocessor()</code>",id:"setstyleattributepreprocessor",children:[],level:3}],level:2},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",children:[{value:"<code>absoluteFill</code>",id:"absolutefill",children:[],level:3},{value:"<code>absoluteFillObject</code>",id:"absolutefillobject",children:[],level:3},{value:"<code>hairlineWidth</code>",id:"hairlinewidth",children:[],level:3}],level:2},{value:"<code>absoluteFill</code> vs. <code>absoluteFillObject</code>",id:"absolutefill-vs-absolutefillobject",children:[],level:2}],d={toc:A};function p(e){var t=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"StyleSheet \u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b\u4f3c CSS \u6837\u5f0f\u8868\u7684\u62bd\u8c61\u3002"),(0,o.kt)("div",{className:"snack-player","data-snack-name":"StyleSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20backgroundColor%3A%20%22%23eaeaea%22%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20marginTop%3A%2016%2C%0A%20%20%20%20paddingVertical%3A%208%2C%0A%20%20%20%20borderWidth%3A%204%2C%0A%20%20%20%20borderColor%3A%20%22%2320232a%22%2C%0A%20%20%20%20borderRadius%3A%206%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20color%3A%20%22%2320232a%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("p",null,"\u4ece\u4ee3\u7801\u8d28\u91cf\u89d2\u5ea6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ece\u6e32\u67d3\u51fd\u6570\u4e2d\u79fb\u9664\u5177\u4f53\u7684\u6837\u5f0f\u5185\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u6e05\u6670\u6613\u8bfb\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7ed9\u6837\u5f0f\u547d\u540d\u4e5f\u53ef\u4ee5\u5bf9\u6e32\u67d3\u51fd\u6570\u4e2d\u7684\u7ec4\u4ef6\u589e\u52a0\u8bed\u4e49\u5316\u7684\u63cf\u8ff0\u3002")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,o.kt)("h3",{id:"compose"},(0,o.kt)("inlineCode",{parentName:"h3"},"compose()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static compose(style1: object, style2: object): object | array<object>\n")),(0,o.kt)("p",null,"Combines two styles such that ",(0,o.kt)("inlineCode",{parentName:"p"},"style2")," will override any styles in ",(0,o.kt)("inlineCode",{parentName:"p"},"style1"),". If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks."),(0,o.kt)("div",{className:"snack-player","data-snack-name":"Compose","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bcontainer%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Btext%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20page%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20color%3A%20'%23000'%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20lists%20%3D%20StyleSheet.create(%7B%0A%20%20listContainer%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%2361dafb'%2C%0A%20%20%7D%2C%0A%20%20listItem%3A%20%7B%0A%20%20%20%20fontStyle%3A%20'italic'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20container%20%3D%20StyleSheet.compose(page.container%2C%20lists.listContainer)%3B%0Aconst%20text%20%3D%20StyleSheet.compose(page.text%2C%20lists.listItem)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"create"},(0,o.kt)("inlineCode",{parentName:"h3"},"create()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static create(obj: object): object\n")),(0,o.kt)("p",null,"Creates a StyleSheet style reference from the given object."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"flatten"},(0,o.kt)("inlineCode",{parentName:"h3"},"flatten()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static flatten(style: array<object>): object\n")),(0,o.kt)("p",null,"Flattens an array of style objects, into one aggregated style object. Alternatively, this method can be used to lookup IDs, returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleSheet.register"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Exercise caution as abusing this can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Referring to style objects directly will deprive you of these optimizations.")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"Flatten","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bpage.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7BflattenStyle%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%20%20%3CText%3EFlatten%20Style%3C%2FText%3E%0A%20%20%20%20%3CText%20style%3D%7Bpage.code%7D%3E%0A%20%20%20%20%20%20%7BJSON.stringify(flattenStyle%2C%20null%2C%202)%7D%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20page%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22%23000%22%2C%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%2C%0A%20%20code%3A%20%7B%0A%20%20%20%20marginTop%3A%2012%2C%0A%20%20%20%20padding%3A%2012%2C%0A%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20color%3A%20%22%23666%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23eaeaea%22%0A%20%20%7D%0A%7D)%3B%0A%0Aconst%20typography%20%3D%20StyleSheet.create(%7B%0A%20%20header%3A%20%7B%0A%20%20%20%20color%3A%20%22%2361dafb%22%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%20%20marginBottom%3A%2036%0A%20%20%7D%0A%7D)%3B%0A%0Aconst%20flattenStyle%20%3D%20StyleSheet.flatten(%5B%0A%20%20page.text%2C%0A%20%20typography.header%0A%5D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("p",null,"This method internally uses ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleSheetRegistry.getStyleByID(style)")," to resolve style objects represented by IDs. Thus, an array of style objects (instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleSheet.create()"),"), are individually resolved to, their respective objects, merged as one and then returned. This also explains the alternative use."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setstyleattributepreprocessor"},(0,o.kt)("inlineCode",{parentName:"h3"},"setStyleAttributePreprocessor()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static setStyleAttributePreprocessor(property, process)\n")),(0,o.kt)("p",null,"WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk."),(0,o.kt)("p",null,"Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options."),(0,o.kt)("h2",{id:"\u5e38\u91cf"},"\u5e38\u91cf"),(0,o.kt)("h3",{id:"absolutefill"},(0,o.kt)("inlineCode",{parentName:"h3"},"absoluteFill")),(0,o.kt)("p",null,"A very common pattern is to create overlays with position absolute and zero positioning (",(0,o.kt)("inlineCode",{parentName:"p"},"position: 'absolute', left: 0, right: 0, top: 0, bottom: 0"),"), so ",(0,o.kt)("inlineCode",{parentName:"p"},"absoluteFill")," can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:"),(0,o.kt)("div",{className:"snack-player","data-snack-name":"absoluteFill","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20box1%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%2040%2C%0A%20%20%20%20left%3A%2040%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'red'%0A%20%20%7D%2C%0A%20%20box2%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFill%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%7D%2C%0A%20%20box3%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%20120%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'green'%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20'%23FFF'%2C%0A%20%20%20%20fontSize%3A%2080%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"absolutefillobject"},(0,o.kt)("inlineCode",{parentName:"h3"},"absoluteFillObject")),(0,o.kt)("p",null,"Sometimes you may want ",(0,o.kt)("inlineCode",{parentName:"p"},"absoluteFill")," but with a couple tweaks - ",(0,o.kt)("inlineCode",{parentName:"p"},"absoluteFillObject")," can be used to create a customized entry in a ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleSheet"),", e.g.:"),(0,o.kt)("div",{className:"snack-player","data-snack-name":"absoluteFillObject","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box1%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E1%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box2%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E2%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3CView%20style%3D%7Bstyles.box3%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E3%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%0A%20%20%7D%2C%0A%20%20box1%3A%20%7B%0A%20%20%20%20position%3A%20'absolute'%2C%0A%20%20%20%20top%3A%2040%2C%0A%20%20%20%20left%3A%2040%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'red'%0A%20%20%7D%2C%0A%20%20box2%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFill%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%2050%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%7D%2C%0A%20%20box3%3A%20%7B%0A%20%20%20%20...StyleSheet.absoluteFillObject%2C%0A%20%20%20%20top%3A%20120%2C%0A%20%20%20%20left%3A%20120%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20backgroundColor%3A%20'green'%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20'%23FFF'%2C%0A%20%20%20%20fontSize%3A%2080%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hairlinewidth"},(0,o.kt)("inlineCode",{parentName:"h3"},"hairlineWidth")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"hairlineWidth","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3EReact%3C%2FText%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.row%7D%3ENative%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20padding%3A%2024%0A%20%20%7D%2C%0A%20%20row%3A%20%7B%0A%20%20%20%20padding%3A%204%2C%0A%20%20%20%20borderBottomColor%3A%20%22red%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("p",null,"\u8fd9\u4e00\u5e38\u91cf\u59cb\u7ec8\u662f\u4e00\u4e2a\u6574\u6570\u7684\u50cf\u7d20\u503c\uff08\u7ebf\u770b\u8d77\u6765\u4f1a\u50cf\u5934\u53d1\u4e1d\u4e00\u6837\u7ec6\uff09\uff0c\u5e76\u4f1a\u5c3d\u91cf\u7b26\u5408\u5f53\u524d\u5e73\u53f0\u6700\u7ec6\u7684\u7ebf\u7684\u6807\u51c6\u3002\u53ef\u4ee5\u7528\u4f5c\u8fb9\u6846\u6216\u662f\u4e24\u4e2a\u5143\u7d20\u95f4\u7684\u5206\u9694\u7ebf\u3002\u7136\u800c\uff0c\u4f60\u4e0d\u80fd\u628a\u5b83\u201c\u89c6\u4e3a\u4e00\u4e2a\u5e38\u91cf\u201d\uff0c\u56e0\u4e3a\u4e0d\u540c\u7684\u5e73\u53f0\u548c\u4e0d\u540c\u7684\u5c4f\u5e55\u50cf\u7d20\u5bc6\u5ea6\u4f1a\u5bfc\u81f4\u4e0d\u540c\u7684\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6a21\u62df\u5668\u7f29\u653e\u8fc7\uff0c\u53ef\u80fd\u4f1a\u770b\u4e0d\u5230\u8fd9\u4e48\u7ec6\u7684\u7ebf\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"absolutefill-vs-absolutefillobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"absoluteFill")," vs. ",(0,o.kt)("inlineCode",{parentName:"h2"},"absoluteFillObject")),(0,o.kt)("p",null,"Currently, there is no difference between using ",(0,o.kt)("inlineCode",{parentName:"p"},"absoluteFill")," vs. ",(0,o.kt)("inlineCode",{parentName:"p"},"absoluteFillObject"),"."))}p.isMDXComponent=!0}}]);