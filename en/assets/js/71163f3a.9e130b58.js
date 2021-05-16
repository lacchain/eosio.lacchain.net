(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[5224],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7332:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={id:"interoperabilidad",title:"Interoperabilidad de Redes",sidebar_label:"Interoperabilidad"},d={unversionedId:"interoperabilidad",id:"interoperabilidad",isDocsHomePage:!1,title:"Interoperabilidad de Redes",description:"LACChain es independiente de la tecnolog\xeda, por lo que queremos poder integrar distintos protocolos blockchain que est\xe1n siendo utilizados en LACChain.",source:"@site/docs/interoperabilidad.md",sourceDirName:".",slug:"/interoperabilidad",permalink:"/en/docs/interoperabilidad",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/interoperabilidad.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"5/16/2021",sidebar_label:"Interoperabilidad",frontMatter:{id:"interoperabilidad",title:"Interoperabilidad de Redes",sidebar_label:"Interoperabilidad"},sidebar:"docs",previous:{title:"Privacidad en Redes Blockchain",permalink:"/en/docs/privacidad"},next:{title:"Ruta del Proyecto",permalink:"/en/docs/roadmap"}},l=[{value:"Interoperabilidad Ethereum =&gt; EOSIO",id:"interoperabilidad-ethereum--eosio",children:[]},{value:"Interoperabilidad  Ethereum \u21d4 EOSIO",id:"interoperabilidad--ethereum-\u21d4-eosio",children:[]},{value:"EVM sobre EOSIO",id:"evm-sobre-eosio",children:[{value:"Soluciones EVM sobre EOSIO Existentes:",id:"soluciones-evm-sobre-eosio-existentes",children:[]}]}],s={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LACChain es independiente de la tecnolog\xeda, por lo que queremos poder integrar distintos protocolos blockchain que est\xe1n siendo utilizados en LACChain."),(0,o.kt)("p",null,"La interoperabilidad entre distintos protocoles blockchain se puede lograr de dos formas:"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Trusted Peers:")," Esta modalidad es mas sencilla de implementar, utilizando una capa de confianza para determinar que ocurre en cada cadena. "),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Trustless:")," Es una solucion mas dificil especialmente ente protocolos  POW -> DPOS. "),(0,o.kt)("h2",{id:"interoperabilidad-ethereum--eosio"},"Interoperabilidad Ethereum => EOSIO"),(0,o.kt)("h2",{id:"interoperabilidad--ethereum-\u21d4-eosio"},"Interoperabilidad  Ethereum \u21d4 EOSIO"),(0,o.kt)("h2",{id:"evm-sobre-eosio"},"EVM sobre EOSIO"),(0,o.kt)("p",null,"Block.one anunci\xf3 un desaf\xedo de un contrato inteligente, ofreciendo un premio de 200,000 d\xf3lares a quien lo resuelva."),(0,o.kt)("p",null,'"En este desaf\xedo, los participantes deben crear un Contrato Inteligente EOSIO que pueda almacenar e invocar Contratos Inteligentes EVM (Solidity) en un ambiente virtual parecido al de Ethereum", se detalla en un anuncio del 3 de febrero en DevPost de EOSIO.'),(0,o.kt)("h3",{id:"soluciones-evm-sobre-eosio-existentes"},"Soluciones EVM sobre EOSIO Existentes:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/jafri/eosio.evm"},"https://github.com/jafri/eosio.evm")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Trabajo en progreso")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Aun estamos trabajando en este aspecto de la documentaci\xf3n, si desea mejorar el contenido puede aprender ",(0,o.kt)("a",{parentName:"p",href:"guias/contribuir"},"como contribuir"),". Consulte el ",(0,o.kt)("a",{parentName:"p",href:"./roadmap"},"Roadmap del proyecto"),"."))))}c.isMDXComponent=!0}}]);