(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(132)),o={id:"installation",title:"Installation"},c={unversionedId:"getting-started/installation",id:"version-26.5/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-26.5/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/versioned_docs/version-26.5/getting-started/installation.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Presets",permalink:"/docs/getting-started/presets"}},l=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Jest config file",id:"jest-config-file",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"dependencies"},"Dependencies"),Object(a.b)("p",null,"You can install ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with the following commands."),Object(a.b)("h4",{id:"npm"},"NPM"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev jest typescript ts-jest\n")),Object(a.b)("h4",{id:"yarn"},"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev jest typescript ts-jest\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Tip: If you get an error with the following ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," commands such as ",Object(a.b)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",Object(a.b)("inlineCode",{parentName:"p"},"npx XXX")," with ",Object(a.b)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project.")),Object(a.b)("h3",{id:"jest-config-file"},"Jest config file"),Object(a.b)("h4",{id:"creating"},"Creating"),Object(a.b)("p",null,"By default Jest can run without any config files, but it will not compile ",Object(a.b)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),Object(a.b)("h4",{id:"npm-1"},"NPM"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:init\n")),Object(a.b)("h4",{id:"yarn-1"},"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:init\n")),Object(a.b)("p",null,"This will create a basic Jest configuration file which will make Jest know about your ",Object(a.b)("inlineCode",{parentName:"p"},".ts")," files and handle them correctly."),Object(a.b)("p",null,"You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",Object(a.b)("inlineCode",{parentName:"p"},"npx")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",Object(a.b)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable Typescript. Instead, add the line: ",Object(a.b)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",Object(a.b)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),Object(a.b)("h4",{id:"customizing"},"Customizing"),Object(a.b)("p",null,"For customizing jest, please follow their ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration.html"}),"official guide online"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"options"}),"here"),"."))}p.isMDXComponent=!0}}]);