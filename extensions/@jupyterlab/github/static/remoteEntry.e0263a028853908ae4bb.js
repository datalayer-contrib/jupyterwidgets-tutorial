var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,u,l,s,f,d,p,c,h,b,v,g,y,m,j,w,S={},E={};function k(e){if(E[e])return E[e].exports;var r=E[e]={id:e,exports:{}};return S[e](r,r.exports,k),r.exports}k.m=S,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{534:"06ec9cb816bf9170af66",742:"c0343f89d61252c41791",784:"7af3b56872a0f8721f0b"}[e]+".js?v="+{534:"06ec9cb816bf9170af66",742:"c0343f89d61252c41791",784:"7af3b56872a0f8721f0b"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyterlab/github:",k.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="@jupyterlab/github",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];switch(t){case"default":u("@jupyterlab/github","3.0.1",(()=>k.e(784).then((()=>()=>k(784))))),u("base64-js","1.3.1",(()=>k.e(742).then((()=>()=>k(742)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():a(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,f,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==d?u>n&&!a:""==d!=a);if("u"==f){if(!l||"u"!=d)return!1}else if(l)if(d==f)if(u<=n){if(s!=e[u])return!1}else{if(a?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||f<d!=a)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?o(h,r):!c())}return!!c()},i=(e,r)=>{var t=k.S[e];if(!t||!k.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",f=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,a,n)),h(e[t][a])},d=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},p=(e,r,t,n)=>{var o=e[t];return"No satisfying version ("+a(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},c=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(p(e,r,t,n))},h=e=>(e.loaded=1,e.get()),v=(b=e=>function(r,t,n,a){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,n,a)):e(r,k.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),h(d(r,t,n)||c(r,e,t,n)||u(r,t))))),g=b(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),y=b(((e,r,t,n,a)=>{var o=r&&k.o(r,t)&&d(r,t,n);return o?h(o):a()})),m={},j={168:()=>g("default","@lumino/signaling",[1,1,4,3]),260:()=>g("default","@jupyterlab/settingregistry",[1,3,2,4]),387:()=>g("default","@jupyterlab/coreutils",[1,5,2,4]),458:()=>g("default","@jupyterlab/application",[1,3,2,4]),473:()=>v("default","@jupyterlab/observables",[1,4,2,4]),579:()=>g("default","@jupyterlab/filebrowser",[1,3,2,4]),584:()=>g("default","@jupyterlab/services",[1,6,2,4]),706:()=>g("default","@lumino/widgets",[1,1,19,0]),790:()=>g("default","@jupyterlab/docmanager",[1,3,2,4]),825:()=>g("default","@jupyterlab/apputils",[1,3,2,4]),850:()=>g("default","@lumino/algorithm",[1,1,3,3]),959:()=>y("default","base64-js",[1,1,3,0],(()=>k.e(742).then((()=>()=>k(742))))),971:()=>g("default","@jupyterlab/ui-components",[1,3,2,4])},w={784:[168,260,387,458,473,579,584,706,790,825,850,959,971]},k.f.consumes=(e,r)=>{k.o(w,e)&&w[e].forEach((e=>{if(k.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,S[e]=t=>{delete E[e],t.exports=r()}},n=r=>{delete m[e],S[e]=t=>{throw delete E[e],r}};try{var a=j[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={879:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[o,i,u]=t,l=0,s=[];l<o.length;l++)a=o[l],k.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(n in i)k.o(i,n)&&(k.m[n]=i[n]);for(u&&u(k),r&&r(t);s.length;)s.shift()()},t=self.webpackChunk_jupyterlab_github=self.webpackChunk_jupyterlab_github||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var P={};(()=>{var e=P,r={"./index":()=>k.e(784).then((()=>()=>k(784))),"./extension":()=>k.e(784).then((()=>()=>k(784))),"./style":()=>k.e(534).then((()=>()=>k(534)))},t=(e,t)=>(k.R=t,t=k.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),k.R=void 0,t),n=(e,r)=>{if(k.S){var t=k.S.default,n="default";if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return k.S[n]=e,k.I(n,r)}};k.d(e,{get:()=>t,init:()=>n})})(),(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlab/github"]=P})();