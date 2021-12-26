"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[38990],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25999:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(52685),r=n(1244),i=(n(27378),n(35318)),o=["components"],l={id:"upgrading",title:"\u66f4\u65b0"},p=void 0,c={unversionedId:"upgrading",id:"version-0.63/upgrading",title:"\u66f4\u65b0",description:"\u65f6\u523b\u5c06 React Native \u66f4\u65b0\u5230\u6700\u65b0\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u591a API\u3001\u89c6\u56fe\u3001\u5f00\u53d1\u8005\u5de5\u5177\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u597d\u4e1c\u897f\uff08\u8bd1\u6ce8\uff1a\u5b98\u65b9\u5f00\u53d1\u4efb\u52a1\u7e41\u91cd\uff0c\u4eba\u624b\u7d27\u7f3a\uff0c\u51e0\u4e4e\u4e0d\u4f1a\u5bf9\u65e7\u7248\u672c\u63d0\u4f9b\u7ef4\u62a4\u652f\u6301\uff0c\u6240\u4ee5\u5373\u4fbf\u66f4\u65b0\u53ef\u80fd\u5e26\u6765\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u53d8\u66f4\uff0c\u4f46\u5efa\u8bae\u5f00\u53d1\u8005\u8fd8\u662f\u5c3d\u4e00\u5207\u53ef\u80fd\u7b2c\u4e00\u65f6\u95f4\u66f4\u65b0\uff09\u3002\u7531\u4e8e\u4e00\u4e2a\u5b8c\u6574\u7684 React Native \u9879\u76ee\u662f\u7531 Android \u9879\u76ee\u3001iOS \u9879\u76ee\u548c JavaScript \u9879\u76ee\u7ec4\u6210\u7684\uff0c\u4e14\u90fd\u6253\u5305\u5728\u4e00\u4e2a npm \u5305\u4e2d\uff0c\u6240\u4ee5\u5347\u7ea7\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u9ebb\u70e6\u3002\u6211\u4eec\u4f1a\u5c3d\u91cf\u7b80\u5316\u8fd9\u4e00\u6d41\u7a0b\u3002\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u4f7f\u7528npx react-native info\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7684\u7248\u672c\u3002There's currently two ways for upgrading your React Native project: by using React Native CLI or manually with Upgrade Helper.",source:"@site/versioned_docs/version-0.63/upgrading.md",sourceDirName:".",slug:"/upgrading",permalink:"/docs/0.63/upgrading",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/upgrading.md",tags:[],version:"0.63",frontMatter:{id:"upgrading",title:"\u66f4\u65b0"},sidebar:"version-0.63/docs",previous:{title:"\u4f7f\u7528 TypeScript",permalink:"/docs/0.63/typescript"},next:{title:"\u6837\u5f0f",permalink:"/docs/0.63/style"}},u=[{value:"React Native CLI",id:"react-native-cli",children:[{value:"1. Run the <code>upgrade</code> command",id:"1-run-the-upgrade-command",children:[],level:4},{value:"2. Resolve the conflicts",id:"2-resolve-the-conflicts",children:[],level:4}],level:3},{value:"Upgrade Helper",id:"upgrade-helper",children:[{value:"1. Select the versions",id:"1-select-the-versions",children:[],level:4},{value:"2. Upgrade dependencies",id:"2-upgrade-dependencies",children:[],level:4},{value:"3. Upgrade your project files",id:"3-upgrade-your-project-files",children:[],level:4}],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"I want to upgrade with React Native CLI but I don&#39;t use Git",id:"i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git",children:[],level:4},{value:"I have done all the changes but my app is still using an old version",id:"i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version",children:[],level:4}],level:3},{value:"\u624b\u52a8\u5347\u7ea7",id:"\u624b\u52a8\u5347\u7ea7",children:[{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000",children:[],level:5}],level:3}],s={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u65f6\u523b\u5c06 React Native \u66f4\u65b0\u5230\u6700\u65b0\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u83b7\u5f97\u66f4\u591a API\u3001\u89c6\u56fe\u3001\u5f00\u53d1\u8005\u5de5\u5177\u4ee5\u53ca\u5176\u4ed6\u4e00\u4e9b\u597d\u4e1c\u897f\uff08\u8bd1\u6ce8\uff1a\u5b98\u65b9\u5f00\u53d1\u4efb\u52a1\u7e41\u91cd\uff0c\u4eba\u624b\u7d27\u7f3a\uff0c\u51e0\u4e4e\u4e0d\u4f1a\u5bf9\u65e7\u7248\u672c\u63d0\u4f9b\u7ef4\u62a4\u652f\u6301\uff0c\u6240\u4ee5\u5373\u4fbf\u66f4\u65b0\u53ef\u80fd\u5e26\u6765\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u53d8\u66f4\uff0c\u4f46\u5efa\u8bae\u5f00\u53d1\u8005\u8fd8\u662f\u5c3d\u4e00\u5207\u53ef\u80fd\u7b2c\u4e00\u65f6\u95f4\u66f4\u65b0\uff09\u3002\u7531\u4e8e\u4e00\u4e2a\u5b8c\u6574\u7684 React Native \u9879\u76ee\u662f\u7531 Android \u9879\u76ee\u3001iOS \u9879\u76ee\u548c JavaScript \u9879\u76ee\u7ec4\u6210\u7684\uff0c\u4e14\u90fd\u6253\u5305\u5728\u4e00\u4e2a npm \u5305\u4e2d\uff0c\u6240\u4ee5\u5347\u7ea7\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u9ebb\u70e6\u3002\u6211\u4eec\u4f1a\u5c3d\u91cf\u7b80\u5316\u8fd9\u4e00\u6d41\u7a0b\u3002\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"npx react-native info"),"\u547d\u4ee4\u67e5\u770b\u5f53\u524d\u7684\u7248\u672c\u3002There's currently two ways for upgrading your React Native project: by using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli"},"React Native CLI")," or manually with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/upgrade-helper"},"Upgrade Helper"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8bd1\u6ce8\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/releases"},"\u82f1\u6587\u66f4\u65b0\u65e5\u5fd7\u70b9\u8fd9\u91cc\u67e5\u770b"),"\u3002")),(0,i.kt)("h3",{id:"react-native-cli"},"React Native CLI"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli"},"React Native CLI")," comes with ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," command that provides a one-step operation to upgrade the source files with a minimum of conflicts, it internally uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/rn-diff-purge"},"rn-diff-purge")," project to find out which files need to be created, removed or modified."),(0,i.kt)("h4",{id:"1-run-the-upgrade-command"},"1. Run the ",(0,i.kt)("inlineCode",{parentName:"h4"},"upgrade")," command"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," command works on top of Git by using ",(0,i.kt)("inlineCode",{parentName:"p"},"git apply")," with 3-way merge, therefore it's required to use Git in order for this to work, if you don't use Git but still want to use this solution then you can check out how to do it in the ",(0,i.kt)("a",{parentName:"p",href:"#i-want-to-upgrade-with-react-native-cli-but-i-don-t-use-git"},"Troubleshooting")," section.")),(0,i.kt)("p",null,"Run the following command to start the process of upgrading to the latest version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native upgrade\n")),(0,i.kt)("p",null,"You may specify a React Native version by passing an argument, e.g. to upgrade to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.61.0-rc.0")," run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native upgrade 0.61.0-rc.0\n")),(0,i.kt)("p",null,"The project is upgraded using ",(0,i.kt)("inlineCode",{parentName:"p"},"git apply")," with 3-way merge, it may happen that you'll need to resolve a few conflicts after it's finished."),(0,i.kt)("h4",{id:"2-resolve-the-conflicts"},"2. Resolve the conflicts"),(0,i.kt)("p",null,"Conflicted files include delimiters which make very clear where the changes come from. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'13B07F951A680F5B00A75B9A /* Release */ = {\n  isa = XCBuildConfiguration;\n  buildSettings = {\n    ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n<<<<<<< ours\n    CODE_SIGN_IDENTITY = "iPhone Developer";\n    FRAMEWORK_SEARCH_PATHS = (\n      "$(inherited)",\n      "$(PROJECT_DIR)/HockeySDK.embeddedframework",\n      "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",\n    );\n=======\n    CURRENT_PROJECT_VERSION = 1;\n>>>>>>> theirs\n    HEADER_SEARCH_PATHS = (\n      "$(inherited)",\n      /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,\n      "$(SRCROOT)/../node_modules/react-native/React/**",\n      "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",\n    );\n')),(0,i.kt)("p",null,'You can think of "ours" as "your team" and "theirs" as "the React Native development team".'),(0,i.kt)("h3",{id:"upgrade-helper"},"Upgrade Helper"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://react-native-community.github.io/upgrade-helper/"},"Upgrade Helper")," is a web tool to help you out when upgrading your apps by providing the full set of changes happening between any two versions. It also shows comments on specific files to help understanding why that change is needed."),(0,i.kt)("h4",{id:"1-select-the-versions"},"1. Select the versions"),(0,i.kt)("p",null,'You first need to select from and to which version you wish to upgrade, by default the latest major versions are selected. After selecting you can click the button "Show me how to upgrade".'),(0,i.kt)("p",null,'\ud83d\udca1 Major updates will show an "useful content" section on the top with links to help you out when upgrading.'),(0,i.kt)("h4",{id:"2-upgrade-dependencies"},"2. Upgrade dependencies"),(0,i.kt)("p",null,"The first file that is shown is the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", it's good to update the dependencies that are showing in there. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," appears as changes then you can install it in your project by running ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# {{VERSION}} and {{REACT_VERSION}} are the release versions showing in the diff\nyarn add react-native@{{VERSION}}\nyarn add react@{{REACT_VERSION}}\n")),(0,i.kt)("h4",{id:"3-upgrade-your-project-files"},"3. Upgrade your project files"),(0,i.kt)("p",null,"The new release may contain updates to other files that are generated when you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx react-native init"),", those files are listed after the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the Upgrade Helper page. If there aren't other changes then you can just rebuild the project and continue developing."),(0,i.kt)("p",null,"In case there are changes then you can either update them manually by copying and pasting from the changes in the page or you can do it with the React Native CLI upgrade command by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native upgrade\n")),(0,i.kt)("p",null,"This will check your files against the latest template and perform the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there is a new file in the template, it is simply created."),(0,i.kt)("li",{parentName:"ul"},"If a file in the template is identical to your file, it is skipped."),(0,i.kt)("li",{parentName:"ul"},"If a file is different in your project than the template, you will be prompted; you have options to keep your file or overwrite it with the template version.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Some upgrades won't be done automatically with the React Native CLI and require manual work, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"0.28")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.29"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"0.56")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.57"),". Make sure to check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/releases"},"release notes")," when upgrading so that you can identify any manual changes your particular project may require.")),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h4",{id:"i-want-to-upgrade-with-react-native-cli-but-i-dont-use-git"},"I want to upgrade with React Native CLI but I don't use Git"),(0,i.kt)("p",null,"While your project does not have to be handled by the Git versioning system -- you can use Mercurial, SVN, or nothing -- you will still need to ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"install Git")," on your system in order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"npx react-native upgrade"),". Git will also need to be available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),". If your project doesn't use Git, initialize it and commit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git init # Initialize a Git repository\ngit add . # Stage all the current files\ngit commit -m "Upgrade react-native" # Save the current files in a commit\n')),(0,i.kt)("p",null,"After you finish upgrading you may remove the ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory."),(0,i.kt)("h4",{id:"i-have-done-all-the-changes-but-my-app-is-still-using-an-old-version"},"I have done all the changes but my app is still using an old version"),(0,i.kt)("p",null,"These sort of errors are usually related to caching, it's recommended to install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pmadruga/react-native-clean-project"},"react-native-clean-project")," to clear all your project's cache and then you can run it again."),(0,i.kt)("h3",{id:"\u624b\u52a8\u5347\u7ea7"},"\u624b\u52a8\u5347\u7ea7"),(0,i.kt)("p",null,"\u5347\u7ea7\u8fc7\u7a0b\u5f80\u5f80\u4f1a\u78b0\u5230\u5f88\u591a\u95ee\u9898\uff0c\u5c24\u5176\u6d89\u53ca\u5230\u4f17\u591a\u7b2c\u4e09\u65b9\u65f6\uff0c\u5904\u7406\u8d77\u6765\u5c24\u4e3a\u8d39\u65f6\u8d39\u529b\u3002\u6b64\u65f6\u5efa\u8bae\u53ef\u4ee5\u5c1d\u8bd5\u76f4\u63a5 init \u4e00\u4e2a\u65b0\u7684\u9879\u76ee\uff0c\u7136\u540e\u628a\u73b0\u6709\u9879\u76ee\u7684 JS \u4ee3\u7801\u8fdb\u884c\u624b\u52a8\u8fc1\u79fb\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}d.isMDXComponent=!0}}]);