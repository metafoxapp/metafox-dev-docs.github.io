(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{thrv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("Fcif"),o=n("+I+c"),l=(n("mXGw"),n("/FXl")),r=n("TjRS"),i=(n("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/public/frontend/index.mdx"}});var s={_frontmatter:i},c=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(c,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This documentation is guide to ",Object(l.b)("inlineCode",{parentName:"p"},"Frontend")," and ",Object(l.b)("inlineCode",{parentName:"p"},"ReactJs")," developer setup development environment.\nIf you are looking for ",Object(l.b)("inlineCode",{parentName:"p"},"testers")," or ",Object(l.b)("inlineCode",{parentName:"p"},"backend")," development, reading this docs is not neccessary.")),Object(l.b)("h2",{id:"knowlege"},"Knowlege"),Object(l.b)("p",null,"Before reading this documentation, you must confident with"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://reactjs.org/"},"ReactJs")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://react-redux.js.org/"},"React redux")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://redux-saga.js.org/"},"Redux saga")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"Redux Toolkit")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://mui.com"},"Material UI")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Testing Library")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jestjs.io/docs/getting-started"},"Jest"))),Object(l.b)("h2",{id:"system-requirements"},"System Requirements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"node 16+")),Object(l.b)("p",null,"If you are using Linux/MacOS, You should install node via ",Object(l.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager"),"."),Object(l.b)("p",null,"Helpful commands"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# Check current default node version\nnode --version\n\n# Check nvm is installed\nnvm --version\n\n## install missing nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\n# Install specify node version\nnvm install 16.14.0\n\n# Set 12.18.0 as default node excutable.\nnvm alias default 16.14.0\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Start Development ")),Object(l.b)("p",null,"Checkout ",Object(l.b)("a",{parentName:"p",href:"https://git.younetco.com/metafox/workbox"},"source code")),Object(l.b)("h2",{id:"environment"},"Environment"),Object(l.b)("p",null,"location: app/.env"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-conf"},";--------------------------------------------------------------------\n; location: /app/.env\n; Configuration\n;--------------------------------------------------------------------\n\n; run multiple site on the same server\nMFOX_SITE_ID=1\n\n; A properly formatted must have a leading slash but no ending slash.\nPUBLIC_URL=\nMFOX_API_KEY=2\nMFOX_API_SECRET=738ab5b83c902a7b81860e05811fd5cd65e95f72\n\n; A properly formatted must have a leading slash but no ending slash.\nMFOX_BASE_URL = https://dev-foxsocial.phpfox.us\n\n; A properly formatted must have a leading slash but no ending slash.\nMFOX_API_URL=https://dev-foxsocial.phpfox.us/v5-backend/api/v1\n\nMFOX_GOOGLE_MAP_API_KEY=AIzaSyBiQutexpRrU8p0wg7-H8CM9kfKeOfk9HE\n\n# loading background color\nMFOX_LOADING_BG=#2d2d2d\n")),Object(l.b)("h2",{id:"start-dev-server"},"Start Dev Server"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# to workbox dir\ncd workbox\n\n# install yarn\nnpm install -g yarn\n\n# install dependencies\nyarn && yarn bootstrap\n\n# start dev server\nyarn start\n\n# start dev server for admin site\nyarn start:admin\n")),Object(l.b)("p",null,"By default, deverlopment server will start at ",Object(l.b)("inlineCode",{parentName:"p"},"http://localhost:3000")),Object(l.b)("h2",{id:"directory-structure"},"Directory Structure"),Object(l.b)("p",null,"Workbox contains all libraries, tools and extensions of phpfox projects. We use ",Object(l.b)("inlineCode",{parentName:"p"},"lerna")," to organize many packages into single repository. Let's look overall to top level of directory strucrure."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"workbox/\n  app/\n  packages/\n    apps/\n    framework/\n    yourcompany/\n  tests/\n    jest/\n    tools\n  package.json\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"packages/framework/")),Object(l.b)("p",null,"This directory contains metafox core libraries."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"packages/apps/")),Object(l.b)("p",null,"It contains modules, themes, and other extensions."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"packages/app")),Object(l.b)("p",null,"It contains configuration."),Object(l.b)("p",null,"Look deeper to ",Object(l.b)("inlineCode",{parentName:"p"},"app/")," directory"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"app/\n  dist/\n  public/\n    favicon.ico\n    index.html\n    logo192.png\n    logo512.png\n  src/\n    index.tsx\n  .env\n  settings.json\n  package.json\n")),Object(l.b)("h2",{id:"apps"},"Apps"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"dist/")),Object(l.b)("p",null,"It contains bundled react app result to deployment."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"public/")),Object(l.b)("p",null,"It contains static resource to build react app."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"src/")),Object(l.b)("p",null,"It contains source code of ",Object(l.b)("inlineCode",{parentName:"p"},"frontend")," app."),Object(l.b)("p",null,"It contains application configurations."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Site configuration is located at ",Object(l.b)("inlineCode",{parentName:"p"},"settings.json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Only packages listed ",Object(l.b)("inlineCode",{parentName:"li"},"packages"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'# file /workbox/app/settings.json\n\n{\n  "siteUrl": "http://localhost:3000",\n  "api": {\n    "baseUrl": "http://localhost:3000/api",\n  },\n  "i18n": {\n    "locale": "en",\n    "supports": ["en", "ar", "zh-cn", "fr"]\n  },\n  "packages": [\n    "@metafox/core",\n    "@metafox/ui",\n    "@metafox/form",\n    "@metafox/html-viewer",\n    "@metafox/module-core",\n    "@metafox/module-user",\n    "@metafox/module-blog",\n    "@metafox/module-feed",\n    "@metafox/module-video",\n    "@metafox/module-event",\n    "@metafox/module-forum",\n    "@metafox/module-quiz",\n    "@metafox/module-saved",\n    "@metafox/module-ad",\n    "@metafox/module-group",\n    "@metafox/module-pages",\n    "@metafox/module-poll",\n    "@metafox/module-photo",\n    "@metafox/module-friend",\n    "@metafox/module-music",\n    "@metafox/module-marketplace",\n    "@metafox/module-forum",\n    "@metafox/module-ad"\n  ],\n}\n')),Object(l.b)("h3",{id:"deployment"},"Deployment"),Object(l.b)("p",null,"[TBD]"),Object(l.b)("h3",{id:"visual-sudio-ide"},"Visual Sudio IDE"),Object(l.b)("p",null,"Skip this section if you not familiar with ",Object(l.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")),Object(l.b)("p",null,"Must have plugins"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier - Code formatter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"},"Code Spell Checker")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin"},"ESLint"))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/public/frontend/index.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-public-frontend-index-mdx-cf258abe201243d461e5.js.map