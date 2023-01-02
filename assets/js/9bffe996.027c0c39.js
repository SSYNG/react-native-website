"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[27896],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),C=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=C(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=C(t),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var C=2;C<o;C++)i[C]=t[C];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>p,default:()=>B,frontMatter:()=>u,metadata:()=>m,toc:()=>D});var a=t(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))C.call(n,t)&&s(e,t,n[t]);return e};const u={id:"interactionmanager",title:"InteractionManager"},p=void 0,m={unversionedId:"interactionmanager",id:"version-0.66/interactionmanager",title:"InteractionManager",description:"Interactionmanager \u53ef\u4ee5\u5c06\u4e00\u4e9b\u8017\u65f6\u8f83\u957f\u7684\u5de5\u4f5c\u5b89\u6392\u5230\u6240\u6709\u4e92\u52a8\u6216\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u518d\u8fdb\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1 JavaScript \u52a8\u753b\u7684\u6d41\u7545\u8fd0\u884c\u3002",source:"@site/versioned_docs/version-0.66/interactionmanager.md",sourceDirName:".",slug:"/interactionmanager",permalink:"/docs/0.66/interactionmanager",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/interactionmanager.md",tags:[],version:"0.66",frontMatter:{id:"interactionmanager",title:"InteractionManager"},sidebar:"api",previous:{title:"Easing",permalink:"/docs/0.66/easing"},next:{title:"Keyboard",permalink:"/docs/0.66/keyboard"}},f={},D=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Basic",id:"basic",level:3},{value:"Advanced",id:"advanced",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>runAfterInteractions()</code>",id:"runafterinteractions",level:3},{value:"<code>createInteractionHandle()</code>",id:"createinteractionhandle",level:3},{value:"<code>clearInteractionHandle()</code>",id:"clearinteractionhandle",level:3},{value:"<code>setDeadline()</code>",id:"setdeadline",level:3}],k={toc:D};function B(e){var n,t=e,{components:r}=t,s=((e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))n.indexOf(a)<0&&C.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},k),s),o(n,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Interactionmanager \u53ef\u4ee5\u5c06\u4e00\u4e9b\u8017\u65f6\u8f83\u957f\u7684\u5de5\u4f5c\u5b89\u6392\u5230\u6240\u6709\u4e92\u52a8\u6216\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u518d\u8fdb\u884c\u3002\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1 JavaScript \u52a8\u753b\u7684\u6d41\u7545\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u8fd9\u6837\u53ef\u4ee5\u5b89\u6392\u4e00\u4e2a\u4efb\u52a1\u5728\u4ea4\u4e92\u548c\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"InteractionManager.runAfterInteractions(() => {\n  // ...\u8017\u65f6\u8f83\u957f\u7684\u540c\u6b65\u6267\u884c\u7684\u4efb\u52a1...\n});\n")),(0,a.kt)("p",null,"\u548c\u5176\u4ed6\u7684\u5ef6\u8fdf\u8ba1\u5212\u51fd\u6570\u5bf9\u6bd4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"requestAnimationFrame(): \u7528\u6765\u6267\u884c\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u63a7\u5236\u89c6\u56fe\u52a8\u753b\u7684\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"setImmediate/setTimeout(): \u5728\u7a0d\u540e\u6267\u884c\u4ee3\u7801\u3002\u6ce8\u610f\u8fd9\u6709\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u52a8\u753b\u3002"),(0,a.kt)("li",{parentName:"ul"},"runAfterInteractions(): \u5728\u7a0d\u540e\u6267\u884c\u4ee3\u7801\uff0c\u4e0d\u4f1a\u5ef6\u8fdf\u5f53\u524d\u8fdb\u884c\u7684\u52a8\u753b\u3002")),(0,a.kt)("p",null,"\u89e6\u6478\u5904\u7406\u7cfb\u7edf\u4f1a\u628a\u4e00\u4e2a\u6216\u591a\u4e2a\u8fdb\u884c\u4e2d\u7684\u89e6\u6478\u64cd\u4f5c\u8ba4\u5b9a\u4e3a'\u4ea4\u4e92'\uff0c\u5e76\u4e14\u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"runAfterInteractions()"),"\u7684\u56de\u8c03\u51fd\u6570\u5ef6\u8fdf\u6267\u884c\uff0c\u76f4\u5230\u6240\u6709\u7684\u89e6\u6478\u64cd\u4f5c\u90fd\u7ed3\u675f\u6216\u53d6\u6d88\u4e86\u3002"),(0,a.kt)("p",null,"InteractionManager \u8fd8\u5141\u8bb8\u5e94\u7528\u6ce8\u518c\u52a8\u753b\uff0c\u5728\u52a8\u753b\u5f00\u59cb\u65f6\u521b\u5efa\u4e00\u4e2a\u4ea4\u4e92\u201c\u53e5\u67c4\u201d\uff0c\u7136\u540e\u5728\u7ed3\u675f\u7684\u65f6\u5019\u6e05\u9664\u5b83\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"const handle = InteractionManager.createInteractionHandle();\n// \u6267\u884c\u52a8\u753b... (`runAfterInteractions`\u4e2d\u7684\u4efb\u52a1\u73b0\u5728\u5f00\u59cb\u6392\u961f\u7b49\u5019)\n// \u5728\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u5f00\u59cb\u6e05\u9664\u53e5\u67c4\uff1a\nInteractionManager.clearInteractionHandle(handle);\n// \u5728\u6240\u6709\u53e5\u67c4\u90fd\u6e05\u9664\u4e4b\u540e\uff0c\u73b0\u5728\u5f00\u59cb\u4f9d\u5e8f\u6267\u884c\u961f\u5217\u4e2d\u7684\u4efb\u52a1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runAfterInteractions"),"\u63a5\u53d7\u4e00\u4e2a\u666e\u901a\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6216\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"PromiseTask"),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u9700\u8981\u5e26\u6709\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gen"),"\u7684\u65b9\u6cd5\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u3002\u5982\u679c\u63d0\u4f9b\u7684\u53c2\u6570\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"PromiseTask"),"\uff0c \u90a3\u4e48\u5373\u4fbf\u5b83\u662f\u5f02\u6b65\u7684\u5b83\u4e5f\u4f1a\u963b\u585e\u4efb\u52a1\u961f\u5217\uff0c\u76f4\u5230\u5b83\uff08\u4ee5\u53ca\u5b83\u6240\u6709\u7684\u4f9d\u8d56\u4efb\u52a1\uff0c\u54ea\u6015\u8fd9\u4e9b\u4f9d\u8d56\u4efb\u52a1\u4e5f\u662f\u5f02\u6b65\u7684\uff09\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u624d\u4f1a\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6392\u961f\u7684\u4efb\u52a1\u4f1a\u5728\u4e00\u6b21",(0,a.kt)("inlineCode",{parentName:"p"},"setImmediate"),"\u65b9\u6cd5\u4e2d\u4f9d\u5e8f\u6279\u91cf\u6267\u884c\u3002\u5982\u679c\u4f60\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"setDeadLine"),"\u65b9\u6cd5\u5e76\u8bbe\u5b9a\u4e86\u4e00\u4e2a\u6b63\u6574\u6570\u503c\uff0c\u5219\u4efb\u52a1\u53ea\u4f1a\u5728\u8bbe\u5b9a\u7684\u65f6\u95f4\u5230\u8fbe\u540e\u5f00\u59cb\u6267\u884c\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u4efb\u52a1\u4f1a\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\u6765\u6302\u8d77\u5e76\u963b\u585e\u5176\u4ed6\u4efb\u52a1\u6267\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u7ed9\u8bf8\u5982\u89e6\u6478\u4ea4\u4e92\u4e00\u7c7b\u7684\u4e8b\u4ef6\u7559\u51fa\u65f6\u95f4\uff0c\u4f7f\u5e94\u7528\u53ef\u4ee5\u66f4\u5feb\u5730\u54cd\u5e94\u7528\u6237\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("h3",d({},{id:"basic"}),"Basic"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"InteractionManager Function Component Basic Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20%5C%22Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn%5C%22%20%2B%20%5C%22Cmd%2BD%20or%20shake%20for%20dev%20menu%5C%22%2C%5Cn%20%20android%3A%5Cn%20%20%20%20%5C%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn%5C%22%20%2B%5Cn%20%20%20%20%5C%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%5C%22%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%5Cn%5Cnconst%20useFadeIn%20%3D%20(duration%20%3D%205000)%20%3D%3E%20%7B%5Cn%20%20const%20%5Bopacity%5D%20%3D%20useState(new%20Animated.Value(0))%3B%5Cn%5Cn%20%20%2F%2F%20Running%20the%20animation%20when%20the%20component%20is%20mounted%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20%2F%2F%20Animated.timing()%20create%20a%20interaction%20handle%20by%20default%2C%20if%20you%20want%20to%20disabled%20that%5Cn%20%20%20%20%2F%2F%20behaviour%20you%20can%20set%20isInteraction%20to%20false%20to%20disabled%20that.%5Cn%20%20%20%20Animated.timing(opacity%2C%20%7B%5Cn%20%20%20%20%20%20toValue%3A%201%2C%5Cn%20%20%20%20%20%20duration%2C%5Cn%20%20%20%20%7D).start()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20opacity%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7B%20onShown%20%7D)%20%3D%3E%20%7B%5Cn%20%20const%20opacity%20%3D%20useFadeIn()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20animation%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20interactionPromise%20%3D%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onShown())%3B%5Cn%20%20%20%20return%20()%20%3D%3E%20interactionPromise.cancel()%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%2C%20%7B%20opacity%20%7D%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onShown%3D%7B()%20%3D%3E%20Alert.alert(%5C%22Animation%20is%20done%5C%22)%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22salmon%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h3",d({},{id:"advanced"}),"Advanced"),(0,a.kt)("div",d({},{className:"snack-player","data-snack-name":"InteractionManager Function Component Advanced Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useEffect%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%5Cn%20%20Alert%2C%5Cn%20%20Animated%2C%5Cn%20%20InteractionManager%2C%5Cn%20%20Platform%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%2C%5Cn%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20instructions%20%3D%20Platform.select(%7B%5Cn%20%20ios%3A%20%5C%22Press%20Cmd%2BR%20to%20reload%2C%5C%5Cn%5C%22%20%2B%20%5C%22Cmd%2BD%20or%20shake%20for%20dev%20menu%5C%22%2C%5Cn%20%20android%3A%5Cn%20%20%20%20%5C%22Double%20tap%20R%20on%20your%20keyboard%20to%20reload%2C%5C%5Cn%5C%22%20%2B%5Cn%20%20%20%20%5C%22Shake%20or%20press%20menu%20button%20for%20dev%20menu%5C%22%2C%5Cn%7D)%3B%5Cn%5Cnconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%5Cn%5Cn%2F%2F%20You%20can%20create%20a%20custom%20interaction%2Fanimation%20and%20add%5Cn%2F%2F%20support%20for%20InteractionManager%5Cnconst%20useCustomInteraction%20%3D%20(timeLocked%20%3D%202000)%20%3D%3E%20%7B%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20const%20handle%20%3D%20InteractionManager.createInteractionHandle()%3B%5Cn%5Cn%20%20%20%20setTimeout(%5Cn%20%20%20%20%20%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%2C%5Cn%20%20%20%20%20%20timeLocked%5Cn%20%20%20%20)%3B%5Cn%5Cn%20%20%20%20return%20()%20%3D%3E%20InteractionManager.clearInteractionHandle(handle)%3B%5Cn%20%20%7D)%3B%5Cn%7D%3B%5Cn%5Cnconst%20Ball%20%3D%20(%7B%20onInteractionIsDone%20%7D)%20%3D%3E%20%7B%5Cn%20%20useCustomInteraction()%3B%5Cn%5Cn%20%20%2F%2F%20Running%20a%20method%20after%20the%20interaction%5Cn%20%20useMount(()%20%3D%3E%20%7B%5Cn%20%20%20%20InteractionManager.runAfterInteractions(()%20%3D%3E%20onInteractionIsDone())%3B%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20return%20%3CAnimated.View%20style%3D%7B%5Bstyles.ball%5D%7D%20%2F%3E%3B%5Cn%7D%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%7Binstructions%7D%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CBall%20onInteractionIsDone%3D%7B()%20%3D%3E%20Alert.alert(%5C%22Interaction%20is%20done%5C%22)%7D%20%2F%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%2C%5Cn%20%20ball%3A%20%7B%5Cn%20%20%20%20width%3A%20100%2C%5Cn%20%20%20%20height%3A%20100%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22salmon%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%20100%2C%5Cn%20%20%7D%2C%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"InteractionManager.runAfterInteractions()"),"\u5728web\u4e0a\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u5b83\u4f1a\u7acb\u5373\u89e6\u53d1\u800c\u4e0d\u662f\u7b49\u5f85\u4ea4\u4e92\u52a8\u753b\u7ed3\u675f\u3002")),(0,a.kt)("hr",null),(0,a.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",d({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",d({},{id:"runafterinteractions"}),(0,a.kt)("inlineCode",{parentName:"h3"},"runAfterInteractions()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static runAfterInteractions(task)\n")),(0,a.kt)("p",null,"\u5b89\u6392\u4e00\u4e2a\u51fd\u6570\u5728\u6240\u6709\u7684\u4ea4\u4e92\u548c\u52a8\u753b\u5b8c\u6210\u4e4b\u540e\u8fd0\u884c\u3002\u8fd4\u56de\u4e00\u4e2a\u53ef\u53d6\u6d88\u7684 promise\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"createinteractionhandle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"createInteractionHandle()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static createInteractionHandle()\n")),(0,a.kt)("p",null,"\u901a\u77e5\u7ba1\u7406\u5668\u6709\u67d0\u4e2a\u4ea4\u4e92\u5f00\u59cb\u4e86\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"clearinteractionhandle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"clearInteractionHandle()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static clearInteractionHandle(handle)\n")),(0,a.kt)("p",null,"\u901a\u77e5\u7ba1\u7406\u5668\u6709\u67d0\u4e2a\u4ea4\u4e92\u5df2\u7ecf\u7ed3\u675f\u4e86\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"setdeadline"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setDeadline()")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static setDeadline(deadline)\n")),(0,a.kt)("p",null,"\u5982\u679c\u8bbe\u5b9a\u4e86\u4e00\u4e2a\u6b63\u6574\u6570\u503c\uff0c\u5219\u4f1a\u4f7f\u7528 setTimeout \u6765\u6302\u8d77\u6240\u6709\u5c1a\u672a\u6267\u884c\u7684\u4efb\u52a1\u3002\u5728 eventLoopRunningTime \u5230\u8fbe\u8bbe\u5b9a\u65f6\u95f4\u540e\uff0c\u624d\u5f00\u59cb\u4f7f\u7528\u4e00\u4e2a setImmediate \u65b9\u6cd5\u6765\u6279\u91cf\u6267\u884c\u6240\u6709\u4efb\u52a1\u3002"),(0,a.kt)("hr",null))}B.isMDXComponent=!0}}]);