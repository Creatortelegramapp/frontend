(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2690],{8767:function(e,t,s){Promise.resolve().then(s.bind(s,7317))},7818:function(e,t,s){"use strict";s.d(t,{default:function(){return a.a}});var l=s(551),a=s.n(l)},551:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let l=s(9920);s(7437),s(2265);let a=l._(s(148));function i(e,t){var s;let l={loading:e=>{let{error:t,isLoading:s,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let i={...l,...t};return(0,a.default)({...i,modules:null==(s=i.loadableGenerated)?void 0:s.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let l=s(5592);function a(e){let{reason:t,children:s}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return s}},148:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let l=s(7437),a=s(2265),i=s(912),r=s(1481);function n(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(n(()=>null)),loading:null,ssr:!0},d=function(e){let t={...c,...e},s=(0,a.lazy)(()=>t.loader().then(n)),d=t.loading;function o(e){let n=d?(0,l.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,c=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(r.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(s,{...e})]}):(0,l.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(s,{...e})});return(0,l.jsx)(a.Suspense,{fallback:n,children:c})}return o.displayName="LoadableComponent",o}},1481:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let l=s(7437),a=s(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let s=(0,a.getExpectedRequestStore)("next/dynamic css"),i=[];if(s.reactLoadableManifest&&t){let e=s.reactLoadableManifest;for(let s of t){if(!e[s])continue;let t=e[s].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,l.jsx)(l.Fragment,{children:i.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:s.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},7317:function(e,t,s){"use strict";var l=s(7437);s(2265);var a=s(7362),i=s(3475),r=s(3267),n=s(3031),c=s(44),d=s(7138);let o=(0,s(7818).default)(()=>s.e(6879).then(s.bind(s,6879)),{loadableGenerated:{webpack:()=>[6879]},ssr:!1}),u=[{image:"/assets/img/product/5.png",title:"Furniture"},{image:"/assets/img/product/9.png",title:"Shoes"},{image:"/assets/img/product/4.png",title:"Dress"},{image:"/assets/img/product/9.png",title:"Shoes"},{image:"/assets/img/product/5.png",title:"Furniture"},{image:"/assets/img/product/4.png",title:"Dress"}];t.default=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{links:"home",title:"Shop Grid"}),(0,l.jsx)("div",{className:"page-content-wrapper",children:(0,l.jsx)("div",{className:"py-3",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"row g-1 align-items-center rtl-flex-d-row-r",children:[(0,l.jsx)("div",{className:"col-8",style:{marginTop:"-15px"},children:(0,l.jsx)(r.tq,{loop:!0,slidesPerView:2.5,spaceBetween:5,className:"product-catagories owl-carousel catagory-slides",children:u.map((e,t)=>(0,l.jsx)(r.o5,{children:(0,l.jsxs)("a",{className:"shadow-sm",href:"#",children:[(0,l.jsx)("img",{src:e.image,alt:""}),e.title]})},t))})}),(0,l.jsx)("div",{className:"col-4",children:(0,l.jsx)("div",{className:"select-product-catagory",children:(0,l.jsx)(n.Z,{className:"filter-select right small border-0 d-flex align-items-center",options:[{value:"00",text:"Short by"},{value:"01",text:"Newest"},{value:"02",text:"Popular"},{value:"04",text:"Ratings"}],defaultCurrent:0,onChange:e=>{},placeholder:"Select an option",name:"myNiceSelect"})})})]}),(0,l.jsx)("div",{className:"mb-3"}),(0,l.jsxs)("div",{className:"row g-2 rtl-flex-d-row-r",children:[c.Z.map((e,t)=>(0,l.jsx)("div",{className:"col-6 col-md-4",children:(0,l.jsx)("div",{className:"card product-card",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("span",{className:"badge rounded-pill badge-".concat(e.badge_color),children:e.badge_text}),(0,l.jsx)("a",{className:"wishlist-btn",href:"#",children:(0,l.jsx)("i",{className:"ti ti-heart"})}),(0,l.jsxs)(d.default,{className:"product-thumbnail d-block",href:"/single-product",children:[(0,l.jsx)("img",{className:"mb-2",src:e.img,alt:""}),0===t||3===t?(0,l.jsx)("ul",{className:"offer-countdown-timer d-flex align-items-center shadow-sm",children:(0,l.jsx)(o,{})}):null]}),(0,l.jsx)(d.default,{className:"product-title",href:"/single-product",children:e.title}),(0,l.jsxs)("p",{className:"sale-price",children:["$ ",e.new_price,(0,l.jsxs)("span",{children:["$ ",e.old_price]})]}),(0,l.jsxs)("div",{className:"product-rating",children:[(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"})]}),(0,l.jsx)("a",{className:"btn btn-primary btn-sm",href:"#",children:(0,l.jsx)("i",{className:"ti ti-plus"})})]})})},t)),c.Z.map((e,t)=>(0,l.jsx)("div",{className:"col-6 col-md-4",children:(0,l.jsx)("div",{className:"card product-card",children:(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("span",{className:"badge rounded-pill badge-".concat(e.badge_color),children:e.badge_text}),(0,l.jsx)("a",{className:"wishlist-btn",href:"#",children:(0,l.jsx)("i",{className:"ti ti-heart"})}),(0,l.jsxs)(d.default,{className:"product-thumbnail d-block",href:"/single-product",children:[(0,l.jsx)("img",{className:"mb-2",src:e.img,alt:""}),0===t||3===t?(0,l.jsx)("ul",{className:"offer-countdown-timer d-flex align-items-center shadow-sm",children:(0,l.jsx)(o,{})}):null]}),(0,l.jsx)(d.default,{className:"product-title",href:"/single-product",children:e.title}),(0,l.jsxs)("p",{className:"sale-price",children:["$ ",e.new_price,(0,l.jsxs)("span",{children:["$ ",e.old_price]})]}),(0,l.jsxs)("div",{className:"product-rating",children:[(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"}),(0,l.jsx)("i",{className:"ti ti-star-filled"})]}),(0,l.jsx)("a",{className:"btn btn-primary btn-sm",href:"#",children:(0,l.jsx)("i",{className:"ti ti-plus"})})]})})},t))]})]})})}),(0,l.jsx)(a.Z,{})]})},44:function(e,t){"use strict";t.Z=[{id:1,badge_color:"warning",badge_text:"Sale",img:"/assets/img/product/11.png",title:"Beach Cap",new_price:13,old_price:42,ratting:5},{id:2,badge_color:"success",badge_text:"New",img:"/assets/img/product/5.png",title:"Wooden Sofa",new_price:74,old_price:99,ratting:5},{id:3,badge_color:"success",badge_text:"New",img:"/assets/img/product/6.png",title:"Roof Lamp",new_price:99,old_price:113,ratting:5},{id:4,badge_color:"danger",badge_text:"-18%",img:"/assets/img/product/9.png",title:"Sneaker Shoes",new_price:87,old_price:92,ratting:5},{id:5,badge_color:"danger",badge_text:"-11%",img:"/assets/img/product/8.png",title:"Wooden Chair",new_price:21,old_price:25,ratting:5},{id:6,badge_color:"warning",badge_text:"On Sale",img:"/assets/img/product/4.png",title:"Polo Shirts",new_price:38,old_price:41,ratting:5}]}},function(e){e.O(0,[231,2929,658,2971,7023,1744],function(){return e(e.s=8767)}),_N_E=e.O()}]);