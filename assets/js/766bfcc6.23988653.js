"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[3502],{35318:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(27378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(a),m=l,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45981:function(t,e,a){var n=a(161),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=l?"ios":"android",o=l?"macos":r?"windows":"linux";e.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(t){return void 0===t&&(t=["android","ios","web","windows"]),[t.includes("android")?{label:"Android",value:"android"}:void 0,t.includes("ios")?{label:"iOS",value:"ios"}:void 0,t.includes("web")?{label:"Web",value:"web"}:void 0,t.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(t,e,a){var n=a(27378);e.Z=function(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},e)}},64535:function(t,e,a){a.d(e,{Z:function(){return u}});var n=a(27378),l=a(84956);var r=function(){var t=(0,n.useContext)(l.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},i=a(38944),o="tabItem_c0e5",s="tabItemActive_28AG";var d=37,p=39;var u=function(t){var e=t.lazy,a=t.block,l=t.defaultValue,u=t.values,c=t.groupId,m=t.className,k=r(),A=k.tabGroupChoices,b=k.setTabGroupChoices,g=(0,n.useState)(l),N=g[0],f=g[1],h=n.Children.toArray(t.children),y=[];if(null!=c){var v=A[c];null!=v&&v!==N&&u.some((function(t){return t.value===v}))&&f(v)}var C=function(t){var e=t.currentTarget,a=y.indexOf(e),n=u[a].value;f(n),null!=c&&(b(c,n),setTimeout((function(){var t,a,n,l,r,i,o,d;(t=e.getBoundingClientRect(),a=t.top,n=t.left,l=t.bottom,r=t.right,i=window,o=i.innerHeight,d=i.innerWidth,a>=0&&r<=d&&l<=o&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},D=function(t){var e,a;switch(t.keyCode){case p:var n=y.indexOf(t.target)+1;a=y[n]||y[0];break;case d:var l=y.indexOf(t.target)-1;a=y[l]||y[y.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},u.map((function(t){var e=t.value,a=t.label;return n.createElement("li",{role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===e}),key:e,ref:function(t){return y.push(t)},onKeyDown:D,onFocus:C,onClick:C},a)}))),e?(0,n.cloneElement)(h.filter((function(t){return t.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==N})}))))}},84956:function(t,e,a){var n=(0,a(27378).createContext)(void 0);e.Z=n},77203:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return A}});var n=a(25773),l=a(30808),r=(a(27378),a(35318)),i=a(64535),o=a(70517),s=a(45981),d=["components"],p={id:"alert",title:"Alert"},u=void 0,c={unversionedId:"alert",id:"version-0.64/alert",isDocsHomePage:!1,title:"Alert",description:"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-0.64/alert.md",sourceDirName:".",slug:"/alert",permalink:"/docs/alert",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/alert.md",version:"0.64",lastUpdatedAt:1628418991,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"alert",title:"Alert"},sidebar:"version-0.64/api",previous:{title:"AccessibilityInfo",permalink:"/docs/accessibilityinfo"},next:{title:"Animated",permalink:"/docs/animated"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[{value:'\u793a\u4f8b <div class="label android">Android</div>',id:"\u793a\u4f8b-android",children:[]}]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>alert()</code>",id:"alert",children:[]},{value:'<code>prompt()</code> <div class="label ios">iOS</div>',id:"prompt-ios",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:'AlertButtonStyle <div class="label ios">iOS</div>',id:"alertbuttonstyle-ios",children:[]},{value:'AlertType <div class="label ios">iOS</div>',id:"alerttype-ios",children:[]},{value:"Buttons",id:"buttons",children:[]},{value:'Options <div class="label android">Android</div>',id:"options-android",children:[]}]}],k={toc:m};function A(t){var e=t.components,a=(0,l.Z)(t,d);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\uff0c\u5305\u542b\u5bf9\u5e94\u7684\u6807\u9898\u548c\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4e00\u7cfb\u5217\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u5bf9\u5e94\u7684\u6309\u94ae\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684 onPress \u56de\u8c03\u5e76\u4e14\u5173\u95ed\u63d0\u793a\u6846\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8bdd\u6846\u4f1a\u4ec5\u6709\u4e00\u4e2a'\u786e\u5b9a'\u6309\u94ae\u3002"),(0,r.kt)("p",null,"\u672c\u63a5\u53e3\u53ef\u4ee5\u5728 iOS \u548c Android \u4e0a\u663e\u793a\u4e00\u4e2a\u9759\u6001\u7684\u63d0\u793a\u6846\u3002\u53ea\u6709 iOS \u7cfb\u7edf\u652f\u6301\u5728\u63d0\u793a\u6846\u4e2d\u52a0\u5165\u6587\u672c\u6846\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(i.Z,{groupId:"syntax",defaultValue:s.Z.defaultSyntax,values:s.Z.syntax,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Alert Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20const%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7BcreateTwoButtonAlert%7D%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%7B%223-Button%20Alert%22%7D%20onPress%3D%7BcreateThreeButtonAlert%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Alert Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20createTwoButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20createThreeButtonAlert%20%3D%20()%20%3D%3E%0A%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Ask%20me%20later%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Ask%20me%20later%20pressed%22)%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20console.log(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22OK%22%2C%20onPress%3A%20()%20%3D%3E%20console.log(%22OK%20Pressed%22)%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20)%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%7B%222-Button%20Alert%22%7D%20onPress%3D%7Bthis.createTwoButtonAlert%7D%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B%223-Button%20Alert%22%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.createThreeButtonAlert%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"\u5728 iOS \u4e0a\u4f60\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u6570\u91cf\u7684\u6309\u94ae\u3002\u6bcf\u4e2a\u6309\u94ae\u8fd8\u90fd\u53ef\u4ee5\u6307\u5b9a\u81ea\u5df1\u7684\u6837\u5f0f\uff0c\u6b64\u5916\u8fd8\u53ef\u4ee5\u6307\u5b9a\u63d0\u793a\u7684\u7c7b\u522b\u3002\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"#alertbuttonstyle.md"},"AlertButtonStyle"),"\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("p",null,"\u5728 Android \u4e0a\u6700\u591a\u80fd\u6307\u5b9a\u4e09\u4e2a\u6309\u94ae\uff0c\u8fd9\u4e09\u4e2a\u6309\u94ae\u5206\u522b\u5177\u6709\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\u7684\u6982\u5ff5\uff1a"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u6307\u5b9a\u4e00\u4e2a\u6309\u94ae\uff0c\u5219\u5b83\u5177\u6709\u201c\u79ef\u6781\u6001\u201d\u7684\u5c5e\u6027\uff08\u6bd4\u5982\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e24\u4e2a\u6309\u94ae\uff0c\u5219\u5206\u522b\u662f\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u53d6\u6d88\u201d\u548c\u201c\u786e\u5b9a\u201d\uff09\uff1b\u4e09\u4e2a\u6309\u94ae\u5219\u610f\u5473\u7740\u201c\u4e2d\u95f4\u6001\u201d\u3001\u201c\u6d88\u6781\u6001\u201d\u548c\u201c\u79ef\u6781\u6001\u201d\uff08\u6bd4\u5982\u201c\u7a0d\u5019\u518d\u8bf4\u201d\uff0c\u201c\u53d6\u6d88\u201d\uff0c\u201c\u786e\u5b9a\u201d\uff09\u3002"),(0,r.kt)("p",null,"\u5728 Android \u4e0a\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u63d0\u793a\u6846\u7684\u5916\u9762\u6765\u53d6\u6d88\u63d0\u793a\u6846\uff0c\u4f46\u8fd9\u4e00\u884c\u4e3a\u9ed8\u8ba4\u6ca1\u6709\u542f\u7528\u3002\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"#options"},(0,r.kt)("inlineCode",{parentName:"a"},"Options")),"\u4e2d\u63d0\u4f9b\u4e00\u4e2a\u989d\u5916\u53c2\u6570\u6765\u542f\u7528\u8fd9\u4e00\u884c\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"{ cancelable: true }"),"\u3002"),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\u4e2d\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u51fd\u6570\u6765\u6355\u83b7\u7528\u6237\u7684\u53d6\u6d88\u64cd\u4f5c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"{ onDismiss: () => {} }"),"\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b-android"},"\u793a\u4f8b ",(0,r.kt)("div",{class:"label android"},"Android")),(0,r.kt)("div",{className:"snack-player","data-snack-name":"Alert Android Dissmissable Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Button%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20showAlert%20%3D%20()%20%3D%3E%0A%20%20Alert.alert(%0A%20%20%20%20%22Alert%20Title%22%2C%0A%20%20%20%20%22My%20Alert%20Msg%22%2C%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20Alert.alert(%22Cancel%20Pressed%22)%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20cancelable%3A%20true%2C%0A%20%20%20%20%20%20onDismiss%3A%20()%20%3D%3E%0A%20%20%20%20%20%20%20%20Alert.alert(%0A%20%20%20%20%20%20%20%20%20%20%22This%20alert%20was%20dismissed%20by%20tapping%20outside%20of%20the%20alert%20dialog.%22%0A%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%7D%0A%20%20)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CButton%20title%3D%22Show%20alert%22%20onPress%3D%7BshowAlert%7D%20%2F%3E%0A)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"alert"},(0,r.kt)("inlineCode",{parentName:"h3"},"alert()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static alert(title, message?, buttons?, options?)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string ",(0,r.kt)("div",{class:"label basic required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The dialog's title. Passing ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," or empty string will hide the title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional message that appears below the dialog's title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttons"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"alert#buttons"},"Buttons")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional array containg buttons configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"alert#options"},"Options")," ",(0,r.kt)("div",{class:"label android"},"Android")),(0,r.kt)("td",{parentName:"tr",align:null},"An optional Alert configuration for the Android.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prompt-ios"},(0,r.kt)("inlineCode",{parentName:"h3"},"prompt()")," ",(0,r.kt)("div",{class:"label ios"},"iOS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static prompt(title, message?, callbackOrButtons?, type?, defaultValue?, keyboardType?)\n")),(0,r.kt)("p",null,"Create and display a prompt to enter some text in form of Alert."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string ",(0,r.kt)("div",{class:"label basic required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The dialog's title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional message that appears above the text input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackOrButtons"),(0,r.kt)("td",{parentName:"tr",align:null},"function",(0,r.kt)("hr",null),(0,r.kt)("a",{parentName:"td",href:"alert#buttons"},"Buttons")),(0,r.kt)("td",{parentName:"tr",align:null},"If passed a function, it will be called with the prompt's value",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"(text: string) => void"),", when the user taps 'OK'.",(0,r.kt)("hr",null),"If passed an array, buttons will be configured based on the array content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"alert#alerttype"},"AlertType")),(0,r.kt)("td",{parentName:"tr",align:null},"This configures the text input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The default text in text input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keyboardType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The keyboard type of first text field (if exists). One of TextInput ",(0,r.kt)("a",{parentName:"td",href:"textinput#keyboardtype"},"keyboardTypes"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,r.kt)("h3",{id:"alertbuttonstyle-ios"},"AlertButtonStyle ",(0,r.kt)("div",{class:"label ios"},"iOS")),(0,r.kt)("p",null,"An iOS Alert button style."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")),(0,r.kt)("td",{parentName:"tr",align:null},"Default button style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'cancel'")),(0,r.kt)("td",{parentName:"tr",align:null},"Cancel button style.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'destructive'")),(0,r.kt)("td",{parentName:"tr",align:null},"Destructive button style.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"alerttype-ios"},"AlertType ",(0,r.kt)("div",{class:"label ios"},"iOS")),(0,r.kt)("p",null,"An iOS Alert type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'")),(0,r.kt)("td",{parentName:"tr",align:null},"Default alert with no inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'plain-text'")),(0,r.kt)("td",{parentName:"tr",align:null},"Plain text input alert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'secure-text'")),(0,r.kt)("td",{parentName:"tr",align:null},"Secure text input alert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'login-password'")),(0,r.kt)("td",{parentName:"tr",align:null},"Login and password alert")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,"Array of objects containg Alert buttons configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array of objects")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Objects properties:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Button label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPress"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback function when button is pressed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style ",(0,r.kt)("div",{class:"label ios"},"iOS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"alert#alertbuttonstyle"},"AlertButtonStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Button style, on Android this property will be ignored.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"options-android"},"Options ",(0,r.kt)("div",{class:"label android"},"Android")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c5e\u6027\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancelable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines if alert can be dismissed by tapping outside of the alert box.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDismiss"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback function fired when alert has been dismissed.")))))}A.isMDXComponent=!0}}]);