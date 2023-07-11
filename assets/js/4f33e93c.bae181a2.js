"use strict";(self.webpackChunkmm_unofficial_beginner_guide=self.webpackChunkmm_unofficial_beginner_guide||[]).push([[195],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7366),i=(n(9496),n(9613));const o={sidebar_position:2},r="Setting Up a Text Editor",l={unversionedId:"Getting Started/Setting Up a Text Editor",id:"Getting Started/Setting Up a Text Editor",title:"Setting Up a Text Editor",description:"This page is missing a lot of videos/screenshots for now. I will add them soon.",source:"@site/docs/Getting Started/Setting Up a Text Editor.mdx",sourceDirName:"Getting Started",slug:"/Getting Started/Setting Up a Text Editor",permalink:"/mm-unofficial-beginner-guide/Getting Started/Setting Up a Text Editor",draft:!1,editUrl:"https://github.com/0tickpulse/mm-unofficial-beginner-guide/edit/main/docs/Getting Started/Setting Up a Text Editor.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Server",permalink:"/mm-unofficial-beginner-guide/Getting Started/Setting Up a Server"},next:{title:"Your First Mob",permalink:"/mm-unofficial-beginner-guide/Getting Started/Your First Mob"}},s={},d=[{value:"What is a Text Editor?",id:"what-is-a-text-editor",level:2},{value:"Choosing and Downloading your Text Editor",id:"choosing-and-downloading-your-text-editor",level:2},{value:"Installing the Extension",id:"installing-the-extension",level:3},{value:"Setting up your Text Editor",id:"setting-up-your-text-editor",level:2},{value:"Opening a Folder",id:"opening-a-folder",level:3},{value:"Using the integrated Terminal",id:"using-the-integrated-terminal",level:3},{value:"Learning the Basics",id:"learning-the-basics",level:3},{value:"The File Explorer",id:"the-file-explorer",level:4},{value:"Find and Replace",id:"find-and-replace",level:4},{value:"The Command Palette",id:"the-command-palette",level:4},{value:"Diagnostics",id:"diagnostics",level:4},{value:"Formatting",id:"formatting",level:4},{value:"YAML",id:"yaml",level:2},{value:"Comments",id:"comments",level:3},{value:"Keys and Values",id:"keys-and-values",level:3},{value:"Lists",id:"lists",level:3},{value:"Other Basic Data Types",id:"other-basic-data-types",level:3},{value:"Basic Example",id:"basic-example",level:3}],u=(p="Quiz",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const m={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-text-editor"},"Setting Up a Text Editor"),(0,i.kt)("admonition",{title:"This page is a work in progress",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This page is missing a lot of videos/screenshots for now. I will add them soon.")),(0,i.kt)("p",null,"Minecraft Server Development is very configuration-heavy. You will be editing a lot of files and writing code.\nHaving a good text editor is essential to making your life easier."),(0,i.kt)("admonition",{title:"Why not just use Notepad/TextEdit?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"While you can use Notepad or TextEdit to edit files, they are not designed for editing code.\nThey lack modern features that make editing code easier, such as syntax highlighting, code-completion, formatting, linting, and more.\nUsing a text editor designed for code will make your life ",(0,i.kt)("em",{parentName:"p"},"much")," easier.")),(0,i.kt)("h2",{id:"what-is-a-text-editor"},"What is a Text Editor?"),(0,i.kt)("p",null,"A text editor is a program that allows you to edit text files.\nUnlike a word processor, a text editor does not add any formatting to your text.\nThis makes it ideal for editing code and configuration files."),(0,i.kt)("h2",{id:"choosing-and-downloading-your-text-editor"},"Choosing and Downloading your Text Editor"),(0,i.kt)("p",null,"There are many text editors available, and everyone has their own preferences.\nHowever, this guide will mainly focus on ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),", a free and open-source text editor developed by Microsoft."),(0,i.kt)("p",null,"Alternatives include ",(0,i.kt)("a",{parentName:"p",href:"https://www.sublimetext.com/"},"Sublime Text")," and ",(0,i.kt)("a",{parentName:"p",href:"https://notepad-plus-plus.org/"},"Notepad++"),"."),(0,i.kt)("p",null,"Visual Studio Code is available for Windows, macOS, and Linux.\nYou can download it from ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"here"),"."),(0,i.kt)("h3",{id:"installing-the-extension"},"Installing the Extension"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The extension is very much still in development. It is not recommended to use it for production.\nThis warning will be removed once the extension is stable. For now, skip this step.")),(0,i.kt)("p",null,"I am working on an extension for Visual Studio Code that will add language features for Mythic.\nThis is also partly why this guide focuses on it.\nYou can install it from the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=0tickpulse.vscode-mythic"},"Visual Studio Marketplace"),"."),(0,i.kt)("h2",{id:"setting-up-your-text-editor"},"Setting up your Text Editor"),(0,i.kt)("h3",{id:"opening-a-folder"},"Opening a Folder"),(0,i.kt)("p",null,'When you open Visual Studio Code, you will be greeted with a welcome screen.\nClick the "Open Folder" button and select the folder you want to open.\nSelect your server\'s folder, and click "Open".'),(0,i.kt)("p",null,"TODO: Screenshot"),(0,i.kt)("h3",{id:"using-the-integrated-terminal"},"Using the integrated Terminal"),(0,i.kt)("p",null,'If you followed the preivous page, you should have a terminal open in your server\'s folder.\nHowever, you no longer need to use that terminal because VSCode has an integrated terminal builtin.\nYou can open it by clicking "Terminal" in the top menu, and then clicking "New Terminal".'),(0,i.kt)("p",null,"TODO: Video"),(0,i.kt)("p",null,"Now, you can run commands in the terminal just like you would in the command prompt/terminal."),(0,i.kt)("h3",{id:"learning-the-basics"},"Learning the Basics"),(0,i.kt)("p",null,"Visual Studio Code has a lot of features, and it can seem a bit overwhelming at first.\nWe will go through a few of these features that I think are the most useful."),(0,i.kt)("h4",{id:"the-file-explorer"},"The File Explorer"),(0,i.kt)("p",null,"The file explorer is a panel on the left side of the screen that shows all the files in your server's folder.\nYou can open files by double-clicking them, or by right-clicking them and clicking \"Open\".\nThis is a very useful way to navigate your server's files without having to use the file explorer on your computer."),(0,i.kt)("p",null,"TODO: Screenshot"),(0,i.kt)("h4",{id:"find-and-replace"},"Find and Replace"),(0,i.kt)("p",null,"Find and Replace is a very handy feature which allows you to search for text in your file, and optionally replace it with something else.\nFor example, if you wanted to change all instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"goodbye"),', you could use Find and Replace to do that.\nYou can open Find and Replace by clicking "Edit" in the top menu, and then clicking "Find" to just find files, or "Replace" to find and replace files.\nOr, you can use the keyboard shortcuts ',(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+F")," (\u2318F) to find, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Alt+F")," (\u2318\u2325F) to replace."),(0,i.kt)("p",null,"TODO: Video"),(0,i.kt)("h4",{id:"the-command-palette"},"The Command Palette"),(0,i.kt)("p",null,'The Command Palette is a very powerful feature that allows you to run commands in Visual Studio Code.\nIt\'s extremely useful especially if you can\'t remember the keyboard shortcut for a command.\nYou can open the Command Palette by clicking "View" in the top menu, and then clicking "Command Palette".\nOr, you can use the keyboard shortcut ',(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P")," (\u21e7\u2318P)."),(0,i.kt)("p",null,"TODO: Video"),(0,i.kt)("h4",{id:"diagnostics"},"Diagnostics"),(0,i.kt)("p",null,"Diagnostics are a feature that allows Visual Studio Code to show you errors and warnings in your code.\nFor example, if you write invalid YAML, Visual Studio Code will show you an error.\nErrors are shown with a red underline, and warnings are shown with a yellow underline.\nYou can see the error/warning by hovering over the underlined text."),(0,i.kt)("p",null,"TODO: Screenshot"),(0,i.kt)("h4",{id:"formatting"},"Formatting"),(0,i.kt)("p",null,"Formatting is a feature that allows Visual Studio Code to automatically format your code to improve readability.\nFor example, given the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hello: [a, b, c, d, e]\n")),(0,i.kt)("p",null,"If you press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+I")," (\u21e7\u2325F) to format, Visual Studio Code will automatically format it to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"hello: [a, b, c, d, e]\n")),(0,i.kt)("p",null,"This makes your code much easier to read."),(0,i.kt)("h2",{id:"yaml"},"YAML"),(0,i.kt)("p",null,"YAML is mentioned a few times in this guide so far.\nIt is a file format that is used for configuration files.\nIt's extremely easy to learn, so here are the basics:"),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("p",null,"Comments are lines that are ignored by the computer, and are only there for humans to read.\nThey are very useful for explaining what your code does, or for temporarily disabling code.\nIn YAML, comments start with a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," character, and continue until the end of the line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is a comment\n")),(0,i.kt)("h3",{id:"keys-and-values"},"Keys and Values"),(0,i.kt)("p",null,"YAML files are made up of keys and values.\nA key is a string that identifies a value.\nA value can be anything, including a string, number, list, or even another key-value pair.\nKeys and values are separated by a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: value\n")),(0,i.kt)("h3",{id:"lists"},"Lists"),(0,i.kt)("p",null,"Lists are a type of value that contains multiple values.\nYou can represent a list by putting each value on a new line, and prefixing it with a ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," character."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- value1\n- value2\n- value3\n")),(0,i.kt)("admonition",{title:"JSON lists",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As YAML is a superset of JSON, you can also represent lists in JSON format."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: [value1, value2, value3]\n"))),(0,i.kt)("h3",{id:"other-basic-data-types"},"Other Basic Data Types"),(0,i.kt)("p",null,"YAML supports a few basic data types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Strings: A string is a sequence of characters."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: value # This is a string\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Numbers: A number is a numeric value."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: 123 # This is a number\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Booleans: A boolean is a value that is either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: true # This is a boolean\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Null: A null value is a value that represents nothing."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"key: null # This is a null value\n")))),(0,i.kt)("h3",{id:"basic-example"},"Basic Example"),(0,i.kt)("p",null,"Here is an example of a YAML file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is a comment\nmy_name: John\nmy_age: 21\nmy_friends:\n    - name: Bob\n      age: 20\n    - name: Alice\n      age: 19\n")),(0,i.kt)("p",null,"Test yourself:"),(0,i.kt)(u,{answers:["John","21","Bob","Alice"],correctAnswer:0,mdxType:"Quiz"},"What is the value of ",(0,i.kt)("code",null,"my_name"),"?"),(0,i.kt)(u,{answers:["String","List","Number","Boolean"],correctAnswer:1,explanation:"A list is a value that contains multiple values.",mdxType:"Quiz"},"What data type is ",(0,i.kt)("code",null,"my_friends"),"?"))}h.isMDXComponent=!0}}]);