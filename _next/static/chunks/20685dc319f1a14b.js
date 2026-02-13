(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return g},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return d},stringifyError:function(){return P}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>l.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function d(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),o=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return x}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),i=e.r(43476),l=a._(e.r(71645)),s=e.r(95057),c=e.r(8372),u=e.r(18581),f=e.r(18967),p=e.r(5550);e.r(33525);let d=e.r(91949),h=e.r(73668),m=e.r(9396);function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}function b(t){var r;let n,o,a,[s,b]=(0,l.useOptimistic)(d.IDLE_LINK_STATUS),x=(0,l.useRef)(null),{href:v,as:j,children:P,prefetch:w=null,passHref:_,replace:E,shallow:C,scroll:S,onClick:k,onMouseEnter:O,onTouchStart:N,legacyBehavior:T=!1,onNavigate:L,ref:$,unstable_dynamicOnHover:M,...R}=t;n=P,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let A=l.default.useContext(c.AppRouterContext),I=!1!==w,U=!1!==w?null===(r=w)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:z,as:F}=l.default.useMemo(()=>{let e=y(v);return{href:e,as:j?y(j):e}},[v,j]);if(T){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(n)}let B=T?o&&"object"==typeof o&&o.ref:$,D=l.default.useCallback(e=>(null!==A&&(x.current=(0,d.mountLinkInstance)(e,z,A,U,I,b)),()=>{x.current&&((0,d.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,d.unmountPrefetchableInstance)(e)}),[I,z,A,U,b]),K={ref:(0,u.useMergedRef)(D,B),onClick(t){T||"function"!=typeof k||k(t),T&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!A||t.defaultPrevented||function(t,r,n,o,a,i,s){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);l.default.startTransition(()=>{f(n||r,a?"replace":"push",i??!0,o.current)})}}(t,z,F,x,E,S,L)},onMouseEnter(e){T||"function"!=typeof O||O(e),T&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),A&&I&&(0,d.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){T||"function"!=typeof N||N(e),T&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),A&&I&&(0,d.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,f.isAbsoluteUrl)(F)?K.href=F:T&&!_&&("a"!==o.type||"href"in o.props)||(K.href=(0,p.addBasePath)(F)),a=T?l.default.cloneElement(o,K):(0,i.jsx)("a",{...R,...K,children:n}),(0,i.jsx)(g.Provider,{value:s,children:a})}e.r(84508);let g=(0,l.createContext)(d.IDLE_LINK_STATUS),x=()=>(0,l.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18566,(e,t,r)=>{t.exports=e.r(76562)},92523,e=>{"use strict";e.s(["MENU_ITEMS",0,[{label:"Home",href:"/home",ariaLabel:"Home",rotation:-8,hoverStyles:{bgColor:"#3b82f6",textColor:"#ffffff"}},{label:"Education",href:"/education",ariaLabel:"Education",rotation:8,hoverStyles:{bgColor:"#10b981",textColor:"#ffffff"}},{label:"Experience",href:"/experience",ariaLabel:"Experience",rotation:8,hoverStyles:{bgColor:"#ef4444",textColor:"#ffffff"}},{label:"Projects",href:"/projects",ariaLabel:"Projects",rotation:8,hoverStyles:{bgColor:"#f59e0b",textColor:"#ffffff"}},{label:"Contact",href:"/contact",ariaLabel:"Contact",rotation:-8,hoverStyles:{bgColor:"#8b5cf6",textColor:"#ffffff"}}]])},16695,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016),o=e.i(18566);let a=({items:e,animationTime:a=600,particleCount:i=15,particleDistances:l=[90,10],particleR:s=100,timeVariance:c=300,colors:u=[1,2,3,1,2,3,1,4],initialActiveIndex:f=0})=>{let p=(0,o.usePathname)(),d=(0,r.useRef)(null),h=(0,r.useRef)(null),m=(0,r.useRef)(null),y=(0,r.useRef)(null),[b,g]=(0,r.useState)(f),x=(e=1)=>e/2-Math.random()*e,v=(e,t,r)=>{let n=(360+x(8))/r*t*(Math.PI/180);return[e*Math.cos(n),e*Math.sin(n)]},j=(e,t,r,n)=>{let o=x(n/10);return{start:v(r[0],i-e,i),end:v(r[1]+x(7),i-e,i),time:t,scale:1+x(.2),color:u[Math.floor(Math.random()*u.length)],rotate:o>0?(o+n/20)*10:(o-n/20)*10}},P=e=>{if(!d.current||!m.current||!y.current)return;let t=d.current.getBoundingClientRect(),r=e.getBoundingClientRect(),n={left:`${r.x-t.x}px`,top:`${r.y-t.y}px`,width:`${r.width}px`,height:`${r.height}px`};Object.assign(m.current.style,n),Object.assign(y.current.style,n),y.current.innerText=e.innerText},w=(e,t)=>{b!==t&&(g(t),P(e),m.current&&m.current.querySelectorAll(".particle").forEach(e=>m.current.removeChild(e)),y.current&&(y.current.classList.remove("active"),y.current.offsetWidth,y.current.classList.add("active")),m.current&&(e=>{e.style.setProperty("--time",`${2*a+c}ms`);for(let t=0;t<i;t++){let r=2*a+x(2*c),n=j(t,r,l,s);e.classList.remove("active"),setTimeout(()=>{let t=document.createElement("span"),o=document.createElement("span");t.classList.add("particle"),t.style.setProperty("--start-x",`${n.start[0]}px`),t.style.setProperty("--start-y",`${n.start[1]}px`),t.style.setProperty("--end-x",`${n.end[0]}px`),t.style.setProperty("--end-y",`${n.end[1]}px`),t.style.setProperty("--time",`${n.time}ms`),t.style.setProperty("--scale",`${n.scale}`),t.style.setProperty("--color",`var(--color-${n.color}, white)`),t.style.setProperty("--rotate",`${n.rotate}deg`),o.classList.add("point"),t.appendChild(o),e.appendChild(t),requestAnimationFrame(()=>{e.classList.add("active")}),setTimeout(()=>{try{e.removeChild(t)}catch{}},r)},30)}})(m.current))};return(0,r.useEffect)(()=>{let t=e.findIndex(e=>e.href===p);t>=0&&g(t)},[p,e]),(0,r.useEffect)(()=>{if(!h.current||!d.current)return;let e=h.current.querySelectorAll("li")[b];e&&(P(e),y.current?.classList.add("active"));let t=new ResizeObserver(()=>{let e=h.current?.querySelectorAll("li")[b];e&&P(e)});return t.observe(d.current),()=>t.disconnect()},[b]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
          }
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.text {
            color: white;
            transition: color 0.3s ease;
          }
          .effect.text.active {
            color: black;
          }
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: lighten;
          }
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: black;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease 1 -350ms;
          }
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) ease 1 -350ms;
          }
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          li.active {
            color: black;
            text-shadow: none;
          }
          li.active::after {
            opacity: 1;
            transform: scale(1);
          }
          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: white;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
        `}),(0,t.jsxs)("div",{className:"relative",ref:d,children:[(0,t.jsx)("nav",{className:"flex relative",style:{transform:"translate3d(0,0,0.01px)"},children:(0,t.jsx)("ul",{ref:h,className:"flex gap-8 list-none p-0 px-4 m-0 relative z-[3]",style:{color:"white",textShadow:"0 1px 1px hsl(205deg 30% 10% / 0.2)"},children:e.map((e,r)=>(0,t.jsx)("li",{className:`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white ${b===r?"active":""}`,onClick:e=>w(e.currentTarget,r),onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),w(e.currentTarget,r))},tabIndex:0,children:(0,t.jsx)(n.default,{href:e.href,className:"outline-none py-3 px-6 inline-block",children:e.label})},e.href??r))})}),(0,t.jsx)("span",{className:"effect filter",ref:m}),(0,t.jsx)("span",{className:"effect text",ref:y})]})]})};e.s(["GooeyNav",0,a,"default",0,a])},69476,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016),o=e.i(92523);function a(){let[e,a]=(0,r.useState)(!1);return(0,t.jsxs)("div",{className:"flex justify-between items-center px-4 py-3",children:[(0,t.jsxs)("button",{onClick:()=>a(!e),className:"relative z-50 right-4 top-4 ml-auto flex flex-col gap-1","aria-label":"Toggle menu",children:[(0,t.jsx)("span",{className:"w-6 h-[2px] bg-white"}),(0,t.jsx)("span",{className:"w-6 h-[2px] bg-white"}),(0,t.jsx)("span",{className:"w-6 h-[2px] bg-white"})]}),(0,t.jsx)("div",{className:`
          fixed inset-0 z-40
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${e?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}
        `,onClick:()=>a(!1),children:(0,t.jsx)("nav",{className:`
            absolute right-0 top-15 h-full w-2/3
            bg-[#0f172a] p-6
            transform transition-transform duration-200 ease-out
            ${e?"translate-x-0":"translate-x-full"}
          `,onClick:e=>e.stopPropagation(),children:(0,t.jsx)("ul",{className:"flex flex-col gap-6 mt-12",children:o.MENU_ITEMS.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(n.default,{href:e.href,onClick:()=>a(!1),className:"text-lg font-medium text-white",children:e.label})},e.href))})})})]})}e.s(["HiddenMenu",()=>a])},56253,e=>{"use strict";var t=e.i(43476),r=e.i(46932),n=e.i(18566);function o({children:e}){let o=(0,n.usePathname)();return(0,t.jsx)(r.motion.main,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},children:e},o)}e.s(["default",()=>o])},63687,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function n(){let[e,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>n(window.scrollY>400);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)("button",{type:"button",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Scroll to top",className:`
        fixed right-5 bottom-5 z-50
        h-14 w-14 rounded-full
        border border-white/20
        bg-white/5 backdrop-blur-sm
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        grid place-items-center
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]
        active:translate-y-0 active:scale-95
        ${e?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}
      `,children:(0,t.jsxs)("svg",{viewBox:"0 0 24 24",className:"h-7 w-7",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M12 19V5"}),(0,t.jsx)("path",{d:"M5 12l7-7 7 7"})]})})}e.s(["default",()=>n])}]);