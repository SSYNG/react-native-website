"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[75396],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(v,c(c({ref:t},p),{},{components:a})):r.createElement(v,c({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<n;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>v,toc:()=>h});var r=a(35318),o=Object.defineProperty,n=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&p(e,a,t[a]);return e};const u={id:"architecture-glossary",title:"\u672f\u8bed\u8868"},m=void 0,v={unversionedId:"architecture-glossary",id:"version-0.68/architecture-glossary",title:"\u672f\u8bed\u8868",description:"Fabric \u6e32\u67d3\u5668\uff08Fabric Renderer\uff09",source:"@site/versioned_docs/version-0.68/glossary.md",sourceDirName:".",slug:"/architecture-glossary",permalink:"/docs/0.68/architecture-glossary",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/glossary.md",tags:[],version:"0.68",frontMatter:{id:"architecture-glossary",title:"\u672f\u8bed\u8868"},sidebar:"\u67b6\u6784",previous:{title:"\u7ebf\u7a0b\u6a21\u578b",permalink:"/docs/0.68/threading-model"}},f={},h=[{value:"Fabric \u6e32\u67d3\u5668\uff08Fabric Renderer\uff09",id:"fabric-\u6e32\u67d3\u5668fabric-renderer",level:2},{value:"\u5bbf\u4e3b\u5e73\u53f0\uff08Host platform\uff09",id:"\u5bbf\u4e3b\u5e73\u53f0host-platform",level:2},{value:"\u5bbf\u4e3b\u89c6\u56fe\u6811\uff08Host View Tree\uff09",id:"\u5bbf\u4e3b\u89c6\u56fe\u6811host-view-tree",level:2},{value:"JavaScript Interfaces (JSI)",id:"javascript-interfaces-jsi",level:2},{value:"Java Native Interface (JNI)",id:"java-native-interface-jni",level:2},{value:"React \u7ec4\u4ef6\uff08React Component\uff09",id:"react-\u7ec4\u4ef6react-component",level:2},{value:"React \u590d\u5408\u7ec4\u4ef6\uff08React Composite Components\uff09",id:"react-\u590d\u5408\u7ec4\u4ef6react-composite-components",level:2},{value:"React \u5bbf\u4e3b\u7ec4\u4ef6\uff08React Host Components or Host Components\uff09",id:"react-\u5bbf\u4e3b\u7ec4\u4ef6react-host-components-or-host-components",level:2},{value:"React \u5143\u7d20\u6811\uff08React Element Trees\uff09",id:"react-\u5143\u7d20\u6811react-element-trees",level:2},{value:"React \u5f71\u5b50\u6811\uff08React Shadow Tree and React Shadow Node)",id:"react-\u5f71\u5b50\u6811react-shadow-tree-and-react-shadow-node",level:2},{value:"Yoga \u6811\uff08\u4ee5\u53ca Yoga \u8282\u70b9\uff09",id:"yoga-\u6811\u4ee5\u53ca-yoga-\u8282\u70b9",level:2}],b={toc:h};function y(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),p),n(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",d({},{id:"fabric-\u6e32\u67d3\u5668fabric-renderer"}),"Fabric \u6e32\u67d3\u5668\uff08Fabric Renderer\uff09"),(0,r.kt)("p",null,"React Native \u6267\u884c\u7684 React \u6846\u67b6\u4ee3\u7801\uff0c\u548c React \u5728 Web \u4e2d\u6267\u884c\u4ee3\u7801\u662f\u540c\u4e00\u4efd\u3002\u4f46\u662f\uff0cReact Native \u6e32\u67d3\u7684\u662f\u901a\u7528\u5e73\u53f0\u89c6\u56fe\uff08\u5bbf\u4e3b\u89c6\u56fe\uff09\u800c\u4e0d\u662f DOM \u8282\u70b9\uff08\u53ef\u4ee5\u8ba4\u4e3a DOM \u662f Web \u7684\u5bbf\u4e3b\u89c6\u56fe\uff09\u3002 Fabric \u6e32\u67d3\u5668\u4f7f\u5f97\u6e32\u67d3\u5bbf\u4e3b\u89c6\u56fe\u53d8\u5f97\u53ef\u884c\u3002Fabric \u8ba9 React \u4e0e\u5404\u4e2a\u5e73\u53f0\u76f4\u63a5\u901a\u4fe1\u5e76\u7ba1\u7406\u5176\u5bbf\u4e3b\u89c6\u56fe\u5b9e\u4f8b\u3002 Fabric \u6e32\u67d3\u5668\u5b58\u5728\u4e8e JavaScript \u4e2d\uff0c\u5e76\u4e14\u5b83\u8c03\u7528\u7684\u662f\u7531 C++ \u4ee3\u7801\u66b4\u9732\u7684\u63a5\u53e3\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u6709\u66f4\u591a\u5173\u4e8e React \u6e32\u67d3\u5668\u7684\u4fe1\u606f\u3002"),(0,r.kt)("h2",d({},{id:"\u5bbf\u4e3b\u5e73\u53f0host-platform"}),"\u5bbf\u4e3b\u5e73\u53f0\uff08Host platform\uff09"),(0,r.kt)("p",null,"React Native \u5d4c\u5165\u7684\u5e73\u53f0\uff0c\u6bd4\u5982 Android\u3001iOS\u3001Windows\u3001macOS\u3002"),(0,r.kt)("h2",d({},{id:"\u5bbf\u4e3b\u89c6\u56fe\u6811host-view-tree"}),"\u5bbf\u4e3b\u89c6\u56fe\u6811\uff08Host View Tree\uff09"),(0,r.kt)("p",null,"\u5bbf\u4e3b\u89c6\u56fe\u6811\u5c31\u662f\u4e00\u7cfb\u5217\u7684\u5bbf\u4e3b\u89c6\u56fe\u3002\u5bbf\u4e3b\u5e73\u53f0\u6709 Android \u5e73\u53f0\u3001iOS \u5e73\u53f0\u7b49\u7b49\u3002\u5728 Android \u4e0a\uff0c\u5bbf\u4e3b\u89c6\u56fe\u5c31\u662f android.view.ViewGroup\u5b9e\u4f8b\u3001 android.widget.TextView\u5b9e\u4f8b\u7b49\u7b49\u3002\u5bbf\u4e3b\u89c6\u56fe\u5c31\u50cf\u79ef\u6728\u4e00\u6837\u5730\u6784\u6210\u4e86\u5bbf\u4e3b\u89c6\u56fe\u6811\u3002\u6bcf\u4e2a\u5bbf\u4e3b\u89c6\u56fe\u7684\u5927\u5c0f\u548c\u5750\u6807\u4f4d\u7f6e\u57fa\u4e8e\u7684\u662f LayoutMetrics\uff0c\u800c  LayoutMetrics\u662f\u901a\u8fc7\u5e03\u5c40\u5f15\u64ce Yoga \u8ba1\u7b97\u51fa\u6765\u7684\u3002\u5bbf\u4e3b\u89c6\u56fe\u7684\u6837\u5f0f\u548c\u5185\u5bb9\u4fe1\u606f\uff0c\u662f\u4ece React \u5f71\u5b50\u6811\u4e2d\u5f97\u5230\u7684\u3002"),(0,r.kt)("h2",d({},{id:"javascript-interfaces-jsi"}),"JavaScript Interfaces (JSI)"),(0,r.kt)("p",null,"\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 API\uff0c\u7ed9\u5728 C++ \u5e94\u7528\u4e2d\u5d4c\u5165\u7684 JavaScript \u5f15\u64ce\u7528\u7684\u3002Fabric \u4f7f\u7528\u5b83\u5728 Fabric \u7684 C++ \u6838\u5fc3\u548c React \u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002"),(0,r.kt)("h2",d({},{id:"java-native-interface-jni"}),"Java Native Interface (JNI)"),(0,r.kt)("p",null,"Java Native Interface (JNI)\uff1a\u4e00\u4e2a\u7528 Java \u5199\u7684 ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jni/"}),"API"),"\uff0c\u7528\u4e8e\u5728 Java \u4e2d\u5199 native(\u8bd1\u6ce8\uff1a\u6307\u8c03\u7528 C++) \u65b9\u6cd5\u3002\u4f5c\u7528\u662f\u5b9e\u73b0 Fabric \u7684 C++ \u6838\u5fc3\u548c Android \u7684\u901a\u4fe1\u3002"),(0,r.kt)("h2",d({},{id:"react-\u7ec4\u4ef6react-component"}),"React \u7ec4\u4ef6\uff08React Component\uff09"),(0,r.kt)("p",null,"React \u7ec4\u4ef6\u5c31\u662f JavaScript \u51fd\u6570\u6216\u8005\u7c7b\uff0c\u63cf\u8ff0\u5982\u4f55\u521b\u5efa React \u5143\u7d20\u3002",(0,r.kt)("a",d({parentName:"p"},{href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"}),"Read more about React components, elements in this blog post.")),(0,r.kt)("h2",d({},{id:"react-\u590d\u5408\u7ec4\u4ef6react-composite-components"}),"React \u590d\u5408\u7ec4\u4ef6\uff08React Composite Components\uff09"),(0,r.kt)("p",null,"React \u7ec4\u4ef6\u7684 render \u65b9\u6cd5\u4e2d\uff0c\u5305\u62ec\u5176\u4ed6 React \u590d\u5408\u7ec4\u4ef6\u548c React \u5bbf\u4e3b\u7ec4\u4ef6\u3002\uff08\u8bd1\u6ce8\uff1a\u590d\u5408\u7ec4\u4ef6\u5c31\u662f\u5f00\u53d1\u8005\u58f0\u660e\u7684\u7ec4\u4ef6\uff09"),(0,r.kt)("h2",d({},{id:"react-\u5bbf\u4e3b\u7ec4\u4ef6react-host-components-or-host-components"}),"React \u5bbf\u4e3b\u7ec4\u4ef6\uff08React Host Components or Host Components\uff09"),(0,r.kt)("p",null,"React \u7ec4\u4ef6\u7684\u89c6\u56fe\u662f\u901a\u8fc7\u5bbf\u4e3b\u89c6\u56fe\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"<View>"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"<Text>"),"\uff0c\u5b9e\u73b0\u7684\u3002\u5728 Web \u4e2d\uff0cReactDOM \u7684\u5bbf\u4e3b\u7ec4\u4ef6\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>"),"\u6807\u7b7e\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),"\u6807\u7b7e\u4ee3\u8868\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",d({},{id:"react-\u5143\u7d20\u6811react-element-trees"}),"React \u5143\u7d20\u6811\uff08React Element Trees\uff09"),(0,r.kt)("p",null,"React \u5143\u7d20\u6811\u662f\u901a\u8fc7 JavaScript \u4e2d\u7684 React \u521b\u5efa\u7684\uff0c\u8be5\u6811\u7531\u4e00\u7cfb\u7c7b React \u5143\u7d20\u7ec4\u6210\u3002\u4e00\u4e2a React \u5143\u7d20\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684 JavaScript \u5bf9\u8c61\uff0c\u5b83\u63cf\u8ff0\u4e86\u5e94\u8be5\u5728\u5c4f\u5e55\u4e2d\u5c55\u793a\u4ec0\u4e48\u3002\u4e00\u4e2a\u5143\u7d20\u5305\u62ec\u5c5e\u6027 props\u3001\u6837\u5f0f styles\u3001\u5b50\u5143\u7d20 children\u3002React \u5143\u7d20\u5206\u4e3a\u4e24\u7c7b\uff1aReact \u590d\u5408\u7ec4\u4ef6\u5b9e\u4f8b\uff08React Composite Components\uff09\u548c React \u5bbf\u4e3b\u7ec4\u4ef6\uff08React Host Components\uff09\u5b9e\u4f8b\uff0c\u5e76\u4e14\u5b83\u53ea\u5b58\u5728\u4e8e JavaScript \u4e2d\u3002"),(0,r.kt)("h2",d({},{id:"react-\u5f71\u5b50\u6811react-shadow-tree-and-react-shadow-node"}),"React \u5f71\u5b50\u6811\uff08React Shadow Tree and React Shadow Node)"),(0,r.kt)("p",null,"React \u5f71\u5b50\u6811\u662f\u901a\u8fc7 Fabric \u6e32\u67d3\u5668\u521b\u5efa\u7684\uff0c\u6811\u7531\u4e00\u7cfb\u5217 React \u5f71\u5b50\u8282\u70b9\u7ec4\u6210\u3002\u4e00\u4e2a React \u5f71\u5b50\u8282\u70b9\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4ee3\u8868\u4e00\u4e2a\u5df2\u7ecf\u6302\u8f7d\u7684 React \u5bbf\u4e3b\u7ec4\u4ef6\uff0c\u5176\u5305\u542b\u7684\u5c5e\u6027 props \u6765\u81ea JavaScript\u3002\u5b83\u4e5f\u5305\u62ec\u5e03\u5c40\u4fe1\u606f\uff0c\u6bd4\u5982\u5750\u6807\u7cfb x\u3001y\uff0c\u5bbd\u9ad8 width\u3001height\u3002\u5728\u65b0\u6e32\u67d3\u5668 Fabric \u4e2d\uff0cReact \u5f71\u5b50\u8282\u70b9\u5bf9\u8c61\u53ea\u5b58\u5728\u4e8e C++ \u4e2d\u3002\u800c\u5728\u8001\u67b6\u6784\u4e2d\uff0c\u5b83\u5b58\u5728\u4e8e\u624b\u673a\u8fd0\u884c\u65f6\u7684\u5806\u6808\u4e2d\uff0c\u6bd4\u5982 Android \u7684 JVM\u3002"),(0,r.kt)("h2",d({},{id:"yoga-\u6811\u4ee5\u53ca-yoga-\u8282\u70b9"}),"Yoga \u6811\uff08\u4ee5\u53ca Yoga \u8282\u70b9\uff09"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Yoga Tree")," is used by ",(0,r.kt)("a",d({parentName:"p"},{href:"https://yogalayout.com/"}),"Yoga")," to calculate layout information for a React Shadow Tree. Each React Shadow Node typically creates a ",(0,r.kt)("em",{parentName:"p"},"Yoga Node")," because React Native employs Yoga to calculate layout. However, this is not a hard requirement. Fabric can also create React Shadow Nodes that do not use Yoga; the implementation of each React Shadow Node determines how to calculate layout."))}y.isMDXComponent=!0}}]);