"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[10218],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11674:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(63445);const n=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:n?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:n?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(27378),n=r(38944);const o="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function u({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e})({role:"tabpanel",className:(0,n.Z)(o,r)},{hidden:t}),e)}},27789:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(27378),n=r(38944),o=r(14185),i=r(27886),l=r(77184),c=r(12112);const s="tabList_J5MA",p="tabItem_l0OV";var u=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&h(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&h(e,r,t[r]);return e};function g(e){var t,r;const{lazy:o,block:u,defaultValue:b,values:f,groupId:v,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=f?f:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,i.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(r=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:g[0].props.value;if(null!==O&&!w.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,l.U)(),[j,P]=(0,a.useState)(O),A=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=v){const e=N[v];null!=e&&e!==j&&w.some((t=>t.value===e))&&P(e)}const S=e=>{const t=e.currentTarget,r=A.indexOf(t),a=w[r].value;a!==j&&(E(t),P(a),null!=v&&x(v,String(a)))},C=e=>{var t,r;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const r=A.indexOf(e.currentTarget)+1;a=null!=(t=A[r])?t:A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=null!=(r=A[t])?r:A[A.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":u},h)},w.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(o=y({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>A.push(e),onKeyDown:C,onClick:S},r),i={className:(0,n.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===e})},d(o,m(i))),null!=t?t:e);var o,i}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function w(e){const t=(0,o.Z)();return a.createElement(g,y({key:String(t)},e))}},920:(e,t,r)=>{r.d(t,{ZP:()=>m});var a=r(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e};const d={toc:[]};function m(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},d),p),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",u({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}m.isMDXComponent=!0},2335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>v,metadata:()=>y,toc:()=>w});var a=r(35318),n=r(920),o=r(27789),i=r(86386),l=r(11674),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&b(e,r,t[r]);if(u)for(var r of u(t))m.call(t,r)&&b(e,r,t[r]);return e};const v={id:"new-architecture-library-android",title:"\u5728 Android \u5e93\u4e2d\u542f\u7528"},h=void 0,y={unversionedId:"new-architecture-library-android",id:"version-0.70/new-architecture-library-android",title:"\u5728 Android \u5e93\u4e2d\u542f\u7528",description:"Once you have defined the JavaScript specs for your native modules as part of the prerequisites, setup the configuration of the Codegen, and followed the Android/Gradle setup, you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this.",source:"@site/versioned_docs/version-0.70/new-architecture-library-android.md",sourceDirName:".",slug:"/new-architecture-library-android",permalink:"/docs/new-architecture-library-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-library-android.md",tags:[],version:"0.70",frontMatter:{id:"new-architecture-library-android",title:"\u5728 Android \u5e93\u4e2d\u542f\u7528"},sidebar:"docs",previous:{title:"\u5728\u5e93\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",permalink:"/docs/new-architecture-library-intro"},next:{title:"\u5728 iOS \u5e93\u4e2d\u542f\u7528",permalink:"/docs/new-architecture-library-ios"}},g={},w=[{value:"1. Extend or implement the code-generated native interfaces",id:"1-extend-or-implement-the-code-generated-native-interfaces",level:2},{value:"Extends the abstract class provided by the codegen",id:"extends-the-abstract-class-provided-by-the-codegen",level:3}],k={toc:w};function O(e){var t,r=e,{components:c}=r,b=((e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=f(f({},k),b),s(t,p({components:c,mdxType:"MDXLayout"}))),(0,a.kt)(n.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"Once you have defined the JavaScript specs for your native modules as part of the ",(0,a.kt)("a",f({parentName:"p"},{href:"new-architecture-library-intro"}),"prerequisites"),", setup the configuration of the Codegen, and followed the Android/Gradle setup, you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this."),(0,a.kt)("h2",f({},{id:"1-extend-or-implement-the-code-generated-native-interfaces"}),"1. Extend or implement the code-generated native interfaces"),(0,a.kt)("p",null,"The JavaScript spec for your native module or component will be used to generate native interface code for each supported platform (i.e. Android and iOS). These native interface files will be generated ",(0,a.kt)("strong",{parentName:"p"},"when a React Native application that depends on your library is built"),"."),(0,a.kt)("p",null,"While this generated native interface code ",(0,a.kt)("strong",{parentName:"p"},"will not ship as part of your library"),", you do need to make sure your Java/Kotlin code conforms to the protocols provided by these native interface files."),(0,a.kt)("p",null,"You can invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateCodegenArtifactsFromSchema")," Gradle task to generate your library\u2019s native interface code in order to use them ",(0,a.kt)("strong",{parentName:"p"},"as a reference:")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"./gradlew generateCodegenArtifactsFromSchema\n")),(0,a.kt)("p",null,"The files that are output can be found inside ",(0,a.kt)("inlineCode",{parentName:"p"},"build/generated/source/codegen")," and ",(0,a.kt)("strong",{parentName:"p"},"should not be committed"),", but you\u2019ll need to refer to them to determine what changes you need to make to your native modules in order for them to provide an implementation for each generated interface."),(0,a.kt)("p",null,"The output of the codegen for a module called ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeAwesomeManager")," will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),"app/build/generated/source/codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 example\n\u2502           \u2514\u2500\u2500 samplelibrary\n\u2502               \u2514\u2500\u2500 NativeAwesomeManagerSpec.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 react\n\u2502   \u2502   \u2514\u2500\u2500 renderer\n\u2502   \u2502       \u2514\u2500\u2500 components\n\u2502   \u2502           \u2514\u2500\u2500 samplelibrary\n\u2502   \u2502               \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502   \u2502               \u251c\u2500\u2500 EventEmitters.cpp\n\u2502   \u2502               \u251c\u2500\u2500 EventEmitters.h\n\u2502   \u2502               \u251c\u2500\u2500 Props.cpp\n\u2502   \u2502               \u251c\u2500\u2500 Props.h\n\u2502   \u2502               \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502   \u2502               \u2514\u2500\u2500 ShadowNodes.h\n\u2502   \u251c\u2500\u2500 samplelibrary-generated.cpp\n\u2502   \u2514\u2500\u2500 samplelibrary.h\n\u2514\u2500\u2500 schema.json\n")),(0,a.kt)("h3",f({},{id:"extends-the-abstract-class-provided-by-the-codegen"}),"Extends the abstract class provided by the codegen"),(0,a.kt)("p",null,"Update your native module or component to ensure it ",(0,a.kt)("strong",{parentName:"p"},"extends the abstract class")," that has been code-generated from your JavaScript specs (i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeAwesomeManagerSpec.java")," file from the previous example)."),(0,a.kt)("p",null,"Following the example set forth in the previous section, your library might import ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeAwesomeManagerSpec"),", implement the relevant native interface and the necessary methods for it:"),(0,a.kt)(o.Z,{groupId:"android-language",defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java"}),'import androidx.annotation.NonNull;\n\nimport com.example.samplelibrary.NativeAwesomeManagerSpec;\nimport com.facebook.react.bridge.Promise;\nimport com.facebook.react.bridge.ReactApplicationContext;\n\npublic class NativeAwesomeManager extends NativeAwesomeManagerSpec {\n\n    public static final String NAME = "NativeAwesomeManager";\n\n    public NativeAwesomeManager(ReactApplicationContext reactContext) {\n        super(reactContext);\n    }\n\n    @Override\n    public void getString(String id, Promise promise) {\n        // Implement this method\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        return NAME;\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-kotlin"}),'import com.example.samplelibrary.NativeAwesomeManagerSpec\nimport com.facebook.react.bridge.Promise\nimport com.facebook.react.bridge.ReactApplicationContext\n\nclass NativeAwesomeManager(reactContext: ReactApplicationContext) :\n    NativeAwesomeManagerSpec(reactContext) {\n    override fun getString(id: String, promise: Promise) {\n        // Implement this method\n    }\n\n    override fun getName() = NAME\n\n    companion object {\n        val NAME = "NativeAwesomeManager"\n    }\n}\n')))),(0,a.kt)("p",null,"Please note that the ",(0,a.kt)("strong",{parentName:"p"},"generated abstract class")," that you\u2019re now extending (",(0,a.kt)("inlineCode",{parentName:"p"},"MyAwesomeSpec")," in this example), is itself extending ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactContextBaseJavaModule"),". Therefore you should not use access to any of the method/fields you were previously using (e.g. the ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactApplicationContext")," and so on). Moreover the generated class will now also implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModule")," interface for you."))}O.isMDXComponent=!0}}]);