(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4967],{8853:function(e,s,t){Promise.resolve().then(t.bind(t,7044))},1013:function(e,s,t){"use strict";t.d(s,{s:function(){return a}});let a="/frontend/suha-nextjs/out"},7818:function(e,s,t){"use strict";t.d(s,{default:function(){return i.a}});var a=t(551),i=t.n(a)},551:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return l}});let a=t(9920);t(7437),t(2265);let i=a._(t(148));function l(e,s){var t;let a={loading:e=>{let{error:s,isLoading:t,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e);let l={...a,...s};return(0,i.default)({...l,modules:null==(t=l.loadableGenerated)?void 0:t.modules})}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},912:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let a=t(5592);function i(e){let{reason:s,children:t}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(s);return t}},148:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return d}});let a=t(7437),i=t(2265),l=t(912),n=t(1481);function r(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(r(()=>null)),loading:null,ssr:!0},d=function(e){let s={...c,...e},t=(0,i.lazy)(()=>s.loader().then(r)),d=s.loading;function o(e){let r=d?(0,a.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,c=s.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(n.PreloadCss,{moduleIds:s.modules}):null,(0,a.jsx)(t,{...e})]}):(0,a.jsx)(l.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(t,{...e})});return(0,a.jsx)(i.Suspense,{fallback:r,children:c})}return o.displayName="LoadableComponent",o}},1481:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"PreloadCss",{enumerable:!0,get:function(){return l}});let a=t(7437),i=t(8512);function l(e){let{moduleIds:s}=e;if("undefined"!=typeof window)return null;let t=(0,i.getExpectedRequestStore)("next/dynamic css"),l=[];if(t.reactLoadableManifest&&s){let e=t.reactLoadableManifest;for(let t of s){if(!e[t])continue;let s=e[t].files.filter(e=>e.endsWith(".css"));l.push(...s)}}return 0===l.length?null:(0,a.jsx)(a.Fragment,{children:l.map(e=>(0,a.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},7044:function(e,s,t){"use strict";var a=t(7437),i=t(44),l=t(7362),n=t(7052),r=t(7138);t(2265);let c=(0,t(7818).default)(()=>t.e(6879).then(t.bind(t,6879)),{loadableGenerated:{webpack:()=>[6879]},ssr:!1});s.default=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{links:"catagory",title:"Clothing"}),(0,a.jsxs)("div",{className:"page-content-wrapper",children:[(0,a.jsx)("div",{className:"pt-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"catagory-single-img",style:{backgroundImage:"url(/assets/img/bg-img/5.jpg)"}})})}),(0,a.jsx)("div",{className:"top-products-area py-3",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"section-heading rtl-text-right",children:(0,a.jsx)("h6",{children:"Sub Catagory Products"})}),(0,a.jsxs)("div",{className:"row g-2 rtl-flex-d-row-r",children:[i.Z.map((e,s)=>(0,a.jsx)("div",{className:"col-6 col-md-4",children:(0,a.jsx)("div",{className:"card product-card",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("span",{className:"badge rounded-pill badge-".concat(e.badge_color),children:e.badge_text}),(0,a.jsx)("a",{className:"wishlist-btn",href:"#",children:(0,a.jsx)("i",{className:"ti ti-heart"})}),(0,a.jsxs)(r.default,{className:"product-thumbnail d-block",href:"/single-product",children:[(0,a.jsx)("img",{className:"mb-2",src:e.img,alt:""}),0===s||3===s?(0,a.jsx)("ul",{className:"offer-countdown-timer d-flex align-items-center shadow-sm",children:(0,a.jsx)(c,{})}):null]}),(0,a.jsx)(r.default,{className:"product-title",href:"/single-product",children:e.title}),(0,a.jsxs)("p",{className:"sale-price",children:["$ ",e.new_price,(0,a.jsxs)("span",{children:["$ ",e.old_price]})]}),(0,a.jsxs)("div",{className:"product-rating",children:[(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"})]}),(0,a.jsx)("a",{className:"btn btn-primary btn-sm",href:"#",children:(0,a.jsx)("i",{className:"ti ti-plus"})})]})})},s)),i.Z.map((e,s)=>(0,a.jsx)("div",{className:"col-6 col-md-4",children:(0,a.jsx)("div",{className:"card product-card",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("span",{className:"badge rounded-pill badge-".concat(e.badge_color),children:e.badge_text}),(0,a.jsx)("a",{className:"wishlist-btn",href:"#",children:(0,a.jsx)("i",{className:"ti ti-heart"})}),(0,a.jsxs)(r.default,{className:"product-thumbnail d-block",href:"/single-product",children:[(0,a.jsx)("img",{className:"mb-2",src:e.img,alt:""}),0===s||3===s?(0,a.jsx)("ul",{className:"offer-countdown-timer d-flex align-items-center shadow-sm",children:(0,a.jsx)(c,{})}):null]}),(0,a.jsx)(r.default,{className:"product-title",href:"/single-product",children:e.title}),(0,a.jsxs)("p",{className:"sale-price",children:["$ ",e.new_price,(0,a.jsxs)("span",{children:["$ ",e.old_price]})]}),(0,a.jsxs)("div",{className:"product-rating",children:[(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"}),(0,a.jsx)("i",{className:"ti ti-star-filled"})]}),(0,a.jsx)("a",{className:"btn btn-primary btn-sm",href:"#",children:(0,a.jsx)("i",{className:"ti ti-plus"})})]})})},s))]})]})})]}),(0,a.jsx)("div",{className:"internet-connection-status",id:"internetStatus"}),(0,a.jsx)(l.Z,{})]})},44:function(e,s,t){"use strict";var a=t(1013);let i=[{id:1,badge_color:"warning",badge_text:"Sale",img:"".concat(a.s,"/assets/img/product/11.png"),title:"Beach Cap",new_price:13,old_price:42,ratting:5},{id:2,badge_color:"success",badge_text:"New",img:"".concat(a.s,"/assets/img/product/5.png"),title:"Wooden Sofa",new_price:74,old_price:99,ratting:5},{id:3,badge_color:"success",badge_text:"New",img:"".concat(a.s,"/assets/img/product/6.png"),title:"Roof Lamp",new_price:99,old_price:113,ratting:5},{id:4,badge_color:"danger",badge_text:"-18%",img:"".concat(a.s,"/assets/img/product/9.png"),title:"Sneaker Shoes",new_price:87,old_price:92,ratting:5},{id:5,badge_color:"danger",badge_text:"-11%",img:"".concat(a.s,"/assets/img/product/8.png"),title:"Wooden Chair",new_price:21,old_price:25,ratting:5},{id:6,badge_color:"warning",badge_text:"On Sale",img:"".concat(a.s,"/assets/img/product/4.png"),title:"Polo Shirts",new_price:38,old_price:41,ratting:5}];s.Z=i},7362:function(e,s,t){"use strict";var a=t(7437),i=t(7138);t(2265),s.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"footer-nav-area",id:"footerNav",children:(0,a.jsx)("div",{className:"suha-footer-nav",children:(0,a.jsxs)("ul",{className:"h-100 d-flex align-items-center justify-content-between ps-0 d-flex rtl-flex-d-row-r",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(i.default,{href:"/home",children:[(0,a.jsx)("i",{className:"ti ti-home"}),"Home"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(i.default,{href:"/message",children:[(0,a.jsx)("i",{className:"ti ti-message"}),"Chat"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(i.default,{href:"/cart",children:[(0,a.jsx)("i",{className:"ti ti-basket"}),"Cart"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(i.default,{href:"/settings",children:[(0,a.jsx)("i",{className:"ti ti-settings"}),"Settings"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(i.default,{href:"/pages",children:[(0,a.jsx)("i",{className:"ti ti-heart"}),"Pages"]})})]})})})})}},function(e){e.O(0,[231,7052,2971,7023,1744],function(){return e(e.s=8853)}),_N_E=e.O()}]);