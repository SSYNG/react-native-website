"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[40425],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},66559:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=t(52685),a=t(1244),i=(t(27378),t(35318)),o=["components"],l={id:"building-from-source",title:"\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1React Native"},d=void 0,p={unversionedId:"building-from-source",id:"version-0.66/building-from-source",title:"\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1React Native",description:"\u5982\u679c\u4f60\u60f3\u63d0\u524d\u5408\u5e76\u5b98\u65b9\u7684\u4fee\u590d\u8865\u4e01\uff0c\u5c1d\u8bd5\u8fd8\u6ca1\u53d1\u5e03\u7684\u6700\u65b0\u7279\u6027\uff0c\u6216\u8005\u6dfb\u52a0\u4e00\u4e9b\u4f60\u81ea\u5df1\u7684\u539f\u751f\u4ee3\u7801\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u81ea\u5df1\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1 React Native\u3002",source:"@site/versioned_docs/version-0.66/building-from-source.md",sourceDirName:".",slug:"/building-from-source",permalink:"/docs/building-from-source",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/building-from-source.md",tags:[],version:"0.66",frontMatter:{id:"building-from-source",title:"\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1React Native"}},c=[{value:"Android",id:"android",children:[{value:"\u9884\u5907\u6761\u4ef6",id:"\u9884\u5907\u6761\u4ef6",children:[{value:"\u5c06 Gradle \u6307\u5411\u4f60\u7684\u5b89\u5353 SDK\uff1a",id:"\u5c06-gradle-\u6307\u5411\u4f60\u7684\u5b89\u5353-sdk",children:[],level:4},{value:"Android NDK \u7684\u4e0b\u8f7d\u94fe\u63a5\uff080.57 \u4e4b\u524d\u4f7f\u7528 r10e \u7248\u672c\uff09",id:"android-ndk-\u7684\u4e0b\u8f7d\u94fe\u63a5057-\u4e4b\u524d\u4f7f\u7528-r10e-\u7248\u672c",children:[],level:4}],level:3},{value:"\u7f16\u8bd1\u6e90\u4ee3\u7801",id:"\u7f16\u8bd1\u6e90\u4ee3\u7801",children:[{value:"1. \u4e0b\u8f7d react-native \u6e90\u4ee3\u7801",id:"1-\u4e0b\u8f7d-react-native-\u6e90\u4ee3\u7801",children:[],level:4},{value:"2. \u6dfb\u52a0 gradle \u4f9d\u8d56",id:"2-\u6dfb\u52a0-gradle-\u4f9d\u8d56",children:[],level:4},{value:"3. \u6dfb\u52a0<code>:ReactAndroid</code>\u9879\u76ee",id:"3-\u6dfb\u52a0reactandroid\u9879\u76ee",children:[],level:4},{value:"4. \u8ba9\u7b2c\u4e09\u65b9\u6a21\u5757\u4f7f\u7528\u4f60\u7684\u5206\u652f",id:"4-\u8ba9\u7b2c\u4e09\u65b9\u6a21\u5757\u4f7f\u7528\u4f60\u7684\u5206\u652f",children:[],level:4}],level:3},{value:"\u5728 Android Studio \u4e2d\u7f16\u8bd1",id:"\u5728-android-studio-\u4e2d\u7f16\u8bd1",children:[],level:3},{value:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",children:[],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[],level:3}],level:2},{value:"Testing your Changes",id:"testing-your-changes",children:[],level:2},{value:"Making your changes available",id:"making-your-changes-available",children:[],level:2}],u={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u63d0\u524d\u5408\u5e76\u5b98\u65b9\u7684\u4fee\u590d\u8865\u4e01\uff0c\u5c1d\u8bd5\u8fd8\u6ca1\u53d1\u5e03\u7684\u6700\u65b0\u7279\u6027\uff0c\u6216\u8005\u6dfb\u52a0\u4e00\u4e9b\u4f60\u81ea\u5df1\u7684\u539f\u751f\u4ee3\u7801\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u81ea\u5df1\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1 React Native\u3002"),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("h3",{id:"\u9884\u5907\u6761\u4ef6"},"\u9884\u5907\u6761\u4ef6"),(0,i.kt)("p",null,"\u5728 Android Studio \u7684 SDK Manager \u4e2d\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android SDK version 28 (\u7f16\u8bd1 SDK \u7248\u672c\u53f7\u5728",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/build.gradle"},"build.gradle"),"\u4e2d\u53ef\u4ee5\u627e\u5230)"),(0,i.kt)("li",{parentName:"ul"},"SDK build tools version 28.0.3(\u7f16\u8bd1\u5de5\u5177\u7248\u672c\u53f7\u5728",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/master/ReactAndroid/build.gradle"},"build.gradle"),"\u4e2d\u53ef\u4ee5\u627e\u5230)"),(0,i.kt)("li",{parentName:"ul"},"Android Support Repository >= 28"),(0,i.kt)("li",{parentName:"ul"},"Android NDK(\u4e0b\u8f7d\u53ca\u5b89\u88c5\u6307\u5357\u8bf7\u770b\u540e\u6587)")),(0,i.kt)("h4",{id:"\u5c06-gradle-\u6307\u5411\u4f60\u7684\u5b89\u5353-sdk"},(0,i.kt)("a",{parentName:"h4",href:"#gradle-android-sdk"},"\u5c06 Gradle \u6307\u5411\u4f60\u7684\u5b89\u5353 SDK"),"\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65\uff1a")," \u5728\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a \u5bf9\u4e8e\u4e0d\u540c\u7684 shell \u547d\u4ee4\u884c\uff0c\u914d\u7f6e\u6587\u4ef6\u6709\u6240\u4e0d\u540c\uff0c\u8bf7\u6839\u636e\u5177\u4f53\u60c5\u51b5\u9009\u62e9\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bash: ",(0,i.kt)("inlineCode",{parentName:"li"},".bash_profile")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},".bashrc")),(0,i.kt)("li",{parentName:"ul"},"zsh: ",(0,i.kt)("inlineCode",{parentName:"li"},".zprofile")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},".zshrc")),(0,i.kt)("li",{parentName:"ul"},"ksh: ",(0,i.kt)("inlineCode",{parentName:"li"},".profile")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"$ENV"))),(0,i.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u52a0\u5165\uff08\u8bf7\u586b\u5199\u81ea\u5df1\u7684\u5b9e\u9645\u8def\u5f84\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export ANDROID_SDK=/Users/your_unix_name/android-sdk-macosx\nexport ANDROID_NDK=/Users/your_unix_name/android-ndk/android-ndk-r17c\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65\uff1a")," \u5728\u9879\u76ee\u76ee\u5f55\u7684 android \u76ee\u5f55\u4e0b\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"local.properties"),"\u6587\u4ef6\u3002\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a\uff08\u6ce8\u610f\uff1awindows \u4e0b\u8def\u5f84\u9700\u8981\u4f7f\u7528\u53cd\u53cc\u659c\u6760\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ndk.dir=\u6307\u5411android ndk\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\n")),(0,i.kt)("h4",{id:"android-ndk-\u7684\u4e0b\u8f7d\u94fe\u63a5057-\u4e4b\u524d\u4f7f\u7528-r10e-\u7248\u672c"},"Android NDK \u7684\u4e0b\u8f7d\u94fe\u63a5\uff080.57 \u4e4b\u524d\u4f7f\u7528 r10e \u7248\u672c\uff09"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mac OS (64-bit) - ",(0,i.kt)("a",{parentName:"li",href:"http://dl.google.com/android/repository/android-ndk-r17c-darwin-x86_64.zip"},"http://dl.google.com/android/repository/android-ndk-r17c-darwin-x86_64.zip")),(0,i.kt)("li",{parentName:"ol"},"Linux (64-bit) - ",(0,i.kt)("a",{parentName:"li",href:"http://dl.google.com/android/repository/android-ndk-r17c-linux-x86_64.zip"},"http://dl.google.com/android/repository/android-ndk-r17c-linux-x86_64.zip")),(0,i.kt)("li",{parentName:"ol"},"Windows (64-bit) - ",(0,i.kt)("a",{parentName:"li",href:"http://dl.google.com/android/repository/android-ndk-r17c-windows-x86_64.zip"},"http://dl.google.com/android/repository/android-ndk-r17c-windows-x86_64.zip")),(0,i.kt)("li",{parentName:"ol"},"Windows (32-bit) - ",(0,i.kt)("a",{parentName:"li",href:"http://dl.google.com/android/repository/android-ndk-r17c-windows-x86.zip"},"http://dl.google.com/android/repository/android-ndk-r17c-windows-x86.zip"))),(0,i.kt)("p",null,"\u5b89\u88c5\u8bf4\u660e\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/ndk/index.html"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u6e90\u4ee3\u7801"},"\u7f16\u8bd1\u6e90\u4ee3\u7801"),(0,i.kt)("h4",{id:"1-\u4e0b\u8f7d-react-native-\u6e90\u4ee3\u7801"},"1. \u4e0b\u8f7d react-native \u6e90\u4ee3\u7801"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5728\u4f60\u7684\u5206\u652f\u4ee3\u7801\u4e2d\u5b89\u88c5 react-native\u3002\u4f8b\u5982\u4ece\u5b98\u65b9\u5730\u5740\u5b89\u88c5\u4e3b\u5e72\u7248\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save github:facebook/react-native#master\n")),(0,i.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u628a\u4ed3\u5e93\u514b\u9686\u5230\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u76ee\u5f55\uff0c\u7136\u540e\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"\u8fdb\u884c\u5b89\u88c5"),(0,i.kt)("h4",{id:"2-\u6dfb\u52a0-gradle-\u4f9d\u8d56"},"2. \u6dfb\u52a0 gradle \u4f9d\u8d56"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"android/build.gradle"),"\u4e2d\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"gradle-download-task"),"\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"...\n    dependencies {\n        classpath 'com.android.tools.build:gradle:3.2.1'\n        classpath 'de.undercouch:gradle-download-task:3.4.3'\n\n        // \u6ce8\u610f\uff1a\u4e0d\u8981\u628a\u4f60\u7684\u5e94\u7528\u7684\u4f9d\u8d56\u653e\u5728\u8fd9\u91cc\uff1b\n        // \u5b83\u4eec\u5e94\u8be5\u653e\u5728\u5404\u81ea\u6a21\u5757\u7684build.gradle\u6587\u4ef6\u4e2d\n    }\n...\n")),(0,i.kt)("h4",{id:"3-\u6dfb\u52a0reactandroid\u9879\u76ee"},"3. \u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"h4"},":ReactAndroid"),"\u9879\u76ee"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"android/settings.gradle"),"\u4e2d\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},":ReactAndroid"),"\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"...\ninclude ':ReactAndroid'\n\nproject(':ReactAndroid').projectDir = new File(\n    rootProject.projectDir, '../node_modules/react-native/ReactAndroid')\n...\n")),(0,i.kt)("p",null,"\u4fee\u6539\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),"\u6587\u4ef6\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},":ReactAndroid"),"\u66ff\u6362\u9884\u7f16\u8bd1\u5e93\u3002\u4f8b\u5982\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"implementation project(':ReactAndroid')"),"\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"implementation 'com.facebook.react:react-native:+'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"...\ndependencies {\n    implementation fileTree(dir: 'libs', include: ['*.jar'])\n    implementation 'com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}'\n\n    implementation project(':ReactAndroid')\n\n    ...\n}\n...\n")),(0,i.kt)("h4",{id:"4-\u8ba9\u7b2c\u4e09\u65b9\u6a21\u5757\u4f7f\u7528\u4f60\u7684\u5206\u652f"},"4. \u8ba9\u7b2c\u4e09\u65b9\u6a21\u5757\u4f7f\u7528\u4f60\u7684\u5206\u652f"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684 React Native \u6a21\u5757\uff0c\u4f60\u9700\u8981\u91cd\u5199\u5b83\u4eec\u7684\u4f9d\u8d56\u4ee5\u907f\u514d\u5b83\u4eec\u4ecd\u7136\u6253\u5305\u5b98\u65b9\u7684\u9884\u7f16\u8bd1\u5e93\u3002\u5426\u5219\u5f53\u4f60\u7f16\u8bd1\u65f6\u4f1a\u62a5\u9519-",(0,i.kt)("inlineCode",{parentName:"p"},"Error: more than one library with package name 'com.facebook.react'."),"\uff08\u9519\u8bef\uff1a\u6709\u51e0\u4e2a\u91cd\u540d\u7684'com.facebook.react'\u7684\u5305\uff09"),(0,i.kt)("p",null,"\u4fee\u6539\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"configurations.all {\n    exclude group: 'com.facebook.react', module: 'react-native'\n}\n")),(0,i.kt)("h3",{id:"\u5728-android-studio-\u4e2d\u7f16\u8bd1"},"\u5728 Android Studio \u4e2d\u7f16\u8bd1"),(0,i.kt)("p",null,"\u5728 Android Studio \u6b22\u8fce\u9875\u4e2d\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"Import project"),"\uff0c\u968f\u540e\u9009\u62e9\u60a8\u5e94\u7528\u6240\u5728\u7684\u6587\u4ef6\u5939\u3002"),(0,i.kt)("p",null,"\u60a8\u8fd8\u9700\u8981\u4f7f\u7528",(0,i.kt)("em",{parentName:"p"},"Run"),"\u6309\u94ae(",(0,i.kt)("strong",{parentName:"p"},"\u8bd1\u6ce8"),"\uff1aAndroid Studio \u4e2d\u7eff\u8272\u7684\u8fd0\u884c\u6309\u94ae)\u6765\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\u60a8\u7684 app\uff0c\u6b64\u5916 Android Studio \u4e0d\u4f1a\u81ea\u52a8\u5f00\u542f\u670d\u52a1\uff0c\u4f60\u8fd8\u9700\u8981\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),"\u6765\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u3002"),(0,i.kt)("h3",{id:"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"},"\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u4ece\u6e90\u7801\u8fdb\u884c\u7f16\u8bd1\u5c06\u4f1a\u82b1\u8d39\u5f88\u957f\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u7b2c\u4e00\u6b21\u7f16\u8bd1\uff0c\u9700\u8981\u4e0b\u8f7d\u63a5\u8fd1 200M \u7684\u6587\u4ef6\u7136\u540e\u7f16\u8bd1\u539f\u751f\u4ee3\u7801\u3002\u6bcf\u6b21\u4f60\u5728\u81ea\u5df1\u7684\u4ed3\u5e93\u66f4\u65b0",(0,i.kt)("inlineCode",{parentName:"p"},"react-native"),"\u7248\u672c\u65f6\uff0c\u6784\u5efa\u7684\u76ee\u5f55\u53ef\u80fd\u4f1a\u88ab\u5220\u9664\uff0c\u6240\u6709\u7684\u6587\u4ef6\u90fd\u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\u3002\u4e3a\u4e86\u907f\u514d\u6784\u5efa\u76ee\u5f55\u88ab\u5220\uff0c\u4f60\u9700\u8981\u7f16\u8f91",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gradle/init.gradle"),"\u6587\u4ef6\u6765\u4fee\u6539\u6784\u5efa\u76ee\u5f55\u8def\u5f84\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'gradle.projectsLoaded {\n    rootProject.allprojects {\n        buildDir = "/path/to/build/directory/${rootProject.name}/${project.name}"\n    }\n}\n')),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Gradle build fails in ",(0,i.kt)("inlineCode",{parentName:"p"},"ndk-build"),". See the section about ",(0,i.kt)("inlineCode",{parentName:"p"},"local.properties")," file above."),(0,i.kt)("h2",{id:"testing-your-changes"},"Testing your Changes"),(0,i.kt)("p",null,"If you made changes to React Native and submit a pull request, all tests will run on your pull request automatically. To run the tests locally, see ",(0,i.kt)("a",{parentName:"p",href:"testing.md"},"Running Tests"),"."),(0,i.kt)("h2",{id:"making-your-changes-available"},"Making your changes available"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/publishing-forks"},"Publishing your own version of react native")," for several options to make your changes available for your and other app projects."))}s.isMDXComponent=!0}}]);