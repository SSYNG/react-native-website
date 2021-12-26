"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75503],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",o=i?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},12120:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(52685),i=n(27378),r=n(76457),l=n(84956);var o=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(92373),d=n(38944),u="tabItem_c0e5";function c(e){var t,n,r,l=e.lazy,c=e.block,p=e.defaultValue,m=e.values,k=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=o(),N=w.tabGroupChoices,D=w.setTabGroupChoices,y=(0,i.useState)(g),A=y[0],C=y[1],B=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=N[k];null!=x&&x!==A&&f.some((function(e){return e.value===x}))&&C(x)}var T=function(e){var t=e.currentTarget,n=B.indexOf(t),a=f[n].value;a!==A&&(E(t),C(a),null!=k&&D(k,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;n=B[a]||B[0];break;case"ArrowLeft":var i=B.indexOf(e.currentTarget)-1;n=B[i]||B[B.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return B.push(e)},onKeyDown:O,onFocus:T,onClick:T},r,{className:(0,d.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function p(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},61966:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(52685),i=n(1244),r=(n(27378),n(35318)),l=n(12120),o=n(70517),s=n(45981),d=["components"],u={id:"dimensions",title:"Dimensions"},c=void 0,p={unversionedId:"dimensions",id:"version-0.66/dimensions",title:"Dimensions",description:"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002",source:"@site/versioned_docs/version-0.66/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/dimensions",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dimensions.md",tags:[],version:"0.66",frontMatter:{id:"dimensions",title:"Dimensions"},sidebar:"api",previous:{title:"DevSettings",permalink:"/docs/devsettings"},next:{title:"Easing",permalink:"/docs/easing"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>get()</code>",id:"get",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3},{value:"<code>set()</code>",id:"set",children:[],level:3}],level:2},{value:"Type Definitions",id:"type-definitions",children:[{value:"DimensionsValue",id:"dimensionsvalue",children:[],level:3},{value:"DisplayMetrics",id:"displaymetrics",children:[],level:3}],level:2}],k={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e React \u51fd\u6570\u7ec4\u4ef6\uff0c\u6211\u4eec\u66f4\u63a8\u8350\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"usewindowdimensions"},(0,r.kt)("inlineCode",{parentName:"a"},"useWindowDimensions")),"\u8fd9\u4e2a Hook API\u3002\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Dimensions")," \u4e0d\u540c\uff0c\u5b83\u4f1a\u5728\u5c4f\u5e55\u5c3a\u5bf8\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Dimensions } from 'react-native';\n")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u8bbe\u5907\u7684\u5bbd\u9ad8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5c3d\u7ba1\u5c3a\u5bf8\u4fe1\u606f\u7acb\u5373\u5c31\u53ef\u7528\uff0c\u4f46\u5b83\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u88ab\u4fee\u6539\uff08\u8b6c\u5982\u8bbe\u5907\u7684\u65b9\u5411\u6539\u53d8\uff09\uff0c\u6240\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u5e38\u91cf\u7684\u6e32\u67d3\u903b\u8f91\u548c\u6837\u5f0f\u5e94\u5f53\u6bcf\u6b21 render \u4e4b\u540e\u90fd\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u5c06\u5bf9\u5e94\u7684\u503c\u4fdd\u5b58\u4e0b\u6765\u3002\uff08\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5185\u8054\u7684\u6837\u5f0f\u800c\u4e0d\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"\u4e2d\u4fdd\u5b58\u76f8\u5e94\u7684\u5c3a\u5bf8\uff09\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8981\u8003\u8651\u53ef\u6298\u53e0\u7684\u8bbe\u5907\uff0c\u6216\u8005\u5176\u4ed6\u5c4f\u5e55\u5c3a\u5bf8\u53ef\u53d8\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u4f8b\u5b50\u4e2d\u6240\u4f7f\u7528\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u6216\u662f",(0,r.kt)("a",{parentName:"p",href:"usewindowdimensions"},(0,r.kt)("inlineCode",{parentName:"a"},"useWindowDimensions")),"\uff1a"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(l.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20const%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"addeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(type, handler)\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002\u76ee\u524d\u652f\u6301\u7684\u4e8b\u4ef6\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is an object with ",(0,r.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"screen")," properties whose values are the same as the return values of ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions.get('window')")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions.get('screen')"),", respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"window")," - Size of the visible Application window"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screen")," - Size of the device's screen")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static get(dim)\n")),(0,r.kt)("p",null,"\u521d\u59cb\u7684\u5c3a\u5bf8\u4fe1\u606f\u5e94\u8be5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"runApplication"),"\u4e4b\u540e\u88ab\u6267\u884c\uff0c\u8fd9\u6837\u624d\u53ef\u4ee5\u5728\u4efb\u4f55\u5176\u4ed6\u7684 require \u88ab\u6267\u884c\u4e4b\u524d\u4f7f\u7528\u3002\u4e0d\u8fc7\u5728\u7a0d\u540e\u53ef\u80fd\u8fd8\u4f1a\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"const {height, width} = Dimensions.get('window');")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dim ",(0,r.kt)("div",{className:"label basic required two-lines"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of dimension as defined when calling ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),". Returns value for the dimension.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For Android the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom navigation bar"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removeeventlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(type, handler)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",(0,r.kt)("a",{parentName:"p",href:"#addeventlistener"},(0,r.kt)("inlineCode",{parentName:"a"},"addEventListener()")),".")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set"},(0,r.kt)("inlineCode",{parentName:"h3"},"set()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static set(dims)\n")),(0,r.kt)("p",null,"This should only be called from native code by sending the ",(0,r.kt)("inlineCode",{parentName:"p"},"didUpdateDimensions")," event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dims ",(0,r.kt)("div",{className:"label basic required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"String-keyed object of dimensions to set.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"type-definitions"},"Type Definitions"),(0,r.kt)("h3",{id:"dimensionsvalue"},"DimensionsValue"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Properties:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"window"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"dimensions#displaymetrics"},"DisplayMetrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the visible Application window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"screen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"dimensions#displaymetrics"},"DisplayMetrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the device's screen.")))),(0,r.kt)("h3",{id:"displaymetrics"},"DisplayMetrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Properties:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scale"),(0,r.kt)("td",{parentName:"tr",align:null},"number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontScale"),(0,r.kt)("td",{parentName:"tr",align:null},"number")))))}h.isMDXComponent=!0}}]);