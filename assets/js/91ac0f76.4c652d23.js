"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[961],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7366),o=(n(9496),n(9613));const i={sidebar_position:3},l="Your First Mob",r={unversionedId:"Getting Started/Your FIrst Mob/index",id:"Getting Started/Your FIrst Mob/index",title:"Your First Mob",description:"This page is a placeholder. It will be replaced with a proper tutorial soon.",source:"@site/docs/Getting Started/Your FIrst Mob/index.mdx",sourceDirName:"Getting Started/Your FIrst Mob",slug:"/Getting Started/Your FIrst Mob/",permalink:"/mm-unofficial-beginner-guide/Getting Started/Your FIrst Mob/",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/main/docs/Getting Started/Your FIrst Mob/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Text Editor",permalink:"/mm-unofficial-beginner-guide/Getting Started/Setting Up a Text Editor/"},next:{title:"Your First Skill",permalink:"/mm-unofficial-beginner-guide/Getting Started/Your First Skill/"}},s={},p=[{value:"What we are going to create",id:"what-we-are-going-to-create",level:2},{value:"Exploring the MythicMobs folder",id:"exploring-the-mythicmobs-folder",level:2},{value:"Creating the mob",id:"creating-the-mob",level:2},{value:"Does it work?",id:"does-it-work",level:2},{value:"Equipment",id:"equipment",level:2},{value:"Additional mob options",id:"additional-mob-options",level:2}],m=(d="FileTree",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:p},c="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-first-mob"},"Your First Mob"),(0,o.kt)("admonition",{title:"Placeholder page",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is a placeholder. It will be replaced with a proper tutorial soon.")),(0,o.kt)("admonition",{title:"Design Philosophy",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'The guide follows the philosophy of "learning by doing".\nBy learning through a real project, you will learn important concepts and will be able to practically apply them.\nTherefore, we are going to straight away start with creating a mob.')),(0,o.kt)("h2",{id:"what-we-are-going-to-create"},"What we are going to create"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The end product",src:n(294).Z,width:"814",height:"622"})),(0,o.kt)("p",null,"The mob we are going to create is called the Demonic Mage.\nIt is a mob with 100 health and has two attacks - a melee attack and a ranged attack.\nThe melee attack does 5 hearts of damage, and the ranged attack shoots a fireball.\nWhen it dies, it will explode and deal damage to nearby enemies.\nIt drops blaze powders and fire charges when killed."),(0,o.kt)("p",null,"If you're ready, let's get started! Make sure you have a server with MythicMobs installed along with VSCode."),(0,o.kt)("h2",{id:"exploring-the-mythicmobs-folder"},"Exploring the MythicMobs folder"),(0,o.kt)("p",null,"If you have MythicMobs installed, you should have a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"MythicMobs")," under your server's ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder.\nThis folder contains all the files that MythicMobs uses to run, and should contain a few folders and files, including:"),(0,o.kt)(m,{paths:["config.yml","Mobs/ExampleMobs.yml","..."],title:(0,o.kt)("h3",null,"MythicMobs folder"),mdxType:"FileTree"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml")," file contains all the settings for MythicMobs, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mobs")," folder contains all the mobs that MythicMobs will load.\nWe are going to create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"DemonicMage.yml")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mobs")," folder, and we will be creating our mob in this file."),(0,o.kt)("p",null,"So our file tree should now look like this:"),(0,o.kt)(m,{paths:["config.yml","defaultOpen:Mobs/ExampleMobs.yml","Mobs/hl-add:DemonicMage.yml","..."],title:(0,o.kt)("h3",null,"MythicMobs folder"),mdxType:"FileTree"}),(0,o.kt)("p",null,"Notice how the files end in ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," - this tells us that these files are in the YAML format."),(0,o.kt)("h2",{id:"creating-the-mob"},"Creating the mob"),(0,o.kt)("p",null,"We are going to create a mob now!\nOpen up the ",(0,o.kt)("inlineCode",{parentName:"p"},"DemonicMage.yml")," file we just made in VSCode, and paste the following code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n')),(0,o.kt)("p",null,"Let's go through this line by line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"DemonicMage:\n")),(0,o.kt)("p",null,"This is the internal ID of the mob. It is used to refer to the mob in other places, such as in commands and skills."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  Type: SKELETON\n")),(0,o.kt)("p",null,"Since MythicMobs is a plugin, it cannot actually create custom entity types, so we have to base our mob off an existing entity type.\nThis line tells MythicMobs to base our mob off the ",(0,o.kt)("inlineCode",{parentName:"p"},"SKELETON")," entity type.\nNotice how it is ",(0,o.kt)("strong",{parentName:"p"},"indented")," - this is important, as it tells MythicMobs that this line is a part of the mob."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n')),(0,o.kt)("p",null,"This line tells MythicMobs what the name of the mob should be.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"&4")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"&7")," are colorcodes, which tell MythicMobs to color the text red and grey respectively.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2620")," is a unicode character, which renders as a skull."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  Health: 100\n")),(0,o.kt)("p",null,"This line tells MythicMobs how much health the mob should have."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  Damage: 10\n")),(0,o.kt)("p",null,"This line tells MythicMobs how much damage the mob should deal when it attacks."),(0,o.kt)("h2",{id:"does-it-work"},"Does it work?"),(0,o.kt)("p",null,"Let's see if our mob works!"),(0,o.kt)("p",null,"Go to your server and type ",(0,o.kt)("inlineCode",{parentName:"p"},"/mm reload")," to reload all the mobs.\nThen, type ",(0,o.kt)("inlineCode",{parentName:"p"},"/mm mobs spawn DemonicMage")," to spawn the mob. If everything went well, you should see a skeleton named ",(0,o.kt)("code",null,(0,o.kt)("span",{style:{color:"#FF5555"}},"\u2620")," ",(0,o.kt)("span",{style:{color:"#AAAAAA"}},"Demonic Mage")," ",(0,o.kt)("span",{style:{color:"#FF5555"}},"\u2620"))," with 100 health and 10 damage."),(0,o.kt)("h2",{id:"equipment"},"Equipment"),(0,o.kt)("p",null,"Let's give our mob some equipment.\nWe will give it a set of leather armor and a blaze rod that represents its staff."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Equipment")," section of a mob tells MythicMobs what equipment the mob should have.\nTo specify the equipment, we use the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Equipment:\n- <item type> <slot>\n")),(0,o.kt)("p",null,"For example, to give our mob a leather helmet, we would use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Equipment:\n- LEATHER_HELMET HEAD\n")),(0,o.kt)("p",null,"With that in mind, let's give our mob some equipment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n')),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"/mm reload")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/mm mobs spawn DemonicMage")," again.\nYou should see a skeleton with a blaze rod in its hand and leather armor."),(0,o.kt)("h2",{id:"additional-mob-options"},"Additional mob options"),(0,o.kt)("p",null,"There are many more options that you can use to customize your mob.\nThese options go under an ",(0,o.kt)("inlineCode",{parentName:"p"},"Options")," section, and are used to customize the mob's behavior."),(0,o.kt)("p",null,"For example, we can make our mob not burn in sunlight by adding the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Options:\n  PreventSunburn: true\n")),(0,o.kt)("p",null,"We can make our mob move faster by adding the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Options:\n  PreventSunburn: true\n  # highlight-start\n  MovementSpeed: 0.5\n  # highlight-end\n")),(0,o.kt)("p",null,"Additionally, let's make the mob not drop the normal skeleton drops when it dies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Options:\n  PreventSunburn: true\n  MovementSpeed: 0.5\n  # highlight-start\n  PreventOtherDrops: true\n  # highlight-end\n")),(0,o.kt)("p",null,"Finally, lets make the mob immune to all knockback. We can do this by setting its knockback resistance to 1 (100%):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Options:\n  PreventSunburn: true\n  MovementSpeed: 0.5\n  PreventOtherDrops: true\n  # highlight-start\n  KnockbackResistance: 1\n  # highlight-end\n")),(0,o.kt)("p",null,"Let's put it all together:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n')))}h.isMDXComponent=!0},294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demonic-mage-ss-66fa3497ad343c408c8731f6af683629.png"}}]);