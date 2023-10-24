"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[566],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,b=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7366),r=n(9496),i=n(9613);const a={sidebar_position:6},l="Drop Tables",s={unversionedId:"Getting Started/Adding Drops to Our Mob/index",id:"Getting Started/Adding Drops to Our Mob/index",title:"Drop Tables",description:"We are now going to configure the drops for our mob.",source:"@site/docs/Getting Started/Adding Drops to Our Mob/index.mdx",sourceDirName:"Getting Started/Adding Drops to Our Mob",slug:"/Getting Started/Adding Drops to Our Mob/",permalink:"/mm-unofficial-beginner-guide/Getting Started/Adding Drops to Our Mob/",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/main/docs/Getting Started/Adding Drops to Our Mob/index.mdx",tags:[],version:"current",lastUpdatedBy:"0TickPulse",lastUpdatedAt:1698082513,formattedLastUpdatedAt:"Oct 23, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"A Fireball Skill",permalink:"/mm-unofficial-beginner-guide/Getting Started/A Fireball Skill/"},next:{title:"Our Second Mob",permalink:"/mm-unofficial-beginner-guide/Getting Started/Our Second Mob/"}},p={},c=[{value:"Drop Tables",id:"drop-tables-1",level:2},{value:"Additional capabilities",id:"additional-capabilities",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Quiz",id:"quiz",level:3},{value:"Full Code",id:"full-code",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=d("DropGenerator"),u=d("FileTree"),b=d("QuizGrid"),g=d("Quiz"),h={toc:c},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drop-tables"},"Drop Tables"),(0,i.kt)("p",null,"We are now going to configure the drops for our mob.\nMythicMobs allows us to configure the mob's drops in a very flexible and powerful way."),(0,i.kt)("p",null,"We will start by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"Drops")," section to our mob's configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/Mobs/DemonicMage.yml"',title:'"/plugins/MythicMobs/Mobs/DemonicMage.yml"'},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n  Skills:\n  - effect:particles{p=flame;hS=0.25;vS=0.5;amount=10} @selfLocation{yoffset=1} ~onTimer:5\n  - skill{skill=DemonicMageFireball} ~onTimer:20 0.5\n  # highlight-start\n  Drops:\n  - ...\n  # highlight-end\n')),(0,i.kt)("p",null,"We will add our drops to this section in the form of a YAML list.\nEach entry in the list will represent a single drop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"Drops:\n- blaze_powder 3-5 0.5\n")),(0,i.kt)("p",null,"Let's break this down into its components."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blaze_powder")," is the item that will be dropped."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3-5")," is the amount of items that will be dropped. This will be a random number between 3 and 5."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0.5")," is the chance that this drop will occur. This will be a 50% chance.")),(0,i.kt)("p",null,"We can add as many drops as we want to this list."),(0,i.kt)("p",null,"Here is a generator for a simple drop:"),(0,i.kt)(m,{mdxType:"DropGenerator"}),(0,i.kt)("h2",{id:"drop-tables-1"},"Drop Tables"),(0,i.kt)("p",null,"The above drop format is very simple, but its capabilities are limited.\nTo make full use of MythicMobs' drop system, we will need to use drop tables."),(0,i.kt)("p",null,"Let's go back to our MythicMobs folder, which should now look similar to the following structure below.\nWe will now visit a new folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"DropTables"),":"),(0,i.kt)(u,{paths:["config.yml","Mobs/ExampleMobs.yml","Mobs/DemonicMage.yml","Skills/ExampleSkills.yml","Skills/DemonicMageSkills.yml","defaultOpen,hl-add:DropTables/ExampleDropTables.yml"],title:(0,i.kt)("h3",null,"MythicMobs folder"),mdxType:"FileTree"}),(0,i.kt)("p",null,"We will create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"DemonicMageDrops.yml")," in this folder."),(0,i.kt)("p",null,"The format of a drop table is very similar to the format of a skill:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"',title:'"/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"'},"DemonicMageDrops:\n  Drops:\n  - blaze_powder 3-5 0.5\n  - fire_charge 1-2 0.2\n")),(0,i.kt)("p",null,"Let's break this down into its components.\nLike a skill config or a mob config, the drop table has an ID at the top.\nThe actual drops are defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Drops")," section."),(0,i.kt)("p",null,"This allows for us to group our drops into different drop tables, and then reference them in our mob configs.\nIn this case, let's add it to our mob configuration.\nTo do so, add a new drop like you would normally, except instead of writing the item, simply write the ID of the drop table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/Mobs/DemonicMage.yml"',title:'"/plugins/MythicMobs/Mobs/DemonicMage.yml"'},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n  Skills:\n  - effect:particles{p=flame;hS=0.25;vS=0.5;amount=10} @selfLocation{yoffset=1} ~onTimer:5\n  - skill{skill=DemonicMageFireball} ~onTimer:20 0.5\n  Drops:\n  - DemonicMageDrops\n')),(0,i.kt)("p",null,"Nice! Now our mob will drop the items defined in the drop table."),(0,i.kt)("h2",{id:"additional-capabilities"},"Additional capabilities"),(0,i.kt)("p",null,"Besides grouping drops, drop tables have a few other capabilities that we will look into.\nFor example, we want to make our mob only drop ",(0,i.kt)("em",{parentName:"p"},"either")," a blaze powder ",(0,i.kt)("em",{parentName:"p"},"or")," a fire charge, but never both.\nWe can do that by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"TotalItems")," option to our drop table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"',title:'"/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"'},"DemonicMageDrops:\n  TotalItems: 1\n  Drops:\n  - blaze_powder 3-5 0.5\n  - fire_charge 1-2 0.2\n")),(0,i.kt)("p",null,"In addition, we want to make our mob's drops scale on the player's luck.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"BonusLuckItems")," option allows us to add a random amount of items to the drop table, based on the player's luck."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"',title:'"/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"'},"DemonicMageDrops:\n  TotalItems: 1\n  BonusLuckItems: 1\n  Drops:\n  - blaze_powder 3-5 0.5\n  - fire_charge 1-2 0.2\n")),(0,i.kt)("p",null,"In this case, if the player has, for example, 3 luck, the drop table will drop 6-8 blaze powder or 4-5 fire charges."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Not only have we removed the default drops from our mob, but we have also added a drop table that allows us to drop multiple items at once, and scale it based on the player's luck.\nHaving a drop table also allows us to easily reuse the drops in other mobs, and makes it easier to maintain our drops."),(0,i.kt)("h3",{id:"quiz"},"Quiz"),(0,i.kt)(b,{mdxType:"QuizGrid"},(0,i.kt)(g,{question:"What is the correct format for a drop?",answers:[(0,i.kt)("code",null,"<item> <amount> <chance>"),(0,i.kt)("code",null,"<item> <chance> <amount>"),(0,i.kt)("code",null,"<amount> <item> <chance>"),(0,i.kt)("code",null,"<amount> <chance> <item>")],correctAnswer:0,explanation:(0,i.kt)(r.Fragment,null,"The correct format is ",(0,i.kt)("code",null,"<item> <amount> <chance>"),". The item is the item that will be dropped, the amount is the amount of items that will be dropped, and the chance is the chance that this drop will occur."),mdxType:"Quiz"}),(0,i.kt)(g,{question:"Why do we use drop tables instead of just adding the drops to the mob?",answers:["They perform better than inline drops.","They enable grouping and other functionalities.","Inline drops are deprecated.","They are supported by more versions of MythicMobs."],correctAnswer:1,explanation:(0,i.kt)(r.Fragment,null,"Drop tables enable grouping and other advanced functionalities such as scaling drops based on the player's luck."),mdxType:"Quiz"})),(0,i.kt)("h3",{id:"full-code"},"Full Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/Mobs/DemonicMage.yml"',title:'"/plugins/MythicMobs/Mobs/DemonicMage.yml"'},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n  Skills:\n  - effect:particles{p=flame;hS=0.25;vS=0.5;amount=10} @selfLocation{yoffset=1} ~onTimer:5\n  - skill{skill=DemonicMageFireball} ~onTimer:20 0.5\n  Drops:\n  - DemonicMageDrops\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"',title:'"/plugins/MythicMobs/DropTables/DemonicMageDrops.yml"'},"DemonicMageDrops:\n  TotalItems: 1\n  BonusLuckItems: 1\n  Drops:\n  - blaze_powder 3-5 0.5\n  - fire_charge 1-2 0.2\n")))}y.isMDXComponent=!0}}]);