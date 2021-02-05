(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(132)),i={id:"migration",title:"Migration from <=23.10"},c={unversionedId:"migration",id:"migration",isDocsHomePage:!1,title:"Migration from <=23.10",description:"You can use the config:migrate tool of ts-jest CLI if you're coming from an older version to help you migrate your Jest configuration.",source:"@site/docs/migration.md",slug:"/migration",permalink:"/docs/next/migration",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/migration.md",version:"current",sidebar:"docs",previous:{title:"Babel7 or TypeScript",permalink:"/docs/next/babel7-or-ts"},next:{title:"Debugging ts-jest",permalink:"/docs/next/debugging"}},p=[{value:"NPM",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]},{value:"NPM",id:"npm-1",children:[]},{value:"Yarn",id:"yarn-1",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"config:migrate")," tool of ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," CLI if you're coming from an older version to help you migrate your Jest configuration."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you're using ",Object(o.b)("inlineCode",{parentName:"em"},"jest.config.js"),":")),Object(o.b)("h3",{id:"npm"},"NPM"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:migrate jest.config.js\n")),Object(o.b)("h3",{id:"yarn"},"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:migrate jest.config.js\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If you're using ",Object(o.b)("inlineCode",{parentName:"em"},"jest")," config property of ",Object(o.b)("inlineCode",{parentName:"em"},"package.json"),":")),Object(o.b)("h3",{id:"npm-1"},"NPM"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:migrate package.json\n")),Object(o.b)("h3",{id:"yarn-1"},"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:migrate package.json\n")))}u.isMDXComponent=!0}}]);