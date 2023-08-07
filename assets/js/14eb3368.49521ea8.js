"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[817],{3708:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7366),r=n(9496),i=n(5924),l=n(7507),c=n(3579),s=n(1702),o=n(156),m=n(4413),d=n(3682);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_gFVw"};function b(){const e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const g={breadcrumbsContainer:"breadcrumbsContainer_nYM3"};function v(e){let{children:t,href:n,isLast:a}=e;const i="breadcrumbs__link";return a?r.createElement("span",{className:i,itemProp:"name"},t):n?r.createElement(o.Z,{className:i,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:n,index:l,addMicrodata:c}=e;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,g.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(p,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:a},t.label))})))):null}},3254:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(9496),r=n(630),i=n(3579),l=n(3682),c=n(5924),s=n(156),o=n(4765),m=n(4413);const d={cardContainer:"cardContainer_WBBf",cardTitle:"cardTitle_a_Lq",cardDescription:"cardDescription_YGbf"};function u(e){let{href:t,children:n}=e;return a.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",d.cardContainer)},n)}function h(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",d.cardTitle),title:r},n," ",r),i&&a.createElement("p",{className:(0,c.Z)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return a.createElement(p,e);const r=(0,i.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(v,{item:e})))))}var f=n(3476),N=n(4068),Z=n(4334),_=n(3708),k=n(2314);const L={generatedIndexPage:"generatedIndexPage_sfnQ",list:"list_b3Qo",title:"title_u0tW"};function T(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:L.generatedIndexPage},a.createElement(N.Z,null),a.createElement(_.Z,null),a.createElement(Z.Z,null),a.createElement("header",null,a.createElement(k.Z,{as:"h1",className:L.title},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(E,{items:n.items,className:L.list})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(f.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function x(e){return a.createElement(a.Fragment,null,a.createElement(T,e),a.createElement(y,e))}},3476:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7366),r=n(9496),i=n(4413),l=n(5924),c=n(156);function s(e){const{permalink:t,title:n,subLabel:a,isNext:i}=e;return r.createElement(c.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function o(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(s,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4334:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9496),r=n(5924),i=n(4413),l=n(7507),c=n(5494);function s(e){let{className:t}=e;const n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4068:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(9496),r=n(5924),i=n(9902),l=n(156),c=n(4413),s=n(1874),o=n(7507),m=n(1512),d=n(5494);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:g}=(0,s.Jo)(c),v=u??(p=g).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:g.label,to:v.path,onClick:()=>d(g.name)})))}function v(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(g,{className:t,versionMetadata:n}):null}},2314:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7366),r=n(9496),i=n(5924),l=n(4413),c=n(4330),s=n(156);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_TJsk",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_EY1P"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}}}]);