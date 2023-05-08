"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[531],{2531:(e,a,l)=>{l.d(a,{Z:()=>Q});var n=l(6252),t=l(3577),o=l(2262),s=l(8090);const i={class:"footer"},u=["innerHTML"],r=(0,n.aZ)({__name:"Footer",setup(e){const a=(0,s.X6)().value.footer;return(e,l)=>((0,n.wg)(),(0,n.iD)("footer",i,[(0,n._)("span",{innerHTML:(0,o.SU)(a)},null,8,u)]))}});var c=l(9963);const v=["title"],d=(0,n.aZ)({__name:"ToggleColorModeButton",setup(e){const a=["light","dark","auto"],l=(0,s.X6)(),{currentMode:t}=(0,s.vs)(),i=()=>{const e=(a.indexOf(t.value)+1)%a.length;t.value=a[e]};return(e,a)=>{const s=(0,n.up)("VIcon");return(0,n.wg)(),(0,n.iD)("div",{title:(0,o.SU)(l).toggleColorMode,onClick:i},[(0,n.wy)((0,n.Wm)(s,{name:"fa-sun"},null,512),[[c.F8,"light"===(0,o.SU)(t)]]),(0,n.wy)((0,n.Wm)(s,{name:"fa-moon"},null,512),[[c.F8,"dark"===(0,o.SU)(t)]]),(0,n.wy)((0,n.Wm)(s,{name:"fa-magic"},null,512),[[c.F8,"auto"===(0,o.SU)(t)]])],8,v)}}}),g=["title"],m=(0,n.aZ)({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const a=(0,s.X6)();return(e,l)=>{const t=(0,n.up)("VIcon");return(0,n.wg)(),(0,n.iD)("div",{class:"toggle-sidebar-button",title:(0,o.SU)(a).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=a=>e.$emit("toggle"))},[(0,n.Wm)(t,{name:"bi-layout-sidebar-inset"})],8,g)}}}),p={class:"menu-btn-wrapper"},b={class:"menu-btn-icon"},h=[(0,n._)("span",null,null,-1),(0,n._)("span",null,null,-1),(0,n._)("span",null,null,-1)],w={class:"menu-progress"},k={class:"menu-btn-child-wrapper"},_=(0,n.aZ)({__name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(e){const a=(0,s.X6)(),l=(0,o.qj)({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});(0,n.bv)((()=>{window.addEventListener("scroll",i)})),(0,n.Jd)((()=>{window.removeEventListener("scroll",i)}));const i=()=>{let e=window.pageYOffset/(g()-document.documentElement.clientHeight)*100;e>100&&(e=100),isNaN(e)||Math.round(e)<=0?(e=0,l.isTextVisible=!1,l.isBtnIconVisible=!0):(l.isTextVisible=!0,l.menuText=Math.round(e)+"%",l.isBtnIconVisible=!1),l.borderLen=3.1415926*(e||0)+"% 314.15926%"},u=()=>{l.isMenuOpen=!l.isMenuOpen},r=()=>{window.scrollTo({top:0,behavior:"smooth"})},v=()=>{window.scrollTo({top:g(),behavior:"smooth"})},g=()=>{const e=document.querySelector(".theme-container");return e?e.offsetHeight:0},_=(0,s.r5)();return(e,s)=>{const i=(0,n.up)("VIcon");return(0,n.wg)(),(0,n.iD)("div",{class:(0,t.C_)(["menu-btn-container",{open:l.isMenuOpen}])},[(0,n._)("div",p,[(0,n._)("div",{class:"menu-btn",onClick:u},[(0,n.wy)((0,n._)("div",b,h,512),[[c.F8,l.isBtnIconVisible]]),(0,n.wy)((0,n._)("div",{class:"menu-text"},(0,t.zw)(l.menuText),513),[[c.F8,l.isTextVisible]]),((0,n.wg)(),(0,n.iD)("svg",w,[(0,n._)("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:(0,t.j5)({"stroke-dasharray":l.borderLen})},null,4)]))]),(0,n._)("div",k,[(0,o.SU)(a).colorModeSwitch?((0,n.wg)(),(0,n.j4)(d,{key:0,class:"menu-btn-child"})):(0,n.kq)("",!0),(0,n._)("div",{class:"menu-btn-child",onClick:v},[(0,n.Wm)(i,{name:"fa-chevron-down"})]),(0,n._)("div",{class:"menu-btn-child",onClick:r},[(0,n.Wm)(i,{name:"fa-chevron-up"})]),(0,o.SU)(_)?((0,n.wg)(),(0,n.iD)("div",{key:1,class:"menu-btn-child menu-toc-btn",onClick:s[0]||(s[0]=a=>e.$emit("toggle-catalog"))},[(0,n.Wm)(i,{name:"fa-list-ul"})])):(0,n.kq)("",!0),(0,n.Wm)(m,{class:"menu-btn-child menu-btn-sidebar",onToggle:s[1]||(s[1]=a=>e.$emit("toggle-sidebar"))})])])],2)}}});var y=l(6938);const S=(0,n.aZ)({__name:"DropdownTransition",setup(e){const a=e=>{e.style.height=e.scrollHeight+"px"},l=e=>{e.style.height=""};return(e,t)=>((0,n.wg)(),(0,n.j4)(c.uT,{name:"dropdown",onEnter:a,onAfterEnter:l,onBeforeLeave:a},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3}))}});var f=l(2201);const U=["aria-label"],I={class:"title"},x={key:0,class:"nav-icon"},W=(0,n._)("span",{class:"arrow down"},null,-1),T=["aria-label"],D={class:"title"},F={key:0,class:"nav-icon"},C={class:"navbar-dropdown"},$={class:"navbar-dropdown-subtitle"},H={key:1},L={class:"navbar-navbar-dropdown-subitem-wrapper"},q=(0,n.aZ)({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const a=e,{item:l}=(0,o.BK)(a),s=(0,n.Fl)((()=>l.value.ariaLabel||l.value.text)),i=(0,o.iH)(!1),u=(0,f.yj)();(0,n.YP)((()=>u.path),(()=>{i.value=!1}));const r=e=>{const a=0===e.detail;i.value=!!a&&!i.value},v=(e,a)=>a[a.length-1]===e;return(e,a)=>{const u=(0,n.up)("VIcon");return(0,n.wg)(),(0,n.iD)("div",{class:(0,t.C_)(["navbar-dropdown-wrapper",{open:i.value}])},[(0,n._)("button",{class:"navbar-dropdown-title",type:"button","aria-label":(0,o.SU)(s),onClick:r},[(0,n._)("span",I,[(0,o.SU)(l).icon?((0,n.wg)(),(0,n.iD)("span",x,[(0,n.Wm)(u,{name:(0,o.SU)(l).icon},null,8,["name"])])):(0,n.kq)("",!0),(0,n._)("span",null,(0,t.zw)((0,o.SU)(l).text),1)]),W],8,U),(0,n._)("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":(0,o.SU)(s),onClick:a[0]||(a[0]=e=>i.value=!i.value)},[(0,n._)("span",D,[(0,o.SU)(l).icon?((0,n.wg)(),(0,n.iD)("span",F,[(0,n.Wm)(u,{name:(0,o.SU)(l).icon},null,8,["name"])])):(0,n.kq)("",!0),(0,n._)("span",null,(0,t.zw)((0,o.SU)(l).text),1)]),(0,n._)("span",{class:(0,t.C_)(["arrow",i.value?"down":"right"])},null,2)],8,T),(0,n.Wm)(S,null,{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("ul",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(l).children,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.text,class:"navbar-dropdown-item"},[e.children?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("h4",$,[e.link?((0,n.wg)(),(0,n.j4)(y.Z,{key:0,item:e,onFocusout:a=>v(e,(0,o.SU)(l).children)&&0===e.children.length&&(i.value=!1)},null,8,["item","onFocusout"])):((0,n.wg)(),(0,n.iD)("span",H,(0,t.zw)(e.text),1))]),(0,n._)("ul",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.children,(a=>((0,n.wg)(),(0,n.iD)("li",{key:a.link,class:"navbar-dropdown-subitem"},[(0,n.Wm)(y.Z,{item:a,onFocusout:n=>v(a,e.children)&&v(e,(0,o.SU)(l).children)&&(i.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,n.wg)(),(0,n.j4)(y.Z,{key:1,item:e,onFocusout:a=>v(e,(0,o.SU)(l).children)&&(i.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[c.F8,i.value]])])),_:1})],2)}}});var j=l(4393);const V={key:0,class:"navbar-items"},Z={key:0,class:"navbar-item"},M={key:0,class:"nav-icon"},B=(0,n.aZ)({__name:"NavbarItems",emits:["toggle-search"],setup(e){const a=e=>(0,t.HD)(e)?(0,s.sC)(e):e.children?{...e,children:e.children.map(a)}:e,l=(()=>{const e=(0,s.X6)();return(0,n.Fl)((()=>(e.value.navbar||[]).map(a)))})(),i=(()=>{const e=(0,f.tv)(),a=(0,j.I)(),l=(0,j.I5)(),t=(0,s.X6)();return(0,n.Fl)((()=>{var n,o,s;const i=Object.keys(l.value.locales);if(i.length<2)return[];const u=e.currentRoute.value.path,r=e.currentRoute.value.fullPath,c=e.currentRoute.value.hash;return[{text:null!=(n=t.value.selectLanguageText)?n:"unknown language",ariaLabel:null!=(s=null!=(o=t.value.selectLanguageAriaLabel)?o:t.value.selectLanguageText)?s:"unknown language",icon:t.value.langIcon,children:i.map((n=>{var o,s,i,v,d,g;const m=null!=(s=null==(o=l.value.locales)?void 0:o[n])?s:{},p=null!=(v=null==(i=t.value.locales)?void 0:i[n])?v:{},b=`${m.lang}`,h=null!=(d=p.selectLanguageName)?d:b;let w;if(b===l.value.lang)w=r;else{const l=u.replace(a.value,n);w=e.getRoutes().some((e=>e.path===l))?`${l}${c}`:null!=(g=p.home)?g:n}return{text:h,link:w}}))}]}))})(),u=(0,n.Fl)((()=>[...l.value,...c.value?i.value:[]])),r=(0,j.I2)(),c=(0,n.Fl)((()=>{const e=(0,f.tv)().currentRoute.value.path;return void 0===r.value.layout&&-1===e.indexOf("/page/")&&""!==j.Xp.value.path})),v=(0,s.X6)(),d=(0,n.Fl)((()=>v.value.search&&!1!==r.value.search));return(e,a)=>{const l=(0,n.up)("VIcon");return(0,o.SU)(u).length?((0,n.wg)(),(0,n.iD)("nav",V,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(u),(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.text,class:"navbar-item"},[e.children?((0,n.wg)(),(0,n.j4)(q,{key:0,item:e},null,8,["item"])):((0,n.wg)(),(0,n.j4)(y.Z,{key:1,item:e},null,8,["item"]))])))),128)),(0,o.SU)(d)?((0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("a",{style:{cursor:"pointer"},onClick:a[0]||(a[0]=a=>e.$emit("toggle-search"))},[(0,o.SU)(v).searchIcon?((0,n.wg)(),(0,n.iD)("span",M,[(0,n.Wm)(l,{name:(0,o.SU)(v).searchIcon},null,8,["name"])])):(0,n.kq)("",!0),(0,n._)("span",null,(0,t.zw)((0,o.SU)(v).searchText),1)])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)}}}),X={class:"site-name"},Y=(0,n.aZ)({__name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(e){const a=(0,s.X6)(),l=(0,j.I2)(),i=(0,f.tv)(),u=(0,o.iH)(null),r=(0,o.iH)(null),c=(0,n.Fl)((()=>a.value.home||"/")),v=(0,n.Fl)((()=>a.value.navbarTitle)),d=(0,o.iH)(0),g=(0,n.Fl)((()=>d.value?{maxWidth:d.value+"px"}:{})),m=(0,o.iH)(0),p=(0,o.iH)(!1),b=(0,o.iH)(!1),h=(0,o.iH)(!0),w=()=>{const e=window.pageYOffset;e<m.value?e>0&&p.value?b.value=!0:(b.value=!1,p.value=!1):(b.value=!1,u.value&&e>u.value.offsetHeight&&(p.value=!0)),m.value=e},k=()=>{let e=!1;"HomePage"===l.value.layout&&(e=!0),"Post"===l.value.layout&&l.value.useHeaderImage&&(e=!0),"Tags"===l.value.layout&&a.value.pages&&a.value.pages.tags&&a.value.pages.tags.bgImage&&(e=!0),"Links"===l.value.layout&&a.value.pages&&a.value.pages.links&&a.value.pages.links.bgImage&&(e=!0),h.value=e};let _;function y(e,a){var l,n,t;const o=null==(t=null==(n=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:n.getComputedStyle(e,null))?void 0:t[a],s=Number.parseInt(o,10);return Number.isNaN(s)?0:s}return(0,n.bv)((()=>{const e=y(u.value,"paddingLeft")+y(u.value,"paddingRight"),a=()=>{var a;window.innerWidth<=719||!u.value?d.value=0:d.value=u.value.offsetWidth-e-((null==(a=r.value)?void 0:a.offsetWidth)||0)};a(),window.addEventListener("resize",a,!1),window.addEventListener("orientationchange",a,!1),k(),_=i.afterEach((()=>{k()})),window.addEventListener("scroll",w)})),(0,n.Jd)((()=>{window.removeEventListener("scroll",w),_()})),(a,l)=>{const s=(0,n.up)("RouterLink"),i=(0,n.up)("NavbarSearch");return(0,n.wg)(),(0,n.iD)("header",{ref_key:"navbar",ref:u,class:(0,t.C_)(["navbar",{"is-fixed":p.value||e.isSidebar,"is-visible":b.value||e.isSidebar,invert:h.value}])},[(0,n._)("span",{ref_key:"navbarBrand",ref:r},[(0,n.Wm)(s,{to:(0,o.SU)(c)},{default:(0,n.w5)((()=>[(0,n._)("span",X,(0,t.zw)((0,o.SU)(v)),1)])),_:1},8,["to"])],512),(0,n._)("div",{class:"navbar-items-wrapper",style:(0,t.j5)((0,o.SU)(g))},[(0,n.WI)(a.$slots,"before"),(0,n.Wm)(B,{class:"can-hide",onToggleSearch:l[0]||(l[0]=e=>a.$emit("toggle-search"))}),(0,n.WI)(a.$slots,"after"),(0,n.Wm)(i)],4)],2)}}});var E=l(1673),N=l(8525);const O=["onKeydown"],K={class:"sidebar-item-children"},R=(0,n.aZ)({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(e){const a=e,{item:l,depth:s}=(0,o.BK)(a),i=(0,f.yj)(),u=(0,f.tv)(),r=(0,n.Fl)((()=>(0,N._F)(l.value,i))),v=(0,n.Fl)((()=>({"sidebar-item":!0,"sidebar-heading":0===s.value,active:r.value,collapsible:l.value.collapsible}))),d=(0,n.Fl)((()=>!l.value.collapsible||r.value)),[g,m]=(0,E.OT)(d.value),p=e=>{l.value.collapsible&&(e.preventDefault(),m())},b=u.afterEach((e=>{(0,n.Y3)((()=>{g.value=d.value}))}));return(0,n.Jd)((()=>{b()})),(e,a)=>{var i;const u=(0,n.up)("SidebarItem",!0);return(0,n.wg)(),(0,n.iD)("li",null,[(0,o.SU)(l).link?((0,n.wg)(),(0,n.j4)(y.Z,{key:0,class:(0,t.C_)((0,o.SU)(v)),item:(0,o.SU)(l)},null,8,["class","item"])):((0,n.wg)(),(0,n.iD)("p",{key:1,tabindex:"0",class:(0,t.C_)((0,o.SU)(v)),onClick:p,onKeydown:(0,c.D2)(p,["enter"])},[(0,n.Uk)((0,t.zw)((0,o.SU)(l).text)+" ",1),(0,o.SU)(l).collapsible?((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,t.C_)(["arrow",(0,o.SU)(g)?"down":"right"])},null,2)):(0,n.kq)("",!0)],42,O)),(null==(i=(0,o.SU)(l).children)?void 0:i.length)?((0,n.wg)(),(0,n.j4)(S,{key:2},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("ul",K,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(l).children,(e=>((0,n.wg)(),(0,n.j4)(u,{key:`${(0,o.SU)(s)}${e.text}${e.link}`,item:e,depth:(0,o.SU)(s)+1},null,8,["item","depth"])))),128))],512),[[c.F8,(0,o.SU)(g)]])])),_:1})):(0,n.kq)("",!0)])}}}),z={key:0,class:"sidebar-items"},P=(0,n.aZ)({__name:"SidebarItems",setup(e){const a=(0,f.yj)(),l=(0,s.VU)();return(0,n.bv)((()=>{(0,n.YP)((()=>a.hash),(e=>{const l=document.querySelector(".sidebar");if(!l)return;const n=document.querySelector(`.sidebar a.sidebar-item[href="${a.path}${e}"]`);if(!n)return;const{top:t,height:o}=l.getBoundingClientRect(),{top:s,height:i}=n.getBoundingClientRect();s<t?n.scrollIntoView(!0):s+i>t+o&&n.scrollIntoView(!1)}))})),(e,a)=>(0,o.SU)(l).length?((0,n.wg)(),(0,n.iD)("ul",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(l),(e=>((0,n.wg)(),(0,n.j4)(R,{key:`${e.text}${e.link}`,item:e},null,8,["item"])))),128))])):(0,n.kq)("",!0)}}),A={class:"sidebar"},J=(0,n.aZ)({__name:"Sidebar",emits:["toggle-search"],setup:e=>(e,a)=>((0,n.wg)(),(0,n.iD)("aside",A,[(0,n.Wm)(B,{onToggleSearch:a[0]||(a[0]=a=>e.$emit("toggle-search"))}),(0,n.WI)(e.$slots,"top"),(0,n.Wm)(P),(0,n.WI)(e.$slots,"bottom")]))}),G={class:"page-content"},Q=(0,n.aZ)({__name:"Common",setup(e){const a=(0,j.I2)(),l=(0,s.X6)(),i=(0,f.tv)(),u=(0,n.Fl)((()=>!1!==a.value.navbar&&!1!==l.value.navbar)),c=(0,n.Fl)((()=>""===j.Xp.value.path)),v=(0,s.VU)(),d=(0,n.Fl)((()=>v.value.length>0&&!c.value)),g=(0,o.iH)(!1),m=e=>{g.value="boolean"==typeof e?e:!g.value},p={x:0,y:0},b=e=>{p.x=e.changedTouches[0].clientX,p.y=e.changedTouches[0].clientY},h=e=>{const a=e.changedTouches[0].clientX-p.x,l=e.changedTouches[0].clientY-p.y;Math.abs(a)>Math.abs(l)&&Math.abs(a)>40&&(a>0&&p.x<=80?m(!0):m(!1))},w=(0,o.iH)(!1),k=e=>{w.value="boolean"==typeof e?e:!w.value;const a=document.querySelector("html");w.value?null==a||a.classList.add("fixed"):null==a||a.classList.remove("fixed"),w.value&&setTimeout((function(){document.querySelector(".search-page input").focus()}),400)},y=(0,o.iH)(!1),S=e=>{y.value="boolean"==typeof e?e:!y.value},U=(0,n.Fl)((()=>[{"no-navbar":!u.value,"no-sidebar":!d.value,"sidebar-open":g.value,"catalog-open":y.value,"search-open":w.value},a.value.pageClass]));let I;return(0,n.bv)((()=>{I=i.afterEach((()=>{m(!1),k(!1)}))})),(0,n.Ah)((()=>{I()})),(e,a)=>{const l=(0,n.up)("GungnirSearchPage");return(0,n.wg)(),(0,n.iD)("div",{class:(0,t.C_)(["theme-container",(0,o.SU)(U)]),onTouchstart:b,onTouchend:h},[(0,n.WI)(e.$slots,"navbar",{},(()=>[(0,o.SU)(u)?((0,n.wg)(),(0,n.j4)(Y,{key:0,"is-sidebar":(0,o.SU)(d),onToggleSearch:a[0]||(a[0]=e=>k(!0))},{before:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"navbar-before")])),after:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"navbar-after")])),_:3},8,["is-sidebar"])):(0,n.kq)("",!0)])),(0,n._)("div",{class:"sidebar-mask",onClick:a[1]||(a[1]=e=>m(!1))}),(0,n.WI)(e.$slots,"sidebar",{},(()=>[(0,n.Wm)(J,{onToggleSearch:a[2]||(a[2]=e=>k(!0))},{top:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"sidebar-top")])),bottom:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"sidebar-bottom")])),_:3})])),(0,n._)("div",G,[(0,n.WI)(e.$slots,"page")]),(0,n.Wm)(l,{onToggleSearch:a[3]||(a[3]=e=>k(!1))}),(0,n.Wm)(_,{onToggleSidebar:m,onToggleCatalog:S}),(0,o.SU)(d)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(r,{key:0}))],34)}}})}}]);