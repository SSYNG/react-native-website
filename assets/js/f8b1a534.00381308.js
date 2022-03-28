"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5801],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38286:function(e,t,n){n.d(t,{ZP:function(){return m}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&d(e,n,t[n]);return e};const u={toc:[]};function m(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},u),d),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("div",s({},{className:"admonition admonition-caution alert alert--warning"}),(0,r.kt)("div",s({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",s({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",s({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,r.kt)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),(0,r.kt)("div",s({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"This documentation is still ",(0,r.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,r.kt)("p",{parentName:"div"},"Moreover, it contains several ",(0,r.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup."))))}m.isMDXComponent=!0},47933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},toc:function(){return g},default:function(){return y}});var r=n(35318),a=n(38286),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&s(e,n,t[n]);return e};const m={id:"new-architecture-library-android",title:"Enabling in Android Library"},h=void 0,f={unversionedId:"new-architecture-library-android",id:"new-architecture-library-android",title:"Enabling in Android Library",description:"Once you have defined the JavaScript specs for your native modules as part of the prerequisites and followed the Android/Gradle setup, you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this.",source:"@site/../cndocs/new-architecture-library-android.md",sourceDirName:".",slug:"/new-architecture-library-android",permalink:"/docs/next/new-architecture-library-android",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-library-android.md",tags:[],version:"current",frontMatter:{id:"new-architecture-library-android",title:"Enabling in Android Library"}},g=[{value:"1. Configure Codegen in your Gradle File",id:"1-configure-codegen-in-your-gradle-file",children:[],level:3},{value:"2. Extend or implement the code-generated native interfaces",id:"2-extend-or-implement-the-code-generated-native-interfaces",children:[{value:"Extends the abstract class provided by the codegen",id:"extends-the-abstract-class-provided-by-the-codegen",children:[],level:3}],level:2}],v={toc:g};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),s),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,r.kt)("p",null,"Once you have defined the JavaScript specs for your native modules as part of the ",(0,r.kt)("a",u({parentName:"p"},{href:"new-architecture-library-intro"}),"prerequisites")," and followed the Android/Gradle setup, you are now ready to migrate your library to the new architecture. Here are the steps you can follow to accomplish this."),(0,r.kt)("h3",u({},{id:"1-configure-codegen-in-your-gradle-file"}),"1. Configure Codegen in your Gradle File"),(0,r.kt)("p",null,"You can now configure Codegen by specifying the following in the module-level ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-groovy"}),'react {\n    libraryName = "samplelibrary"\n    codegenJavaPackageName = "com.example.samplelibrary"\n    root = rootProject.file("..")\n    jsRootDir = rootProject.file("../js/")\n    reactNativeDir = rootProject.file("../node_modules/react-native/")\n    codegenDir = rootProject.file("../node_modules/react-native-codegen/")\n}\n')),(0,r.kt)("div",u({},{className:"admonition admonition-info alert alert--info"}),(0,r.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),(0,r.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Please note that this setup requires you to have the React Gradle Plugin configured in the prerequisite step)."))),(0,r.kt)("p",null,"All the arguments are ",(0,r.kt)("strong",{parentName:"p"},"optional")," and provide ",(0,r.kt)("strong",{parentName:"p"},"default values"),", you might want to customize them to follow your setup."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libraryName"),": A string that identifies your library. By default, the codegen will use a library name that is derived from the name of the module with a ",(0,r.kt)("inlineCode",{parentName:"li"},"Spec")," suffix. E.g. for ",(0,r.kt)("inlineCode",{parentName:"li"},":example:project")," it will be ",(0,r.kt)("inlineCode",{parentName:"li"},"ExampleProjectSpec"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"codegenJavaPackageName"),": A string that represents the Java package your code should use. By default this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"com.facebook.fbreact.specs")," but you might want to customize it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": Reference to the root of your project. By default is ",(0,r.kt)("inlineCode",{parentName:"li"},"..")," as Gradle is running inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"./android")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reactNativeDir"),": Reference to the ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native")," package root. Usually located inside ",(0,r.kt)("inlineCode",{parentName:"li"},"../node_modules/react-native"),". For third-party NPM libraries that are installed in ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"../react-native"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsRootDir"),": Reference to the directory that contains the JavaScript specs for this library. By default is ",(0,r.kt)("inlineCode",{parentName:"li"},"../js/"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"codegenDir"),": Reference to the ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-codegen")," root. Usually located inside ",(0,r.kt)("inlineCode",{parentName:"li"},"../node_modules/react-native-codegen"),".")),(0,r.kt)("p",null,"The generator will write its output inside the ",(0,r.kt)("strong",{parentName:"p"},"build folder"),", specifically inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"./build/generated/source/codegen")," folder."),(0,r.kt)("h2",u({},{id:"2-extend-or-implement-the-code-generated-native-interfaces"}),"2. Extend or implement the code-generated native interfaces"),(0,r.kt)("p",null,"The JavaScript spec for your native module or component will be used to generate native interface code for each supported platform (i.e. Android and iOS). These native interface files will be generated ",(0,r.kt)("strong",{parentName:"p"},"when a React Native application that depends on your library is built"),"."),(0,r.kt)("p",null,"While this generated native interface code ",(0,r.kt)("strong",{parentName:"p"},"will not ship as part of your library"),", you do need to make sure your Java/Kotlin code conforms to the protocols provided by these native interface files."),(0,r.kt)("p",null,"You can invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"generateCodegenArtifactsFromSchema")," Gradle task to generate your library\u2019s native interface code in order to use them ",(0,r.kt)("strong",{parentName:"p"},"as a reference:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"./gradlew generateCodegenArtifactsFromSchema\n")),(0,r.kt)("p",null,"The files that are output can be found inside ",(0,r.kt)("inlineCode",{parentName:"p"},"build/generated/source/codegen")," and ",(0,r.kt)("strong",{parentName:"p"},"should not be committed"),", but you\u2019ll need to refer to them to determine what changes you need to make to your native modules in order for them to provide an implementation for each generated interface."),(0,r.kt)("p",null,"The output of the codegen for a module called ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeAwesomeManager")," will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"app/build/generated/source/codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 example\n\u2502           \u2514\u2500\u2500 samplelibrary\n\u2502               \u2514\u2500\u2500 NativeAwesomeManagerSpec.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 react\n\u2502   \u2502   \u2514\u2500\u2500 renderer\n\u2502   \u2502       \u2514\u2500\u2500 components\n\u2502   \u2502           \u2514\u2500\u2500 samplelibrary\n\u2502   \u2502               \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502   \u2502               \u251c\u2500\u2500 EventEmitters.cpp\n\u2502   \u2502               \u251c\u2500\u2500 EventEmitters.h\n\u2502   \u2502               \u251c\u2500\u2500 Props.cpp\n\u2502   \u2502               \u251c\u2500\u2500 Props.h\n\u2502   \u2502               \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502   \u2502               \u2514\u2500\u2500 ShadowNodes.h\n\u2502   \u251c\u2500\u2500 samplelibrary-generated.cpp\n\u2502   \u2514\u2500\u2500 samplelibrary.h\n\u2514\u2500\u2500 schema.json\n")),(0,r.kt)("h3",u({},{id:"extends-the-abstract-class-provided-by-the-codegen"}),"Extends the abstract class provided by the codegen"),(0,r.kt)("p",null,"Update your native module or component to ensure it ",(0,r.kt)("strong",{parentName:"p"},"extends the abstract class")," that has been code-generated from your JavaScript specs (i.e. the ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeAwesomeManagerSpec.java")," file from the previous example)."),(0,r.kt)("p",null,"Following the example set forth in the previous section, your library might import ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeAwesomeManagerSpec"),", implement the relevant native interface and the necessary methods for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'import androidx.annotation.NonNull;\n\nimport com.example.samplelibrary.NativeAwesomeManagerSpec;\nimport com.facebook.react.bridge.Promise;\nimport com.facebook.react.bridge.ReactApplicationContext;\n\npublic class NativeAwesomeManager extends NativeAwesomeManagerSpec {\n\n    public static final String NAME = "NativeAwesomeManager";\n\n    public NativeAwesomeManager(ReactApplicationContext reactContext) {\n        super(reactContext);\n    }\n\n    @Override\n    public void getString(String id, Promise promise) {\n        // Implement this method\n    }\n\n    @NonNull\n    @Override\n    public String getName() {\n        return NAME;\n    }\n}\n')),(0,r.kt)("p",null,"Please note that the ",(0,r.kt)("strong",{parentName:"p"},"generated abstract class")," that you\u2019re now extending (",(0,r.kt)("inlineCode",{parentName:"p"},"MyAwesomeSpec")," in this example), is itself extending ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactContextBaseJavaModule"),". Therefore you should not use access to any of the method/fields you were previously using (e.g. the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactApplicationContext")," and so on). Moreover the generated class will now also implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"TurboModule")," interface for you."))}y.isMDXComponent=!0}}]);