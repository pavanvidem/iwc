import{_ as U,u as L,a as M,f as E,b as J,c as D,d as K}from"./BmnW3qp8.js";import{_ as N,f as x,s as A,v as R,h as n,x as q,y as z,z as F,c as u,o as t,r as _,A as w,i as b,n as p,t as k,B as P,w as f,C as Q,a as c,F as T,l as W,d as S,b as j,q as H,m as h,T as X,j as B,D as Y,E as Z}from"./Cuq2gHAp.js";const ee={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},gap:{xs:"gap-0.5",sm:"gap-1",md:"gap-1",lg:"gap-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},icon:{base:"flex-shrink-0",size:{xs:"h-4 w-4",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-5 w-5"}},default:{size:"sm",variant:"solid",color:"primary"}},oe={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},y=A(F.ui.strategy,F.ui.badge,ee),te=x({components:{UIcon:U},inheritAttrs:!1,props:{size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},color:{type:String,default:()=>y.default.color,validator(e){return[...F.ui.colors,...Object.keys(y.color)].includes(e)}},variant:{type:String,default:()=>y.default.variant,validator(e){return[...Object.keys(y.variant),...Object.values(y.color).flatMap(o=>Object.keys(o))].includes(e)}},label:{type:[String,Number],default:null},icon:{type:String,default:null},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:r}=L("badge",R(e,"ui"),y),{size:s,rounded:a}=M({ui:o,props:e}),l=n(()=>e.icon&&e.leading||e.icon&&!e.trailing||!e.trailing||e.leadingIcon),m=n(()=>e.icon&&e.trailing||e.trailing||e.trailingIcon),d=n(()=>{var v,O;const C=((O=(v=o.value.color)==null?void 0:v[e.color])==null?void 0:O[e.variant])||o.value.variant[e.variant];return q(z(o.value.base,o.value.font,a.value,o.value.size[s.value],o.value.gap[s.value],C==null?void 0:C.replaceAll("{color}",e.color)),e.class)}),i=n(()=>e.leadingIcon||e.icon),g=n(()=>e.trailingIcon||e.icon),$=n(()=>z(o.value.icon.base,o.value.icon.size[s.value])),I=n(()=>z(o.value.icon.base,o.value.icon.size[s.value]));return{attrs:r,isLeading:l,isTrailing:m,badgeClass:d,leadingIconName:i,trailingIconName:g,leadingIconClass:$,trailingIconClass:I}}}),ae={key:0};function ne(e,o,r,s,a,l){const m=U;return t(),u("span",P({class:e.badgeClass},e.attrs),[_(e.$slots,"leading",{},()=>[e.isLeading&&e.leadingIconName?(t(),w(m,{key:0,name:e.leadingIconName,class:p(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):b("",!0)]),_(e.$slots,"default",{},()=>[e.label?(t(),u("span",ae,k(e.label),1)):b("",!0)]),_(e.$slots,"trailing",{},()=>[e.isTrailing&&e.trailingIconName?(t(),w(m,{key:0,name:e.trailingIconName,class:p(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):b("",!0)])],16)}const V=N(te,[["render",ne]]),re=A(F.ui.strategy,F.ui.card,oe),se=x({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:r}=L("card",R(e,"ui"),re),s=n(()=>q(z(o.value.base,o.value.rounded,o.value.divide,o.value.ring,o.value.shadow,o.value.background),e.class));return{ui:o,attrs:r,cardClass:s}}});function le(e,o,r,s,a,l){return t(),w(Q(e.$attrs.onSubmit?"form":e.as),P({class:e.cardClass},e.attrs),{default:f(()=>[e.$slots.header?(t(),u("div",{key:0,class:p([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[_(e.$slots,"header")],2)):b("",!0),e.$slots.default?(t(),u("div",{key:1,class:p([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[_(e.$slots,"default")],2)):b("",!0),e.$slots.footer?(t(),u("div",{key:2,class:p([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[_(e.$slots,"footer")],2)):b("",!0)]),_:3},16,["class"])}const ie=N(se,[["render",le]]),de={class:"flex flex-col flex-grow"},ce={key:0},ue={key:1},ge={class:"flex items-center"},G=x({__name:"WorkflowCard",props:{workflow:{},compact:{type:Boolean}},setup(e){return(o,r)=>{const s=J,a=V,l=H,m=ie;return t(),w(m,{id:`workflow-${o.workflow.definition.uuid}`,ui:{strategy:"override",base:`flex flex-col ${o.compact?"h-[18rem] shadow-md hover:shadow-lg transition-shadow":"mb-6"}`,header:{padding:o.compact?"p-3":"px-6 py-4"},body:{base:"flex-1 flex flex-col",padding:o.compact?"px-3 py-2":"px-6 py-2"},footer:{padding:o.compact?"p-3":"px-6 py-2"}},class:p(o.compact?"bg-white bg-opacity-90 backdrop-blur-sm rounded-lg":"")},{header:f(()=>[j(s,{to:`/workflow/${encodeURIComponent(o.workflow.trsID)}/`},{default:f(()=>[c("h2",{class:p(`font-bold hover:underline ${o.compact?"text-lg":"text-xl mb-2"}`)},k(o.workflow.definition.name),3)]),_:1},8,["to"])]),footer:f(()=>[c("div",{class:p(`flex justify-between ${o.compact,"text-xs"} text-gray-500`)},[c("p",ge,[j(l,{name:"uil:tag",class:p(o.compact?"mr-1 w-3 h-3":"mx-1")},null,8,["class"]),S(" "+k(o.workflow.definition.release),1)]),c("p",null,k(h(E)(o.workflow.updated)),1)],2)]),default:f(()=>[c("div",de,[c("p",{class:p(`flex-grow ${o.compact?"text-sm line-clamp-6 mb-2":"mb-4"}`)},k(o.workflow.definition.annotation),3),o.workflow.collections&&o.workflow.collections.length>0&&!o.compact?(t(),u("div",ce,[(t(!0),u(T,null,W(o.workflow.collections,d=>(t(),w(a,{key:d,class:"mr-2 mb-2",variant:"soft"},{default:f(()=>[S(k(d),1)]),_:2},1024))),128))])):o.workflow.collections&&o.workflow.collections.length>0&&o.compact?(t(),u("div",ue,[(t(!0),u(T,null,W(o.workflow.collections.slice(0,2),d=>(t(),w(a,{key:d,class:"mr-1 mb-1",variant:"soft"},{default:f(()=>[S(k(d),1)]),_:2},1024))),128)),o.workflow.collections.length>2?(t(),w(a,{key:0,variant:"soft",class:"mr-1 mb-1"},{default:f(()=>[S(" +"+k(o.workflow.collections.length-2),1)]),_:1})):b("",!0)])):b("",!0)])]),_:1},8,["id","ui","class"])}}}),fe={class:"w-full max-w-6xl mx-auto"},me={class:"grid grid-cols-3 gap-4 mx-auto px-4"},pe=x({__name:"PopularWorkflows",props:{workflowTrsIds:{}},setup(e){const o=e,r=D(),s=n(()=>{var a;return(a=o.workflowTrsIds)==null?void 0:a.map(l=>r.getWorkflowByTrsId(l))});return(a,l)=>{const m=G;return t(),u("div",fe,[l[0]||(l[0]=c("h2",{class:"text-xl my-6 text-white text-center font-semibold"}," Get started with one of our most popular workflows, or browse the full library below. ",-1)),c("div",me,[(t(!0),u(T,null,W(h(s),d=>(t(),w(m,{key:d.definition.uuid,workflow:d,compact:""},null,8,["workflow"]))),128))])])}}}),we={id:"filters",class:"mb-4"},ke=x({__name:"Filters",setup(e){const o=D(),r=n(()=>o.validFilters);n(()=>o.invalidFilters);const s=n(()=>o.allFilters),a=l=>{o.toggleFilter(l)};return(l,m)=>{const d=V;return t(),u("div",we,[j(X,{name:"filter-transition"},{default:f(()=>[(t(!0),u(T,null,W(h(s),i=>(t(),w(d,{key:i,variant:h(o).selectedFilters.includes(i)?"solid":"soft",class:p(["badge m-1",{incompatible:!h(r).includes(i)}]),onClick:g=>h(r).includes(i)?a(i):null,"data-tooltip":h(r).includes(i)?null:"Incompatible with current selection"},{default:f(()=>[S(k(i),1)]),_:2},1032,["variant","class","onClick","data-tooltip"]))),128))]),_:1})])}}}),ye=N(ke,[["__scopeId","data-v-2dcbdea9"]]),be={class:"flex bg-ebony-clay p-8 space-y-6 items-center",style:{"flex-direction":"column"}},ve={class:"h-16"},xe=x({__name:"index",setup(e){const o=["#workflow/github.com/iwc-workflows/rnaseq-pe/main","#workflow/github.com/iwc-workflows/chipseq-pe/main","#workflow/github.com/iwc-workflows/atacseq/main"],r=B("");B(null);const s=B(null),a=D(),l=n(()=>a.allWorkflows);n(()=>a.allCategories),n(()=>a.allTags);const m=n(()=>l.value.sort((i,g)=>new Date(g.updated).getTime()-new Date(i.updated).getTime())),d=n(()=>m.value.filter(i=>{const g=i.definition.name.toLowerCase().includes(r.value.toLowerCase()),$=!a.selectedFilters.length||a.selectedFilters.every(I=>i.collections.includes(I));return g&&$}));return(i,g)=>{const $=pe,I=G,C=K;return t(),w(C,null,{hero:f(()=>[c("div",be,[g[1]||(g[1]=c("h1",{class:"text-5xl my-2 text-white text-center font-bold"}," Discover and run vetted analysis pipelines on Galaxy ",-1)),g[2]||(g[2]=c("h2",{class:"text-xl text-white text-center font-semibold"}," Ready-to-use, open-source pipelines with sample data and training materials to make progress quickly and reliably. ",-1)),j($,{"workflow-trs-ids":o})])]),content:f(()=>[c("div",ve,[Y(c("input",{"onUpdate:modelValue":g[0]||(g[0]=v=>r.value=v),type:"text",placeholder:"Search workflows",class:"w-full mb-4 p-2 border rounded"},null,512),[[Z,r.value]])]),j(ye),c("div",{id:"workflows",ref_key:"gridDiv",ref:s,class:"grid grid-cols-3 gap-4"},[(t(!0),u(T,null,W(d.value,v=>(t(),w(I,{key:v.definition.uuid,workflow:v},null,8,["workflow"]))),128))],512)]),_:1})}}});export{xe as default};
