"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[66282],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76527:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=a(52685),l=a(1244),r=(a(27378),a(35318)),i=["components"],o={id:"animatedvaluexy",title:"Animated.ValueXY"},s=void 0,u={unversionedId:"animatedvaluexy",id:"version-0.65/animatedvaluexy",title:"Animated.ValueXY",description:"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal Animated.Value, but multiplexed. Contains two regular Animated.Values under the hood.",source:"@site/versioned_docs/version-0.65/animatedvaluexy.md",sourceDirName:".",slug:"/animatedvaluexy",permalink:"/docs/0.65/animatedvaluexy",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/animatedvaluexy.md",tags:[],version:"0.65",frontMatter:{id:"animatedvaluexy",title:"Animated.ValueXY"},sidebar:"version-0.65/api",previous:{title:"Animated.Value",permalink:"/docs/0.65/animatedvalue"},next:{title:"Appearance",permalink:"/docs/0.65/appearance"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[],level:3},{value:"<code>setOffset()</code>",id:"setoffset",children:[],level:3},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[],level:3},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[],level:3},{value:"<code>addListener()</code>",id:"addlistener",children:[],level:3},{value:"<code>removeListener()</code>",id:"removelistener",children:[],level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[],level:3},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[],level:3},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[],level:3},{value:"<code>getLayout()</code>",id:"getlayout",children:[],level:3},{value:"<code>getTranslateTransform()</code>",id:"gettranslatetransform",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.65/animatedvalue"},(0,r.kt)("inlineCode",{parentName:"a"},"Animated.Value")),", but multiplexed. Contains two regular ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.Value"),"s under the hood."),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("div",{className:"snack-player","data-snack-name":"Animated.ValueXY","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20PanResponder%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20DraggableView%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%0A%0A%20%20const%20panResponder%20%3D%20PanResponder.create(%7B%0A%20%20%20%20onStartShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%0A%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20dx%3A%20pan.x%2C%20%2F%2F%20x%2Cy%20are%20Animated.Value%0A%20%20%20%20%20%20%20%20dy%3A%20pan.y%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Animated.spring(%0A%20%20%20%20%20%20%20%20pan%2C%20%2F%2F%20Auto-multiplexed%0A%20%20%20%20%20%20%20%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D%20%2F%2F%20Back%20to%20zero%0A%20%20%20%20%20%20).start()%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bpan.getLayout()%2C%20styles.box%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20width%3A%2080%2C%0A%20%20%20%20height%3A%2080%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DraggableView%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"setvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"setValue()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"setValue(value);\n")),(0,r.kt)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setoffset"},(0,r.kt)("inlineCode",{parentName:"h3"},"setOffset()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"setOffset(offset);\n")),(0,r.kt)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flattenoffset"},(0,r.kt)("inlineCode",{parentName:"h3"},"flattenOffset()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"flattenOffset();\n")),(0,r.kt)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extractoffset"},(0,r.kt)("inlineCode",{parentName:"h3"},"extractOffset()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"extractOffset();\n")),(0,r.kt)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"addListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"addListener(callback);\n")),(0,r.kt)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),(0,r.kt)("p",null,"Returns a string that serves as an identifier for the listener."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"The callback function which will receive an object with a ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removelistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeListener()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"removeListener(id);\n")),(0,r.kt)("p",null,"Unregister a listener. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"addListener()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"Id for the listener being removed.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removealllisteners"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"removeAllListeners();\n")),(0,r.kt)("p",null,"Remove all registered listeners."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stopanimation"},(0,r.kt)("inlineCode",{parentName:"h3"},"stopAnimation()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"stopAnimation([callback]);\n")),(0,r.kt)("p",null,"Stops any running animation or tracking. ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will receive the final value.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resetanimation"},(0,r.kt)("inlineCode",{parentName:"h3"},"resetAnimation()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"resetAnimation([callback]);\n")),(0,r.kt)("p",null,"Stops any animation and resets the value to its original."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will receive the original value.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlayout"},(0,r.kt)("inlineCode",{parentName:"h3"},"getLayout()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"getLayout();\n")),(0,r.kt)("p",null,"Converts ",(0,r.kt)("inlineCode",{parentName:"p"},"{x, y}")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"{left, top}")," for use in style, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"style={this.state.anim.getLayout()}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettranslatetransform"},(0,r.kt)("inlineCode",{parentName:"h3"},"getTranslateTransform()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"getTranslateTransform();\n")),(0,r.kt)("p",null,"Converts ",(0,r.kt)("inlineCode",{parentName:"p"},"{x, y}")," into a useable translation transform, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n")))}m.isMDXComponent=!0}}]);