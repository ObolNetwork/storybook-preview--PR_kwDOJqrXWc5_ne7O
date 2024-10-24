"use strict";(self.webpackChunk_obolnetwork_obol_ui=self.webpackChunk_obolnetwork_obol_ui||[]).push([[6935],{"./components/organisms/Footer/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),atoms=__webpack_require__("./components/atoms/index.ts"),icons=__webpack_require__("./components/icons/index.ts");const defaultLinks=[{title:"Docs",links:[{title:"Intro to Obol",link:"https://docs.obol.org/docs/int/Overview"},{title:"Charon",link:"https://github.com/ObolNetwork/charon"},{title:"DV Launchpad",link:"https://docs.obol.org/docs/dvk/distributed_validator_launchpad"}]},{title:"Community",links:[{title:"Discord",link:"https://discord.com/invite/n6ebKsX46w"},{title:"Twitter",link:"https://twitter.com/ObolNetwork"}]},{title:"More",links:[{title:"Blog",link:"https://blog.obol.org"},{title:"Github",link:"https://github.com/ObolNetwork"}]}],Footer=param=>{let{links=defaultLinks}=param;const year=(new Date).getFullYear();return(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex","@sm":{flexDirection:"column",gap:"$xl"}},children:[(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex",flexDirection:"column",gap:"$xxs",flex:1},children:[(0,jsx_runtime.jsx)(icons.vg,{}),(0,jsx_runtime.jsx)(atoms.EY,{variant:"body",css:{fontSize:"$3"},children:"Copyright © ".concat(year," DV Labs.")})]}),(0,jsx_runtime.jsx)(atoms.az,{className:"footer-obol",css:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)","@sm":{gridTemplateColumns:"repeat(2, 1fr)",gap:"$xl"},flex:2},children:links.map(((item,index)=>(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,jsx_runtime.jsx)(atoms.EY,{variant:"body",css:{fontSize:"$5",fontWeight:"$bold"},children:item.title}),item.links.map(((link,idx)=>(0,jsx_runtime.jsx)(atoms.N_,{variant:"docs",target:"_blank",href:link.link,css:{color:"$textLight",fontSize:"$4"},children:link.title},"link-".concat(idx))))]},"link-section-".concat(index))))})]})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1;Footer.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{links:{defaultValue:{value:'[\n  {\n    title: "Docs",\n    links: [\n      {\n        title: "Intro to Obol",\n        link: "https://docs.obol.org/docs/int/Overview",\n      },\n      { title: "Charon", link: "https://github.com/ObolNetwork/charon" },\n      {\n        title: "DV Launchpad",\n        link: "https://docs.obol.org/docs/dvk/distributed_validator_launchpad",\n      },\n    ],\n  },\n  {\n    title: "Community",\n    links: [\n      { title: "Discord", link: "https://discord.com/invite/n6ebKsX46w" },\n      { title: "Twitter", link: "https://twitter.com/ObolNetwork" },\n    ],\n  },\n  {\n    title: "More",\n    links: [\n      { title: "Blog", link: "https://blog.obol.org" },\n      { title: "Github", link: "https://github.com/ObolNetwork" },\n    ],\n  },\n]',computed:!1},required:!1}}};const Footer_stories={title:"Design System/Organisms/Footer",component:Footer},Default={...{render:args=>(0,jsx_runtime.jsx)(Footer,{...args,children:args.children})}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  ...Template\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]}}]);