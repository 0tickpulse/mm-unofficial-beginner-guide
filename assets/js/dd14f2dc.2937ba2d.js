"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[894],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7366),r=(n(9496),n(9613));const a={sidebar_position:7},i="Our Second Mob",l={unversionedId:"Getting Started/Our Second Mob/index",id:"Getting Started/Our Second Mob/index",title:"Our Second Mob",description:"In the past few pages, we have been working on our Demonic Mage mob.",source:"@site/docs/Getting Started/Our Second Mob/index.mdx",sourceDirName:"Getting Started/Our Second Mob",slug:"/Getting Started/Our Second Mob/",permalink:"/mm-unofficial-beginner-guide/Getting Started/Our Second Mob/",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/main/docs/Getting Started/Our Second Mob/index.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Drop Tables",permalink:"/mm-unofficial-beginner-guide/Getting Started/Adding Drops to Our Mob/"},next:{title:"Factions and AI",permalink:"/mm-unofficial-beginner-guide/Getting Started/Factions and AI/"}},s={},u=[{value:"Creating the Mob",id:"creating-the-mob",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Full Code",id:"full-code",level:3}],c=(d="FileTree",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const p={toc:u},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"our-second-mob"},"Our Second Mob"),(0,r.kt)("p",null,"In the past few pages, we have been working on our Demonic Mage mob.\nWe gave it health, damage, equipment, options, a few abilities, and added custom drops to it.\nNow, we will be working on a second mob, the Royal Guard, and through the creation process, learn many more fundamental concepts of Mythic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Royal Guard",src:n(2213).Z,width:"1920",height:"1009"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The Demonic Mage ravaged the kingdom, and the Royal Guard was sent to stop it. The Royal Guard is a skilled fighter, and will not go down without a fight."))),(0,r.kt)("p",null,"This mob is more complex than the Demonic Mage. It:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switches between a sword and a bow depending on the distance between it and its target"),(0,r.kt)("li",{parentName:"ul"},"Attacks hostile enemies"),(0,r.kt)("li",{parentName:"ul"},"Randomly does a combo attack when attacking with a sword"),(0,r.kt)("li",{parentName:"ul"},"Shoots 3 arrows at once when attacking with a bow")),(0,r.kt)("h2",{id:"creating-the-mob"},"Creating the Mob"),(0,r.kt)("p",null,"Just like the Demonic Mage, we will create a mob file for the Royal Guard."),(0,r.kt)(c,{paths:["config.yml","defaultOpen:Mobs/ExampleMobs.yml","Mobs/DemonicMage.yml","Mobs/hl-add:RoyalGuard.yml","Skills/ExampleSkills.yml","Skills/DemonicMageSkills.yml","DropTables/ExampleDropTables.yml"],title:(0,r.kt)("h3",null,"MythicMobs folder"),mdxType:"FileTree"}),(0,r.kt)("p",null,"We will configure it with what we already know:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/Mobs/RoyalGuard.yml"',title:'"/plugins/MythicMobs/Mobs/RoyalGuard.yml"'},"RoyalGuard:\n  Type: SKELETON\n  Display: '&6\u2694 &7Royal Guard &6\u2694'\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - IRON_SWORD HAND\n  - IRON_HELMET HEAD\n  - IRON_CHESTPLATE CHEST\n  - IRON_LEGGINGS LEGS\n  - IRON_BOOTS FEET\n  KillMessages:\n  - <target.name> was killed by a Royal Guard\n")),(0,r.kt)("p",null,"If you don't know what some of these options do, you should revisit the previous pages."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This was a very short page, but we will be adding more to the Royal Guard in the next few pages."),(0,r.kt)("h3",{id:"full-code"},"Full Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/Mobs/RoyalGuard.yml"',title:'"/plugins/MythicMobs/Mobs/RoyalGuard.yml"'},"RoyalGuard:\n  Type: SKELETON\n  Display: '&6\u2694 &7Royal Guard &6\u2694'\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - IRON_SWORD HAND\n  - IRON_HELMET HEAD\n  - IRON_CHESTPLATE CHEST\n  - IRON_LEGGINGS LEGS\n  - IRON_BOOTS FEET\n  KillMessages:\n  - <target.name> was killed by a Royal Guard\n")))}b.isMDXComponent=!0},2213:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/royal-guard-dd587f61f888bcbeb472c0f20fcd883e.png"}}]);