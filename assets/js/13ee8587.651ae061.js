"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[36713],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,v=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},d),{},{components:a})):n.createElement(v,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":i?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(27378),r=a(38944);const i="tabItem_wHwb";var o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},27789:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(27378),r=a(38944),i=a(14185),o=a(27886),l=a(77184),c=a(12112);const p="tabList_J5MA",d="tabItem_l0OV";var u=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&b(e,a,t[a]);if(v)for(var a of v(t))k.call(t,a)&&b(e,a,t[a]);return e};function y(e){var t,a;const{lazy:i,block:u,defaultValue:v,values:g,groupId:k,className:b}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=g?g:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===v?v:null!=(a=null!=v?v:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==w&&!N.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:R,setTabGroupChoices:O}=(0,l.U)(),[A,T]=(0,n.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=k){const e=R[k];null!=e&&e!==A&&N.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=C.indexOf(t),n=N[a].value;n!==A&&(j(t),T(n),null!=k&&O(k,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;n=null!=(t=C[a])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=null!=(a=C[t])?a:C[C.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},b)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=f({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:e=>C.push(e),onKeyDown:P,onClick:x},a),o={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":A===e})},s(i,m(o))),null!=t?t:e);var i,o}))),i?(0,n.cloneElement)(y.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function N(e){const t=(0,i.Z)();return n.createElement(y,f({key:String(t)},e))}},28763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>b,toc:()=>y});var n=a(35318),r=a(27789),i=a(86386),o=a(11674),l=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))s.call(t,a)&&m(e,a,t[a]);return e};const g={id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},k=void 0,b={unversionedId:"integration-with-android-fragment",id:"version-0.70/integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment",description:"\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u6307\u5357\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06\u5168\u5c4f React Native \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a Activity \u96c6\u6210\u5230\u73b0\u6709 Android \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u8981\u5728\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u7684 Fragments \u4e2d\u4f7f\u7528 React Native \u7ec4\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u5b83\u5141\u8bb8\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u5c06 React Native \u7ec4\u4ef6\u4e0e Activity \u4e2d\u7684\u539f\u751f Fragments \u96c6\u6210\u5728\u4e00\u8d77\u3002",source:"@site/versioned_docs/version-0.70/integration-with-android-fragment.md",sourceDirName:".",slug:"/integration-with-android-fragment",permalink:"/docs/integration-with-android-fragment",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/integration-with-android-fragment.md",tags:[],version:"0.70",frontMatter:{id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},sidebar:"docs",previous:{title:"\u96c6\u6210\u5230\u73b0\u6709\u539f\u751f\u5e94\u7528",permalink:"/docs/integration-with-existing-apps"},next:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/building-for-tv"}},f={},y=[{value:"1. \u5c06 React Native \u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",id:"1-\u5c06-react-native-\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2. \u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e React Native Fragment \u96c6\u6210",id:"2-\u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e-react-native-fragment-\u96c6\u6210",level:3},{value:"3. \u4e3a React Native Fragment \u6dfb\u52a0 FrameLayout",id:"3-\u4e3a-react-native-fragment-\u6dfb\u52a0-framelayout",level:3},{value:"4. \u5c06 React Native Fragment \u6dfb\u52a0\u5230 FrameLayout",id:"4-\u5c06-react-native-fragment-\u6dfb\u52a0\u5230-framelayout",level:3},{value:"5. \u6d4b\u8bd5\u4f60\u7684\u96c6\u6210",id:"5-\u6d4b\u8bd5\u4f60\u7684\u96c6\u6210",level:3},{value:"6. \u9644\u52a0\u8bbe\u7f6e - \u539f\u751f\u6a21\u5757",id:"6-\u9644\u52a0\u8bbe\u7f6e---\u539f\u751f\u6a21\u5757",level:3}],N={toc:y};function h(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},N),m),c(t,p({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",v({parentName:"p"},{href:"https://reactnative.dev/docs/integration-with-existing-apps"}),"\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210"),"\u6307\u5357\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06\u5168\u5c4f React Native \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a Activity \u96c6\u6210\u5230\u73b0\u6709 Android \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002\u8981\u5728\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u7684 Fragments \u4e2d\u4f7f\u7528 React Native \u7ec4\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u5b83\u5141\u8bb8\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u5c06 React Native \u7ec4\u4ef6\u4e0e Activity \u4e2d\u7684\u539f\u751f Fragments \u96c6\u6210\u5728\u4e00\u8d77\u3002"),(0,n.kt)("h3",v({},{id:"1-\u5c06-react-native-\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f"}),"1. \u5c06 React Native \u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f"),(0,n.kt)("p",null,"\u6309\u7167",(0,n.kt)("a",v({parentName:"p"},{href:"https://reactnative.dev/docs/integration-with-existing-apps"}),"\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210"),"\u7684\u6307\u5357\uff0c\u76f4\u5230\u4ee3\u7801\u96c6\u6210\u90e8\u5206\u3002\u7ee7\u7eed\u6267\u884c\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"index.android.js"),"\u6587\u4ef6\uff1b\u7b2c 2 \u6b65\uff1a\u6dfb\u52a0\u672c\u8282\u4e2d\u7684 React Native \u4ee3\u7801\u3002"),(0,n.kt)("h3",v({},{id:"2-\u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e-react-native-fragment-\u96c6\u6210"}),"2. \u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0e React Native Fragment \u96c6\u6210"),(0,n.kt)("p",null,'\u4f60\u53ef\u4ee5\u5c06\u4f60\u7684 React Native \u7ec4\u4ef6\u6e32\u67d3\u6210\u4e00\u4e2a Fragment\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5168\u5c4f\u7684 React Native Activity\u3002\u8be5\u7ec4\u4ef6\u53ef\u4ee5\u79f0\u4e3a"screen"\u6216"fragment"\uff0c\u5b83\u7684\u529f\u80fd\u4e0e Android Fragment \u76f8\u540c\uff0c\u53ef\u80fd\u5305\u542b\u5b50\u7ec4\u4ef6\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u53ef\u4ee5\u653e\u5728',(0,n.kt)("inlineCode",{parentName:"p"},"/fragments"),"\u6587\u4ef6\u5939\u4e2d\uff0c\u7528\u4e8e\u7ec4\u6210 Fragment \u7684\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u653e\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"/components"),"\u6587\u4ef6\u5939\u4e2d\u3002"),(0,n.kt)("p",null,"\u4f60\u9700\u8981\u5728\u4e3b\u5e94\u7528\u7a0b\u5e8f Java/Kotlin \u7c7b\u4e2d\u5b9e\u73b0",(0,n.kt)("inlineCode",{parentName:"p"},"ReactApplication"),"\u63a5\u53e3\u3002\u5982\u679c\u4f60\u4f7f\u7528\u9ed8\u8ba4\u6d3b\u52a8\u4ece Android Studio \u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5219\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7c7b\uff08\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"p"},"MyReactApplication.java"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"MyReactApplication.kt"),"\uff09\u3002\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u73b0\u6709\u7c7b\uff0c\u4f60\u53ef\u4ee5\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u6587\u4ef6\u4e2d\u627e\u5230\u8fd9\u4e2a\u4e3b\u7c7b\u3002\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"<application />"),"\u6807\u7b7e\u4e0b\uff0c\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u5c5e\u6027",(0,n.kt)("inlineCode",{parentName:"p"},"android:name"),"\uff0c\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"p"},'android:name=".MyReactApplication"'),"\u3002\u6b64\u503c\u662f\u8981\u5b9e\u73b0\u7684\u7c7b\uff0c\u5e76\u4e3a\u5176\u63d0\u4f9b\u6240\u9700\u7684\u65b9\u6cd5\u3002"),(0,n.kt)("p",null,"\u786e\u4fdd\u4e3b\u5e94\u7528\u7a0b\u5e8f\u7c7b\u5b9e\u73b0ReactApplication\uff1a"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),"class MyReactApplication: Application(), ReactApplication {...}\n"))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {...}\n")))),(0,n.kt)("p",null,"\u91cd\u5199\u6240\u9700\u7684\u65b9\u6cd5",(0,n.kt)("inlineCode",{parentName:"p"},"getUseDeveloperSupport"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"getPackages"),"\u4ee5\u53ca",(0,n.kt)("inlineCode",{parentName:"p"},"getReactNativeHost"),":"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),"class MyReactApplication : Application(), ReactApplication {\n    override fun onCreate() {\n        super.onCreate()\n        SoLoader.init(this, false)\n    }\n    private val reactNativeHost =\n        object : ReactNativeHost(this) {\n            override fun getUseDeveloperSupport() = BuildConfig.DEBUG\n            override fun getPackages(): List<ReactPackage> {\n                val packages = PackageList(this).getPackages().toMutableList()\n                // Packages that cannot be autolinked yet can be added manually here\n                return packages\n            }\n        }\n    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost\n}\n"))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        SoLoader.init(this, false);\n    }\n\n    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n            return BuildConfig.DEBUG;\n        }\n\n        protected List<ReactPackage> getPackages() {\n            List<ReactPackage> packages = new PackageList(this).getPackages();\n            // Packages that cannot be autolinked yet can be added manually here\n            return packages;\n        }\n    };\n\n    @Override\n    public ReactNativeHost getReactNativeHost() {\n        return mReactNativeHost;\n    }\n}\n")))),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fAndroid Studio\uff0c\u8bf7\u4f7f\u7528 Alt+Enter \u5728\u7c7b\u4e2d\u6dfb\u52a0\u6240\u6709\u7f3a\u5931\u7684\u5bfc\u5165\uff0c\u6216\u8005\u624b\u52a8\u5bfc\u5165\uff1a"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),"import android.app.Application\n\nimport com.facebook.react.PackageList\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.soloader.SoLoader\n"))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n")))),(0,n.kt)("p",null,'\u6267\u884c"Sync Project files with Gradle"\u64cd\u4f5c\u3002'),(0,n.kt)("h3",v({},{id:"3-\u4e3a-react-native-fragment-\u6dfb\u52a0-framelayout"}),"3. \u4e3a React Native Fragment \u6dfb\u52a0 FrameLayout"),(0,n.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u628a React Native Fragment \u6dfb\u52a0\u5230\u4e00\u4e2a Activity \u4e2d\u3002\u5bf9\u4e8e\u4e00\u4e2a\u65b0\u9879\u76ee\u6765\u8bf4\uff0c\u8fd9\u4e2a Activity \u5c06\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity"),"\uff0c\u4f46\u5b83\u53ef\u4ee5\u662f\u4efb\u4f55 Activity\uff0c\u5e76\u4e14\u968f\u7740\u5c06\u66f4\u591a React Native \u7ec4\u4ef6\u96c6\u6210\u5230\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u66f4\u591a Fragments \u6dfb\u52a0\u5230\u5176\u4ed6 Activity \u4e2d\u3002"),(0,n.kt)("p",null,"\u9996\u5148\u5c06 React Native Fragment \u6dfb\u52a0\u5230 Activity \u7684\u5e03\u5c40\u4e2d\uff0c\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"p"},"res/layouts"),"\u6587\u4ef6\u5939\u4e2d\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"main_activity.xml"),"\u3002"),(0,n.kt)("p",null,"\u6dfb\u52a0\u5177\u6709 id\u3001\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"<FrameLayout>"),"\uff0cReact Native Fragment \u4f1a\u88ab\u6e32\u67d3\u5230\u6b64\u5e03\u5c40\u4e2d\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-xml"}),'<FrameLayout\n    android:id="@+id/reactNativeFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n')),(0,n.kt)("h3",v({},{id:"4-\u5c06-react-native-fragment-\u6dfb\u52a0\u5230-framelayout"}),"4. \u5c06 React Native Fragment \u6dfb\u52a0\u5230 FrameLayout"),(0,n.kt)("p",null,"\u8981\u5c06 React Native Fragment \u6dfb\u52a0\u5230\u5e03\u5c40\u4e2d\uff0c\u4f60\u9700\u8981\u6709\u4e00\u4e2a Activity\u3002\u6b63\u5982\u5728\u4e00\u4e2a\u65b0\u9879\u76ee\u4e2d\u63d0\u5230\u7684\u90a3\u6837\uff0c\u5b83\u5c31\u662f MainActivity\u3002\u5728\u8fd9\u4e2a Activity \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6309\u94ae\u548c\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5355\u51fb\u6309\u94ae\u65f6\uff0c\u5c06\u4f1a\u6e32\u67d3 React Native Fragment\u3002"),(0,n.kt)("p",null,"\u4fee\u6539 Activity \u5e03\u5c40\u4ee5\u6dfb\u52a0\u6309\u94ae\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-xml"}),'<Button\n    android:layout_margin="10dp"\n    android:id="@+id/button"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text="Show react fragment" />\n')),(0,n.kt)("p",null,"\u73b0\u5728\u5728 Activity \u7c7b\uff08\u4f8b\u5982",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"MainActivity.kt"),"\uff09\u4e2d\uff0c\u4f60\u9700\u8981\u4e3a\u6309\u94ae\u6dfb\u52a0\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"OnClickListener"),"\uff0c\u5b9e\u4f8b\u5316",(0,n.kt)("inlineCode",{parentName:"p"},"ReactFragment"),"\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u6846\u67b6\u5e03\u5c40\u4e2d\u3002"),(0,n.kt)("p",null,"\u5c06\u6309\u94ae\u5b57\u6bb5\u6dfb\u52a0\u5230 Activity \u7684\u9876\u90e8\uff1a"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),"private lateinit var button: Button\n"))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),"private Button mButton;\n")))),(0,n.kt)("p",null,"\u66f4\u65b0 Activity \u7684",(0,n.kt)("inlineCode",{parentName:"p"},"onCreate"),"\u65b9\u6cd5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'override fun onCreate(savedInstanceState: Bundle) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.main_activity)\n    button = findViewById<Button>(R.id.button)\n    button.setOnClickListener {\n        val reactNativeFragment = ReactFragment.Builder()\n                .setComponentName("HelloWorld")\n                .setLaunchOptions(getLaunchOptions("test message"))\n                .build()\n        getSupportFragmentManager()\n                .beginTransaction()\n                .add(R.id.reactNativeFragment, reactNativeFragment)\n                .commit()\n    }\n}\n'))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.main_activity);\n\n    mButton = findViewById(R.id.button);\n    mButton.setOnClickListener(new View.OnClickListener() {\n        public void onClick(View v) {\n            Fragment reactNativeFragment = new ReactFragment.Builder()\n                    .setComponentName("HelloWorld")\n                    .setLaunchOptions(getLaunchOptions("test message"))\n                    .build();\n\n            getSupportFragmentManager()\n                    .beginTransaction()\n                    .add(R.id.reactNativeFragment, reactNativeFragment)\n                    .commit();\n\n        }\n    });\n}\n')))),(0,n.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"Fragment reactNativeFragment = new ReactFragment.Builder()"),"\u521b\u5efa\u4e86ReactFragment\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"getSupportFragmentManager().beginTransaction().add()"),"\u5c06 Fragment \u6dfb\u52a0\u5230\u6846\u67b6\u5e03\u5c40\u4e2d\u3002"),(0,n.kt)("p",null,'\u5982\u679c\u4f60\u4f7f\u7528\u4e86 React Native \u7684\u5165\u95e8\u5de5\u5177\u5305\uff0c\u8bf7\u5c06"HelloWorld"\u5b57\u7b26\u4e32\u66ff\u6362\u4e3a',(0,n.kt)("inlineCode",{parentName:"p"},"index.js"),"\u6216",(0,n.kt)("inlineCode",{parentName:"p"},"index.android.js"),"\u6587\u4ef6\u4e2d\u7684\u5b57\u7b26\u4e32\uff08\u5b83\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent()"),"\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff09\u3002"),(0,n.kt)("p",null,"\u6dfb\u52a0",(0,n.kt)("inlineCode",{parentName:"p"},"getLaunchOptions"),"\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5141\u8bb8\u4f60\u5c06\u5c5e\u6027\u4f20\u9012\u5230\u7ec4\u4ef6\u3002\u8fd9\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u4e0d\u9700\u8981\u4f20\u9012\u4efb\u4f55\u5c5e\u6027\uff0c\u53ef\u4ee5\u5220\u9664",(0,n.kt)("inlineCode",{parentName:"p"},"setLaunchOptions"),"\u3002"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),'private fun getLaunchOptions(message: String) = Bundle().apply {\n    putString("message", message)\n}\n\n'))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),'private Bundle getLaunchOptions(String message) {\n    Bundle initialProperties = new Bundle();\n    initialProperties.putString("message", message);\n    return initialProperties;\n}\n')))),(0,n.kt)("p",null,"\u5728 Activity \u7c7b\u4e2d\u6dfb\u52a0\u6240\u6709\u7f3a\u5c11\u7684\u5bfc\u5165\u3002\u8c28\u614e\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u5305\u4e2d\u7684 BuildConfig \u800c\u4e0d\u662f facebook \u5305\uff01\u6216\u8005\u624b\u52a8\u5bfc\u5165\uff1a"),(0,n.kt)(r.Z,{groupId:"android-language",defaultValue:o.Z.defaultAndroidLanguage,values:o.Z.androidLanguages,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-kotlin"}),"import android.app.Application\n\nimport com.facebook.react.ReactApplication\nimport com.facebook.react.ReactNativeHost\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.shell.MainReactPackage\nimport com.facebook.soloader.SoLoader\n\n"))),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n")))),(0,n.kt)("p",null,'\u6267\u884c"Sync Project files with Gradle"\u64cd\u4f5c.'),(0,n.kt)("h3",v({},{id:"5-\u6d4b\u8bd5\u4f60\u7684\u96c6\u6210"}),"5. \u6d4b\u8bd5\u4f60\u7684\u96c6\u6210"),(0,n.kt)("p",null,"\u786e\u4fdd\u8fd0\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"yarn"),"\u6765\u5b89\u88c5\u4f60\u7684 react-native \u4f9d\u8d56\u9879\u5e76\u8fd0\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"yarn native"),"\u6765\u542f\u52a8 Metro \u6253\u5305\u5668\u3002\u5728 Android Studio \u4e2d\u8fd0\u884c\u4f60\u7684 android \u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u5e94\u8be5\u4ece\u5f00\u53d1\u670d\u52a1\u5668\u52a0\u8f7d JavaScript \u4ee3\u7801\u5e76\u5c06\u5176\u663e\u793a\u5728 Activity \u7684 React Native Fragment \u4e2d\u3002"),(0,n.kt)("h3",v({},{id:"6-\u9644\u52a0\u8bbe\u7f6e---\u539f\u751f\u6a21\u5757"}),"6. \u9644\u52a0\u8bbe\u7f6e - \u539f\u751f\u6a21\u5757"),(0,n.kt)("p",null,"\u4f60\u53ef\u80fd\u9700\u8981\u4ece\u4f60\u7684 react \u7ec4\u4ef6\u8c03\u7528\u73b0\u6709\u7684 Java/Kotlin \u4ee3\u7801\u3002\u539f\u751f\u6a21\u5757\u5141\u8bb8\u4f60\u8c03\u7528\u539f\u751f\u4ee3\u7801\u5e76\u5728\u539f\u751f\u5e94\u7528\u4e2d\u8fd0\u884c\u65b9\u6cd5\u3002\u6309\u7167",(0,n.kt)("a",v({parentName:"p"},{href:"/docs/native-modules-android"}),"\u6b64\u5904"),"\u8fdb\u884c\u8bbe\u7f6e\u3002"))}h.isMDXComponent=!0}}]);