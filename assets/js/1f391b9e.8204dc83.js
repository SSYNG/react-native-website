"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13085],{66200:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(52685),l=n(1244),i=n(27378),s=n(38944),c=n(92373),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function o(e){var a=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,N=e.minHeadingLevel,f=e.maxHeadingLevel,g=(0,l.Z)(e,r),_=(0,c.LU)(),k=null!=N?N:_.tableOfContents.minHeadingLevel,C=null!=f?f:_.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:C}}),[d,u,k,C]);return(0,c.Si)(h),i.createElement(m,(0,t.Z)({toc:p,className:s,linkClassName:d},g))}var d="tableOfContents_rbnR",v=["className"];var u=function(e){var a=e.className,n=(0,l.Z)(e,v);return i.createElement("div",{className:(0,s.Z)(d,"thin-scrollbar",a)},i.createElement(o,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})),i.createElement("div",{className:"wwads-cn wwads-vertical","data-id":"58",style:{maxWidth:200,marginTop:20}}))}},18916:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(27378),l=n(38944),i=n(33708),s=n(35318),c=n(45232),r=n(66200),m=n(92373),o="mdxPageWrapper_X-9I";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,N=n.wrapperClassName,f=n.hide_table_of_contents,g=d.permalink;return t.createElement(i.Z,{title:v,description:u,permalink:g,wrapperClassName:null!=N?N:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(s.Zo,{components:c.Z},t.createElement(a,null))),!f&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}}}]);