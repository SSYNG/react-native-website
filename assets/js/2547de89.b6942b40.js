"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[77062],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),A=s(a),p=r,m=A["".concat(c,".").concat(p)]||A[p]||u[p]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=A;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},45981:function(e,t,a){var n=a(161),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,a){var n=a(27378);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},12120:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(52685),r=a(27378),l=a(76457),o=a(84956);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(92373),s=a(38944),d="tabItem_c0e5";function u(e){var t,a,l,o=e.lazy,u=e.block,A=e.defaultValue,p=e.values,m=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,c.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===A?A:null!=(t=null!=A?A:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var B=i(),C=B.tabGroupChoices,y=B.setTabGroupChoices,D=(0,r.useState)(b),g=D[0],x=D[1],w=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=C[m];null!=N&&N!==g&&f.some((function(e){return e.value===N}))&&x(N)}var T=function(e){var t=e.currentTarget,a=w.indexOf(t),n=f[a].value;n!==g&&(E(t),x(n),null!=m&&y(m,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},k)},f.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":g===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}function A(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},1834:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return A},toc:function(){return p},default:function(){return k}});var n=a(52685),r=a(1244),l=(a(27378),a(35318)),o=a(12120),i=a(70517),c=a(45981),s=["components"],d={id:"backhandler",title:"BackHandler"},u=void 0,A={unversionedId:"backhandler",id:"backhandler",title:"BackHandler",description:"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002",source:"@site/../cndocs/backhandler.md",sourceDirName:".",slug:"/backhandler",permalink:"/docs/next/backhandler",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/backhandler.md",tags:[],version:"current",frontMatter:{id:"backhandler",title:"BackHandler"},sidebar:"api",previous:{title:"useWindowDimensions",permalink:"/docs/next/usewindowdimensions"},next:{title:"PermissionsAndroid",permalink:"/docs/next/permissionsandroid"}},p=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"Usage with React Navigation",id:"usage-with-react-navigation",children:[],level:2},{value:"Backhandler hook",id:"backhandler-hook",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[],level:3},{value:"<code>exitApp()</code>",id:"exitapp",children:[],level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[],level:3}],level:2}],m={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u56de\u8c03\u51fd\u6570\u662f\u5012\u5e8f\u6267\u884c\u7684\uff08\u5373\u540e\u6dfb\u52a0\u7684\u51fd\u6570\u5148\u6267\u884c\uff09\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5982\u679c\u67d0\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de true"),"\uff0c\u5219\u540e\u7eed\u7684\u51fd\u6570\u90fd\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6dfb\u52a0\u4efb\u4f55\u76d1\u542c\u51fd\u6570\uff0c\u6216\u8005\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u8fd4\u56de false"),"\uff0c\u5219\u4f1a\u6267\u884c\u9ed8\u8ba4\u884c\u4e3a\uff0c\u9000\u51fa\u5e94\u7528\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c app \u5f53\u524d\u6253\u5f00\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Modal"),"\u7a97\u53e3\uff0c\u5219 BackHandler \u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002(",(0,l.kt)("a",{parentName:"p",href:"/docs/next/modal#onrequestclose"},"\u67e5\u770b",(0,l.kt)("inlineCode",{parentName:"a"},"Modal"),"\u7684\u6587\u6863"),").")),(0,l.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"BackHandler.addEventListener('hardwareBackPress', function () {\n  /**\n   * this.onMainScreen()\u548cthis.goBack()\u4e24\u4e2a\u65b9\u6cd5\u90fd\u53ea\u662f\u4f2a\u65b9\u6cd5\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u53bb\u5b9e\u73b0\n   * \u4e00\u822c\u6765\u8bf4\u90fd\u8981\u914d\u5408\u5bfc\u822a\u5668\u7ec4\u4ef6\u4f7f\u7528\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * \u8fd4\u56detrue\u65f6\u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u4f20\u9012\uff0c\u56e0\u800c\u4e0d\u4f1a\u6267\u884c\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n     */\n    return true;\n  }\n  /**\n   * \u8fd4\u56defalse\u65f6\u4f1a\u4f7f\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u9012\uff0c\u89e6\u53d1\u5176\u4ed6\u6ce8\u518c\u7684\u76d1\u542c\u51fd\u6570\uff0c\u6216\u662f\u7cfb\u7edf\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n   */\n  return false;\n});\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),(0,l.kt)(o.Z,{groupId:"syntax",defaultValue:c.Z.defaultSyntax,values:c.Z.syntax,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,l.kt)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%20%20%5D)%3B%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20backAction%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,l.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,l.kt)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20this.backAction%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.backHandler.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",(0,l.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),(0,l.kt)("p",null,"Additionally ",(0,l.kt)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),(0,l.kt)(o.Z,{groupId:"syntax",defaultValue:c.Z.defaultSyntax,values:c.Z.syntax,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,l.kt)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%0A%20%20%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,l.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,l.kt)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,l.kt)("h2",{id:"usage-with-react-navigation"},"Usage with React Navigation"),(0,l.kt)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",(0,l.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"},"Custom Android back button behaviour")),(0,l.kt)("h2",{id:"backhandler-hook"},"Backhandler hook"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/hooks#usebackhandler"},"React Native Hooks")," has a nice ",(0,l.kt)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"addeventlistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(eventName, handler)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"exitapp"},(0,l.kt)("inlineCode",{parentName:"h3"},"exitApp()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static exitApp()\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"removeeventlistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(eventName, handler)\n")))}k.isMDXComponent=!0}}]);