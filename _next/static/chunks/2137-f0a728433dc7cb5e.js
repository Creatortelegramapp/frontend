"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2137],{2137:function(e,t,s){s.d(t,{u3:function(){return t8}});var r=s(7437),i=s(2265),n=Object.defineProperty,o=(e,t,s)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,a=(e,t,s)=>(o(e,"symbol"!=typeof t?t+"":t,s),s);function p(e,t){let s;let r=()=>{void 0!==s&&t&&t(s),s=void 0};return[()=>void 0===s?s=e(r):s,r]}function c(e){let t=I(),{count:s}=t;t.unsubscribe(e),s&&!t.count&&R()}class u{constructor(e,t={}){this.scope=e,this.options=t}print(e,...t){let s=new Date,r=Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,timeZone:"UTC"}).format(s),{textColor:i,bgColor:n}=this.options,o="font-weight: bold;padding: 0 5px;border-radius:5px";console[e](`%c${r}%c / %c${this.scope}`,`${o};background-color: lightblue;color:black`,"",`${o};${i?`color:${i};`:""}${n?`background-color:${n}`:""}`,...t)}error(...e){this.print("error",...e)}log(...e){this.print("log",...e)}}let l=new u("SDK",{bgColor:"forestgreen",textColor:"white"}),h=!1,d=({name:e,payload:t})=>{l.log("Event received:",t?{name:e,payload:t}:{name:e})};class _{constructor(){a(this,"listeners",new Map),a(this,"listenersCount",0),a(this,"subscribeListeners",[])}clear(){this.listeners.clear(),this.subscribeListeners=[]}get count(){return this.listenersCount+this.subscribeListeners.length}emit(e,...t){this.subscribeListeners.forEach(s=>s({event:e,args:t})),(this.listeners.get(e)||[]).forEach(([s,r])=>{s(...t),r&&this.off(e,s)})}on(e,t,s){let r=this.listeners.get(e);return r||this.listeners.set(e,r=[]),r.push([t,s]),this.listenersCount+=1,()=>this.off(e,t)}off(e,t){let s=this.listeners.get(e)||[];for(let e=0;e<s.length;e+=1)if(t===s[e][0]){s.splice(e,1),this.listenersCount-=1;return}}subscribe(e){return this.subscribeListeners.push(e),()=>this.unsubscribe(e)}unsubscribe(e){for(let t=0;t<this.subscribeListeners.length;t+=1)if(this.subscribeListeners[t]===e){this.subscribeListeners.splice(t,1);return}}}function b(e,t,s){return window.addEventListener(e,t,s),()=>window.removeEventListener(e,t,s)}function f(...e){let t=!1,s=e.flat(1);return[e=>!t&&s.push(e),()=>{t||(t=!0,s.forEach(e=>e()))},t]}class g extends Error{constructor(e,t,s){super(t,{cause:s}),this.type=e,Object.setPrototypeOf(this,g.prototype)}}function m(e,t,s){return new g(e,t,s)}let w="ERR_PARSE";function v(){return m("ERR_UNEXPECTED_TYPE","Value has unexpected type")}class y{constructor(e,t,s){this.parser=e,this.isOptional=t,this.type=s}parse(e){if(!(this.isOptional&&void 0===e))try{return this.parser(e)}catch(e){throw m(w,`Unable to parse value${this.type?` as ${this.type}`:""}`,e)}}optional(){return this.isOptional=!0,this}}function E(e,t){return()=>new y(e,!1,t)}let C=E(e=>{if("boolean"==typeof e)return e;let t=String(e);if("1"===t||"true"===t)return!0;if("0"===t||"false"===t)return!1;throw v()},"boolean");function x(e,t){let s={};for(let r in e){let i,n;let o=e[r];if(o){if("function"==typeof o||"parse"in o)i=r,n="function"==typeof o?o:o.parse.bind(o);else{let{type:e}=o;i=o.from||r,n="function"==typeof e?e:e.parse.bind(e)}try{let e=n(t(i));void 0!==e&&(s[r]=e)}catch(e){throw m(w,`Unable to parse field "${r}"`,e)}}}return s}function P(e){let t=e;if("string"==typeof t&&(t=JSON.parse(t)),"object"!=typeof t||null===t||Array.isArray(t))throw v();return t}function k(e,t){return new y(t=>{let s=P(t);return x(e,e=>s[e])},!1,t)}let q=E(e=>{if("number"==typeof e)return e;if("string"==typeof e){let t=Number(e);if(!Number.isNaN(t))return t}throw v()},"number"),S=E(e=>{if("string"==typeof e||"number"==typeof e)return e.toString();throw v()},"string");function A(){["TelegramGameProxy_receiveEvent","TelegramGameProxy","Telegram"].forEach(e=>{delete window[e]})}function T(e,t){window.dispatchEvent(new MessageEvent("message",{data:JSON.stringify({eventType:e,eventData:t}),source:window.parent}))}let O={clipboard_text_received:k({req_id:S(),data:e=>null===e?e:S().optional().parse(e)}),custom_method_invoked:k({req_id:S(),result:e=>e,error:S().optional()}),popup_closed:{parse:e=>k({button_id:e=>null==e?void 0:S().parse(e)}).parse(e??{})},viewport_changed:k({height:q(),width:e=>null==e?window.innerWidth:q().parse(e),is_state_stable:C(),is_expanded:C()})},[V,R]=p(e=>{let[t,s]=function(){let e=new _,t=new _;t.subscribe(t=>{e.emit("event",{name:t.event,payload:t.args[0]})}),[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach(e=>{let t=window;e.forEach((e,s,r)=>{if(s===r.length-1){t[e]=T;return}e in t||(t[e]={}),t=t[e]})});let[,s]=f(A,b("resize",()=>{t.emit("viewport_changed",{width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0})}),b("message",e=>{let s;if(e.source!==window.parent)return;try{var r;r=e.data,s=k({eventType:S(),eventData:e=>e}).parse(r)}catch{return}let{eventType:i,eventData:n}=s,o=O[i];try{let e=o?o.parse(n):n;t.emit(...e?[i,e]:[i])}catch(e){l.error(`An error occurred processing the "${i}" event from the Telegram application.
Please, file an issue here:
https://github.com/Telegram-Mini-Apps/telegram-apps/issues/new/choose`,s,e)}}),()=>e.clear(),()=>t.clear());return[{on:t.on.bind(t),off:t.off.bind(t),subscribe:t=>e.on("event",t),unsubscribe(t){e.off("event",t)},get count(){return t.count+e.count}},s]}(),r=t.off.bind(t);return t.off=(s,i)=>{let{count:n}=t;r(s,i),n&&!t.count&&e()},[t,s]},([,e])=>e());function I(){return V()[0]}function D(e,t){I().off(e,t)}function $(e,t,s){return I().on(e,t,s)}function N(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function L(e,t){return 0>=function(e,t){let s=e.split("."),r=t.split("."),i=Math.max(s.length,r.length);for(let e=0;e<i;e+=1){let t=parseInt(s[e]||"0",10),i=parseInt(r[e]||"0",10);if(t!==i)return t>i?1:-1}return 0}(e,t)}function W(e,t,s){if("string"==typeof s){if("web_app_open_link"===e){if("try_instant_view"===t)return L("6.4",s);if("try_browser"===t)return L("7.6",s)}if("web_app_set_header_color"===e&&"color"===t)return L("6.9",s);if("web_app_close"===e&&"return_back"===t)return L("7.6",s)}switch(e){case"web_app_open_tg_link":case"web_app_open_invoice":case"web_app_setup_back_button":case"web_app_set_background_color":case"web_app_set_header_color":case"web_app_trigger_haptic_feedback":return L("6.1",t);case"web_app_open_popup":return L("6.2",t);case"web_app_close_scan_qr_popup":case"web_app_open_scan_qr_popup":case"web_app_read_text_from_clipboard":return L("6.4",t);case"web_app_switch_inline_query":return L("6.7",t);case"web_app_invoke_custom_method":case"web_app_request_write_access":case"web_app_request_phone":return L("6.9",t);case"web_app_setup_settings_button":return L("6.10",t);case"web_app_biometry_get_info":case"web_app_biometry_open_settings":case"web_app_biometry_request_access":case"web_app_biometry_request_auth":case"web_app_biometry_update_token":return L("7.2",t);case"web_app_setup_swipe_behavior":return L("7.7",t);default:return["iframe_ready","iframe_will_reload","web_app_close","web_app_data_send","web_app_expand","web_app_open_link","web_app_ready","web_app_request_theme","web_app_request_viewport","web_app_setup_main_button","web_app_setup_closing_behavior"].includes(e)}}function B(){try{return window.self!==window.top}catch{return!0}}function U(e,t,s){var r,i;let n={},o;if(t||s?t&&s?(n=s,o=t):t&&("targetOrigin"in t?n=t:o=t):n={},function(...e){h&&l.log(...e)}("Posting event:",o?{event:e,data:o}:{event:e}),B())return window.parent.postMessage(JSON.stringify({eventType:e,eventData:o}),n.targetOrigin||"https://web.telegram.org");if("external"in(r=window)&&N(r.external)&&"notify"in r.external&&"function"==typeof r.external.notify){window.external.notify(JSON.stringify({eventType:e,eventData:o}));return}if("TelegramWebviewProxy"in(i=window)&&N(i.TelegramWebviewProxy)&&"postEvent"in i.TelegramWebviewProxy&&"function"==typeof i.TelegramWebviewProxy.postEvent){window.TelegramWebviewProxy.postEvent(e,JSON.stringify(o));return}throw m("ERR_UNKNOWN_ENV","Unable to determine current environment and possible way to send event. You are probably trying to use Mini Apps method outside the Telegram application environment.")}function M(e){return({req_id:t})=>t===e}function H(e){return m("ERR_TIMED_OUT",`Timeout reached: ${e}ms`)}function j(e,t){return Promise.race(["function"==typeof e?e():e,new Promise((e,s)=>{setTimeout(()=>{s(H(t))},t)})])}async function G(e){let t;let s=new Promise(e=>t=e),{event:r,capture:i,timeout:n}=e,[,o]=f((Array.isArray(r)?r:[r]).map(e=>$(e,s=>{(!i||(Array.isArray(r)?i({event:e,payload:s}):i(s)))&&t(s)})));try{return(e.postEvent||U)(e.method,e.params),await (n?j(s,n):s)}finally{o()}}async function z(e,t,s,r={}){let{result:i,error:n}=await G({...r,method:"web_app_invoke_custom_method",event:"custom_method_invoked",params:{method:e,params:t,req_id:s},capture:M(s)});if(n)throw m("ERR_INVOKE_CUSTOM_METHOD_RESPONSE",n);return i}function J(e){return/^#[\da-f]{6}$/i.test(e)}function K(e){let t=e.replace(/\s/g,"").toLowerCase();if(J(t))return t;if(/^#[\da-f]{3}$/i.test(t)){let e="#";for(let s=0;s<3;s+=1)e+=t[1+s].repeat(2);return e}let s=t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(!s)throw Error(`Value "${e}" does not satisfy any of known RGB formats.`);return s.slice(1).reduce((e,t)=>{let s=parseInt(t,10).toString(16);return e+(1===s.length?"0":"")+s},"#")}function Q(e){let t=K(e);return 120>Math.sqrt([.299,.587,.114].reduce((e,s,r)=>{let i=parseInt(t.slice(1+2*r,1+(r+1)*2),16);return e+i*i*s},0))}class Z{constructor(e){a(this,"ee",new _),a(this,"on",this.ee.on.bind(this.ee)),a(this,"off",this.ee.off.bind(this.ee)),this.state=e}clone(){return{...this.state}}set(e,t){Object.entries("string"==typeof e?{[e]:t}:e).reduce((e,[t,s])=>this.state[t]===s||void 0===s?e:(this.state[t]=s,this.ee.emit(`change:${t}`,s),!0),!1)&&this.ee.emit("change",this.state)}get(e){return this.state[e]}}class F{constructor(e){a(this,"state"),a(this,"get"),a(this,"set"),a(this,"clone"),this.state=new Z(e),this.set=this.state.set.bind(this.state),this.get=this.state.get.bind(this.state),this.clone=this.state.clone.bind(this.state)}}class Y extends F{constructor(e,t,s){super(e),a(this,"supports"),this.supports=e=>W(s[e],t)}}class X extends Y{constructor(e,t,s){super({isVisible:e},t,{show:"web_app_setup_back_button",hide:"web_app_setup_back_button"}),a(this,"on",(e,t)=>"click"===e?$("back_button_pressed",t):this.state.on(e,t)),a(this,"off",(e,t)=>"click"===e?D("back_button_pressed",t):this.state.off(e,t)),this.postEvent=s}set isVisible(e){this.set("isVisible",e),this.postEvent("web_app_setup_back_button",{is_visible:e})}get isVisible(){return this.get("isVisible")}hide(){this.isVisible=!1}show(){this.isVisible=!0}}let ee=E(e=>e instanceof Date?e:new Date(1e3*q().parse(e)),"Date");function et(e,t){return new y(t=>{if("string"!=typeof t&&!(t instanceof URLSearchParams))throw v();let s="string"==typeof t?new URLSearchParams(t):t;return x(e,e=>{let t=s.get(e);return null===t?void 0:t})},!1,t)}let es=k({id:q(),type:S(),title:S(),photoUrl:{type:S().optional(),from:"photo_url"},username:S().optional()},"Chat").optional(),er=k({addedToAttachmentMenu:{type:C().optional(),from:"added_to_attachment_menu"},allowsWriteToPm:{type:C().optional(),from:"allows_write_to_pm"},firstName:{type:S(),from:"first_name"},id:q(),isBot:{type:C().optional(),from:"is_bot"},isPremium:{type:C().optional(),from:"is_premium"},languageCode:{type:S().optional(),from:"language_code"},lastName:{type:S().optional(),from:"last_name"},photoUrl:{type:S().optional(),from:"photo_url"},username:S().optional()},"User").optional(),ei=E(e=>K(S().parse(e)),"rgb"),en=E(e=>{let t=ei().optional();return Object.entries(P(e)).reduce((e,[s,r])=>(e[s.replace(/_[a-z]/g,e=>e[1].toUpperCase())]=t.parse(r),e),{})},"ThemeParams");function eo(e){return et({botInline:{type:C().optional(),from:"tgWebAppBotInline"},initData:{type:et({authDate:{type:ee(),from:"auth_date"},canSendAfter:{type:q().optional(),from:"can_send_after"},chat:es,chatInstance:{type:S().optional(),from:"chat_instance"},chatType:{type:S().optional(),from:"chat_type"},hash:S(),queryId:{type:S().optional(),from:"query_id"},receiver:er,startParam:{type:S().optional(),from:"start_param"},user:er},"InitData").optional(),from:"tgWebAppData"},initDataRaw:{type:S().optional(),from:"tgWebAppData"},platform:{type:S(),from:"tgWebAppPlatform"},showSettings:{type:C().optional(),from:"tgWebAppShowSettings"},startParam:{type:S().optional(),from:"tgWebAppStartParam"},themeParams:{type:en(),from:"tgWebAppThemeParams"},version:{type:S(),from:"tgWebAppVersion"}}).parse(e)}function ea(e){return eo(e.replace(/^[^?#]*[?#]/,"").replace(/[?#]/g,"&"))}function ep(){return ea(window.location.href)}function ec(){return performance.getEntriesByType("navigation")[0]}function eu(){let e=ec();if(!e)throw Error("Unable to get first navigation entry.");return ea(e.name)}function el(e){return`telegram-apps/${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function eh(e,t){sessionStorage.setItem(el(e),JSON.stringify(t))}function ed(e){let t=sessionStorage.getItem(el(e));try{return t?JSON.parse(t):void 0}catch{}}function e_(){return eo(ed("launchParams")||"")}let[eb]=p(function(){let e=0;return()=>(e+=1).toString()});function ef(e,t){return()=>{var s;let r=function(){let e=[];for(let t of[ep,eu,e_])try{let e=t();return eh("launchParams",function(e){let{initDataRaw:t,themeParams:s,platform:r,version:i,showSettings:n,startParam:o,botInline:a}=e,p=new URLSearchParams;return p.set("tgWebAppPlatform",r),p.set("tgWebAppThemeParams",JSON.stringify(Object.fromEntries(Object.entries(s).map(([e,t])=>[e.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`),t])))),p.set("tgWebAppVersion",i),t&&p.set("tgWebAppData",t),o&&p.set("tgWebAppStartParam",o),"boolean"==typeof n&&p.set("tgWebAppShowSettings",n?"1":"0"),"boolean"==typeof a&&p.set("tgWebAppBotInline",a?"1":"0"),p.toString()}(e)),e}catch(t){e.push(t instanceof Error?t.message:JSON.stringify(t))}throw Error([`Unable to retrieve launch parameters from any known source. Perhaps, you have opened your app outside Telegram?
`,"\uD83D\uDCD6 Refer to docs for more information:",`https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/environment
`,"Collected errors:",e.map(e=>`— ${e}`)].join(`
`))}(),i={...r,postEvent:(s=r.version,(e,t)=>{if(!W(e,s))throw m("ERR_METHOD_UNSUPPORTED",`Method "${e}" is unsupported in Mini Apps version ${s}`);if(N(t)&&"web_app_set_header_color"===e&&"color"in t&&!W(e,"color",s))throw m("ERR_METHOD_PARAMETER_UNSUPPORTED",`Parameter "color" of "${e}" method is unsupported in Mini Apps version ${s}`);return U(e,t)}),createRequestId:eb()};if("function"==typeof e)return e(i);let[n,o,a]=f(),p=t({...i,state:!function(){let e=ec();return!!(e&&"reload"===e.type)}()?void 0:ed(e),addCleanup:n}),c=t=>(a||n(t.on("change",t=>{eh(e,t)})),t);return[p instanceof Promise?p.then(c):c(p),o]}}let eg=ef("backButton",({postEvent:e,version:t,state:s={isVisible:!1}})=>new X(s.isVisible,t,e));class em extends Y{constructor(){super(...arguments),a(this,"on",this.state.on.bind(this.state)),a(this,"off",this.state.off.bind(this.state))}}function ew(e){let t=e.available?e:{available:!1,device_id:"",token_saved:!1,access_requested:!1,access_granted:!1,type:""};return{available:!0,type:t.type,deviceId:t.device_id,tokenSaved:t.token_saved,accessRequested:t.access_requested,accessGranted:t.access_granted}}class ev extends em{constructor({postEvent:e,version:t,...s}){super(s,t,{auth:"web_app_biometry_request_auth",openSettings:"web_app_biometry_open_settings",requestAccess:"web_app_biometry_request_access",updateToken:"web_app_biometry_update_token"}),a(this,"postEvent"),a(this,"authPromise"),a(this,"accessPromise"),this.postEvent=e}get available(){return this.get("available")}get accessGranted(){return this.get("accessGranted")}get accessRequested(){return this.get("accessRequested")}async authenticate({reason:e,...t}){return this.authPromise||(this.authPromise=G({...t,method:"web_app_biometry_request_auth",event:"biometry_auth_requested",postEvent:this.postEvent,params:{reason:(e||"").trim()}}).then(({token:e})=>e).finally(()=>this.authPromise=void 0)),this.authPromise}get deviceId(){return this.get("deviceId")}openSettings(){this.postEvent("web_app_biometry_open_settings")}requestAccess({reason:e,...t}={}){return this.accessPromise||(this.accessPromise=G({...t,postEvent:this.postEvent,method:"web_app_biometry_request_access",event:"biometry_info_received",params:{reason:e||""}}).then(e=>{let t=ew(e);return this.set(t),t.accessGranted}).finally(()=>this.accessPromise=void 0)),this.accessPromise}get biometryType(){return this.get("biometryType")}get tokenSaved(){return this.get("tokenSaved")}async updateToken({token:e,...t}={}){return["removed","updated"].includes((await G({...t,postEvent:this.postEvent,method:"web_app_biometry_update_token",event:"biometry_token_updated",params:{token:e||""}})).status)}}async function ey(e){return ew(await G({...e||{},method:"web_app_biometry_get_info",event:"biometry_info_received"}))}let eE=ef("biometryManager",async({postEvent:e,version:t,state:s})=>new ev({...s||W("web_app_biometry_get_info",t)?s||await ey({timeout:1e3}):{available:!1,accessGranted:!1,accessRequested:!1,tokenSaved:!1,deviceId:""},version:t,postEvent:e}));class eC extends F{constructor(){super(...arguments),a(this,"on",this.state.on.bind(this.state)),a(this,"off",this.state.off.bind(this.state))}}class ex extends eC{constructor(e,t){super({isConfirmationNeeded:e}),this.postEvent=t}set isConfirmationNeeded(e){this.set("isConfirmationNeeded",e),this.postEvent("web_app_setup_closing_behavior",{need_confirmation:e})}get isConfirmationNeeded(){return this.get("isConfirmationNeeded")}disableConfirmation(){this.isConfirmationNeeded=!1}enableConfirmation(){this.isConfirmationNeeded=!0}}let eP=ef("closingBehavior",({postEvent:e,state:t={isConfirmationNeeded:!1}})=>new ex(t.isConfirmationNeeded,e));class ek{constructor(e,t){a(this,"supports"),this.supports=s=>W(t[s],e)}}function eq(e){if(Array.isArray(e))return e;if("string"==typeof e)try{let t=JSON.parse(e);if(Array.isArray(t))return t}catch{}throw v()}class eS extends y{constructor(e,t,s){super(eq,t,s),a(this,"itemParser"),this.itemParser="function"==typeof e?e:e.parse.bind(e)}parse(e){let t=super.parse(e);return void 0===t?t:t.map(this.itemParser)}of(e){return this.itemParser="function"==typeof e?e:e.parse.bind(e),this}}function eA(e,t){return Object.fromEntries(e.map(e=>[e,t]))}class eT extends ek{constructor(e,t,s){super(e,{delete:"web_app_invoke_custom_method",get:"web_app_invoke_custom_method",getKeys:"web_app_invoke_custom_method",set:"web_app_invoke_custom_method"}),this.createRequestId=t,this.postEvent=s}async delete(e,t={}){let s=Array.isArray(e)?e:[e];s.length&&await z("deleteStorageValues",{keys:s},this.createRequestId(),{...t,postEvent:this.postEvent})}async getKeys(e={}){return new eS(e=>e,!1,void 0).of(S()).parse(await z("getStorageKeys",{},this.createRequestId(),{...e,postEvent:this.postEvent}))}async get(e,t={}){let s=Array.isArray(e)?e:[e];if(!s.length)return eA(s,"");let r=await z("getStorageValues",{keys:s},this.createRequestId(),{...t,postEvent:this.postEvent}),i=k(eA(s,S()),"CloudStorageData").parse(r);return Array.isArray(e)?i:i[e]}async set(e,t,s={}){await z("saveStorageValue",{key:e,value:t},this.createRequestId(),{...s,postEvent:this.postEvent})}}let eO=ef(({createRequestId:e,postEvent:t,version:s})=>new eT(s,e,t));class eV extends ek{constructor(e,t){super(e,{impactOccurred:"web_app_trigger_haptic_feedback",notificationOccurred:"web_app_trigger_haptic_feedback",selectionChanged:"web_app_trigger_haptic_feedback"}),this.postEvent=t}impactOccurred(e){this.postEvent("web_app_trigger_haptic_feedback",{type:"impact",impact_style:e})}notificationOccurred(e){this.postEvent("web_app_trigger_haptic_feedback",{type:"notification",notification_type:e})}selectionChanged(){this.postEvent("web_app_trigger_haptic_feedback",{type:"selection_change"})}}let eR=ef(({version:e,postEvent:t})=>new eV(e,t));class eI{constructor(e){this.initData=e}get authDate(){return this.initData.authDate}get canSendAfter(){return this.initData.canSendAfter}get canSendAfterDate(){let{canSendAfter:e}=this;return e?new Date(this.authDate.getTime()+1e3*e):void 0}get chat(){return this.initData.chat}get chatType(){return this.initData.chatType}get chatInstance(){return this.initData.chatInstance}get hash(){return this.initData.hash}get queryId(){return this.initData.queryId}get receiver(){return this.initData.receiver}get startParam(){return this.initData.startParam}get user(){return this.initData.user}}let eD=ef(({initData:e})=>e?new eI(e):void 0);class e$ extends em{constructor(e,t,s){super({isOpened:e},t,{open:"web_app_open_invoice"}),this.postEvent=s}set isOpened(e){this.set("isOpened",e)}get isOpened(){return this.get("isOpened")}async open(e,t){let s;if(this.isOpened)throw Error("Invoice is already opened");if(t){let{hostname:t,pathname:r}=new URL(e,window.location.href);if("t.me"!==t)throw Error(`Incorrect hostname: ${t}`);let i=r.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);if(!i)throw Error('Link pathname has incorrect format. Expected to receive "/invoice/{slug}" or "/${slug}"');[,,s]=i}else s=e;this.isOpened=!0;try{return(await G({method:"web_app_open_invoice",event:"invoice_closed",params:{slug:s},postEvent:this.postEvent,capture:e=>s===e.slug})).status}finally{this.isOpened=!1}}}let eN=ef(({version:e,postEvent:t})=>new e$(!1,e,t));class eL extends F{constructor({postEvent:e,...t}){super(t),a(this,"postEvent"),a(this,"on",(e,t)=>"click"===e?$("main_button_pressed",t):this.state.on(e,t)),a(this,"off",(e,t)=>"click"===e?D("main_button_pressed",t):this.state.off(e,t)),this.postEvent=e}get bgColor(){return this.get("bgColor")}commit(){""!==this.text&&this.postEvent("web_app_setup_main_button",{is_visible:this.isVisible,is_active:this.isEnabled,is_progress_visible:this.isLoaderVisible,text:this.text,color:this.bgColor,text_color:this.textColor})}disable(){return this.isEnabled=!1,this}enable(){return this.isEnabled=!0,this}hide(){return this.isVisible=!1,this}hideLoader(){return this.isLoaderVisible=!1,this}set isEnabled(e){this.setParams({isEnabled:e})}get isEnabled(){return this.get("isEnabled")}set isLoaderVisible(e){this.setParams({isLoaderVisible:e})}get isLoaderVisible(){return this.get("isLoaderVisible")}set isVisible(e){this.setParams({isVisible:e})}get isVisible(){return this.get("isVisible")}show(){return this.isVisible=!0,this}showLoader(){return this.isLoaderVisible=!0,this}setText(e){return this.setParams({text:e})}setTextColor(e){return this.setParams({textColor:e})}setBgColor(e){return this.setParams({bgColor:e})}setParams(e){return this.set(e),this.commit(),this}get text(){return this.get("text")}get textColor(){return this.get("textColor")}}let eW=ef("mainButton",({postEvent:e,themeParams:t,state:s={isVisible:!1,isEnabled:!1,text:"",isLoaderVisible:!1,textColor:t.buttonTextColor||"#ffffff",bgColor:t.buttonColor||"#000000"}})=>new eL({...s,postEvent:e}));function eB(e,t){return s=>{let[r,i]=t[s];return W(r,i,e)}}class eU extends em{constructor({postEvent:e,createRequestId:t,version:s,botInline:r,...i}){super(i,s,{requestPhoneAccess:"web_app_request_phone",requestWriteAccess:"web_app_request_write_access",switchInlineQuery:"web_app_switch_inline_query",setHeaderColor:"web_app_set_header_color",setBackgroundColor:"web_app_set_background_color"}),a(this,"botInline"),a(this,"postEvent"),a(this,"createRequestId"),a(this,"requestPhoneAccessPromise"),a(this,"requestWriteAccessPromise"),a(this,"supportsParam"),this.createRequestId=t,this.postEvent=e,this.botInline=r;let n=this.supports.bind(this);this.supports=e=>!!n(e)&&("switchInlineQuery"!==e||r),this.supportsParam=eB(s,{"setHeaderColor.color":["web_app_set_header_color","color"],"close.returnBack":["web_app_close","return_back"]})}async getRequestedContact({timeout:e=1e4}={}){return et({contact:k({userId:{type:q(),from:"user_id"},phoneNumber:{type:S(),from:"phone_number"},firstName:{type:S(),from:"first_name"},lastName:{type:S().optional(),from:"last_name"}}),authDate:{type:ee(),from:"auth_date"},hash:S()},"RequestedContact").parse(await z("getRequestedContact",{},this.createRequestId(),{postEvent:this.postEvent,timeout:e}))}get bgColor(){return this.get("bgColor")}close(e){this.postEvent("web_app_close",this.supportsParam("close.returnBack")?{return_back:e}:{})}get headerColor(){return this.get("headerColor")}get isBotInline(){return this.botInline}get isDark(){return Q(this.bgColor)}ready(){this.postEvent("web_app_ready")}async requestContact({timeout:e=5e3}={}){try{return await this.getRequestedContact()}catch{}if(await this.requestPhoneAccess()!=="sent")throw Error("Access denied.");let t=Date.now()+e,s=50;return j(async()=>{for(;Date.now()<t;){try{return await this.getRequestedContact()}catch{}await function(e){return new Promise(t=>{setTimeout(t,e)})}(s),s+=50}throw H(e)},e)}async requestPhoneAccess(e={}){return this.requestPhoneAccessPromise||(this.requestPhoneAccessPromise=G({...e,method:"web_app_request_phone",event:"phone_requested",postEvent:this.postEvent}).then(({status:e})=>e).finally(()=>this.requestPhoneAccessPromise=void 0)),this.requestPhoneAccessPromise}async requestWriteAccess(e={}){return this.requestWriteAccessPromise||(this.requestWriteAccessPromise=G({...e,method:"web_app_request_write_access",event:"write_access_requested",postEvent:this.postEvent}).then(({status:e})=>e).finally(()=>this.requestWriteAccessPromise=void 0)),this.requestWriteAccessPromise}sendData(e){let{size:t}=new Blob([e]);if(!t||t>4096)throw Error(`Passed data has incorrect size: ${t}`);this.postEvent("web_app_data_send",{data:e})}setHeaderColor(e){this.postEvent("web_app_set_header_color",J(e)?{color:e}:{color_key:e}),this.set("headerColor",e)}setBgColor(e){this.postEvent("web_app_set_background_color",{color:e}),this.set("bgColor",e)}switchInlineQuery(e,t=[]){if(!this.supports("switchInlineQuery")&&!this.isBotInline)throw Error("Method is unsupported because Mini App should be launched in inline mode.");this.postEvent("web_app_switch_inline_query",{query:e,chat_types:t})}}let eM=ef("miniApp",({themeParams:e,botInline:t=!1,state:s={bgColor:e.bgColor||"#ffffff",headerColor:e.headerBgColor||"#000000"},...r})=>new eU({...r,...s,botInline:t}));class eH extends em{constructor(e,t,s){super({isOpened:e},t,{open:"web_app_open_popup"}),this.postEvent=s}set isOpened(e){this.set("isOpened",e)}get isOpened(){return this.get("isOpened")}async open(e){if(this.isOpened)throw Error("Popup is already opened.");this.isOpened=!0;try{let{button_id:t=null}=await G({event:"popup_closed",method:"web_app_open_popup",postEvent:this.postEvent,params:function(e){let t=e.message.trim(),s=(e.title||"").trim(),r=e.buttons||[];if(s.length>64)throw Error(`Title has incorrect size: ${s.length}`);if(!t.length||t.length>256)throw Error(`Message has incorrect size: ${t.length}`);if(r.length>3)throw Error(`Buttons have incorrect size: ${r.length}`);return{title:s,message:t,buttons:r.length?r.map(e=>{let{id:t=""}=e;if(t.length>64)throw Error(`Button ID has incorrect size: ${t}`);if(!e.type||"default"===e.type||"destructive"===e.type){let s=e.text.trim();if(!s.length||s.length>64){let t=e.type||"default";throw Error(`Button text with type "${t}" has incorrect size: ${e.text.length}`)}return{...e,text:s,id:t}}return{...e,id:t}}):[{type:"close",id:""}]}}(e)});return t}finally{this.isOpened=!1}}}let ej=ef(({postEvent:e,version:t})=>new eH(!1,t,e));class eG extends em{constructor(e,t,s){super({isOpened:e},t,{close:"web_app_close_scan_qr_popup",open:"web_app_open_scan_qr_popup"}),this.postEvent=s}close(){this.postEvent("web_app_close_scan_qr_popup"),this.isOpened=!1}set isOpened(e){this.set("isOpened",e)}get isOpened(){return this.get("isOpened")}async open(e){if(this.isOpened)throw Error("The scanner is already opened");let{text:t,capture:s}=("string"==typeof e?{text:e}:e)||{};this.isOpened=!0;try{let e=(await G({method:"web_app_open_scan_qr_popup",event:["qr_text_received","scan_qr_popup_closed"],postEvent:this.postEvent,params:{text:t},capture:e=>"scan_qr_popup_closed"===e.event||!s||s(e.payload)})||{}).data||null;return e&&this.close(),e}finally{this.isOpened=!1}}}let ez=ef(({version:e,postEvent:t})=>new eG(!1,e,t));class eJ extends Y{constructor(e,t,s){super({isVisible:e},t,{show:"web_app_setup_settings_button",hide:"web_app_setup_settings_button"}),a(this,"on",(e,t)=>"click"===e?$("settings_button_pressed",t):this.state.on(e,t)),a(this,"off",(e,t)=>"click"===e?D("settings_button_pressed",t):this.state.off(e,t)),this.postEvent=s}set isVisible(e){this.set("isVisible",e),this.postEvent("web_app_setup_settings_button",{is_visible:e})}get isVisible(){return this.get("isVisible")}hide(){this.isVisible=!1}show(){this.isVisible=!0}}let eK=ef("settingsButton",({version:e,postEvent:t,state:s={isVisible:!1}})=>new eJ(s.isVisible,e,t));class eQ extends em{constructor(e,t,s){super({isVerticalSwipeEnabled:e},t,{disableVerticalSwipe:"web_app_setup_swipe_behavior",enableVerticalSwipe:"web_app_setup_swipe_behavior"}),this.postEvent=s}set isVerticalSwipeEnabled(e){this.set("isVerticalSwipeEnabled",e),this.postEvent("web_app_setup_swipe_behavior",{allow_vertical_swipe:e})}get isVerticalSwipeEnabled(){return this.get("isVerticalSwipeEnabled")}disableVerticalSwipe(){this.isVerticalSwipeEnabled=!1}enableVerticalSwipe(){this.isVerticalSwipeEnabled=!0}}let eZ=ef("swipeBehavior",({postEvent:e,state:t={isVerticalSwipeEnabled:!0},version:s})=>new eQ(t.isVerticalSwipeEnabled,s,e));class eF extends eC{get accentTextColor(){return this.get("accentTextColor")}get bgColor(){return this.get("bgColor")}get buttonColor(){return this.get("buttonColor")}get buttonTextColor(){return this.get("buttonTextColor")}get destructiveTextColor(){return this.get("destructiveTextColor")}getState(){return this.clone()}get headerBgColor(){return this.get("headerBgColor")}get hintColor(){return this.get("hintColor")}get isDark(){return!this.bgColor||Q(this.bgColor)}get linkColor(){return this.get("linkColor")}get secondaryBgColor(){return this.get("secondaryBgColor")}get sectionBgColor(){return this.get("sectionBgColor")}get sectionHeaderTextColor(){return this.get("sectionHeaderTextColor")}get sectionSeparatorColor(){return this.get("sectionHeaderTextColor")}listen(){return $("theme_changed",e=>{var t;this.set((t=e.theme_params,en().parse(t)))})}get subtitleTextColor(){return this.get("subtitleTextColor")}get textColor(){return this.get("textColor")}}let eY=ef("themeParams",({themeParams:e,state:t=e,addCleanup:s})=>{let r=new eF(t);return s(r.listen()),r});function eX(e,t){return e.startsWith(t)?e:`${t}${e}`}class e0 extends ek{constructor(e,t,s){super(e,{readTextFromClipboard:"web_app_read_text_from_clipboard"}),a(this,"supportsParam"),this.version=e,this.createRequestId=t,this.postEvent=s,this.supportsParam=eB(e,{"openLink.tryInstantView":["web_app_open_link","try_instant_view"]})}openLink(e,t){let s=new URL("string"==typeof e?e:`${e.pathname||""}${eX(e.search||"","?")}${eX(e.hash||"","#")}`,"http://a").toString();if(!W("web_app_open_link",this.version)){window.open(s,"_blank");return}let r="boolean"==typeof t?{tryInstantView:t}:t||{};this.postEvent("web_app_open_link",{url:s,try_browser:r.tryBrowser,try_instant_view:r.tryInstantView})}openTelegramLink(e){let{hostname:t,pathname:s,search:r}=new URL(e,"https://t.me");if("t.me"!==t)throw Error(`URL has not allowed hostname: ${t}. Only "t.me" is allowed`);if(!W("web_app_open_tg_link",this.version)){window.location.href=e;return}this.postEvent("web_app_open_tg_link",{path_full:s+r})}async readTextFromClipboard(){let e=this.createRequestId(),{data:t=null}=await G({method:"web_app_read_text_from_clipboard",event:"clipboard_text_received",postEvent:this.postEvent,params:{req_id:e},capture:M(e)});return t}shareURL(e,t){this.openTelegramLink("https://t.me/share/url?"+new URLSearchParams({url:e,text:t||""}).toString().replace(/\+/g,"%20"))}}let e1=ef(({version:e,postEvent:t,createRequestId:s})=>new e0(e,s,t));async function e3(e={}){let{is_expanded:t,is_state_stable:s,...r}=await G({...e,method:"web_app_request_viewport",event:"viewport_changed"});return{...r,isExpanded:t,isStateStable:s}}function e6(e){return e<0?0:e}class e2 extends eC{constructor({postEvent:e,stableHeight:t,height:s,width:r,isExpanded:i}){super({height:e6(s),isExpanded:i,stableHeight:e6(t),width:e6(r)}),a(this,"postEvent"),this.postEvent=e}async sync(e){let{isStateStable:t,...s}=await e3(e);this.set({...s,stableHeight:t?s.height:this.get("stableHeight")})}get height(){return this.get("height")}get stableHeight(){return this.get("stableHeight")}listen(){return $("viewport_changed",e=>{let{height:t,width:s,is_expanded:r,is_state_stable:i}=e,n=e6(t);this.set({height:n,isExpanded:r,width:e6(s),...i?{stableHeight:n}:{}})})}get isExpanded(){return this.get("isExpanded")}get width(){return this.get("width")}expand(){this.postEvent("web_app_expand"),this.set("isExpanded",!0)}get isStable(){return this.stableHeight===this.height}}let e7=ef("viewport",async({state:e,platform:t,postEvent:s,addCleanup:r})=>{let i=!1,n=0,o=0,a=0;if(e)i=e.isExpanded,n=e.height,o=e.width,a=e.stableHeight;else if(["macos","tdesktop","unigram","webk","weba","web"].includes(t))i=!0,n=window.innerHeight,o=window.innerWidth,a=window.innerHeight;else{let e=await e3({timeout:1e3,postEvent:s});i=e.isExpanded,n=e.height,o=e.width,a=e.isStateStable?n:0}let p=new e2({postEvent:s,height:n,width:o,stableHeight:a,isExpanded:i});return r(p.listen()),p});function e4(e,t){function s(e){return function(t,s,i){return n=>{let o={...n,[t]:e(s)};return(0,r.jsx)(i,{...o})}}}return[s(e),s(t)]}let e5=(0,i.createContext)(void 0);function e9(e){function t(t){let s=function(){let e=(0,i.useContext)(e5);if(!e)throw Error("useSDK was used outside the SDKProvider.");return e}(),[r,n]=(0,i.useState)(t?void 0:()=>{if(typeof window>"u")throw Error("Using hooks on the server side, you must explicitly specify ssr = true option");return s.use(e)});return(0,i.useEffect)(()=>{n(s.use(e))},[s]),r}return[t,function(e){let s=t(e);if(s){if("error"in s)throw s.error;return s.result}}]}let[e8,te]=e9(eg),[tt,ts]=e4(e8,te),[tr,ti]=e9(eE),[tn,to]=e4(tr,ti),[ta,tp]=e9(eP),[tc,tu]=e4(ta,tp),[tl,th]=e9(eO),[td,t_]=e4(tl,th),[tb,tf]=e9(eR),[tg,tm]=e4(tb,tf),[tw,tv]=e9(eD),[ty,tE]=e4(tw,tv),[tC,tx]=e9(eN),[tP,tk]=e4(tC,tx),[tq,tS]=e9(eW),[tA,tT]=e4(tq,tS),[tO,tV]=e9(eM),[tR,tI]=e4(tO,tV),[tD,t$]=e9(ej),[tN,tL]=e4(tD,t$),[tW,tB]=e9(ez),[tU,tM]=e4(tW,tB),[tH,tj]=e9(eK),[tG,tz]=e4(tH,tj),[tJ,tK]=e9(eZ),[tQ,tZ]=e4(tJ,tK),[tF,tY]=e9(eY),[tX,t0]=e4(tF,tY),[t1,t3]=e9(e1),[t6,t2]=e4(t1,t3),[t7,t4]=e9(e7),[t5,t9]=e4(t7,t4);function t8({children:e,acceptCustomStyles:t,debug:s}){let n=(0,i.useRef)(!0),[o,a]=(0,i.useState)(new Map),p=(0,i.useRef)(o),u=(0,i.useCallback)(e=>{n.current&&a(t=>(e&&e(t),new Map(t)))},[]),l=(0,i.useMemo)(()=>({use(e,...t){let s,r,i;let n=o.get(e);if(n)return n;try{s=e(...t)}catch(e){r=e}function a(t){return o.set(e,t),t}if(r)return a({error:r});if(Array.isArray(s)&&(i=s[1],s=s[0]),!s)return a({result:s,cleanup:i});function p(e){if("on"in e){let t=e.on("change",()=>u()),s=i;i=()=>{s&&s(),t()}}return{result:e,cleanup:i}}return s instanceof Promise?(s.then(t=>u(s=>s.set(e,p(t))),t=>u(s=>s.set(e,{error:t}))),a({})):a(p(s))}}),[o]);return(0,i.useEffect)(()=>(n.current=!0,()=>{n.current=!1}),[]),(0,i.useEffect)(()=>{if(B())return function(e=!0){let t=[$("reload_iframe",()=>{U("iframe_will_reload"),window.location.reload()})];if(e){let e=document.createElement("style");e.id="telegram-custom-styles",document.head.appendChild(e),t.push($("set_custom_style",t=>{e.innerHTML=t}),()=>document.head.removeChild(e))}return U("iframe_ready",{reload_supported:!0}),()=>t.forEach(e=>e())}(t)},[t]),(0,i.useEffect)(()=>{var e;h!==(e=s||!1)&&(h=e,e?(I().subscribe(d),()=>c(d)):c(d))},[s]),(0,i.useEffect)(()=>{p.current=o},[o]),(0,i.useEffect)(()=>()=>{p.current.forEach(e=>{"cleanup"in e&&e.cleanup&&e.cleanup()})},[]),(0,r.jsx)(e5.Provider,{value:l,children:e})}}}]);