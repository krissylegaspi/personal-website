(function(e){function t(t){for(var d,r,c=t[0],l=t[1],o=t[2],v=0,p=[];v<c.length;v++)r=c[v],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],d=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(d=!1)}d&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var d={},n={app:0},i=[];function r(t){if(d[t])return d[t].exports;var a=d[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=d,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)r.d(a,d,function(t){return e[t]}.bind(null,d));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var s=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0aec":function(e,t,a){"use strict";a("c3ea")},3792:function(e,t,a){},"37d6":function(e,t,a){},"399a":function(e,t,a){},"4fa2":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var d=a("7a23");function n(e,t,a,n,i,r){var c=Object(d["x"])("Navigation"),l=Object(d["x"])("router-view");return Object(d["q"])(),Object(d["d"])("div",{class:["app",i.mode]},[Object(d["g"])(c,{mode:i.mode,onToggle:r.toggle},null,8,["mode","onToggle"]),Object(d["g"])(l)],2)}var i={class:"toggle-wrapper"},r={class:"toggle"},c=Object(d["g"])("span",{class:"toggler round"},null,-1);function l(e,t,a,n,l,o){return Object(d["q"])(),Object(d["d"])("div",i,[Object(d["g"])("label",r,[Object(d["g"])("input",{type:"checkbox",checked:"dark"===a.mode&&"checked",onChange:t[1]||(t[1]=function(t){return e.$emit("toggle")})},null,40,["checked"]),c])])}var o={props:["mode"]};a("edf3");o.render=l;var s=o,v=Object(d["G"])("data-v-3ce70641");Object(d["t"])("data-v-3ce70641");var p={class:"nav-bar",id:"nav"},u=Object(d["f"])("HOME"),b=Object(d["f"])("PORTFOLIO"),f=Object(d["f"])("SHOP"),g=Object(d["f"])("BLOG"),h=Object(d["f"])("ABOUT"),m=Object(d["g"])("a",{href:"mailto:contact@kristinelegaspi.com",id:"pls"},"HIRE ME",-1);Object(d["r"])();var O=v((function(e,t,a,n,i,r){var c=Object(d["x"])("Toggle"),l=Object(d["x"])("router-link");return Object(d["q"])(),Object(d["d"])(d["a"],null,[Object(d["g"])("header",null,[Object(d["g"])(c,{mode:a.mode,onToggle:t[1]||(t[1]=function(t){return e.$emit("toggle")})},null,8,["mode"])]),Object(d["g"])("div",p,[Object(d["g"])("ul",null,[Object(d["g"])(l,{to:"/"},{default:v((function(){return[u]})),_:1}),Object(d["g"])(l,{to:"/portfolio"},{default:v((function(){return[b]})),_:1}),Object(d["g"])(l,{to:"/shop"},{default:v((function(){return[f]})),_:1}),Object(d["g"])(l,{to:"/blog"},{default:v((function(){return[g]})),_:1}),Object(d["g"])(l,{to:"/about"},{default:v((function(){return[h]})),_:1}),m])])],64)})),j={props:["mode"],components:{Toggle:s}};a("d76d");j.render=O,j.__scopeId="data-v-3ce70641";var y=j,_=Object(d["G"])("data-v-8be10524"),k=_((function(e,t,a,n,i,r){return Object(d["E"])((Object(d["q"])(),Object(d["d"])("div",null,[Object(d["w"])(e.$slots,"default")],512)),[[d["C"],e.isActive]])})),w={props:{name:{required:!0},selected:{default:!1}},data:function(){return{isActive:!1}},mounted:function(){this.isActive=this.selected}};w.render=k,w.__scopeId="data-v-8be10524";var S=w,I={name:"app",data:function(){return{mode:"light"}},components:{Navigation:y,Toggle:s,Tab:S},created:function(){window.addEventListener("keyup",this.keyPress)},methods:{keypress:function(e){"t"===e.key&&this.toggle()},toggle:function(){"dark"===this.mode?this.mode="light":this.mode="dark"}}};a("0aec");I.render=n;var P=I,C=a("6c02"),T=(a("99af"),a("e962")),x=a.n(T),R=Object(d["G"])("data-v-dd7405ec");Object(d["t"])("data-v-dd7405ec");var A={class:"box"},N={class:"content"},D=Object(d["g"])("a",{href:"mailto:contact@kristinelegaspi.com",target:"_blank"},[Object(d["g"])("i",{class:"fas fa-envelope"})],-1),L=Object(d["g"])("p",null,"MS in Computer Science at Georgia Tech",-1);Object(d["r"])();var M=R((function(e,t,a,n,i,r){var c=Object(d["x"])("Button");return Object(d["q"])(),Object(d["d"])("div",A,[Object(d["g"])("img",{class:i.gender,src:x.a,alt:"".concat(i.firstName," ").concat(i.lastName)},null,10,["alt"]),Object(d["g"])("div",N,[Object(d["g"])("h1",null,Object(d["z"])(a.title),1),D,L]),Object(d["g"])("header",null,[Object(d["g"])(c,{text:"Social Links"})])])})),G=Object(d["G"])("data-v-60e96c26");Object(d["t"])("data-v-60e96c26");var q={id:"slide-text"},F=Object(d["e"])('<code data-v-60e96c26><a href="https://www.linkedin.com/in/kristine-legaspi/" target="_blank" data-v-60e96c26><i class="fab fa-linkedin-in" data-v-60e96c26></i></a><a href="https://github.com/krissylegaspi" target="_blank" data-v-60e96c26><i class="fab fa-github" data-v-60e96c26></i></a><a href="https://codepen.io/krissylegaspi" target="_blank" data-v-60e96c26><i class="fab fa-codepen" data-v-60e96c26></i></a><a href="./Legaspi.Kristine.Resume.pdf" target="_blank" data-v-60e96c26><i class="far fa-file-alt" data-v-60e96c26></i></a></code>',1);Object(d["r"])();var B=G((function(e,t,a,n,i,r){return Object(d["q"])(),Object(d["d"])("h2",q,[F])})),U={name:"Button",props:{text:String},methods:{onClick:function(){var e=document.getElementById("slid"),t=document.getElementById("slide-text");e.onclick=function(){!t.hasAttribute("class")||t.classList.contains("slideUp")?(t.removeAttribute("class","slideUp"),t.setAttribute("class","slideDown")):t.classList.contains("slideDown")&&(t.classList.remove("slideDown"),t.classList.add("slideUp"))}}},components:{}};a("e2e7");U.render=B,U.__scopeId="data-v-60e96c26";var E=U,H={name:"Header",props:{title:{type:String,default:"Kristine Legaspi"}},components:{Button:E},methods:{},data:function(){return{firstName:"Kristine",lastName:"Legaspi",gender:"female"}}};a("c37f");H.render=M,H.__scopeId="data-v-dd7405ec";var V=H,$=Object(d["G"])("data-v-9d95047e");Object(d["t"])("data-v-9d95047e");var K=Object(d["e"])('<div class="title" data-v-9d95047e><h1 data-v-9d95047e>Projects</h1></div><div class="box" data-v-9d95047e><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="SaltNPrepr" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>SaltNPrepr</b></p><p data-v-9d95047e>React Native</p><p data-v-9d95047e>JavaScript</p><p data-v-9d95047e>Firebase</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>A mobile application that helps the user choose a meal to prepare based on available ingredients.</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/SaltNPrepr" target="_blank" data-v-9d95047e>Github</a></button></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="PythonChatBot" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Python Chatbots</b></p><p data-v-9d95047e>Control Flow</p><p data-v-9d95047e>Rule-based</p><p data-v-9d95047e>NLP</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>Various chatbots that responds to the user. The chatbots are built using different techniques.</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/PythonChatbot" target="_blank" data-v-9d95047e>Github</a></button></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="KrisBot" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>KrisBot</b></p><p data-v-9d95047e>Node.js</p><p data-v-9d95047e>Discord.js</p><p data-v-9d95047e>Discord API</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>A Discord bot that features chat commands, music playback, and permissions.</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/KrisBot" target="_blank" data-v-9d95047e>Github</a></button></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="Yams" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Yams</b></p><p data-v-9d95047e>React.js</p><p data-v-9d95047e>JavaScript</p><p data-v-9d95047e>Spotify API</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>This application allows uers to search Spotify, create custom Spotify playlists, and save it to their Spotify account.</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/Yams" target="_blank" data-v-9d95047e>Github</a></button></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="TreasureHunt" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Treasure Hunt</b></p><p data-v-9d95047e>Phaser.js</p><p data-v-9d95047e>JavaScript</p><p data-v-9d95047e>HTML/CSS</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>UNDER CONSTRUCTION</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/TreasureHunt" target="_blank" data-v-9d95047e>Github</a></button></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="IncomePrediction" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Income Prediction</b></p><p data-v-9d95047e>R</p><p data-v-9d95047e>Linear Regression</p><p data-v-9d95047e>Statistical Analysis</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>UNDER CONSTRUCTION</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/" target="_blank" data-v-9d95047e>Github</a></button></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="HandwritingRecognition" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Handwrite Recognize</b></p><p data-v-9d95047e>Python</p><p data-v-9d95047e>scikit-learn</p><p data-v-9d95047e>K-Means</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>UNDER CONSTRUCTION</p><p data-v-9d95047e>A handwriting recognition AI</p><button data-v-9d95047e><a href="https://github.com/krissylegaspi/" target="_blank" data-v-9d95047e>Github</a></button></div></div></div></div><div class="title" data-v-9d95047e><h1 data-v-9d95047e>School Projects</h1></div><div class="box" data-v-9d95047e><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="Multithreading" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Multithreading</b></p><p data-v-9d95047e>C</p><p data-v-9d95047e>Operating Systems</p><p data-v-9d95047e>GetFile</p><p data-v-9d95047e>GDB</p><p data-v-9d95047e>Vagrant</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>Implemented a multithreaded web server that serves static files based on a GetFile protocol. The multithreaded client acts as a load generator for the server.</p><p data-v-9d95047e>Private Repo</p></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="SimulatingNetworks" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Simulating Networks</b></p><p data-v-9d95047e>Python</p><p data-v-9d95047e>Mininet</p><p data-v-9d95047e>Open vSwitch</p><p data-v-9d95047e>Topologies</p><p data-v-9d95047e>Oracle VM</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>Simulated network commands on topologies using Mininet. Represented static network topologies and created dynamic datacenter topologies that can be defined at runtime using command line parameters.</p><p data-v-9d95047e>Private Repo</p></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="SpanningTreeProtocol" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Spanning Tree Protocol</b></p><p data-v-9d95047e>Python</p><p data-v-9d95047e>Spanning Tree Algorithm</p><p data-v-9d95047e>Switches</p><p data-v-9d95047e>Oracle VM</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>Developed a distributed version of the Spanning Tree Protocol that can be run on an arbitrary layer 2 topology.</p><p data-v-9d95047e>Private Repo</p></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="DistanceVectorRouting" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Distance Vector Routing</b></p><p data-v-9d95047e>Python</p><p data-v-9d95047e>Routing</p><p data-v-9d95047e>Bellman-Ford Algorithm</p><p data-v-9d95047e>Oracle VM</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>VDeveloped a distributed Bellman-Ford algorithm that is used to calculate routing paths in a network.</p><p data-v-9d95047e>Private Repo</p></div></div></div><div class="flip-container" data-v-9d95047e><div class="flipper" data-v-9d95047e><div class="card_front" data-v-9d95047e><div class="SDNFirewall" data-v-9d95047e></div><div class="center" data-v-9d95047e><p data-v-9d95047e><b style="color:rgb(255, 113, 137);" data-v-9d95047e>Software Defined Network(SDN) Firewall</b></p><p data-v-9d95047e>Python</p><p data-v-9d95047e>POX</p><p data-v-9d95047e>OpenFlow</p><p data-v-9d95047e>Oracle VM</p></div></div><div class="card_back" data-v-9d95047e><p data-v-9d95047e>Create a configurable firewall using an OpenFlow enabled Switch. Examined contents of a packet to decide how to handle permissions.</p><p data-v-9d95047e>Private Repo</p></div></div></div></div><div class="title" data-v-9d95047e><h1 data-v-9d95047e>Open Source Contributions</h1></div><div class="links" data-v-9d95047e><ul data-v-9d95047e><li data-v-9d95047e><a href="https://github.com/fibanneacci/liar" target="_blank" data-v-9d95047e>Liar</a></li><li data-v-9d95047e><a href="https://github.com/DevvitIO/ReallyAnnoyingDirectory" target="_blank" data-v-9d95047e>ReallyAnnoyingDirectory</a></li></ul></div><div class="title" data-v-9d95047e><h1 data-v-9d95047e>Art</h1></div><div class="links" data-v-9d95047e><ul data-v-9d95047e><li data-v-9d95047e><a href="./art1.jpg" target="_blank" data-v-9d95047e>Pencil Portrait</a></li><li data-v-9d95047e><a href="./hs.jpg" target="_blank" data-v-9d95047e>Collection of Traditional Art</a></li></ul></div>',8);Object(d["r"])();var z=$((function(e,t,a,d,n,i){return K})),J={props:["mode"],components:{Toggle:s}};a("60dc");J.render=z,J.__scopeId="data-v-9d95047e";var W=J,Y=Object(d["G"])("data-v-3dab924b");Object(d["t"])("data-v-3dab924b");var X=Object(d["g"])("br",null,null,-1),Q=Object(d["g"])("br",null,null,-1),Z=Object(d["g"])("br",null,null,-1),ee=Object(d["g"])("h2",null,"Under construction",-1);Object(d["r"])();var te=Y((function(e,t,a,n,i,r){var c=Object(d["x"])("center");return Object(d["q"])(),Object(d["d"])(d["a"],null,[X,Q,Z,Object(d["g"])(c,null,{default:Y((function(){return[ee]})),_:1})],64)})),ae={};ae.render=te,ae.__scopeId="data-v-3dab924b";var de=ae,ne=Object(d["G"])("data-v-199367f7");Object(d["t"])("data-v-199367f7");var ie=Object(d["g"])("br",null,null,-1),re=Object(d["g"])("br",null,null,-1),ce=Object(d["g"])("br",null,null,-1),le=Object(d["g"])("h2",null,"Under construction",-1);Object(d["r"])();var oe=ne((function(e,t,a,n,i,r){var c=Object(d["x"])("center");return Object(d["q"])(),Object(d["d"])(d["a"],null,[ie,re,ce,Object(d["g"])(c,null,{default:ne((function(){return[le]})),_:1})],64)})),se={};se.render=oe,se.__scopeId="data-v-199367f7";var ve=se,pe=Object(d["G"])("data-v-963685ca");Object(d["t"])("data-v-963685ca");var ue={class:"about"},be={class:"text"},fe=Object(d["g"])("h2",null,"Hi, my name is Kristine",-1),ge=Object(d["g"])("p",null," I also go by Krissy. I am currently a graduate student. ",-1),he=Object(d["g"])("h2",null,"In the past",-1),me=Object(d["f"])(" I have worked as a "),Oe=Object(d["f"])("Full Stack Software Developer"),je=Object(d["f"])(" at "),ye=Object(d["g"])("a",{href:"https://logosnews.tech/",target:"_blank"},"Logos News LLC",-1),_e=Object(d["f"])(". In a team of 15, I collaborated closely in developing a website that aims to provide a decentralized news platform in the new age of digital media. We used agile software development methods and I found a way to create a more efficient environment by suggesting a new process, which contributed to an "),ke=Object(d["f"])("overall improved structure"),we=Object(d["f"])(" of the virtual meetings. I built a detailed endorsement feature that specifies author ratings based on knowledge and skills by designing the user interface, analyzing data, and creating the algorithm. The goal was to improve the schema structure and integrate a detailed system. "),Se=Object(d["f"])(" When I was an "),Ie=Object(d["f"])("Office Manager"),Pe=Object(d["f"])(", I managed accounting and project management systems for multimillion-dollar operations through timely reporting, analytics, and execution of strategy that "),Ce=Object(d["f"])("increased productivity by 50%"),Te=Object(d["f"])(". I led external financial audit reviews and prepared financial statements to assist external CPA. "),xe=Object(d["f"])(" After undergrad, I started as an "),Re=Object(d["f"])("Accounting Specialist"),Ae=Object(d["f"])(". I performed full cycle accounting and prepared month-end close through bank account reconciliations, general ledgers, and financial statement review and analysis. Through my documentation and creation of organization functions, I was able to "),Ne=Object(d["f"])("improve efficiency by 40%"),De=Object(d["f"])(". Weekly, I processed timecards, payroll, garnishments, and Certified Payroll and DIR Reports. I also created and ensured accurate reports of monthly union fringes for prevailing wage jobs. "),Le=Object(d["f"])(" I have demonstrated leadership, time management, and planning skills from being the "),Me=Object(d["f"])("Vice President of Finance"),Ge=Object(d["f"])(" at University of California Riverside. I lead and supervised a team of 5 and I created timelines and annual budgets. We held weekly goal-setting meetings that I prepared for and facilitated. I "),qe=Object(d["f"])("raised $20,000"),Fe=Object(d["f"])(" towards the Alzheimer's Disease Research through a large organized event with an attendance of about 200 people. "),Be=Object(d["f"])(" As a "),Ue=Object(d["f"])("Social Media Marketing Intern"),Ee=Object(d["f"])(" for "),He=Object(d["g"])("a",{href:"https://CollegeFashionista.com",target:"_blank"},"CollegeFashionista",-1),Ve=Object(d["f"])(", I contributed original content about the latest fashion trends to inspire over 33,000 college-aged followers. I designed and photographed stylish outfits to include in original article posts. I published articles and met monthly deadlines. Due to my diligence and success, I was fortunate enough to have been chosen to participate in their Ulta collaboration and was "),$e=Object(d["f"])("featured in "),Ke=Object(d["g"])("a",{href:"https://www.collegefashionista.com/ulta-beauty-2/",target:"_blank"},"this article",-1),ze=Object(d["f"])(". "),Je=Object(d["g"])("p",null," I am self-motivated and my problems solving skills were gained from my own projects as well as hackathon projects. ",-1),We=Object(d["g"])("p",null," I have professional experience with Angular, TypeScript, Trello, and version control software Git. I have academic knowledge of HTML/CSS, JavaScript, C, Ruby on Rails, Amazon Web Services, Python, Java, and virtual network Mininet. ",-1),Ye=Object(d["g"])("p",null," I am proficient in Adobe Photoshop, Premiere Pro, and Illustrator. ",-1),Xe=Object(d["g"])("p",null," I have completed courses related to databases and algorithms. ",-1),Qe=Object(d["g"])("h2",null,"Right now",-1),Ze=Object(d["g"])("p",null," I am actively applying to internships and jobs and prepping and studying for interviews. ",-1),et=Object(d["g"])("p",null," I am learning how to code in C, Python, and Java through various university classes and R and C++ in my free time. ",-1),tt=Object(d["f"])(" I am also "),at=Object(d["f"])("contributing to open source projects"),dt=Object(d["f"])(" and working on more personal projects to learn more languages and expand my programming knowledge and skills. "),nt=Object(d["f"])(" I am a member of "),it=Object(d["f"])("Society of Women Engineers"),rt=Object(d["f"])(". "),ct=Object(d["e"])('<h2 data-v-963685ca>On my free time</h2><p data-v-963685ca> I like to read, draw, film, snowboard, camp, and travel. </p><p data-v-963685ca> My favorite <a href="https://www.goodreads.com/user/show/6712300-kristine" target="_blank" data-v-963685ca>reads</a> are: <ul data-v-963685ca><li data-v-963685ca>Fahrenheit 451 by Ray Bradbury</li><li data-v-963685ca>1984 by George Orwell</li><li data-v-963685ca>The Giver by Lois Lowry</li></ul></p><h2 data-v-963685ca>Licenses and Certificates</h2><p data-v-963685ca> Licenses: <ul data-v-963685ca><li data-v-963685ca>California Notary Public, 2019-2023</li></ul></p><p data-v-963685ca> Certificates: <ul data-v-963685ca><li data-v-963685ca><a href="./Legaspi_Kristine_CS50x.pdf" target="_blank" data-v-963685ca>CS50 - Harvard University, 2020</a></li><li data-v-963685ca><a href="./Legaspi_Kristine_SMC_Certificate2.pdf" target="_blank" data-v-963685ca>Entry Level Programmer - Santa Monica College, 2020</a></li></ul></p>',6);Object(d["r"])();var lt=pe((function(e,t,a,n,i,r){var c=Object(d["x"])("p1");return Object(d["q"])(),Object(d["d"])("div",ue,[Object(d["g"])("div",be,[Object(d["g"])("body",null,[fe,ge,he,Object(d["g"])("p",null,[me,Object(d["g"])(c,null,{default:pe((function(){return[Oe]})),_:1}),je,ye,_e,Object(d["g"])(c,null,{default:pe((function(){return[ke]})),_:1}),we]),Object(d["g"])("p",null,[Se,Object(d["g"])(c,null,{default:pe((function(){return[Ie]})),_:1}),Pe,Object(d["g"])(c,null,{default:pe((function(){return[Ce]})),_:1}),Te]),Object(d["g"])("p",null,[xe,Object(d["g"])(c,null,{default:pe((function(){return[Re]})),_:1}),Ae,Object(d["g"])(c,null,{default:pe((function(){return[Ne]})),_:1}),De]),Object(d["g"])("p",null,[Le,Object(d["g"])(c,null,{default:pe((function(){return[Me]})),_:1}),Ge,Object(d["g"])(c,null,{default:pe((function(){return[qe]})),_:1}),Fe]),Object(d["g"])("p",null,[Be,Object(d["g"])(c,null,{default:pe((function(){return[Ue]})),_:1}),Ee,He,Ve,Object(d["g"])(c,null,{default:pe((function(){return[$e,Ke]})),_:1}),ze]),Je,We,Ye,Xe,Qe,Ze,et,Object(d["g"])("p",null,[tt,Object(d["g"])(c,null,{default:pe((function(){return[at]})),_:1}),dt]),Object(d["g"])("p",null,[nt,Object(d["g"])(c,null,{default:pe((function(){return[it]})),_:1}),rt]),ct])])])})),ot={};a("5a23");ot.render=lt,ot.__scopeId="data-v-963685ca";var st=ot,vt=Object(d["G"])("data-v-3eb012a9"),pt=vt((function(e,t,a,n,i,r){var c=Object(d["x"])("Submit");return Object(d["q"])(),Object(d["d"])(c)})),ut=Object(d["G"])("data-v-947a664e");Object(d["t"])("data-v-947a664e");var bt={class:"half left cf"},ft={class:"half right cf"},gt=Object(d["g"])("button",{type:"submit",value:"Submit",id:"input-submit"},"Submit",-1);Object(d["r"])();var ht=ut((function(e,t,a,n,i,r){return Object(d["q"])(),Object(d["d"])("form",{onSubmit:t[5]||(t[5]=Object(d["F"])((function(){return r.submitForm&&r.submitForm.apply(r,arguments)}),["prevent"])),class:"cf"},[Object(d["g"])("div",bt,[Object(d["E"])(Object(d["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.fullname=t}),id:"input-name",placeholder:"Full Name"},null,512),[[d["B"],e.fullname]]),Object(d["E"])(Object(d["g"])("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.email=t}),id:"input-email",placeholder:"E-mail Address"},null,512),[[d["B"],e.email]])]),Object(d["g"])("div",ft,[Object(d["E"])(Object(d["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.subject=t}),id:"input-subject",placeholder:"Subject"},null,512),[[d["B"],e.subject]]),Object(d["E"])(Object(d["g"])("textarea",{name:"message","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.message=t}),type:"text",id:"input-message",placeholder:"Message"},null,512),[[d["B"],e.message]])]),gt],32)})),mt=a("b5ae"),Ot={name:"Submit",data:function(){return{fullname:"",email:"",subject:"",message:""}},validations:{fullname:{required:mt["required"],alpha:mt["alpha"]},email:{required:mt["required"],email:mt["email"]},subject:{required:mt["required"]},message:{required:mt["required"]}},methods:{resetData:function(){this.fullname="",this.email="",this.subject="",this.message=""},submitForm:function(){this.$v.$touch(),this.$v.$pendding||this.$v.$error||(alert("Data Submitted"),this.$v.$reset(),this.resetData())}}};a("884f");Ot.render=ht,Ot.__scopeId="data-v-947a664e";var jt=Ot,yt={name:"Contact",components:{Submit:jt}};yt.render=pt,yt.__scopeId="data-v-3eb012a9";var _t=yt,kt=[{path:"/",name:"Home",component:V},{path:"/portfolio",name:"Portfolio",component:W},{path:"/shop",name:"Shop",component:de},{path:"/blog",name:"Blog",component:ve},{path:"/about",name:"About",component:st},{path:"/contact",name:"Contact",component:_t}],wt=Object(C["a"])({history:Object(C["b"])("/"),routes:kt}),St=wt,It=a("1dce"),Pt=a.n(It),Ct=a("bc3a"),Tt=a.n(Ct);Object(d["c"])(P).use(St).mount("#app"),d["default"].use(Pt.a),d["default"].prototype.$http=Tt.a},"5a23":function(e,t,a){"use strict";a("f2d6")},"60dc":function(e,t,a){"use strict";a("4fa2")},"704a":function(e,t,a){},"884f":function(e,t,a){"use strict";a("399a")},c37f:function(e,t,a){"use strict";a("3792")},c3ea:function(e,t,a){},d76d:function(e,t,a){"use strict";a("e416")},e2e7:function(e,t,a){"use strict";a("37d6")},e416:function(e,t,a){},e962:function(e,t,a){e.exports=a.p+"img/profile-zoom.2d32bd4b.jpg"},edf3:function(e,t,a){"use strict";a("704a")},f2d6:function(e,t,a){}});
//# sourceMappingURL=app.d9cb4c19.js.map