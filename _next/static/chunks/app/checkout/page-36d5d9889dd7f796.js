(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{5840:function(t,e,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,2482)),Promise.resolve().then(n.bind(n,3475))},7992:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return s}});var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},s=function(){function t(t,e,n){var s=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration);var n=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=n?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,i,r=(Math.abs(t).toFixed(s.options.decimalPlaces)+"").split(".");if(e=r[0],n=r.length>1?s.options.decimal+r[1]:"",s.options.useGrouping){i="";for(var a=3,o=0,l=0,u=e.length;l<u;++l)s.options.useIndianSeparators&&4===l&&(a=2,o=1),0!==l&&o%a==0&&(i=s.options.separator+i),o++,i=e[u-l-1]+i;e=i}return s.options.numerals&&s.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),(t<0?"-":"")+s.options.prefix+e+n+s.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return s.handleScroll(s)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+window.pageYOffset,s=n.top+n.height+window.pageYOffset;s<e&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>s||i>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7138:function(t,e,n){"use strict";n.d(e,{default:function(){return s.a}});var i=n(231),s=n.n(i)},7095:function(t,e,n){"use strict";var i=n(2265),s=n(7992);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){!function(t,e,n){var i;(e="symbol"==typeof(i=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?i:String(i))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect;function h(t){var e=i.useRef(t);return c(function(){e.current=t}),i.useCallback(function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}var d=function(t,e){var n=e.decimal,i=e.decimals,r=e.duration,a=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,h=e.separator,d=e.start,f=e.suffix,p=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,b=e.enableScrollSpy,v=e.scrollSpyDelay,y=e.scrollSpyOnce,j=e.plugin;return new s.CountUp(t,o,{startVal:d,duration:r,decimal:n,decimalPlaces:i,easingFn:a,formattingFn:l,numerals:u,separator:h,prefix:c,suffix:f,plugin:j,useEasing:p,useIndianSeparators:g,useGrouping:m,enableScrollSpy:b,scrollSpyDelay:v,scrollSpyOnce:y})},f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,s,r,a,o=[],l=!0,u=!1;try{for(r=(n=n.call(t)).next;!(l=(i=r.call(n)).done)&&(o.push(i.value),2!==o.length);l=!0);}catch(t){u=!0,s=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw s}}return o}}(t,2)||function(t,e){if(t){if("string"==typeof t)return u(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=i.useMemo(function(){return a(a({},p),e)},[t]),s=n.ref,r=n.startOnMount,o=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,b=n.onPauseResume,v=n.onReset,y=n.onUpdate,j=l(n,f),x=i.useRef(),w=i.useRef(),V=i.useRef(!1),O=h(function(){return d("string"==typeof s?s:s.current,j)}),S=h(function(t){var e=x.current;if(e&&!t)return e;var n=O();return x.current=n,n}),E=h(function(){var t=function(){return S(!0).start(function(){null==m||m({pauseResume:N,reset:F,start:P,update:C})})};c&&c>0?w.current=setTimeout(t,1e3*c):t(),null==g||g({pauseResume:N,reset:F,update:C})}),N=h(function(){S().pauseResume(),null==b||b({reset:F,start:P,update:C})}),F=h(function(){S().el&&(w.current&&clearTimeout(w.current),S().reset(),null==v||v({pauseResume:N,start:P,update:C}))}),C=h(function(t){S().update(t),null==y||y({pauseResume:N,reset:F,start:P})}),P=h(function(){F(),E()}),R=h(function(t){r&&(t&&F(),E())});return i.useEffect(function(){V.current?o&&R(!0):(V.current=!0,R())},[o,V,R,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect(function(){return function(){F()}},[F]),{start:P,pauseResume:N,reset:F,update:C,getCountUp:S}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,s=t.containerProps,r=t.children,u=t.style,c=l(t,g),d=i.useRef(null),f=i.useRef(!1),p=m(a(a({},c),{},{ref:d,startOnMount:"function"!=typeof r||0===t.delay,enableReinitialize:!1})),b=p.start,v=p.reset,y=p.update,j=p.pauseResume,x=p.getCountUp,w=h(function(){b()}),V=h(function(e){t.preserveValue||v(),y(e)}),O=h(function(){if("function"==typeof t.children&&!(d.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}x()});i.useEffect(function(){O()},[O]),i.useEffect(function(){f.current&&V(t.end)},[t.end,V]);var S=n&&t;return(i.useEffect(function(){n&&f.current&&w()},[w,n,S]),i.useEffect(function(){!n&&f.current&&w()},[w,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),i.useEffect(function(){f.current=!0},[]),"function"==typeof r)?r({countUpRef:d,start:b,reset:v,update:y,pauseResume:j,getCountUp:x}):i.createElement("span",o({className:e,ref:d,style:u},s),void 0!==t.start?x().formattingFn(t.start):"")}},2482:function(t,e,n){"use strict";n.d(e,{default:function(){return p}});var i=n(7437),s=n(2265),r=n(7095),a=Object.defineProperty,o=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e,n)=>(o(t,"symbol"!=typeof e?e+"":e,n),n),u=new Map,c=new WeakMap,h=0,d=void 0,f=class extends s.Component{componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:s,fallbackInView:r}=this.props;this._unobserveCb=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if(void 0===window.IntersectionObserver&&void 0!==i){let s=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:s,observer:r,elements:a}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var n;return"".concat(e,"_").concat("root"===e?(n=t.root)?(c.has(n)||(h+=1,c.set(n,h.toString())),c.get(n)):"0":t[e])}).toString(),n=u.get(e);if(!n){let i;let s=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{var n;let r=e.isIntersecting&&i.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=r),null==(n=s.get(e.target))||n.forEach(t=>{t(r,e)})})},t);i=r.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:r,elements:s},u.set(e,n)}return n}(n),o=a.get(t)||[];return a.has(t)||a.set(t,o),o.push(e),r.observe(t),function(){o.splice(o.indexOf(e),1),0===o.length&&(a.delete(t),r.unobserve(t)),0===a.size&&(r.disconnect(),u.delete(s))}}(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:s},r)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}let{as:e,triggerOnce:n,threshold:i,root:r,rootMargin:a,onChange:o,skip:l,trackVisibility:u,delay:c,initialInView:h,fallbackInView:d,...f}=this.props;return s.createElement(e||"div",{ref:this.handleNode,...f},t)}constructor(t){super(t),l(this,"node",null),l(this,"_unobserveCb",null),l(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),l(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}},p=t=>{let{number:e,text:n,add_style:a}=t,[o,l]=(0,s.useState)(!1),u=t=>{t&&!o&&l(!0)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.ZP,{start:o?0:void 0,end:e,duration:2,children:t=>{let{countUpRef:e}=t;return(0,i.jsxs)("div",{className:"d-inline",children:[(0,i.jsx)("strong",{ref:e}),(0,i.jsx)(f,{as:"span",onChange:t=>u(t),children:n&&(0,i.jsx)("span",{children:n})})]})}})})}},3437:function(t,e,n){"use strict";var i=n(7437),s=n(7138);n(2265),e.Z=t=>{let{handleShow:e,show:n}=t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"offcanvas offcanvas-start suha-offcanvas-wrap ".concat(n?"show":""),tabIndex:-1,id:"suhaOffcanvas","aria-labelledby":"suhaOffcanvasLabel",children:[(0,i.jsx)("button",{onClick:e,className:"btn-close btn-close-white",type:"button"}),(0,i.jsxs)("div",{className:"offcanvas-body",children:[(0,i.jsxs)("div",{className:"sidenav-profile",children:[(0,i.jsx)("div",{className:"user-profile",children:(0,i.jsx)("img",{src:"/assets/img/bg-img/9.jpg",alt:""})}),(0,i.jsxs)("div",{className:"user-info",children:[(0,i.jsx)("h5",{className:"user-name mb-1 text-white",children:"Suha Sarah"}),(0,i.jsxs)("p",{className:"available-balance text-white",children:["Current Balance $",(0,i.jsx)("span",{className:"counter",children:"99"})]})]})]}),(0,i.jsxs)("ul",{className:"sidenav-nav ps-0",children:[(0,i.jsx)("li",{children:(0,i.jsxs)(s.default,{href:"/profile",children:[(0,i.jsx)("i",{className:"ti ti-user"}),"My Profile"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.default,{href:"/notifications",children:[(0,i.jsx)("i",{className:"ti ti-bell-ringing lni-tada-effect"}),"Notifications",(0,i.jsx)("span",{className:"ms-1 badge badge-warning",children:"3"})]})}),(0,i.jsxs)("li",{className:"suha-dropdown-menu",children:[(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("i",{className:"ti ti-building-store"}),"Shop Pages"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/shop-grid",children:"Shop Grid"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/shop-list",children:"Shop List"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/single-product",children:"Product Details"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/featured-products",children:"Featured Products"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/flash-sale",children:"Flash Sale"})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.default,{href:"/pages",children:[(0,i.jsx)("i",{className:"ti ti-notebook"}),"All Pages"]})}),(0,i.jsxs)("li",{className:"suha-dropdown-menu",children:[(0,i.jsxs)(s.default,{href:"/wishlist-grid",children:[(0,i.jsx)("i",{className:"ti ti-heart"}),"My Wishlist"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/wishlist-grid",children:"Wishlist Grid"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/wishlist-list",children:"Wishlist List"})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.default,{href:"/settings",children:[(0,i.jsx)("i",{className:"ti ti-adjustments-horizontal"}),"Settings"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.default,{href:"/intro",children:[(0,i.jsx)("i",{className:"ti ti-logout"}),"Sign Out"]})})]})]})]})})}},3475:function(t,e,n){"use strict";var i=n(7437),s=n(7138),r=n(2265),a=n(3437);e.default=t=>{let{links:e,title:n}=t,[o,l]=(0,r.useState)(!1),u=()=>l(!o);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"header-area",id:"headerArea",children:(0,i.jsxs)("div",{className:"container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r",children:[(0,i.jsx)("div",{className:"back-button me-2",children:(0,i.jsx)(s.default,{href:"/".concat(e),children:(0,i.jsx)("i",{className:"ti ti-arrow-left"})})}),(0,i.jsx)("div",{className:"page-heading",children:(0,i.jsx)("h6",{className:"mb-0",children:n})}),(0,i.jsx)("div",{className:"suha-navbar-toggler ms-2","data-bs-toggle":"offcanvas","data-bs-target":"#suhaOffcanvas","aria-controls":"suhaOffcanvas",children:(0,i.jsxs)("div",{onClick:()=>u(),children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})})]})}),(0,i.jsx)(a.Z,{handleShow:u,show:o})]})}}},function(t){t.O(0,[231,2971,7023,1744],function(){return t(t.s=5840)}),_N_E=t.O()}]);