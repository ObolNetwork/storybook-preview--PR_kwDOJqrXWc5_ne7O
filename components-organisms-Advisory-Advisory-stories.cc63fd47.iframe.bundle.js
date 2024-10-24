"use strict";(self.webpackChunk_obolnetwork_obol_ui=self.webpackChunk_obolnetwork_obol_ui||[]).push([[2463],{"./components/organisms/Advisory/Advisory.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Advisory_stories});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),atoms=__webpack_require__("./components/atoms/index.ts"),icons=__webpack_require__("./components/icons/index.ts"),AdvisoryToggle=__webpack_require__("./components/molecules/AdvisoryToggle/AdvisoryToggle.tsx"),console=__webpack_require__("../../node_modules/console-browserify/index.js");const Advisory=param=>{let{onUpdateState,onItemChange,onComplete,onBack,itemSelected,...props}=param;return(0,jsx_runtime.jsxs)(atoms.az,{className:"advisory-container",css:{display:"flex",border:"2px solid $bg04",borderRadius:"$3",minHeight:"752px"},children:[(0,jsx_runtime.jsx)(atoms.az,{className:"advisory-toggles",css:{display:"flex",fd:"column",flex:1,py:"$xl",backgroundColor:"$bg02",borderRight:"2px solid $bg04",btlr:"$2",bblr:"$2",width:"330px"},children:(0,jsx_runtime.jsx)(atoms.OY,{css:{display:"flex",fd:"column",gap:"$xxs"},type:"single","aria-label":"Text alignment",value:itemSelected.value,onValueChange:value=>{if(""!==value){const content=props.items.find((item=>item.value===value));content&&onItemChange(content)}},children:props.items.map(((item,index)=>(0,jsx_runtime.jsx)(AdvisoryToggle.X,{disabled:"upcoming"===item.state,value:item.value,"aria-label":item.title,css:{borderLeftWidth:"0px"},"data-state-item":item.value===itemSelected.value?"selected":"",children:(0,jsx_runtime.jsx)(AdvisoryToggle.u,{state:item.state,rank:item.rank,onClick:()=>console.log("enable next, complete this"),children:item.title},":ab".concat(index,":"))},":at".concat(index,":"))))})}),(0,jsx_runtime.jsx)(atoms.az,{className:"advisory-content",css:{display:"flex",flex:2,fd:"column",p:"$2xl",backgroundColor:"$bg01",btrr:"$2",bbrr:"$2"},children:itemSelected.content(itemSelected.rank,itemSelected.enableNextStep,(value=>{onUpdateState(value)}),(value=>{onBack(value)}),onComplete)})]})};Advisory.__docgenInfo={description:"",methods:[],displayName:"Advisory"};var _Default_parameters,_Default_parameters_docs,_Default_parameters1,Advisory_stories_console=__webpack_require__("../../node_modules/console-browserify/index.js");const Advisory_stories={title:"Design System/Organisms/Advisory",component:Advisory},AdvisoryState=args=>{const[items,setItems]=(0,react.useState)(args.items),[itemSelected,setItemSelected]=(0,react.useState)(args.items[0]);return(0,jsx_runtime.jsx)(Advisory,{itemSelected,items,onItemChange:item=>{setItemSelected(item)},onComplete:()=>{Advisory_stories_console.log("complete")},onUpdateState:rank=>{setItems(items.map((item=>item.rank===rank+1?(setItemSelected(item),{...item,state:"enabled"}):item)))},onBack:rank=>{setItems(items.map((item=>item.rank===rank?{...item,state:"upcoming"}:item)));const itemBehind=items.find((item=>item.rank===rank-1));itemBehind&&setItemSelected(itemBehind)}})},Default={...{render:args=>(0,jsx_runtime.jsx)(AdvisoryState,{...args})},args:{items:[{title:"Proof of Stake",rank:1,state:"enabled",value:"Proof of Stake",enableNextStep:!0,content:(value,enableNextStep,onAccept)=>(0,jsx_runtime.jsxs)(atoms.so,{css:{gap:"$xl"},children:[(0,jsx_runtime.jsx)(atoms.EY,{variant:"h4",children:"Proof of stake Ethereum"}),(0,jsx_runtime.jsx)(atoms.EY,{color:"body",variant:"h5",children:"The Beacon Chain upgrade brings proof-of-stake consensus to Ethereum. For this, we need active participants - known as validators - to propose, verify, and vouch for the validity of blocks."}),(0,jsx_runtime.jsx)(atoms.EY,{color:"body",variant:"h5",children:"In exchange, honest validators receive financial rewards. Importantly, as a validator you'll need to post ETH as collateral - in other words, have some funds at stake."}),(0,jsx_runtime.jsxs)(atoms.EY,{color:"body",variant:"h5",children:["The only way to become a validator is to make a one-way ETH transaction to the deposit contract on the current Ethereum chain."," "]}),(0,jsx_runtime.jsxs)(atoms.so,{css:{gap:"$sm"},children:[(0,jsx_runtime.jsxs)(atoms.N_,{href:"https://docs.obol.org",target:"_blank",children:["More on Charon",(0,jsx_runtime.jsx)(icons.j0,{size:"md"})]}),(0,jsx_runtime.jsxs)(atoms.N_,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",target:"_blank",children:["More on Proof of Stake",(0,jsx_runtime.jsx)(icons.j0,{size:"md"})]})]}),(0,jsx_runtime.jsx)(atoms.$n,{disabled:!enableNextStep,fullWidth:!0,onClick:()=>null==onAccept?void 0:onAccept(value),children:"I Accept"})]})},{title:"Understanding Distributed Validators",rank:2,state:"upcoming",value:"Understanding Distributed Validators",enableNextStep:!0,content:(value,enableNextStep,onAccept,onBack)=>(0,jsx_runtime.jsxs)(atoms.az,{children:[(0,jsx_runtime.jsx)(atoms.EY,{children:"Understanding Distributed Validators"}),(0,jsx_runtime.jsx)(atoms.$n,{onClick:()=>onBack&&onBack(value),children:"onBack"}),(0,jsx_runtime.jsx)(atoms.$n,{onClick:()=>null==onAccept?void 0:onAccept(value),children:"onAccept"})]})},{title:"Group Risk",rank:3,state:"upcoming",value:"Group Risk",enableNextStep:!1,content:(value,enableNextStep,onAccept,onBack)=>(0,jsx_runtime.jsxs)(atoms.az,{children:[(0,jsx_runtime.jsx)(atoms.EY,{children:"Group Risk"}),(0,jsx_runtime.jsx)(atoms.$n,{onClick:()=>onBack&&onBack(value),children:"onBack"}),(0,jsx_runtime.jsx)(atoms.$n,{onClick:()=>null==onAccept?void 0:onAccept(value),children:"onAccept"})]})}]}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    items: [{\n      title: "Proof of Stake",\n      rank: 1,\n      state: "enabled",\n      value: "Proof of Stake",\n      enableNextStep: true,\n      content: (value, enableNextStep, onAccept) => <Flex css={{\n        gap: "$xl"\n      }}>\n            <Text variant="h4">Proof of stake Ethereum</Text>\n            <Text color="body" variant="h5">\n              The Beacon Chain upgrade brings proof-of-stake consensus to\n              Ethereum. For this, we need active participants - known as\n              validators - to propose, verify, and vouch for the validity of\n              blocks.\n            </Text>\n            <Text color="body" variant="h5">{`In exchange, honest validators receive financial rewards. Importantly, as a validator you\'ll need to post ETH as collateral - in other words, have some funds at stake.`}</Text>\n            <Text color="body" variant="h5">\n              The only way to become a validator is to make a one-way ETH\n              transaction to the deposit contract on the current Ethereum chain.{" "}\n            </Text>\n            <Flex css={{\n          gap: "$sm"\n        }}>\n              <Link href="https://docs.obol.org" target="_blank">\n                More on Charon\n                <ArrowForward size="md" />\n              </Link>\n              <Link href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" target="_blank">\n                More on Proof of Stake\n                <ArrowForward size="md" />\n              </Link>\n            </Flex>\n            <Button disabled={!enableNextStep} fullWidth onClick={() => onAccept?.(value)}>\n              I Accept\n            </Button>\n          </Flex>\n    }, {\n      title: "Understanding Distributed Validators",\n      rank: 2,\n      state: "upcoming",\n      value: "Understanding Distributed Validators",\n      enableNextStep: true,\n      content: (value, enableNextStep, onAccept, onBack) => {\n        return <Box>\n              <Text>Understanding Distributed Validators</Text>\n              <Button onClick={() => onBack && onBack(value)}>onBack</Button>\n              <Button onClick={() => onAccept?.(value)}>onAccept</Button>\n            </Box>;\n      }\n    }, {\n      title: "Group Risk",\n      rank: 3,\n      state: "upcoming",\n      value: "Group Risk",\n      enableNextStep: false,\n      content: (value, enableNextStep, onAccept, onBack) => <Box>\n            <Text>Group Risk</Text>\n            <Button onClick={() => onBack && onBack(value)}>onBack</Button>\n            <Button onClick={() => onAccept?.(value)}>onAccept</Button>\n          </Box>\n    }]\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./components/molecules/AdvisoryToggle/AdvisoryToggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>AdvisoryToggleItem,u:()=>AdvisoryToggleBullet});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),_stitches_config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stitches.config.ts"),_atoms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/index.ts"),_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/icons/index.ts");const AdvisoryToggleItem=(0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__.I4)(_atoms__WEBPACK_IMPORTED_MODULE_2__.dz,{all:"unset",backgroundColor:"transparent",border:"2px solid transparent","&:hover":{cursor:"pointer"},"&[data-state-item=selected]":{"& .advisory-bullet":{borderLeft:"2px solid $obolGreen"}}}),AdvisoryToggleBullet=props=>{let color="light";return"completed"===props.state&&(color="body"),"upcoming"===props.state&&(color="muted"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_atoms__WEBPACK_IMPORTED_MODULE_2__.az,{className:"advisory-bullet",css:{display:"flex",alignItems:"center",gap:"$xs",minHeight:"$2xl",pl:"calc($2xl - 2px)",ml:"-2px",borderLeft:"2px solid transparent"},children:["completed"===props.state?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms__WEBPACK_IMPORTED_MODULE_2__.az,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.CJ,{})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms__WEBPACK_IMPORTED_MODULE_2__.az,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms__WEBPACK_IMPORTED_MODULE_2__.az,{css:{display:"grid",placeItems:"center",width:"$lg",height:"$lg",backgroundColor:"upcoming"===props.state?"$bg03":"$obolMidGreen",borderRadius:"$round",fontSize:"$3",fontWeight:"$bold",color:"upcoming"===props.state?"$muted":"$obolGreen"},children:props.rank})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms__WEBPACK_IMPORTED_MODULE_2__.EY,{css:{lineHeight:"$lg"},color,children:props.children})]})};AdvisoryToggleBullet.__docgenInfo={description:"",methods:[],displayName:"AdvisoryToggleBullet"}}}]);