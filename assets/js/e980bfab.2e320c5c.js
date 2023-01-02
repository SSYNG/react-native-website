"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[58724],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(27378),r=a(38944);const i="tabItem_wHwb";var o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},27789:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(27378),r=a(38944),i=a(14185),o=a(27886),l=a(77184),s=a(12112);const c="tabList_J5MA",p="tabItem_l0OV";var u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&g(e,a,t[a]);if(v)for(var a of v(t))h.call(t,a)&&g(e,a,t[a]);return e};function y(e){var t,a;const{lazy:i,block:u,defaultValue:v,values:f,groupId:h,className:g}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=f?f:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,o.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===v?v:null!=(a=null!=v?v:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==N&&!w.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:R}=(0,l.U)(),[P,x]=(0,n.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=h){const e=O[h];null!=e&&e!==P&&w.some((t=>t.value===e))&&x(e)}const A=e=>{const t=e.currentTarget,a=T.indexOf(t),n=w[a].value;n!==P&&(j(t),x(n),null!=h&&R(h,String(n)))},S=e=>{var t,a;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},g)},w.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=b({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:S,onClick:A},a),o={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":P===e})},d(i,m(o))),null!=t?t:e);var i,o}))),i?(0,n.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function w(e){const t=(0,i.Z)();return n.createElement(y,b({key:String(t)},e))}},58892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=a(35318),r=a(27789),i=a(86386),o=a(11674),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e};const f={id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},h=void 0,g={unversionedId:"communication-android",id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",description:"\u901a\u8fc7\u690d\u5165\u539f\u751f\u5e94\u7528\u548c\u539f\u751f UI \u7ec4\u4ef6\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002",source:"@site/../cndocs/communication-android.md",sourceDirName:".",slug:"/communication-android",permalink:"/docs/next/communication-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/communication-android.md",tags:[],version:"current",frontMatter:{id:"communication-android",title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1"},sidebar:"docs",previous:{title:"\u6253\u5305\u53d1\u5e03",permalink:"/docs/next/signed-apk-android"},next:{title:"\u94fe\u63a5\u539f\u751f\u5e93",permalink:"/docs/next/linking-libraries-ios"}},b={},y=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native",id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native",level:3},{value:"Passing properties from React Native to native",id:"passing-properties-from-react-native-to-native",level:3},{value:"Limits of properties",id:"limits-of-properties",level:3},{value:"Other ways of cross-language interaction (events and native modules)",id:"other-ways-of-cross-language-interaction-events-and-native-modules",level:2},{value:"Calling React Native functions from native (events)",id:"calling-react-native-functions-from-native-events",level:3},{value:"Calling native functions from React Native (native modules)",id:"calling-native-functions-from-react-native-native-modules",level:3}],w={toc:y};function k(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},w),m),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u901a\u8fc7",(0,n.kt)("a",v({parentName:"p"},{href:"integration-with-existing-apps"}),"\u690d\u5165\u539f\u751f\u5e94\u7528"),"\u548c",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android"}),"\u539f\u751f UI \u7ec4\u4ef6"),"\u4e24\u7bc7\u6587\u6863\uff0c\u6211\u4eec\u5b66\u4e60\u4e86 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u7684\u4e92\u76f8\u6574\u5408\u3002\u5728\u6574\u5408\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u5728\u4e24\u4e2a\u4e16\u754c\u95f4\u4e92\u76f8\u901a\u4fe1\u3002\u6709\u4e9b\u65b9\u6cd5\u5df2\u7ecf\u5728\u5176\u4ed6\u7684\u6307\u5357\u4e2d\u63d0\u5230\u4e86\uff0c\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e86\u6240\u6709\u53ef\u884c\u7684\u6280\u672f\u3002"),(0,n.kt)("h2",v({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,n.kt)("p",null,"React Native \u662f\u4ece React \u4e2d\u5f97\u5230\u7684\u7075\u611f\uff0c\u56e0\u6b64\u57fa\u672c\u7684\u4fe1\u606f\u6d41\u662f\u7c7b\u4f3c\u7684\u3002\u5728 React \u4e2d\u4fe1\u606f\u662f\u5355\u5411\u7684\u3002\u6211\u4eec\u7ef4\u62a4\u7740\u7ec4\u4ef6\u5c42\u6b21\uff0c\u5728\u5176\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4ec5\u4f9d\u8d56\u4e8e\u5b83\u7236\u7ec4\u4ef6\u548c\u81ea\u5df1\u7684\u72b6\u6001\u3002\u901a\u8fc7\u5c5e\u6027\uff08props\uff09\u6211\u4eec\u5c06\u4fe1\u606f\u4ece\u4e0a\u800c\u4e0b\u7684\u4ece\u7236\u7ec4\u4ef6\u4f20\u9012\u5230\u5b50\u5143\u7d20\u3002\u5982\u679c\u4e00\u4e2a\u7956\u5148\u7ec4\u4ef6\u9700\u8981\u81ea\u5df1\u5b50\u5b59\u7684\u72b6\u6001\uff0c\u63a8\u8350\u7684\u65b9\u6cd5\u662f\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u7ed9\u5bf9\u5e94\u7684\u5b50\u5143\u7d20\u3002"),(0,n.kt)("p",null,"React Native \u4e5f\u8fd0\u7528\u4e86\u76f8\u540c\u7684\u6982\u5ff5\u3002\u53ea\u8981\u6211\u4eec\u5b8c\u5168\u5728\u6846\u67b6\u5185\u6784\u5efa\u5e94\u7528\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5c5e\u6027\u548c\u56de\u8c03\u51fd\u6570\u6765\u8c03\u52a8\u6574\u4e2a\u5e94\u7528\u3002\u4f46\u662f\uff0c\u5f53\u6211\u4eec\u6df7\u5408 React Native \u548c\u539f\u751f\u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\uff0c\u8de8\u8bed\u8a00\u7684\u673a\u5236\u6765\u4f20\u9012\u4fe1\u606f\u3002"),(0,n.kt)("h2",v({},{id:"\u5c5e\u6027"}),"\u5c5e\u6027"),(0,n.kt)("p",null,"\u5c5e\u6027\u662f\u6700\u7b80\u5355\u7684\u8de8\u7ec4\u4ef6\u901a\u4fe1\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u65b9\u6cd5\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native \u6216\u8005\u4ece React Native \u5230\u539f\u751f\u7ec4\u4ef6\u3002"),(0,n.kt)("h3",v({},{id:"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230-react-native"}),"\u4ece\u539f\u751f\u7ec4\u4ef6\u4f20\u9012\u5c5e\u6027\u5230 React Native"),(0,n.kt)("p",null,"You can pass properties down to the React Native app by providing a custom implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"ReactActivityDelegate")," in your main activity. This implementation should override ",(0,n.kt)("inlineCode",{parentName:"p"},"getLaunchOptions")," to return a ",(0,n.kt)("inlineCode",{parentName:"p"},"Bundle")," with the desired properties."),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'public class MainActivity extends ReactActivity {\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new ReactActivityDelegate(this, getMainComponentName()) {\n      @Override\n      protected Bundle getLaunchOptions() {\n        Bundle initialProperties = new Bundle();\n        ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n                "http://foo.com/bar1.png",\n                "http://foo.com/bar2.png"\n        ));\n        initialProperties.putStringArrayList("images", imageList);\n        return initialProperties;\n      }\n    };\n  }\n}\n'))),(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'class MainActivity : ReactActivity() {\n    override fun createReactActivityDelegate(): ReactActivityDelegate {\n        return object : ReactActivityDelegate(this, mainComponentName) {\n            override fun getLaunchOptions(): Bundle {\n                val imageList = arrayListOf("http://foo.com/bar1.png", "http://foo.com/bar2.png")\n                val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }\n                return initialProperties\n            }\n        }\n    }\n}\n')))),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { View, Image } from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{ uri: imgURI }} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ReactRootView")," provides a read-write property ",(0,n.kt)("inlineCode",{parentName:"p"},"appProperties"),". After ",(0,n.kt)("inlineCode",{parentName:"p"},"appProperties")," is set, the React Native app is re-rendered with new properties. The update is only performed when the new updated properties differ from the previous ones."),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'Bundle updatedProps = mReactRootView.getAppProperties();\nArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n        "http://foo.com/bar3.png",\n        "http://foo.com/bar4.png"\n));\nupdatedProps.putStringArrayList("images", imageList);\n\nmReactRootView.setAppProperties(updatedProps);\n'))),(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'var updatedProps: Bundle = reactRootView.getAppProperties()\nvar imageList = arrayListOf("http://foo.com/bar3.png", "http://foo.com/bar4.png")\n')))),(0,n.kt)("p",null,"It is fine to update properties anytime. However, updates have to be performed on the main thread. You use the getter on any thread."),(0,n.kt)("p",null,"There is no way to update only a few properties at a time. We suggest that you build it into your own wrapper instead."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Note:"))," Currently, JS function ",(0,n.kt)("inlineCode",{parentName:"p"},"componentWillUpdateProps")," of the top level RN component will not be called after a prop update. However, you can access the new props in ",(0,n.kt)("inlineCode",{parentName:"p"},"componentDidMount")," function.")),(0,n.kt)("h3",v({},{id:"passing-properties-from-react-native-to-native"}),"Passing properties from React Native to native"),(0,n.kt)("p",null,"The problem exposing properties of native components is covered in detail in ",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"}),"this article"),". In short, properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"@ReactProp"),", then use them in React Native as if the component was an ordinary React Native component."),(0,n.kt)("h3",v({},{id:"limits-of-properties"}),"Limits of properties"),(0,n.kt)("p",null,"The main drawback of cross-language properties is that they do not support callbacks, which would allow us to handle bottom-up data bindings. Imagine you have a small RN view that you want to be removed from the native parent view as a result of a JS action. There is no way to do that with props, as the information would need to go bottom-up."),(0,n.kt)("p",null,"Although we have a flavor of cross-language callbacks (",(0,n.kt)("a",v({parentName:"p"},{href:"native-modules-android#callbacks"}),"described here"),"), these callbacks are not always the thing we need. The main problem is that they are not intended to be passed as properties. Rather, this mechanism allows us to trigger a native action from JS, and handle the result of that action in JS."),(0,n.kt)("h2",v({},{id:"other-ways-of-cross-language-interaction-events-and-native-modules"}),"Other ways of cross-language interaction (events and native modules)"),(0,n.kt)("p",null,"As stated in the previous chapter, using properties comes with some limitations. Sometimes properties are not enough to drive the logic of our app and we need a solution that gives more flexibility. This chapter covers other communication techniques available in React Native. They can be used for internal communication (between JS and native layers in RN) as well as for external communication (between RN and the 'pure native' part of your app)."),(0,n.kt)("p",null,"React Native enables you to perform cross-language function calls. You can execute custom native code from JS and vice versa. Unfortunately, depending on the side we are working on, we achieve the same goal in different ways. For native - we use events mechanism to schedule an execution of a handler function in JS, while for React Native we directly call methods exported by native modules."),(0,n.kt)("h3",v({},{id:"calling-react-native-functions-from-native-events"}),"Calling React Native functions from native (events)"),(0,n.kt)("p",null,"Events are described in detail in ",(0,n.kt)("a",v({parentName:"p"},{href:"native-components-android#events"}),"this article"),". Note that using events gives us no guarantees about execution time, as the event is handled on a separate thread."),(0,n.kt)("p",null,"Events are powerful, because they allow us to change React Native components without needing a reference to them. However, there are some pitfalls that you can fall into while using them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As events can be sent from anywhere, they can introduce spaghetti-style dependencies into your project."),(0,n.kt)("li",{parentName:"ul"},"Events share namespace, which means that you may encounter some name collisions. Collisions will not be detected statically, which makes them hard to debug."),(0,n.kt)("li",{parentName:"ul"},"If you use several instances of the same React Native component and you want to distinguish them from the perspective of your event, you'll likely need to introduce identifiers and pass them along with events (you can use the native view's ",(0,n.kt)("inlineCode",{parentName:"li"},"reactTag")," as an identifier).")),(0,n.kt)("h3",v({},{id:"calling-native-functions-from-react-native-native-modules"}),"Calling native functions from React Native (native modules)"),(0,n.kt)("p",null,"Native modules are Java/Kotlin classes that are available in JS. Typically one instance of each module is created per JS bridge. They can export arbitrary functions and constants to React Native. They have been covered in detail in ",(0,n.kt)("a",v({parentName:"p"},{href:"native-modules-android"}),"this article"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Warning")),": All native modules share the same namespace. Watch out for name collisions when creating new ones.")))}k.isMDXComponent=!0}}]);