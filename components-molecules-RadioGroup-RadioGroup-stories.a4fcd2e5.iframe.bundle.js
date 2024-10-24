"use strict";(self.webpackChunk_obolnetwork_obol_ui=self.webpackChunk_obolnetwork_obol_ui||[]).push([[2309],{"./components/molecules/RadioGroup/RadioGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioGroup_stories});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),stitches_config=__webpack_require__("./stitches.config.ts"),index_module=__webpack_require__("../../node_modules/@radix-ui/react-presence/dist/index.module.js"),dist_index_module=__webpack_require__("../../node_modules/@radix-ui/react-use-previous/dist/index.module.js");var react_use_controllable_state_dist_index_module=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js"),react_roving_focus_dist_index_module=__webpack_require__("../../node_modules/@radix-ui/react-roving-focus/dist/index.module.js"),react_primitive_dist_index_module=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.module.js"),react_context_dist_index_module=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.module.js"),react_compose_refs_dist_index_module=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.module.js");const[i,a]=(0,react_context_dist_index_module.q)("Label",{id:void 0,controlRef:{current:null}}),useLabelContext=e=>{const t=a("LabelConsumer"),{controlRef:r}=t;return react.useEffect((()=>{e&&(r.current=e)}),[e,r]),t.id};var primitive_dist_index_module=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.module.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");const[m,f]=(0,react_context_dist_index_module.A)("Radio"),[b,v]=m("Radio"),R=react.forwardRef(((e,r)=>{const{__scopeRadio:o,"aria-labelledby":t,name:a,checked:n=!1,required:c,disabled:m,value:f="on",onCheck:v,...R}=e,[h,x]=react.useState(null),y=(0,react_compose_refs_dist_index_module.s)(r,(e=>x(e))),w=useLabelContext(h),g=t||w,G=react.useRef(!1),C=!h||Boolean(h.closest("form"));return react.createElement(b,{scope:o,checked:n,disabled:m},react.createElement(react_primitive_dist_index_module.s.button,(0,esm_extends.A)({type:"button",role:"radio","aria-checked":n,"aria-labelledby":g,"data-state":E(n),"data-disabled":m?"":void 0,disabled:m,value:f},R,{ref:y,onClick:(0,primitive_dist_index_module.m)(e.onClick,(e=>{n||null==v||v(),C&&(G.current=e.isPropagationStopped(),G.current||e.stopPropagation())}))})),C&&react.createElement(k,{control:h,bubbles:!G.current,name:a,value:f,checked:n,required:c,disabled:m,style:{transform:"translateX(-100%)"}}))})),h=react.forwardRef(((r,o)=>{const{__scopeRadio:t,forceMount:a,...n}=r,c=v("RadioIndicator",t);return react.createElement(index_module.C,{present:a||c.checked},react.createElement(react_primitive_dist_index_module.s.span,(0,esm_extends.A)({"data-state":E(c.checked),"data-disabled":c.disabled?"":void 0},n,{ref:o})))})),k=e=>{const{control:t,checked:a,bubbles:n=!0,...i}=e,c=react.useRef(null),d=(0,dist_index_module.Z)(a),u=function useSize(r){const[i,t]=react.useState(void 0);return react.useEffect((()=>{if(r){const e=new ResizeObserver((e=>{if(!Array.isArray(e))return;if(!e.length)return;const i=e[0];let o,n;if("borderBoxSize"in i){const e=i.borderBoxSize,r=Array.isArray(e)?e[0]:e;o=r.inlineSize,n=r.blockSize}else{const e=r.getBoundingClientRect();o=e.width,n=e.height}t({width:o,height:n})}));return e.observe(r,{box:"border-box"}),()=>e.unobserve(r)}t(void 0)}),[r]),i}(t);return react.useEffect((()=>{const e=c.current,r=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(r,"checked").set;if(d!==a&&o){const r=new Event("click",{bubbles:n});o.call(e,a),e.dispatchEvent(r)}}),[d,a,n]),react.createElement("input",(0,esm_extends.A)({type:"radio","aria-hidden":!0,defaultChecked:a},i,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E(e){return e?"checked":"unchecked"}const x=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],[y,w]=(0,react_context_dist_index_module.A)("RadioGroup",[react_roving_focus_dist_index_module.RG,f]),g=(0,react_roving_focus_dist_index_module.RG)(),G=f(),[C,I]=y("RadioGroup"),RadioGroup=react.forwardRef(((e,r)=>{const{__scopeRadioGroup:o,name:n,"aria-labelledby":c,defaultValue:d,value:l,required:m=!1,orientation:f,dir:b="ltr",loop:v=!0,onValueChange:R,...h}=e,k=useLabelContext(),E=c||k,x=g(o),[y,w]=(0,react_use_controllable_state_dist_index_module.i)({prop:l,defaultProp:d,onChange:R});return react.createElement(C,{scope:o,name:n,required:m,value:y,onValueChange:w},react.createElement(react_roving_focus_dist_index_module.bL,(0,esm_extends.A)({asChild:!0},x,{orientation:f,dir:b,loop:v}),react.createElement(react_primitive_dist_index_module.s.div,(0,esm_extends.A)({role:"radiogroup","aria-orientation":f,"aria-labelledby":E,dir:b},h,{ref:r}))))})),RadioGroupItem=react.forwardRef(((e,r)=>{const{__scopeRadioGroup:o,disabled:t,...n}=e,i=I("RadioGroupItem",o),c=g(o),u=G(o),m=react.useRef(null),f=(0,react_compose_refs_dist_index_module.s)(r,m),b=i.value===n.value,v=react.useRef(!1);return react.useEffect((()=>{const e=e=>{x.includes(e.key)&&(v.current=!0)},r=()=>v.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",r),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",r)}}),[]),react.createElement(react_roving_focus_dist_index_module.q7,(0,esm_extends.A)({asChild:!0},c,{focusable:!t,active:b}),react.createElement(R,(0,esm_extends.A)({disabled:t,required:i.required,checked:b},u,n,{name:i.name,ref:f,onCheck:()=>i.onValueChange(n.value),onKeyDown:(0,primitive_dist_index_module.m)((e=>{"Enter"===e.key&&e.preventDefault()})),onFocus:(0,primitive_dist_index_module.m)(n.onFocus,(()=>{var e;v.current&&(null===(e=m.current)||void 0===e||e.click())}))})))})),RadioGroupIndicator=react.forwardRef(((e,r)=>{const{__scopeRadioGroup:o,...t}=e,a=G(o);return react.createElement(h,(0,esm_extends.A)({},a,t,{ref:r}))})),index_module_Root=RadioGroup,Item=RadioGroupItem,Indicator=RadioGroupIndicator;var atoms=__webpack_require__("./components/atoms/index.ts");const StyledRadio=(0,stitches_config.I4)(Item,{all:"unset",backgroundColor:"$obolGreen",width:18,height:18,borderRadius:"100%","&:hover":{filter:"brightness(90%)",cursor:"pointer"}}),StyledIndicator=(0,stitches_config.I4)(Indicator,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",position:"relative","&::after":{content:'""',display:"absolute",position:"absolute",width:10,height:10,borderRadius:"50%",boxShadow:"0 0 0 2px #0E1E22",backgroundColor:"#2FE4AB"}}),RadioGroup_RadioGroup=index_module_Root,RadioGroupRadio=StyledRadio,RadioGroup_RadioGroupIndicator=StyledIndicator,RadioGroupItemLabel=(0,stitches_config.I4)("label",{color:"$textLight",fontWeight:"$bold",fontSize:"$3",lineHeight:1,userSelect:"none",paddingLeft:"$xxxs",textTransform:"uppercase"}),RadioGroup_RadioGroupItem=param=>{let{value,label,index=1}=param;const id="id-:r".concat(index,":");return(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex",margin:"10px 0",alignItems:"center"},children:[(0,jsx_runtime.jsx)(RadioGroupRadio,{value,id,children:(0,jsx_runtime.jsx)(RadioGroupIndicator,{className:"indicator"})}),(0,jsx_runtime.jsx)(RadioGroupItemLabel,{htmlFor:id,children:label})]})},RadioGroupComponent=param=>{let{items,value,onValueChange,...props}=param;return(0,jsx_runtime.jsx)(RadioGroup_RadioGroup,{"aria-label":"View density",value,onValueChange,...props,children:items.map(((item,index)=>(0,jsx_runtime.jsx)(RadioGroup_RadioGroupItem,{...item,index},"item-".concat(item.label,"-").concat(index))))})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1;RadioGroup_RadioGroupItem.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}},RadioGroupComponent.__docgenInfo={description:"",methods:[],displayName:"RadioGroupComponent",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"RadioGroupItemProps"}],raw:"RadioGroupItemProps[]"},description:""}}};const RadioGroup_stories={title:"Design System/Molecules/RadioGroupComponent",component:RadioGroupComponent},RadioGroupState=()=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsxs)("form",{style:{backgroundColor:"#182D32"},children:[value,(0,jsx_runtime.jsxs)(RadioGroup_RadioGroup,{value,onValueChange:item=>setValue(item),defaultValue:"default","aria-label":"View density",children:[(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex",margin:"10px 0",alignItems:"center"},children:[(0,jsx_runtime.jsx)(RadioGroupRadio,{value:"default",id:"r1",children:(0,jsx_runtime.jsx)(RadioGroup_RadioGroupIndicator,{})}),(0,jsx_runtime.jsx)(RadioGroupItemLabel,{htmlFor:"r1",children:"Default"})]}),(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex",margin:"10px 0",alignItems:"center"},children:[(0,jsx_runtime.jsx)(RadioGroupRadio,{value:"comfortable",id:"r2",children:(0,jsx_runtime.jsx)(RadioGroup_RadioGroupIndicator,{})}),(0,jsx_runtime.jsx)(RadioGroupItemLabel,{htmlFor:"r2",children:"Comfortable"})]}),(0,jsx_runtime.jsxs)(atoms.az,{css:{display:"flex",margin:"10px 0",alignItems:"center"},children:[(0,jsx_runtime.jsx)(RadioGroupRadio,{value:"compact",id:"r3",children:(0,jsx_runtime.jsx)(RadioGroup_RadioGroupIndicator,{})}),(0,jsx_runtime.jsx)(RadioGroupItemLabel,{htmlFor:"r3",children:"Compact"})]})]})]})},Default={...{render:args=>(0,jsx_runtime.jsx)(RadioGroupState,{...args})},args:{items:[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2"}],defaultValue:"Option 1"}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    items: [{\n      label: "Option 1",\n      value: "Option 1"\n    }, {\n      label: "Option 2",\n      value: "Option 2"\n    }],\n    defaultValue: "Option 1"\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]}}]);