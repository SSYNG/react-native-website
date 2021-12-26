"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[19148],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(a),h=o,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7221:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=a(52685),o=a(1244),r=(a(27378),a(35318)),i=["components"],c={id:"glossary",title:"\u672f\u8bed\u8868"},s=void 0,l={unversionedId:"glossary",id:"glossary",title:"\u672f\u8bed\u8868",description:"Fabric \u6e32\u67d3\u5668(Fabric Renderer)",source:"@site/../cndocs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/next/glossary",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/glossary.md",tags:[],version:"current",frontMatter:{id:"glossary",title:"\u672f\u8bed\u8868"},sidebar:"\u67b6\u6784",previous:{title:"\u7ebf\u7a0b\u6a21\u578b",permalink:"/docs/next/threading-model"}},d=[{value:"Fabric \u6e32\u67d3\u5668(Fabric Renderer)",id:"fabric-\u6e32\u67d3\u5668fabric-renderer",children:[],level:2},{value:"Host platform",id:"host-platform",children:[],level:2},{value:"Host View Tree (and Host View)",id:"host-view-tree-and-host-view",children:[],level:2},{value:"JavaScript Interfaces (JSI)",id:"javascript-interfaces-jsi",children:[],level:2},{value:"Java Native Interface (JNI)",id:"java-native-interface-jni",children:[],level:2},{value:"React Component",id:"react-component",children:[],level:2},{value:"React Composite Components",id:"react-composite-components",children:[],level:2},{value:"React Host Components or Host Components",id:"react-host-components-or-host-components",children:[],level:2},{value:"React Element Tree (and React Element)",id:"react-element-tree-and-react-element",children:[],level:2},{value:"React Shadow Tree (and React Shadow Node)",id:"react-shadow-tree-and-react-shadow-node",children:[],level:2},{value:"Yoga Tree (and Yoga Node)",id:"yoga-tree-and-yoga-node",children:[],level:2}],p={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fabric-\u6e32\u67d3\u5668fabric-renderer"},"Fabric \u6e32\u67d3\u5668(Fabric Renderer)"),(0,r.kt)("p",null,"React Native executes the same React framework code as React for the web. However, React Native renders to general platform views (host views) instead of DOM nodes (which can be considered web\u2019s host views). Rendering to host views is made possible by the Fabric Renderer. Fabric lets React talk to each platform and manage its host view instances. The Fabric Renderer exists in JavaScript and targets interfaces made available by C++ code. ",(0,r.kt)("a",{parentName:"p",href:"https://overreacted.io/react-as-a-ui-runtime/#renderers"},"Read more about React renderers in this blog post.")),(0,r.kt)("h2",{id:"host-platform"},"Host platform"),(0,r.kt)("p",null,"The platform embedding React Native (e.g., Android, iOS, Windows, macOS)."),(0,r.kt)("h2",{id:"host-view-tree-and-host-view"},"Host View Tree (and Host View)"),(0,r.kt)("p",null,"Tree representation of views in the host platform (e.g. Android, iOS). On Android, the host views are instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"android.view.ViewGroup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"android.widget.TextView"),", etc. which are the building blocks of the host view tree. The size and location of each host view are based on ",(0,r.kt)("inlineCode",{parentName:"p"},"LayoutMetrics")," calculated with Yoga, and the style and content of each host view are based on information from the React Shadow Tree."),(0,r.kt)("h2",{id:"javascript-interfaces-jsi"},"JavaScript Interfaces (JSI)"),(0,r.kt)("p",null,"A lightweight API to embed a JavaScript engine in a C++ application. Fabric uses it to communicate between Fabric\u2019s C++ core and React."),(0,r.kt)("h2",{id:"java-native-interface-jni"},"Java Native Interface (JNI)"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jni/"},"API for to write Java native methods"),"used to communicate between Fabric\u2019s C++ core and Android, written in Java."),(0,r.kt)("h2",{id:"react-component"},"React Component"),(0,r.kt)("p",null,"A JavaScript function or class that instructs how to create a React Element. ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"Read more about React components, elements in this blog post.")),(0,r.kt)("h2",{id:"react-composite-components"},"React Composite Components"),(0,r.kt)("p",null,"React Components with ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," implementations that reduce to other React Composite Components or React Host Components."),(0,r.kt)("h2",{id:"react-host-components-or-host-components"},"React Host Components or Host Components"),(0,r.kt)("p",null,"React Components whose view implementation is provided by a host view (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"<View>, <Text>")," ). On the Web, ReactDOM's Host components would be components like ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),"."),(0,r.kt)("h2",{id:"react-element-tree-and-react-element"},"React Element Tree (and React Element)"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"React Element Tree")," is created by React in JavaScript and consists of React Elements. A ",(0,r.kt)("em",{parentName:"p"},"React Element")," is a plain JavaScript object that describes what should appear on the screen. It includes props, styles, and children. React Elements only exist in JavaScript and can represent instantiations of either React Composite Components or React Host Components. ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"Read more about React components and elements in this blog post.")),(0,r.kt)("h2",{id:"react-shadow-tree-and-react-shadow-node"},"React Shadow Tree (and React Shadow Node)"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"React Shadow Tree")," is created by the Fabric Renderer and consists of React Shadow Nodes. A React Shadow Node is an object that represents a React Host Component to be mounted, and contains props that originate from JavaScript. They also contain layout information (x, y, width, height). In Fabric, React Shadow Node objects exist in C++. Before Fabric, these existed in the mobile runtime heap (e.g. Android JVM)."),(0,r.kt)("h2",{id:"yoga-tree-and-yoga-node"},"Yoga Tree (and Yoga Node)"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Yoga Tree")," is used by ",(0,r.kt)("a",{parentName:"p",href:"https://yogalayout.com/"},"Yoga")," to calculate layout information for a React Shadow Tree. Each React Shadow Node typically creates a ",(0,r.kt)("em",{parentName:"p"},"Yoga Node")," because React Native employs Yoga to calculate layout. However, this is not a hard requirement. Fabric can also create React Shadow Nodes that do not use Yoga; the implementation of each React Shadow Node determines how to calculate layout."))}m.isMDXComponent=!0}}]);