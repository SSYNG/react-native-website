"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32436],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=l,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45981:function(e,t,a){var n=a(161),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=l?"ios":"android",i=l?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,a){var n=a(27378);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},12120:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(52685),l=a(27378),r=a(76457),o=a(84956);var i=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(92373),c=a(38944),s="tabItem_c0e5";function d(e){var t,a,r,o=e.lazy,d=e.block,p=e.defaultValue,h=e.values,m=e.groupId,b=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=i(),y=A.tabGroupChoices,D=A.setTabGroupChoices,C=(0,l.useState)(g),N=C[0],w=C[1],T=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==N&&k.some((function(e){return e.value===E}))&&w(E)}var B=function(e){var t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==N&&(x(t),w(n),null!=m&&D(m,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;a=T[l]||T[T.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:B,onClick:B},r,{className:(0,c.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},90950:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return h},default:function(){return b}});var n=a(52685),l=a(1244),r=(a(27378),a(35318)),o=a(12120),i=a(70517),u=a(45981),c=["components"],s={id:"touchablehighlight",title:"TouchableHighlight"},d=void 0,p={unversionedId:"touchablehighlight",id:"version-0.66/touchablehighlight",title:"TouchableHighlight",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.66/touchablehighlight.md",sourceDirName:".",slug:"/touchablehighlight",permalink:"/docs/touchablehighlight",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchablehighlight.md",tags:[],version:"0.66",frontMatter:{id:"touchablehighlight",title:"TouchableHighlight"},sidebar:"\u7ec4\u4ef6",previous:{title:"TextInput",permalink:"/docs/textinput"},next:{title:"TouchableOpacity",permalink:"/docs/touchableopacity"}},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"Props",id:"props",children:[{value:"<code>activeOpacity</code>",id:"activeopacity",children:[],level:3},{value:"<code>onHideUnderlay</code>",id:"onhideunderlay",children:[],level:3},{value:"<code>onShowUnderlay</code>",id:"onshowunderlay",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3},{value:"<code>underlayColor</code>",id:"underlaycolor",children:[],level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[],level:3},{value:"<code>tvParallaxProperties</code>",id:"tvparallaxproperties",children:[],level:3}],level:2}],m={toc:h};function b(e){var t=e.components,a=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pressable"},"Pressable")," API.")),(0,r.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\u3002\u5f53\u6309\u4e0b\u7684\u65f6\u5019\uff0c\u5c01\u88c5\u7684\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u964d\u4f4e\uff0c\u540c\u65f6\u4f1a\u6709\u4e00\u4e2a\u5e95\u5c42\u7684\u989c\u8272\u900f\u8fc7\u800c\u88ab\u7528\u6237\u770b\u5230\uff0c\u4f7f\u5f97\u89c6\u56fe\u53d8\u6697\u6216\u53d8\u4eae\u3002"),(0,r.kt)("p",null,"\u5728\u5e95\u5c42\u5b9e\u73b0\u4e0a\uff0c\u5b9e\u9645\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u89c6\u56fe\u5230\u89c6\u56fe\u5c42\u7ea7\u4e2d\uff0c\u5982\u679c\u4f7f\u7528\u7684\u65b9\u6cd5\u4e0d\u6b63\u786e\uff0c\u6709\u65f6\u5019\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u4e0d\u5e0c\u671b\u51fa\u73b0\u7684\u89c6\u89c9\u6548\u679c\u3002\u8b6c\u5982\u6ca1\u6709\u7ed9\u89c6\u56fe\u7684 backgroundColor \u663e\u5f0f\u58f0\u660e\u4e00\u4e2a\u4e0d\u900f\u660e\u7684\u989c\u8272\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),"\u53ea\u652f\u6301\u4e00\u4e2a\u5b50\u8282\u70b9\uff08\u4e0d\u80fd\u6ca1\u6709\u5b50\u8282\u70b9\u4e5f\u4e0d\u80fd\u591a\u4e8e\u4e00\u4e2a\uff09\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5305\u542b\u591a\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a View \u6765\u5305\u88c5\u5b83\u4eec\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent(props) {\n  return (\n    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableHighlight\n  activeOpacity={0.6}\n  underlayColor=\"#DDDDDD\"\n  onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableHighlight>;\n")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(o.Z,{groupId:"syntax",defaultValue:u.Z.defaultSyntax,values:u.Z.syntax,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"TouchableHighlight Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20TouchableHighlightExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(count%20%2B%201)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7BonPress%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%7Bcount%20%3F%20count%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20TouchableHighlightExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"TouchableHighlight Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%0A%20%20%7D%0A%0A%20%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis.onPress%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.countContainer%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.countText%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bthis.state.count%20%3F%20this.state.count%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"Inherits ",(0,r.kt)("a",{parentName:"p",href:"/docs/touchablewithoutfeedback#props"},"TouchableWithoutFeedback Props"),"."),(0,r.kt)("h3",{id:"activeopacity"},(0,r.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,r.kt)("p",null,"\u6307\u5b9a\u5c01\u88c5\u7684\u89c6\u56fe\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a\uff080 \u5230 1 \u4e4b\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a 0.85\uff09\u3002\u9700\u8981\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"underlayColor"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onhideunderlay"},(0,r.kt)("inlineCode",{parentName:"h3"},"onHideUnderlay")),(0,r.kt)("p",null,"\u5e95\u5c42\u7684\u989c\u8272\u88ab\u9690\u85cf\u7684\u65f6\u5019\u8c03\u7528\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onshowunderlay"},(0,r.kt)("inlineCode",{parentName:"h3"},"onShowUnderlay")),(0,r.kt)("p",null,"\u5f53\u5e95\u5c42\u7684\u989c\u8272\u88ab\u663e\u793a\u7684\u65f6\u5019\u8c03\u7528\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View.style"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"underlaycolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,r.kt)("p",null,"\u6709\u89e6\u6478\u64cd\u4f5c\u65f6\u663e\u793a\u51fa\u6765\u7684\u5e95\u5c42\u7684\u989c\u8272\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/colors"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hastvpreferredfocus"},(0,r.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tvparallaxproperties"},(0,r.kt)("inlineCode",{parentName:"h3"},"tvParallaxProperties")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Apple TV only)")," Object with properties to control Apple TV parallax effects."),(0,r.kt)("p",null,"enabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to 1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))))}b.isMDXComponent=!0}}]);