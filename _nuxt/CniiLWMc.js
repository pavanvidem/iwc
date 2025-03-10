import{p as k,f as _,j as G,c as s,o as i,a as e,b as u,k as w,d as p,w as b,e as T,F as g,l as y,i as c,m as d,t as a,n as h,q as C,_ as A}from"./Cuq2gHAp.js";const W=k("/run-flow.png"),N={class:"container mx-auto py-16 px-6 text-center max-w-6xl overflow-auto"},E={class:"text-left"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},j={class:"font-bold text-lg mb-2"},q={class:"text-gray-700"},B={class:"mt-16"},V={class:"flex justify-center"},H=["onClick"],I={class:"bg-chicago-50 rounded-b-lg p-6"},L={key:0},S={key:1},D={key:2},P={key:3},O={key:4},$={class:"py-16 text-left"},z={class:"flex flex-col md:flex-row gap-8"},F={class:"md:w-1/2 space-y-6"},J={class:"font-bold text-lg"},U={class:"text-gray-700"},K=_({__name:"about",setup(M){const f=[{icon:"uil:check-circle",title:"Adherence to best practices",description:"Every workflow is developed following community-established standards, ensuring consistency and reliability.",color:"yellow-500"},{icon:"uil:angle-right-b",title:"Compatibility and portability",description:"Workflows are ready to run on usegalaxy.* servers, and they can be adapted for private Galaxy instances.",color:"orange-500"},{icon:"uil:star",title:"Open-source Accessibility",description:"All workflows are freely available, fostering transparency and collaboration.",color:"pink-500"},{icon:"uil:book-open",title:"Closely linked to training resources",description:"Each workflow is linked to relevant tutorials from the Galaxy Training Network (GTN), providing hands-on guidance for users.",color:"purple-500"},{icon:"uil:refresh",title:"Reliable and regularly tested",description:"Regular testing ensures workflows remain operational and effective, giving you confidence in their performance.",color:"blue-500"}],l=[{title:"Peer reviewed",content:"All workflows undergo a rigorous peer-review process involving subject-matter experts. The review process validates that the workflow is scientifically sound, that it adheres to the best practices in terms of tools, parameters, and Galaxy usage. The review process also ensures the workflow has necessary documentation and annotations as well as links to training materials where applicable."},{title:"Include tests and test data",content:"Each workflow includes test cases and test datasets to verify its accuracy and reproducibility. The workflows also include sample data, allowing anyone to get started quickly and explore the workflow without having to collect competitive data first."},{title:"Regularly monitored",content:"Automated systems that monitor workflows regularly to confirm their ongoing functionality across supported Galaxy platforms. This ensures their robustness over time and provides assurances that one can focus on the analysis and interpreting the results, not the technical details of running the workflow."},{title:"Transparently versioned",content:"Changes to workflows are documented, ensuring users can track updates and maintain reproducibility in their analyses. Every workflow is versioned so you can always go back to a specific version, which includes not only the same parameters but also same tool versions."},{title:"Automatically updated",content:"Workflows are automatically updated when new versions of tools are released, ensuring that the workflows remain up-to-date and that users can benefit from the latest features and bug fixes."}],n=G(0),v=[{title:"Explore the GitHub Repository:",description:"Visit the library GitHub repository for contribution guidelines, issue tracking, and pull request templates.",color:"gray-700"},{title:"Improve Existing Workflows:",description:"Help refine current workflows by fixing bugs, adding features, or updating documentation.",color:"orange-500"},{title:"Submit New Workflows:",description:"Share your own workflows by following our submission guidelines.",color:"blue-500"},{title:"Participate in Peer Review:",description:"Join the review process to help maintain high standards for the library.",color:"purple-500"}];return(Q,t)=>{const m=T,x=C;return i(),s("div",N,[t[5]||(t[5]=e("h1",{class:"text-4xl md:text-5xl font-bold leading-tight mb-6"},[p(" Automate your analysis from"),e("br"),e("span",{class:"block"},"data to visualization and a report")],-1)),t[6]||(t[6]=e("p",{class:"text-lg text-gray-700 leading-relaxed mb-6"}," The Galaxy Workflows Library is a curated collection of ready-to-use, open-source analysis workflows designed to help researchers make progress quickly and reliably. Each workflow comes with sample datasets, clear documentation, and links to training materials to streamline learning and application. ",-1)),t[7]||(t[7]=e("p",{class:"text-lg text-gray-700 leading-relaxed mb-10"}," Whether you're working on a public Galaxy server, your own private Galaxy instance, these workflows are here to empower your research with robust, reproducible, and accessible tools. ",-1)),u(m,{to:"/",class:"inline-block bg-ebony-clay hover:bg-bay-of-many text-white font-medium py-3 px-6 rounded-lg transition duration-300 mb-16"},{default:b(()=>t[0]||(t[0]=[p(" Browse the library » ")])),_:1}),t[8]||(t[8]=e("div",{class:"mb-10"},[e("img",{src:W,alt:"Run a workflow flow",width:"100%"})],-1)),e("div",E,[t[1]||(t[1]=e("h2",{class:"text-3xl md:text-4xl font-bold mb-8 text-center"},"Why use peer-reviewed Galaxy workflows?",-1)),e("div",R,[(i(),s(g,null,y(f,(o,r)=>e("div",{key:r,class:"p-6 bg-chicago-50 rounded-lg"},[e("div",{class:h(`text-${o.color} text-3xl mb-4`)},[u(x,{name:o.icon},null,8,["name"])],2),e("h3",j,a(o.title),1),e("p",q,a(o.description),1)])),64))])]),e("div",B,[t[2]||(t[2]=e("h2",{class:"text-3xl md:text-4xl font-bold mb-8 text-center"}," These are high-quality workflows, ready to run ",-1)),e("div",V,[(i(),s(g,null,y(l,(o,r)=>e("button",{key:r,class:h(["px-4 py-2 rounded-t-lg",d(n)===r?"bg-chicago-50":"bg-white hover:bg-chicago-50"]),onClick:X=>n.value=r},a(o.title),11,H)),64))]),e("div",I,[d(n)===0?(i(),s("div",L,a(l[0].content),1)):c("",!0),d(n)===1?(i(),s("div",S,a(l[1].content),1)):c("",!0),d(n)===2?(i(),s("div",D,a(l[2].content),1)):c("",!0),d(n)===3?(i(),s("div",P,a(l[3].content),1)):c("",!0),d(n)===4?(i(),s("div",O,a(l[4].content),1)):c("",!0)])]),e("div",$,[e("div",z,[t[3]||(t[3]=w('<div class="md:w-1/2" data-v-64a655e2><h2 class="text-3xl md:text-4xl font-bold mb-8 text-center" data-v-64a655e2>Join the community</h2><p class="text-lg text-gray-700 mb-4" data-v-64a655e2> The Galaxy Workflows Library is an open, collaborative project, and we welcome contributions from the community. Whether you want to enhance existing workflows, report issues, or contribute new pipelines, your input is invaluable. </p><p class="text-lg text-gray-700" data-v-64a655e2> Have questions or feedback? Connect via <a href="https://galaxyproject.org" class="text-blue-600" data-v-64a655e2>Galaxy’s Community Hub</a> or engage with other users and contributors through project chats and social media. </p></div>',1)),e("div",F,[(i(),s(g,null,y(v,(o,r)=>e("div",{key:r,class:"p-4 bg-chicago-50 rounded-lg"},[e("h3",J,[e("span",{class:h(`text-${o.color} font-bold`)},a(o.title),3)]),e("p",U,a(o.description),1)])),64))])])]),t[9]||(t[9]=w('<div class="p-6 bg-chicago-50 rounded-lg border-l-4 border-orange-500 mt-10 text-left" data-v-64a655e2><div class="flex flex-col md:flex-row gap-8" data-v-64a655e2><div class="md:w-1/2" data-v-64a655e2><h3 class="text-2xl font-bold mb-4" data-v-64a655e2>Why contribute a workflow?</h3><p class="text-lg mb-4 text-gray-700" data-v-64a655e2>Ohh, so many reasons!</p></div><div class="md:w-1/2 space-y-6" data-v-64a655e2><ul class="list-disc list-inside text-gray-700 space-y-2" data-v-64a655e2><li data-v-64a655e2>Get a free DOI and citations that follow</li><li data-v-64a655e2>Automatic deployment to usegalaxy.*</li><li data-v-64a655e2>Daily testing with easy-to-inspect results</li><li data-v-64a655e2>Testing against new releases</li><li data-v-64a655e2>Automatic updates and versioning</li><li data-v-64a655e2>Bug reports and contributions from users</li><li data-v-64a655e2>Performance benchmarks</li><li data-v-64a655e2>Static webpage with all the workflow details</li><li data-v-64a655e2>Discoverability by your peers</li></ul></div></div></div>',1)),u(m,{to:"/",class:"inline-block bg-ebony-clay hover:bg-bay-of-many text-white font-medium py-3 px-6 rounded-lg transition duration-300 mt-8 mb-8"},{default:b(()=>t[4]||(t[4]=[p(" Browse the library » ")])),_:1})])}}}),Z=A(K,[["__scopeId","data-v-64a655e2"]]);export{Z as default};
