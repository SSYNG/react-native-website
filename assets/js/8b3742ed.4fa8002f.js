"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[33027],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},C={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||C[c]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>D,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))d.call(t,a)&&p(e,a,t[a]);return e};const u={id:"shadow-props",title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027"},c=void 0,h={unversionedId:"shadow-props",id:"version-0.69/shadow-props",title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027",description:"These properties are iOS only - for similar functionality on Android, use the elevation property.",source:"@site/versioned_docs/version-0.69/shadow-props.md",sourceDirName:".",slug:"/shadow-props",permalink:"/docs/0.69/shadow-props",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/shadow-props.md",tags:[],version:"0.69",frontMatter:{id:"shadow-props",title:"\u9634\u5f71\u6837\u5f0f\u5c5e\u6027"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u5e03\u5c40\u5c5e\u6027",permalink:"/docs/0.69/layout-props"},next:{title:"Text \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/0.69/text-style-props"}},m={},f=[{value:"Props",id:"props",level:2},{value:"<code>shadowColor</code>",id:"shadowcolor",level:3},{value:"<code>shadowOffset</code>",id:"shadowoffset",level:3},{value:"<code>shadowOpacity</code>",id:"shadowopacity",level:3},{value:"<code>shadowRadius</code>",id:"shadowradius",level:3}],w={toc:f};function D(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=C(C({},w),p),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("div",C({},{className:"snack-player","data-snack-name":"Shadow Props","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20Slider%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20ShadowPropSlider%20%3D%20(%7B%20label%2C%20value%2C%20...props%20%7D)%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3C%3E%5Cn%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20%7Blabel%7D%20(%7Bvalue.toFixed(2)%7D)%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CSlider%20step%3D%7B1%7D%20value%3D%7Bvalue%7D%20%7B...props%7D%20%2F%3E%5Cn%20%20%20%20%3C%2F%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20%5BshadowOffsetWidth%2C%20setShadowOffsetWidth%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BshadowOffsetHeight%2C%20setShadowOffsetHeight%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BshadowRadius%2C%20setShadowRadius%5D%20%3D%20useState(0)%3B%5Cn%20%20const%20%5BshadowOpacity%2C%20setShadowOpacity%5D%20%3D%20useState(0.1)%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CView%5Cn%20%20%20%20%20%20%20%20style%3D%7B%5B%5Cn%20%20%20%20%20%20%20%20%20%20styles.square%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20shadowOffset%3A%20%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20shadowOffsetWidth%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20-shadowOffsetHeight%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20shadowOpacity%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20shadowRadius%5Cn%20%20%20%20%20%20%20%20%20%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%7D%5Cn%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.controls%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowOffset%20-%20X%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetWidth%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetWidth(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowOffset%20-%20Y%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetHeight%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetHeight(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowRadius%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B100%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowRadius%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowRadius(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3CShadowPropSlider%5Cn%20%20%20%20%20%20%20%20%20%20label%3D%5C%22shadowOpacity%5C%22%5Cn%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%5Cn%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B1%7D%5Cn%20%20%20%20%20%20%20%20%20%20step%3D%7B0.05%7D%5Cn%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOpacity%7D%5Cn%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOpacity(val)%7D%5Cn%20%20%20%20%20%20%20%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22space-around%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22%23ecf0f1%5C%22%2C%5Cn%20%20%20%20padding%3A%208%5Cn%20%20%7D%2C%5Cn%20%20square%3A%20%7B%5Cn%20%20%20%20alignSelf%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22white%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%204%2C%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20shadowColor%3A%20%5C%22black%5C%22%2C%5Cn%20%20%20%20width%3A%20150%5Cn%20%20%7D%2C%5Cn%20%20controls%3A%20%7B%5Cn%20%20%20%20paddingHorizontal%3A%2012%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("h1",C({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("p",null,"These properties are iOS only - for similar functionality on Android, use the ",(0,n.kt)("a",C({parentName:"p"},{href:"view-style-props#elevation"}),(0,n.kt)("inlineCode",{parentName:"a"},"elevation")," property"),"."),(0,n.kt)("h2",C({},{id:"props"}),"Props"),(0,n.kt)("h3",C({},{id:"shadowcolor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"shadowColor")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),(0,n.kt)("a",C({parentName:"td"},{href:"/docs/0.69/colors"}),"color")),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"shadowoffset"}),(0,n.kt)("inlineCode",{parentName:"h3"},"shadowOffset")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u504f\u79fb\u91cf\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"object: {width: number,height: number}"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"shadowopacity"}),(0,n.kt)("inlineCode",{parentName:"h3"},"shadowOpacity")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u4e0d\u900f\u660e\u5ea6 (\u4e58\u4ee5\u989c\u8272\u7684 alpha \u5206\u91cf)\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",C({},{id:"shadowradius"}),(0,n.kt)("inlineCode",{parentName:"h3"},"shadowRadius")),(0,n.kt)("p",null,"\u8bbe\u7f6e\u9634\u5f71\u6a21\u7cca\u534a\u5f84\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",C({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",C({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",C({parentName:"tr"},{align:null}),"iOS")))))}D.isMDXComponent=!0}}]);