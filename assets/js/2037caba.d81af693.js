"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[368],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7366),r=(n(9496),n(9613));const o={sidebar_position:2},i="Background Information",s={unversionedId:"Background Information",id:"Background Information",title:"Background Information",description:"What is Mythic?",source:"@site/docs/Background Information.md",sourceDirName:".",slug:"/Background Information",permalink:"/mm-unofficial-beginner-guide/Background Information",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/master/docs/Background Information.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/mm-unofficial-beginner-guide/"},next:{title:"Getting Started",permalink:"/mm-unofficial-beginner-guide/category/getting-started"}},l={},c=[{value:"What is Mythic?",id:"what-is-mythic",level:2},{value:"Is a plugin a mod?",id:"is-a-plugin-a-mod",level:3},{value:"Example Mythic code",id:"example-mythic-code",level:3},{value:"What does Mythic consist of?",id:"what-does-mythic-consist-of",level:3}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"background-information"},"Background Information"),(0,r.kt)("h2",{id:"what-is-mythic"},"What is Mythic?"),(0,r.kt)("p",null,"Mythic is a suite of plugins developed by MythicCraft, focused on providing an immersive RPG experience to your players. ",(0,r.kt)("em",{parentName:"p"},"However, you do not even need to have an RPG server to make huge use of it!")),(0,r.kt)("h3",{id:"is-a-plugin-a-mod"},"Is a plugin a mod?"),(0,r.kt)("p",null,"A plugin is ",(0,r.kt)("em",{parentName:"p"},"like")," a mod, but for servers. They modify the server's code and change how they work. This also means that clients (players) do not have to worry about installing mods."),(0,r.kt)("p",null,"If you have played Minecraft for a long time, you would know that there are things called mods. These are things that modify Minecraft's code. However, mods are different from plugins."),(0,r.kt)("p",null,"Plugins modify the server and only the server. They cannot modify the client. However, mods can modify both the server and the client. The advantage plugins have here is that only servers need plugins - clients can just log on without needing to use anything. The disadvantage is that since plugins cannot directly modify Minecraft's code, they have to adhere to many restrictions that Mojang has set."),(0,r.kt)("h3",{id:"example-mythic-code"},"Example Mythic code"),(0,r.kt)("p",null,"Here is an example ",(0,r.kt)("em",{parentName:"p"},"mob")," made in Mythic (+Mobs):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'WanderingAdventurer:\n  Type: ZOMBIE\n  Health: 20\n  Damage: 2\n  Display: "Wandering Adventurer"\n  Equipment:\n    - IRON_SWORD HAND\n  Skills:\n    - heal{amount=5} @Self ~onTimer:200\n')),(0,r.kt)("p",null,"This is a mob called the Wandering Adventurer. Its base mob is a Zombie, it holds an Iron Sword in its hand, and heals itself every 10 seconds."),(0,r.kt)("h3",{id:"what-does-mythic-consist-of"},"What does Mythic consist of?"),(0,r.kt)("p",null,"Mythic consists of multiple plugins. The main one is named Mythic (+Mobs) or MythicMobs, as it comes with the core for Mythic, and a system to create mobs using the core system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Plugin"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mythic (+Mobs)"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The main Mythic plugin. The "Mythic" part of the plugin is the core of Mythic. It contains all the essential code that the other plugins rely on. The "Mobs" part of the plugin allows for complete control over mobs in your server. By combining these, you can make mage zombies that shoot fireballs, friendly skeletons, buffed endermen, custom drops, etc.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ModelEngine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ModelEngine is a plugin that allows you to add custom models to mobs. Mobs with models look modded and can add a flair to your server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MythicCrucible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MythicCrucible is a plugin that expands on Mythic's items. It adds custom furniture, backpacks, custom blocks, and more!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MythicEnchants"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add custom enchants to your server using the powerful Mythic Skill system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MythicDungeons"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create instanced dungeons in your server with mobs, bosses, custom loot, mechanics, and more!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MythicScript (Upcoming as of 10 July 2023)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use Mythic's skill system to its full potential and expand beyond just mobs and items. You can fundamentally change the way your server works by hooking into Bukkit events and using Mythic's skill system.")))))}u.isMDXComponent=!0}}]);