(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1872],{9803:function(e,s,t){Promise.resolve().then(t.bind(t,6904))},7818:function(e,s,t){"use strict";t.d(s,{default:function(){return l.a}});var i=t(551),l=t.n(i)},7138:function(e,s,t){"use strict";t.d(s,{default:function(){return l.a}});var i=t(231),l=t.n(i)},551:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return a}});let i=t(9920);t(7437),t(2265);let l=i._(t(148));function a(e,s){var t;let i={loading:e=>{let{error:s,isLoading:t,pastDelay:i}=e;return null}};"function"==typeof e&&(i.loader=e);let a={...i,...s};return(0,l.default)({...a,modules:null==(t=a.loadableGenerated)?void 0:t.modules})}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},912:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let i=t(5592);function l(e){let{reason:s,children:t}=e;if("undefined"==typeof window)throw new i.BailoutToCSRError(s);return t}},148:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return c}});let i=t(7437),l=t(2265),a=t(912),n=t(1481);function r(e){return{default:e&&"default"in e?e.default:e}}let d={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},c=function(e){let s={...d,...e},t=(0,l.lazy)(()=>s.loader().then(r)),c=s.loading;function o(e){let r=c?(0,i.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,d=s.ssr?(0,i.jsxs)(i.Fragment,{children:["undefined"==typeof window?(0,i.jsx)(n.PreloadCss,{moduleIds:s.modules}):null,(0,i.jsx)(t,{...e})]}):(0,i.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(t,{...e})});return(0,i.jsx)(l.Suspense,{fallback:r,children:d})}return o.displayName="LoadableComponent",o}},1481:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"PreloadCss",{enumerable:!0,get:function(){return a}});let i=t(7437),l=t(8512);function a(e){let{moduleIds:s}=e;if("undefined"!=typeof window)return null;let t=(0,l.getExpectedRequestStore)("next/dynamic css"),a=[];if(t.reactLoadableManifest&&s){let e=t.reactLoadableManifest;for(let t of s){if(!e[t])continue;let s=e[t].files.filter(e=>e.endsWith(".css"));a.push(...s)}}return 0===a.length?null:(0,i.jsx)(i.Fragment,{children:a.map(e=>(0,i.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},6904:function(e,s,t){"use strict";var i=t(7437),l=t(44),a=t(7362),n=t(3475),r=t(7138);t(2265);let d=(0,t(7818).default)(()=>t.e(6879).then(t.bind(t,6879)),{loadableGenerated:{webpack:()=>[6879]},ssr:!1});s.default=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.default,{links:"home",title:"Wishlist"}),(0,i.jsx)("div",{className:"page-content-wrapper",children:(0,i.jsx)("div",{className:"py-3",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"section-heading d-flex align-items-center justify-content-between rtl-flex-d-row-r",children:[(0,i.jsx)("h6",{children:"Wishlist Items"}),(0,i.jsxs)("div",{className:"layout-options",children:[(0,i.jsx)(r.default,{className:"active",href:"/wishlist-grid",children:(0,i.jsx)("i",{className:"ti ti-border-all"})}),(0,i.jsx)(r.default,{href:"/wishlist-list",children:(0,i.jsx)("i",{className:"ti ti-list-check"})})]})]}),(0,i.jsxs)("div",{className:"row g-2 rtl-flex-d-row-r",children:[l.Z.map((e,s)=>(0,i.jsx)("div",{className:"col-6 col-md-4",children:(0,i.jsx)("div",{className:"card product-card",children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("span",{className:"badge rounded-pill badge-".concat(e.badge_color),children:e.badge_text}),(0,i.jsx)("a",{className:"delete-btn",href:"#",children:(0,i.jsx)("i",{className:"ti ti-trash"})}),(0,i.jsxs)(r.default,{className:"product-thumbnail d-block",href:"/single-product",children:[(0,i.jsx)("img",{className:"mb-2",src:e.img,alt:""}),0===s||3===s?(0,i.jsx)("ul",{className:"offer-countdown-timer d-flex align-items-center shadow-sm",children:(0,i.jsx)(d,{})}):null]}),(0,i.jsx)(r.default,{className:"product-title",href:"/single-product",children:e.title}),(0,i.jsxs)("p",{className:"sale-price",children:["$ ",e.new_price,(0,i.jsxs)("span",{children:["$ ",e.old_price]})]}),(0,i.jsxs)("div",{className:"product-rating",children:[(0,i.jsx)("i",{className:"ti ti-star-filled"}),(0,i.jsx)("i",{className:"ti ti-star-filled"}),(0,i.jsx)("i",{className:"ti ti-star-filled"}),(0,i.jsx)("i",{className:"ti ti-star-filled"}),(0,i.jsx)("i",{className:"ti ti-star-filled"})]}),(0,i.jsx)("a",{className:"btn btn-primary btn-sm",href:"#",children:(0,i.jsx)("i",{className:"ti ti-plus"})})]})})},s)),(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"select-all-products-btn mt-2",children:(0,i.jsxs)("a",{className:"btn btn-primary btn-lg w-100",href:"#",children:[(0,i.jsx)("i",{className:"ti ti-circle-check me-1 h6"}),"Add all items to cart"]})})})]})]})})}),(0,i.jsx)(a.Z,{})]})},3437:function(e,s,t){"use strict";var i=t(7437),l=t(7138);t(2265),s.Z=e=>{let{handleShow:s,show:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"offcanvas offcanvas-start suha-offcanvas-wrap ".concat(t?"show":""),tabIndex:-1,id:"suhaOffcanvas","aria-labelledby":"suhaOffcanvasLabel",children:[(0,i.jsx)("button",{onClick:s,className:"btn-close btn-close-white",type:"button"}),(0,i.jsxs)("div",{className:"offcanvas-body",children:[(0,i.jsxs)("div",{className:"sidenav-profile",children:[(0,i.jsx)("div",{className:"user-profile",children:(0,i.jsx)("img",{src:"/assets/img/bg-img/9.jpg",alt:""})}),(0,i.jsxs)("div",{className:"user-info",children:[(0,i.jsx)("h5",{className:"user-name mb-1 text-white",children:"Suha Sarah"}),(0,i.jsxs)("p",{className:"available-balance text-white",children:["Current Balance $",(0,i.jsx)("span",{className:"counter",children:"99"})]})]})]}),(0,i.jsxs)("ul",{className:"sidenav-nav ps-0",children:[(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/profile",children:[(0,i.jsx)("i",{className:"ti ti-user"}),"My Profile"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/notifications",children:[(0,i.jsx)("i",{className:"ti ti-bell-ringing lni-tada-effect"}),"Notifications",(0,i.jsx)("span",{className:"ms-1 badge badge-warning",children:"3"})]})}),(0,i.jsxs)("li",{className:"suha-dropdown-menu",children:[(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("i",{className:"ti ti-building-store"}),"Shop Pages"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/shop-grid",children:"Shop Grid"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/shop-list",children:"Shop List"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/single-product",children:"Product Details"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/featured-products",children:"Featured Products"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/flash-sale",children:"Flash Sale"})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/pages",children:[(0,i.jsx)("i",{className:"ti ti-notebook"}),"All Pages"]})}),(0,i.jsxs)("li",{className:"suha-dropdown-menu",children:[(0,i.jsxs)(l.default,{href:"/wishlist-grid",children:[(0,i.jsx)("i",{className:"ti ti-heart"}),"My Wishlist"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/wishlist-grid",children:"Wishlist Grid"})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.default,{href:"/wishlist-list",children:"Wishlist List"})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/settings",children:[(0,i.jsx)("i",{className:"ti ti-adjustments-horizontal"}),"Settings"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/intro",children:[(0,i.jsx)("i",{className:"ti ti-logout"}),"Sign Out"]})})]})]})]})})}},44:function(e,s){"use strict";s.Z=[{id:1,badge_color:"warning",badge_text:"Sale",img:"/assets/img/product/11.png",title:"Beach Cap",new_price:13,old_price:42,ratting:5},{id:2,badge_color:"success",badge_text:"New",img:"/assets/img/product/5.png",title:"Wooden Sofa",new_price:74,old_price:99,ratting:5},{id:3,badge_color:"success",badge_text:"New",img:"/assets/img/product/6.png",title:"Roof Lamp",new_price:99,old_price:113,ratting:5},{id:4,badge_color:"danger",badge_text:"-18%",img:"/assets/img/product/9.png",title:"Sneaker Shoes",new_price:87,old_price:92,ratting:5},{id:5,badge_color:"danger",badge_text:"-11%",img:"/assets/img/product/8.png",title:"Wooden Chair",new_price:21,old_price:25,ratting:5},{id:6,badge_color:"warning",badge_text:"On Sale",img:"/assets/img/product/4.png",title:"Polo Shirts",new_price:38,old_price:41,ratting:5}]},7362:function(e,s,t){"use strict";var i=t(7437),l=t(7138);t(2265),s.Z=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"footer-nav-area",id:"footerNav",children:(0,i.jsx)("div",{className:"suha-footer-nav",children:(0,i.jsxs)("ul",{className:"h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r",children:[(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/home",children:[(0,i.jsx)("i",{className:"ti ti-home"}),"Home"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/message",children:[(0,i.jsx)("i",{className:"ti ti-message"}),"Chat"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/cart",children:[(0,i.jsx)("i",{className:"ti ti-basket"}),"Cart"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/settings",children:[(0,i.jsx)("i",{className:"ti ti-settings"}),"Settings"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(l.default,{href:"/pages",children:[(0,i.jsx)("i",{className:"ti ti-heart"}),"Pages"]})})]})})})})},3475:function(e,s,t){"use strict";var i=t(7437),l=t(7138),a=t(2265),n=t(3437);s.default=e=>{let{links:s,title:t}=e,[r,d]=(0,a.useState)(!1),c=()=>d(!r);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"header-area",id:"headerArea",children:(0,i.jsxs)("div",{className:"container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r",children:[(0,i.jsx)("div",{className:"back-button me-2",children:(0,i.jsx)(l.default,{href:"/".concat(s),children:(0,i.jsx)("i",{className:"ti ti-arrow-left"})})}),(0,i.jsx)("div",{className:"page-heading",children:(0,i.jsx)("h6",{className:"mb-0",children:t})}),(0,i.jsx)("div",{className:"suha-navbar-toggler ms-2","data-bs-toggle":"offcanvas","data-bs-target":"#suhaOffcanvas","aria-controls":"suhaOffcanvas",children:(0,i.jsxs)("div",{onClick:()=>c(),children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})})]})}),(0,i.jsx)(n.Z,{handleShow:c,show:r})]})}}},function(e){e.O(0,[231,2971,7023,1744],function(){return e(e.s=9803)}),_N_E=e.O()}]);