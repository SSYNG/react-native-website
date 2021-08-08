"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2031],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return a?n.createElement(d,r(r({ref:t},p),{},{components:a})):n.createElement(d,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56537:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=a(25773),o=a(30808),i=(a(27378),a(35318)),r=["components"],s={id:"maintainers",title:"What to Expect from Maintainers"},l=void 0,u={unversionedId:"maintainers",id:"version-0.64/maintainers",isDocsHomePage:!1,title:"What to Expect from Maintainers",description:"So you have read through the contributor's guide and you're getting ready to send your first pull request. Perhaps you've found an issue in React Native and want to work with the maintainers to land a fix. Here's what you can expect to happen when you open an issue or send a pull request.",source:"@site/versioned_docs/version-0.64/maintainers.md",sourceDirName:".",slug:"/maintainers",permalink:"/docs/maintainers",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/maintainers.md",version:"0.64",lastUpdatedAt:1628418991,formattedLastUpdatedAt:"8/8/2021",frontMatter:{id:"maintainers",title:"What to Expect from Maintainers"}},p=[{value:"Handling Issues",id:"handling-issues",children:[{value:"New issue runbook",id:"new-issue-runbook",children:[]},{value:"Triaging issues",id:"triaging-issues",children:[]},{value:"Stale issues",id:"stale-issues",children:[]}]},{value:"Handling pull requests",id:"handling-pull-requests",children:[{value:"How we prioritize pull requests",id:"how-we-prioritize-pull-requests",children:[]},{value:"How we review pull requests",id:"how-we-review-pull-requests",children:[]},{value:"Closing pull requests",id:"closing-pull-requests",children:[]}]},{value:"Defusing situations",id:"defusing-situations",children:[]},{value:"Facebook GitHub Bot",id:"facebook-github-bot",children:[]}],h={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So you have read through the ",(0,i.kt)("a",{parentName:"p",href:"contributing.md"},"contributor's guide")," and you're getting ready to send your first pull request. Perhaps you've found an issue in React Native and want to work with the maintainers to land a fix. Here's what you can expect to happen when you open an issue or send a pull request."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The following is adapted from the excellent ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.guide/"},"Open Source Guide")," from GitHub and reflects how the maintainers of React Native are encouraged to handle your contributions.")),(0,i.kt)("h2",{id:"handling-issues"},"Handling Issues"),(0,i.kt)("p",null,"We see dozens of new issues being created every day. In order to help maintainers focus on what is actionable, maintainers ask contributors to do a bit of work prior to opening a new issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New issues should follow the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/master/.github/ISSUE_TEMPLATE.md"},"Issue Template"),"."),(0,i.kt)("li",{parentName:"ul"},"Issues should provide clear, easy to follow steps alongside sample code to reproduce the issue. Ideally, provide a ",(0,i.kt)("a",{parentName:"li",href:"http://snack.expo.io/"},"Snack"),".")),(0,i.kt)("p",null,"Issues that do not meet the above criteria can be closed immediately, with a link to the ",(0,i.kt)("a",{parentName:"p",href:"contributing.md"},"contributor's guide"),"."),(0,i.kt)("h3",{id:"new-issue-runbook"},"New issue runbook"),(0,i.kt)("p",null,"You have gathered all the information required to open a new issue, and you are confident it meets the ",(0,i.kt)("a",{parentName:"p",href:"contributing.md"},"contributor guidelines"),". Once you post an issue, this is what our maintainers will consider when deciding how to move forward:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is this issue a feature request?")),(0,i.kt)("p",{parentName:"li"},"Some features may not be a good fit for the core React Native library. This is usually the case for ","*",(0,i.kt)("em",{parentName:"p"},"new modules")," that Facebook does not use in production. In this case, a maintainer will explain that this should be released to npm as a separate module, allowing users to easily pull in the module in their projects."),(0,i.kt)("p",{parentName:"li"},"Even if the feature does belong in the core library, adding it means maintaining it. A maintainer will encourage you to submit a pull request or otherwise post your request to ",(0,i.kt)("a",{parentName:"p",href:"https://react-native.canny.io/feature-requests"},"Canny"),"."),(0,i.kt)("p",{parentName:"li"},"An exception can be made for proposals and long-running discussions, though these should be rare. If you have been contributing to the project long enough, you will probably already have access to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.facebook.com/groups/reactnativeoss/"},"React Native Core Contributors")," Facebook Group, where this sort of discussion is usually held.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is this issue a request for help?")),(0,i.kt)("p",{parentName:"li"},"Questions should absolutely be asked on Stack Overflow rather than GitHub. Maintainers should encourage contributors to ask on Stack Overflow, before closing the issue. Feel free to also answer some ",(0,i.kt)("a",{parentName:"p",href:"stackoverflow.com/questions/tagged/react-native"},"questions on Stack Overflow"),", you'll get rep!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Was the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/facebook/react-native/blob/master/.github/ISSUE_TEMPLATE.md"},"Issue Template")," used to fill out the issue? Did the author answer Yes to both questions at the top?")),(0,i.kt)("p",{parentName:"li"},"If not, the maintainer will ask you to provide more information by filling out the issue template, then they will close the issue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is the issue a duplicate of an existing, open issue?")),(0,i.kt)("p",{parentName:"li"},"A maintainer will add a comment, ",(0,i.kt)("inlineCode",{parentName:"p"},"Duplicate of #123"),", which will mark the issue as a duplicate of issue #123. They will then close the issue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Does the issue include a Snack or list of steps to reproduce the issue?")),(0,i.kt)("p",{parentName:"li"},"Issues should be relatively easy to reproduce. Sometimes the issue affects a particular app but a minimal repro is not provided, perhaps a crash is seen in the logs and the author is not sure where its coming from, maybe the issue is sporadic."),(0,i.kt)("p",{parentName:"li"},"As it happens, if a maintainer cannot easily reproduce the issue, one cannot reasonably expect them to be able to work on a fix. The maintainer will let you know this is the case, and your issue will be closed."),(0,i.kt)("p",{parentName:"li"},"Exceptions can be made if multiple people appear to be affected by the issue, especially right after a new React Native release is cut.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is the issue for an old release of React Native?")),(0,i.kt)("p",{parentName:"li"},"If so, expect to be asked if the issue can be reproduced in the latest release candidate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Can the issue be reliably reproduced?")),(0,i.kt)("p",{parentName:"li"},"Transient issues or issues that only occur on a specific project but a minimum repro is not provided may be closed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Does the issue need more information?")),(0,i.kt)("p",{parentName:"li"},"Some issues need additional information in order to reproduce them. Maintainers should explain what additional information is needed, after adding the 'Needs more information' label."),(0,i.kt)("p",{parentName:"li"},"Issues with the 'Needs more information' label that have been open for more than a week without a response from the author can be closed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Has the issue been resolved already in the comments?")),(0,i.kt)("p",{parentName:"li"},"Sometimes another contributor has already provided a solution in the comments. Maintainers may close the issue in this case."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Reopening a closed issue:")," Sometimes it's necessary to reopen an issue. For example, if an issue was closed waiting for the author, then the author replied and it turns out this is indeed a bug, maintainers can reopen the issue.")),(0,i.kt)("p",null,"Valid bug reports with good repro steps are some of the best issues! Maintainers should thank the author for finding the issue, then explain that React Native is a community project and ",(0,i.kt)("strong",{parentName:"p"},"ask them if they would be up for sending a fix"),"."),(0,i.kt)("h3",{id:"triaging-issues"},"Triaging issues"),(0,i.kt)("p",null,"If a issue is still open after going through all of the checks above, it will move on to the triage stage. A maintainer will then do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add relevant labels."),(0,i.kt)("li",{parentName:"ol"},"Leave a comment saying the issue has been triaged."),(0,i.kt)("li",{parentName:"ol"},"Tag the relevant people.")),(0,i.kt)("p",null,"You can generally figure out who may be relevant for a given issue by looking at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/.github/CODEOWNERS"},"CODEOWNERS")," file."),(0,i.kt)("h3",{id:"stale-issues"},"Stale issues"),(0,i.kt)("p",null,'Issues in the "Needs more information" state may be closed after a week with no followup from the author. Issues that have have had no activity in the last two months may be closed periodically. If your issue gets closed in this manner, it\'s nothing personal. If you strongly believe that the issue should remain open, just let us know why.'),(0,i.kt)("p",null,"Simply commenting that the issue still exists is not very compelling (it's rare for critical, release blocking issues to have no activity for two months!). In order to make a good case for reopening the issue, you may need to do a bit of work:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can the issue be reproduced on the latest release candidate? Post a comment with the version you tested."),(0,i.kt)("li",{parentName:"ul"},"If so, is there any information missing from the bug report? Post a comment with all the information required by the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/master/.github/ISSUE_TEMPLATE.md"},"issue template"),"."),(0,i.kt)("li",{parentName:"ul"},"Is there a pull request that addressed this issue? Post a comment with the PR number so we can follow up.")),(0,i.kt)("p",null,"A couple of contributors making a good case may be all that is needed to reopen the issue."),(0,i.kt)("h2",{id:"handling-pull-requests"},"Handling pull requests"),(0,i.kt)("p",null,"The core team will be monitoring for pull requests. When we get one, we'll run some Facebook-specific integration tests on it first. From here, we'll need to get another person to sign off on the changes and then merge the pull request. For API changes we may need to fix internal uses, which could cause some delay. We'll do our best to provide updates and feedback throughout the process."),(0,i.kt)("h3",{id:"how-we-prioritize-pull-requests"},"How we prioritize pull requests"),(0,i.kt)("p",null,"We use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hzoo/contributors-on-github"},"Contributors Chrome extension")," to help us understand who is sending a pull request. Pull requests opened by contributors that have a history of having their PRs merged are more likely to be looked at first. Aside from that, we try to go through pull requests on a chronological order."),(0,i.kt)("h3",{id:"how-we-review-pull-requests"},"How we review pull requests"),(0,i.kt)("p",null,"Reviewing a PR can sometimes require more time from a maintainer than it took you to write the code. Maintainers need to consider all the ramifications of importing your patch into the codebase. Does it potentially introduce breaking changes? What are the performance considerations of adding a new dependency? Will the docs need to be updated as well? Does this belong in core, or would it be a better fit as a third party package?"),(0,i.kt)("p",null,"Once you open a pull request, this is how you can expect maintainers to review it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is the pull request missing information?")),(0,i.kt)("p",{parentName:"li"},"A test plan is required! Add the labels 'Needs revision' and 'Needs response from author'. You can then follow up with a response like:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Hey @author, thanks for sending the pull request. Can you please add all the info specified in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/.github/PULL_REQUEST_TEMPLATE.md"},"template"),"? This is necessary for people to be able to understand and review your pull request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Does the code style match the ",(0,i.kt)("a",{parentName:"strong",href:"contributing.md#style-guide"},"Style guide"),"?")),(0,i.kt)("p",{parentName:"li"},"If not, link to the style guide and add the label 'Needs revision'.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Does the pull request add a completely new feature we don't want to add to the core and maintain?")),(0,i.kt)("p",{parentName:"li"},"Ask the author to release it a separate npm module and close the pull request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Does the pull request do several unrelated things at the same time?")),(0,i.kt)("p",{parentName:"li"},"Ask the author to split it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is the pull request old and need rebasing?")),(0,i.kt)("p",{parentName:"li"},"Ask the author \"Can you rebase please?\" and add the label 'Needs response from author'.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is a pull request waiting for a response from author?")),(0,i.kt)("p",{parentName:"li"},"Pull requests like these usually have the label 'Needs response from author'. If there has been no reply in the last 30 days, close it with a response like the following:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Thanks for making the pull request, but we are closing it due to inactivity. If you want to get your proposed changes merged, please rebase your branch with master and send a new pull request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Is the pull request old and waiting for review?")),(0,i.kt)("p",{parentName:"li"},"Review it or cc someone who might be able to review. Finding the right person to review a pull request can sometimes be tricky. A pull request may simultaneously touch iOS, Java, and JavaScript code. If a pull request has been waiting for review for a while, you can help out by looking at the blame history for the files you're touching. Is there anyone that appears to be knowledgeable in the part of the codebase the PR is touching?"))),(0,i.kt)("h3",{id:"closing-pull-requests"},"Closing pull requests"),(0,i.kt)("p",null,"Sometimes a maintainer may decide that a pull request will not be accepted. Maybe the pull request is out of scope for the project, or the idea is good but the implementation is poor. Whatever the reason, when closing a pull request maintainers should keep the conversation friendly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Thank")," them for their contribution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Explain why")," it doesn't fit into the scope of the project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Link to relevant documentation"),", if you have it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Close")," the request.")),(0,i.kt)("h2",{id:"defusing-situations"},"Defusing situations"),(0,i.kt)("p",null,"Sometimes when a maintainer says no to a pull request or close an issue, a contributor may get upset and criticize your decision. Maintainers will take steps to defuse the situation."),(0,i.kt)("p",null,"If a contributor becomes hostile or disrespectful, they will be referred to the ",(0,i.kt)("a",{parentName:"p",href:"https://code.facebook.com/codeofconduct"},"Code of Conduct"),". Negative users will be blocked, and inappropriate comments will be deleted."),(0,i.kt)("h2",{id:"facebook-github-bot"},"Facebook GitHub Bot"),(0,i.kt)("p",null,"The Facebook GitHub Bot was used to allow members of the community to perform administrative actions such as labeling and closing issues. The bot is no longer necessary, as maintainers will be granted the necessary permissions to manage issues. If you are interested in maintaining the repo, please reach out to H\xe9ctor Ramos (@hramos) on GitHub."))}c.isMDXComponent=!0}}]);