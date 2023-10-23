"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[119],{9613:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(9496);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||l;return i?n.createElement(m,a(a({ref:t},u),{},{components:i})):n.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3902:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=i(7366),r=i(9496),l=i(9613);const a={sidebar_position:4},o="Your First Skill",s={unversionedId:"Getting Started/Your First Skill/index",id:"Getting Started/Your First Skill/index",title:"Your First Skill",description:"If you followed the previous page, you should have a mob that can move around and attack, but it's still pretty boring - it doesn't have custom abilities.",source:"@site/docs/Getting Started/Your First Skill/index.mdx",sourceDirName:"Getting Started/Your First Skill",slug:"/Getting Started/Your First Skill/",permalink:"/mm-unofficial-beginner-guide/Getting Started/Your First Skill/",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/main/docs/Getting Started/Your First Skill/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Your First Mob",permalink:"/mm-unofficial-beginner-guide/Getting Started/Your FIrst Mob/"},next:{title:"A Fireball Skill",permalink:"/mm-unofficial-beginner-guide/Getting Started/A Fireball Skill/"}},c={},u=[{value:"How skills work",id:"how-skills-work",level:2},{value:"The Mechanic",id:"the-mechanic",level:3},{value:"The Targeter",id:"the-targeter",level:3},{value:"The Trigger",id:"the-trigger",level:3},{value:"Adding it to the mob",id:"adding-it-to-the-mob",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Quiz",id:"quiz",level:3},{value:"Full Code",id:"full-code",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},h=p("QuizGrid"),d=p("Quiz"),m={toc:u},k="wrapper";function f(e){let{components:t,...i}=e;return(0,l.kt)(k,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"your-first-skill"},"Your First Skill"),(0,l.kt)("p",null,"If you followed the previous page, you should have a mob that can move around and attack, but it's still pretty boring - it doesn't have ",(0,l.kt)("em",{parentName:"p"},"custom")," abilities.\nMythic provides us with a powerful tool to create custom abilities for our mobs: ",(0,l.kt)("strong",{parentName:"p"},"skills"),".\nSkills are the bread and butter of MythicMobs, and are what makes MythicMobs so powerful and distinct from other mob plugins."),(0,l.kt)("h2",{id:"how-skills-work"},"How skills work"),(0,l.kt)("p",null,"Skills are the actions that mobs can perform. They can be used to do a variety of things, such as spawning other mobs, shooting projectiles, or even just playing a sound.\nLet's add a skill to our mob that will make it play some ambient particles on itself. The skill looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"effect:particles{p=flame;hS=0.25;vS=0.5;amount=10} @selfLocation{yoffset=1} ~onTimer:5\n")),(0,l.kt)("p",null,"Don't worry if it looks intimidating - we'll go over what each part of this skill does."),(0,l.kt)("h3",{id:"the-mechanic"},"The Mechanic"),(0,l.kt)("p",null,"The first part of the skill is ",(0,l.kt)("inlineCode",{parentName:"p"},"effect:particles{p=flame;hS=0.25;vS=0.5;amount=10}"),".\nThis is the ",(0,l.kt)("em",{parentName:"p"},"Mechanic")," of the skill. It's what the skill actually does. In this case, it's showing some particles.\nThe things inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," are called ",(0,l.kt)("em",{parentName:"p"},"fields"),", and they are used to configure the Mechanic."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p=flame")," - This is the particle type. In this case, it's a flame particle."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hS=0.25")," - This is the horizontal spread of the particles."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vS=0.5")," - This is the vertical spread of the particles."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"amount=10")," - This is the number of particles to show.")),(0,l.kt)("p",null,"With these fields, we can configure the particles to our liking."),(0,l.kt)("h3",{id:"the-targeter"},"The Targeter"),(0,l.kt)("p",null,"The next part of the skill is ",(0,l.kt)("inlineCode",{parentName:"p"},"@selfLocation{yoffset=1}"),".\nLooking at the ",(0,l.kt)("inlineCode",{parentName:"p"},"@")," in the beginning, this is the ",(0,l.kt)("em",{parentName:"p"},"Targeter")," of the skill. It's what the skill will be performed on. In this case, it's the mob's location.\nOnce again, we have fields inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),". These fields are used to configure the Targeter.\nIn this case, we're using the ",(0,l.kt)("inlineCode",{parentName:"p"},"yoffset")," field to offset the Targeter's location by 1 block in the y direction."),(0,l.kt)("h3",{id:"the-trigger"},"The Trigger"),(0,l.kt)("p",null,"The last part of the skill is ",(0,l.kt)("inlineCode",{parentName:"p"},"~onTimer:5"),".\nThis is the ",(0,l.kt)("em",{parentName:"p"},"Trigger")," of the skill. It's what causes the skill to be performed. In this case, it's a timer Trigger - the skill will fire on a set interval.\nYou can tell it's a Trigger because it starts with a ",(0,l.kt)("inlineCode",{parentName:"p"},"~"),".\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," is the interval of the timer, in ticks. There are 20 ticks in a second, so this skill will fire every 0.25 seconds."),(0,l.kt)("h2",{id:"adding-it-to-the-mob"},"Adding it to the mob"),(0,l.kt)("p",null,"Now that we have our skill, we need to add it on the mob so that it knows to actually use the skill.\nWe do this by adding it to the mob's ",(0,l.kt)("inlineCode",{parentName:"p"},"Skills")," list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n  # highlight-start\n  Skills:\n  - effect:particles{p=flame;hS=0.25;vS=0.5;amount=10} @selfLocation{yoffset=1} ~onTimer:5\n  # highlight-end\n')),(0,l.kt)("p",null,"Now, reload MythicMobs and spawn the mob. You should see some particles coming from the mob."),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Congratulations! You've just created your first skill. Skills are an important part of MythicMobs, and you'll be using them a lot.\nIn the next page, we'll create a much more complex skill, so below is a quick quiz to make sure you understand the basics of skills."),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)(h,{mdxType:"QuizGrid"},(0,l.kt)(d,{question:"What dictates when a skill is performed?",answers:["The Mechanic","The Targeter","The Trigger"],correctAnswer:2,explanation:(0,l.kt)(r.Fragment,null,"The Trigger tells the skill when to fire, and is prefixed with a tilde (",(0,l.kt)("code",null,"~"),")."),mdxType:"Quiz"}),(0,l.kt)(d,{question:"What does the targeter do?",answers:["It tells the skill what to perform on","It tells the skill when to perform","It tells the skill how to perform"],correctAnswer:0,explanation:(0,l.kt)(r.Fragment,null,"The Targeter tells the skill what to perform on, and is prefixed with an at sign (",(0,l.kt)("code",null,"@"),")."),mdxType:"Quiz"}),(0,l.kt)(d,{question:(0,l.kt)(r.Fragment,null,"What does the ",(0,l.kt)("code",null,"p")," field in the ",(0,l.kt)("code",null,"effect:particles")," mechanic do?"),answers:["It sets the particle type","It sets the horizontal spread","It sets the vertical spread"],correctAnswer:0,explanation:(0,l.kt)(r.Fragment,null,"The ",(0,l.kt)("code",null,"p")," field sets the particle type."),mdxType:"Quiz"})),(0,l.kt)("h3",{id:"full-code"},"Full Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/plugins/MythicMobs/mobs/DemonicMage.yml"',title:'"/plugins/MythicMobs/mobs/DemonicMage.yml"'},'DemonicMage:\n  Type: SKELETON\n  Display: "&4\u2620 &7Demonic Mage &4\u2620"\n  Health: 100\n  Damage: 10\n  Options:\n    MovementSpeed: 0.3\n    PreventOtherDrops: true\n    PreventSunburn: true\n    KnockbackResistance: 1\n  Equipment:\n  - BLAZE_ROD HAND\n  - LEATHER_HELMET HEAD\n  - LEATHER_CHESTPLATE CHEST\n  - LEATHER_LEGGINGS LEGS\n  - LEATHER_BOOTS FEET\n  Skills:\n  - effect:particles{p=flame;hS=0.25;vS=0.5;amount=10} @selfLocation{yoffset=1} ~onTimer:5\n')))}f.isMDXComponent=!0}}]);