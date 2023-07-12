"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[817],{20:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7366),r=n(9496),i=n(5924),l=n(2937),c=n(9738),s=n(1355),o=n(480),m=n(7598),d=n(5150);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_Ml2K"};function b(){const e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_f2Gu"};function g(e){let{children:t,href:n,isLast:a}=e;const i="breadcrumbs__link";return a?r.createElement("span",{className:i,itemProp:"name"},t):n?r.createElement(o.Z,{className:i,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:n,index:l,addMicrodata:c}=e;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(p,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:a},t.label))})))):null}},8432:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(9496),r=n(6137),i=n(9738),l=n(5150),c=n(5924),s=n(480),o=n(9051),m=n(7598);const d={cardContainer:"cardContainer_YgLW",cardTitle:"cardTitle_vC3h",cardDescription:"cardDescription_r15x"};function u(e){let{href:t,children:n}=e;return a.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",d.cardContainer)},n)}function h(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",d.cardTitle),title:r},n," ",r),i&&a.createElement("p",{className:(0,c.Z)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(v,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return a.createElement(p,e);const r=(0,i.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:e})))))}var f=n(6861),N=n(4547),Z=n(1220),_=n(20),k=n(3012);const L={generatedIndexPage:"generatedIndexPage_MoLb",list:"list_c5f2",title:"title_vvQp"};function T(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function x(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement("div",{className:L.generatedIndexPage},a.createElement(N.Z,null),a.createElement(_.Z,null),a.createElement(Z.Z,null),a.createElement("header",null,a.createElement(k.Z,{as:"h1",className:L.title},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(E,{items:n.items,className:L.list})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(f.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function y(e){return a.createElement(a.Fragment,null,a.createElement(T,e),a.createElement(x,e))}},6861:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7366),r=n(9496),i=n(7598),l=n(5924),c=n(480);function s(e){const{permalink:t,title:n,subLabel:a,isNext:i}=e;return r.createElement(c.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function o(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(s,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},1220:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9496),r=n(5924),i=n(7598),l=n(2937),c=n(3852);function s(e){let{className:t}=e;const n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4547:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(9496),r=n(5924),i=n(8321),l=n(480),c=n(7598),s=n(3004),o=n(2937),m=n(6735),d=n(3852);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,s.Jo)(c),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},3012:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7366),r=n(9496),i=n(5924),l=n(7598),c=n(4035),s=n(480);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_UwF2",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_YxQw"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}}}]);