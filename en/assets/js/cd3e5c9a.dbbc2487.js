(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[3589],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9495:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"api",title:"API Endpoints"},s={unversionedId:"herramientas/api",id:"herramientas/api",isDocsHomePage:!1,title:"API Endpoints",description:"Que es un API",source:"@site/docs/herramientas/api.md",sourceDirName:"herramientas",slug:"/herramientas/api",permalink:"/en/docs/herramientas/api",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/herramientas/api.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"5/16/2021",frontMatter:{id:"api",title:"API Endpoints"},sidebar:"docs",previous:{title:"Monitor de Red",permalink:"/en/docs/herramientas/monitor"},next:{title:"L\xednea de Comando",permalink:"/en/docs/herramientas/cli"}},l=[{value:"Que es un API",id:"que-es-un-api",children:[]},{value:"EOSIO RPC API",id:"eosio-rpc-api",children:[{value:"Endpoints HTTP",id:"endpoints-http",children:[]},{value:"Endpoints State History Plugin",id:"endpoints-state-history-plugin",children:[]},{value:"EOS JS",id:"eos-js",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"que-es-un-api"},"Que es un API"),(0,i.kt)("p",null,'El t\xe9rmino API es una abreviatura de "Application Programming Interfaces", que en espa\xf1ol significa interfaz de programaci\xf3n de aplicaciones. Permite la interacci\xf3n de aplicaciones con la red mediante el protocolo HTTP.'),(0,i.kt)("h2",{id:"eosio-rpc-api"},"EOSIO RPC API"),(0,i.kt)("p",null,"La siguiente API es el mecanismo nativo de EOSIO disponible para interactuar con el testnet."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/nodeos/plugins/chain_api_plugin/api-reference/index"},"Especificaci\xf3n API para EOSIO")),(0,i.kt)("h3",{id:"endpoints-http"},"Endpoints HTTP"),(0,i.kt)("p",null,"A continuaci\xf3n algunos ejemplos de endpoints HTTP RPC "),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Nodo Escritor + Middleware : ",(0,i.kt)("a",{parentName:"li",href:"https://latamlink.eosio.cr/v1/chain/get_info"},"https://lacchain.eosio.cr")," "),(0,i.kt)("li",{parentName:"ul"},"Nodo Observador solo lectura : ",(0,i.kt)("a",{parentName:"li",href:"https://latamlink.eosio.cr/v1/chain/get_info"},"https://observer.eosio.cr")),(0,i.kt)("li",{parentName:"ul"},"Nodo Escritor sin Middleware : ",(0,i.kt)("a",{parentName:"li",href:"https://latamlink.eosio.cr/v1/chain/get_info"},"https://writer.eosio.cr")," "))),(0,i.kt)("p",null,"La lista completa de endpoints esta disponible en el siguiente enlace : ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.latamlink.io/endpoints"},"Endpoints LACChain EOSIO")),(0,i.kt)("h3",{id:"endpoints-state-history-plugin"},"Endpoints State History Plugin"),(0,i.kt)("p",null,"Los observadores pueden habilitar el ",(0,i.kt)("inlineCode",{parentName:"p"},"State_history_plugin")," de nodeos el cual es \xfatil para capturar datos hist\xf3ricos sobre el estado de la cadena de bloques. El plugin recibe datos de blockchain de otros nodos conectados y almacena los datos en archivos. El plugin expone un endpoint donde escucha usando web sockets para que las aplicaciones se conecten y consulten los datos de la cadena de bloques en funci\xf3n de las opciones del plugin especificadas al iniciar nodeos."),(0,i.kt)("p",null,"Mas sobre State History Plugin en este enlace: ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/nodeos/plugins/state_history_plugin/index"},"https://developers.eos.io/manuals/eos/v2.0/nodeos/plugins/state_history_plugin/index")),(0,i.kt)("h3",{id:"eos-js"},"EOS JS"),(0,i.kt)("p",null,"EOSJS es la librer\xeda oficial de JavaScript para la integraci\xf3n con redes blockchain basadas en EOSIO utilizando ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/eosio-nodeos/reference"},"RPC API"),"."),(0,i.kt)("p",null,"La documentaci\xf3n se puede encontrar ",(0,i.kt)("a",{parentName:"p",href:"https://eosio.github.io/eosjs"},"aqu\xed")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Trabajo en progreso")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Aun estamos trabajando en este aspecto de la documentaci\xf3n, si desea mejorar el contenido puede aprender ",(0,i.kt)("a",{parentName:"p",href:"../guias/contribuir"},"como contribuir"),". Consulte el ",(0,i.kt)("a",{parentName:"p",href:"../roadmap"},"Roadmap del proyecto"),"."))))}c.isMDXComponent=!0}}]);