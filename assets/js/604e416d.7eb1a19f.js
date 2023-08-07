"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[54],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7877:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9496),a=r(5924);const o={tabItem:"tabItem_yKlX"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},1594:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7366),a=r(9496),o=r(5924),i=r(5056),l=r(3442),s=r(37),u=r(6454),c=r(6195);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var v=r(6477);const g={tabList:"tabList_mpJr",tabItem:"tabItem_YRS4"};function y(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},3305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7366),a=(r(9496),r(9613));r(1594),r(7877);const o={sidebar_position:1},i="Setting Up a Server",l={unversionedId:"Getting Started/Setting Up a Server",id:"Getting Started/Setting Up a Server",title:"Setting Up a Server",description:"In order to learn Mythic, you will need a server to test everything on. This page will teach you how to set up a server that is hosted on your own computer.",source:"@site/docs/Getting Started/Setting Up a Server.mdx",sourceDirName:"Getting Started",slug:"/Getting Started/Setting Up a Server",permalink:"/mm-unofficial-beginner-guide/Getting Started/Setting Up a Server",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/main/docs/Getting Started/Setting Up a Server.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/mm-unofficial-beginner-guide/category/getting-started"},next:{title:"Setting Up a Text Editor",permalink:"/mm-unofficial-beginner-guide/Getting Started/Setting Up a Text Editor"}},s={},u=[{value:"<code>localhost</code> servers",id:"localhost-servers",level:2},{value:"Setting up a server",id:"setting-up-a-server-1",level:2},{value:"Downloading Java",id:"downloading-java",level:3},{value:"Setting up a folder",id:"setting-up-a-folder",level:3},{value:"Downloading a server jar",id:"downloading-a-server-jar",level:3},{value:"Creating a server launch script",id:"creating-a-server-launch-script",level:3},{value:"EULA",id:"eula",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Giving yourself OP",id:"giving-yourself-op",level:3},{value:"Conclusion",id:"conclusion",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("ServerCmdGenerator"),d=c("FileTree"),h={toc:u},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-server"},"Setting Up a Server"),(0,a.kt)("p",null,"In order to learn Mythic, you will need a server to test everything on. This page will teach you how to set up a server that is hosted on your own computer."),(0,a.kt)("h2",{id:"localhost-servers"},(0,a.kt)("inlineCode",{parentName:"h2"},"localhost")," servers"),(0,a.kt)("p",null,"When you connect to a server, you join using an IP address, a unique identifier for every computer on the internet. ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," is simply a special IP that refers to your own computer. In Minecraft, you can connect to a server by typing in ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," as the server address to connect to your own server."),(0,a.kt)("p",null,"Localhost servers are great for testing things out but are unsuitable for public use. To make your server public, you will need to portforward. Portforwarding is not covered in this guide, but here is another ",(0,a.kt)("a",{parentName:"p",href:"https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/"},"guide")," that you can follow."),(0,a.kt)("h2",{id:"setting-up-a-server-1"},"Setting up a server"),(0,a.kt)("h3",{id:"downloading-java"},"Downloading Java"),(0,a.kt)("p",null,"In order to run a Minecraft server, you will need to download Java. Most machines already have Java installed. You can check if you have Java installed by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,a.kt)("p",null,"If you see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'java version "17.0.2" 2022-01-18 LTS\nJava(TM) SE Runtime Environment (build 17.0.2+8-LTS-86)\nJava HotSpot(TM) 64-Bit Server VM (build 17.0.2+8-LTS-86, mixed mode, sharing)\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that the version of Java you have installed is Java 17. Don't use newer versions of Java.")),(0,a.kt)("p",null,"Then you have Java installed. If you see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash: java: command not found\n")),(0,a.kt)("p",null,"Then you do not have Java installed. PaperMC has a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.papermc.io/misc/java-install"},"guide")," on how to do this."),(0,a.kt)("h3",{id:"setting-up-a-folder"},"Setting up a folder"),(0,a.kt)("p",null,"Create a folder somewhere on your computer (preferably not the Downloads folder as some machines automatically delete files in the Downloads folder after a while) and name it whatever you want. This folder will contain all the files for your server."),(0,a.kt)("h3",{id:"downloading-a-server-jar"},"Downloading a server jar"),(0,a.kt)("p",null,"Server jars are the files that contain the internal code for the server. You can download the latest PaperMC server jar ",(0,a.kt)("a",{parentName:"p",href:"https://papermc.io/downloads"},"here"),"."),(0,a.kt)("admonition",{title:"Other server jars",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Many other server jars exist, such as Spigot, CraftBukkit, Sponge, etc. However, most of them do not function well."),(0,a.kt)("p",{parentName:"admonition"},"Lower forks of PaperMC, such as Spigot, lack the functionality and performance of PaperMC which Mythic relies on, and Sponge is a completely different system that is not compatible with Mythic."),(0,a.kt)("p",{parentName:"admonition"},"Higher forks of PaperMC, such as Purpur and Airplane, work in most cases, but no guarantees can be made. If you encounter any issues, please replicate them on PaperMC before reporting them."),(0,a.kt)("p",{parentName:"admonition"},"Cross-forks that enable compatibility with Mods, such as Mohist, fundamentally change the way the server works and are not compatible with most plugins.\nYou might be able to get Mythic to work on these forks but no support will be provided.")),(0,a.kt)("p",null,"Place the server jar in the folder you created earlier, and rename it to ",(0,a.kt)("inlineCode",{parentName:"p"},"server.jar")," for convenience."),(0,a.kt)("h3",{id:"creating-a-server-launch-script"},"Creating a server launch script"),(0,a.kt)("p",null,"To launch your server, you will have to type in a command into the terminal. However, typing in the command every time you want to launch the server is tedious. Instead, you can create a script that will run the command for you."),(0,a.kt)(p,{mdxType:"ServerCmdGenerator"}),(0,a.kt)("h3",{id:"eula"},"EULA"),(0,a.kt)("p",null,"Double click on the script you created earlier to launch the server.\nThe server should start up and create a bunch of files in the folder you created earlier:"),(0,a.kt)(d,{paths:["cache/mojang_1.20.1.jar","libraries/...","logs/latest.log","plugins/","versions/1.20.1/paper-1.20.1.jar","highlight:eula.txt","server.jar","server.properties"],mdxType:"FileTree"}),(0,a.kt)("p",null,"The one you want to look out for is ",(0,a.kt)("inlineCode",{parentName:"p"},"eula.txt"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.minecraft.net/en-us/eula/"},"Minecraft EULA")," is a legal document that you must agree to before you can run a Minecraft server.\nTo agree to the EULA, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"eula.txt")," file and change ",(0,a.kt)("inlineCode",{parentName:"p"},"eula=false")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"eula=true"),"."),(0,a.kt)("p",null,"Now that you have agreed to the EULA, you can run the server again. If everything went well, you should see this message in the terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[Server thread/INFO]: Done (x.xxxs)! For help, type "help"\n')),(0,a.kt)("p",null,"Furthermore, there should be more files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder:"),(0,a.kt)(d,{paths:["cache/mojang_1.20.1.jar","config/paper-global.yml","config/paper-world-defaults.yml","libraries/...","logs/latest.log","plugins/bStats/config.yml","versions/1.20.1/paper-1.20.1.jar","world/...","world_nether/...","world_the_end/...","banned-ips.json","banned-players.json","bukkit.yml","commands.yml","eula.txt","help.yml","ops.json","permissions.yml","server.jar","server.properties","spigot.yml","usercache.json","version_history.json","whitelist.json"],mdxType:"FileTree"}),(0,a.kt)("p",null,"You can ignore most of these files for now, but the ones you should pay attention to are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server.properties")," - This file contains a lot of important settings for your server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"plugins")," - This folder contains all the plugins on your server.")),(0,a.kt)("p",null,"Congratulations! You have successfully set up a server!\nThis terminal window is now your server console, which you can use to run commands and view logs."),(0,a.kt)("h3",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"As explained in ",(0,a.kt)("a",{parentName:"p",href:"/Background%20Information/"},"Background Information"),", plugins are things that change how the server works.\nPlugins are usually distributed as ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," files, which you can download from the internet.\nTo install a plugin, simply place the ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," folder in your server folder."),(0,a.kt)("p",null,"In this case, we will install ",(0,a.kt)("a",{parentName:"p",href:"https://mythiccraft.io/index.php?pages/official-mythicmobs-download/"},"Mythic"),"."),(0,a.kt)("p",null,"Note that every time you install or uninstall a plugin, you will have to restart the server.\nSo restart your server again, and this time, connect to it using your Minecraft client."),(0,a.kt)("h3",{id:"giving-yourself-op"},"Giving yourself OP"),(0,a.kt)("p",null,"OP is a special permission that allows you to do anything on the server.\nIt's handy for testing things out, but you should never give OP to anyone else.\nGiven that this is a localhost test server, it's fine to give yourself OP so you don't have to manually manage your permissions."),(0,a.kt)("p",null,"To give yourself OP on your server, go back to the console and type in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"op <your username>\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<your username>")," with your Minecraft username.\nYou can now use any command on the server."),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congratulations! You have successfully set up a local Minecraft testing server, and you have installed Mythic on it.\nYou can now start learning how to use Mythic and create your first mob."))}f.isMDXComponent=!0}}]);