(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[3962],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(g,o(o({ref:a},c),{},{components:t})):r.createElement(g,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},14269:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=t(22122),n=t(19756),i=(t(67294),t(3905)),o={id:"trazabilidad",title:"Autorizaciones y Trazabilidad",sidebar_label:"Permisos y Visibilidad"},s={unversionedId:"trazabilidad",id:"trazabilidad",isDocsHomePage:!1,title:"Autorizaciones y Trazabilidad",description:"Caracter\xedsticas Nativas de EOSIO",source:"@site/docs/trazabilidad.md",sourceDirName:".",slug:"/trazabilidad",permalink:"/docs/trazabilidad",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/trazabilidad.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"16/5/2021",sidebar_label:"Permisos y Visibilidad",frontMatter:{id:"trazabilidad",title:"Autorizaciones y Trazabilidad",sidebar_label:"Permisos y Visibilidad"},sidebar:"docs",previous:{title:"Cuentas y Autorizaciones",permalink:"/docs/cuentas-permisos"},next:{title:"Uso de Recursos",permalink:"/docs/recursos"}},l=[{value:"Caracter\xedsticas Nativas de EOSIO",id:"caracter\xedsticas-nativas-de-eosio",children:[]},{value:"Comite Permisionador",id:"comite-permisionador",children:[]},{value:"Tipos de Entidades Permisionadas",id:"tipos-de-entidades-permisionadas",children:[{value:"Autoridad Nodos Escritores",id:"autoridad-nodos-escritores",children:[]},{value:"Autoridad de Usuarios",id:"autoridad-de-usuarios",children:[]},{value:"Creaci\xf3n de cuenta",id:"creaci\xf3n-de-cuenta",children:[]}]},{value:"Damage control y liability",id:"damage-control-y-liability",children:[]}],d={toc:l};function c(e){var a=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"caracter\xedsticas-nativas-de-eosio"},"Caracter\xedsticas Nativas de EOSIO"),(0,i.kt)("p",null,"En EOSIO ninguna acci\xf3n es an\xf3nima, todas las transacciones est\xe1n vinculadas a una cuenta, por ejemplo si se desea llamar a la acci\xf3n de un contrato, el llamado va a venir acompa\xf1ado de una cuenta origen que consume esa acci\xf3n del contrato inteligente."),(0,i.kt)("p",null,"Como vimos en la secci\xf3n de ",(0,i.kt)("a",{parentName:"p",href:"cuentas-permisos"},"cuentas y permisos EOSIO")," cuenta con un sistema nativo para definir autorizaciones que satisfagan permisos que pueden ser definidos para una cuenta en la red."),(0,i.kt)("h2",{id:"comite-permisionador"},"Comite Permisionador"),(0,i.kt)("p",null,"Los permisos privilegiados pueden delegarse de forma din\xe1mica a distintas entidades y nodos, por ejemplo a comit\xe9s legales dentro del comit\xe9 o a representantes t\xe9cnicos dentro del comit\xe9."),(0,i.kt)("p",null,"Considerando que el permiso de crear nuevas cuenta podr\xeda delegarse exclusivamente a los escritores y de esa manera toda acci\xf3n sin importar  como ingresa a la red podr\xeda quedar vinculada al escritor que creo la cuenta."),(0,i.kt)("h2",{id:"tipos-de-entidades-permisionadas"},"Tipos de Entidades Permisionadas"),(0,i.kt)("p",null,'Las entidades permisionadas pueden ser "partners" de lacchain los cuales pueden desplegar cualquier tipo de nodo. De otra manera las entidades que no sean "partner" solo pueden desplegar nodos escritores y observadores.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Node Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Partner"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Non-Partner"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Validator nodes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Boot nodes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Writer nodes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Observer nodes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z}))))),(0,i.kt)("h4",{id:"permisos-y-llaves-por-tipo-de-nodo"},"Permisos y llaves por tipo de nodo"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Account key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Block Signing Key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Peer Key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Extra Keys"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Entity")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Active/Owner permissions"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optional (",(0,i.kt)("a",{parentName:"td",href:"/docs/datos-entidades-nodos#estructura-json-entidades"},"info field"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u02eb ",(0,i.kt)("strong",{parentName:"td"},"validator")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optional (",(0,i.kt)("a",{parentName:"td",href:"/docs/datos-entidades-nodos#nodo-validador"},"info field"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u02eb ",(0,i.kt)("strong",{parentName:"td"},"boot")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optional (",(0,i.kt)("a",{parentName:"td",href:"/docs/datos-entidades-nodos#nodo-boot"},"info field"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u02eb ",(0,i.kt)("strong",{parentName:"td"},"writer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"NodeName permission"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optional (",(0,i.kt)("a",{parentName:"td",href:"/docs/datos-entidades-nodos#nodo-escritor"},"info field"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u02ea ",(0,i.kt)("strong",{parentName:"td"},"observer")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"No",src:t(34530).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Yes",src:t(66741).Z})),(0,i.kt)("td",{parentName:"tr",align:"center"},"Optional (",(0,i.kt)("a",{parentName:"td",href:"/docs/datos-entidades-nodos#nodo-observador"},"info field"),")")))),(0,i.kt)("h4",{id:"account-key"},"Account key"),(0,i.kt)("p",null,"Llaves perteneciente a una cuenta registrada, en EOSIO se requieren como m\xednimo de dos permisos."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"permissions: \n     owner     1:    1 EOS6R46x4P8b82D4zjpU62xZG3ytn6VUxcyuJntSxSwMLXAgLxcU8\n        active     1:    1 EOS6R46x4P8b82D4zjpU62xZG3ytn6VUxcyuJntSxSwMLXAgLxcU8\n")),(0,i.kt)("h4",{id:"block-signing-key"},"Block Signing Key"),(0,i.kt)("p",null,"LLaves utilizadas para firma de bloques por parte de los nodos validadores que formen parte del grupo de consenso."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="par\xe1metros de configuraci\xf3n de nodeos"',title:'"par\xe1metros',de:!0,"configuraci\xf3n":!0,'nodeos"':!0},"  -p [ --producer-name ] arg            ID of producer controlled by this node \n                                        (e.g. inita; may specify multiple \n                                        times)\n\n  --signature-provider arg              Key=Value pairs in the form \n                                        <public-key>=<provider-spec>\n")),(0,i.kt)("h4",{id:"peer-key"},"Peer Key"),(0,i.kt)("p",null,"Llaves utilizadas por el protocolo P2P para establecer comunicaci\xf3n entre nodos con firmas validas para las llaves publicas especificas. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="par\xe1metros de configuraci\xf3n de nodeos"',title:'"par\xe1metros',de:!0,"configuraci\xf3n":!0,'nodeos"':!0},"  --allowed-connection arg (=any)       Can be 'any' or 'producers' or \n                                        'specified' or 'none'. If 'specified', \n                                        peer-key must be specified at least \n                                        once. If only 'producers', peer-key is \n                                        not required. 'producers' and \n                                        'specified' may be combined.\n  --peer-key arg                        Optional public key of peer allowed to \n                                        connect.  May be used multiple times.\n  --peer-private-key arg                Tuple of [PublicKey, WIF private key] \n                                        (may specify multiple times)\n\n")),(0,i.kt)("h4",{id:"extra-keys"},"Extra Keys"),(0,i.kt)("p",null,"Llaves Adicionales para otros usos que no se utilizan en el consenso o protocolo de red de EOSIO pero que pueden emplearse para otras funciones como criptograf\xeda post-quatinca. Esta informaci\xf3n se puede incluir dentro de los ",(0,i.kt)("a",{parentName:"p",href:"./datos-entidades-nodos"},"datos de las entidad y nodos")," almacenados en el contrato de sistema."),(0,i.kt)("h3",{id:"autoridad-nodos-escritores"},"Autoridad Nodos Escritores"),(0,i.kt)("p",null,"Los nodos escritores requieren de autorizaciones especificadas para el permiso ",(0,i.kt)("inlineCode",{parentName:"p"},"writer")," el cual es administrado por el comit\xe9 permisionador."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ejemplo de Autoridad Nodos Escritores",src:t(32069).Z})),(0,i.kt)("h3",{id:"autoridad-de-usuarios"},"Autoridad de Usuarios"),(0,i.kt)("p",null,"Proponemos delegar los permisos de crear cuenta a los escritores, este permiso puede ser modificado a su vez por una organizaci\xf3n/comit\xe9 para amoldarse a los requerimientos legales y operativos."),(0,i.kt)("p",null,"Cada usuario nuevo estar\xe1 vinculado a un nodo escritor perteneciente a una entidad permisiondada. Cualquier transacci\xf3n creada por la cuenta de un usuario de debe de ir acompa\xf1ada de la firma de un nodo escritor para cumplir con el numero de autorizaciones m\xednimas requeridas (2/2). "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ejemplo de Autoridades Usuario",src:t(69094).Z})),(0,i.kt)("p",null,"La red LACChain requiere rastrear cual nodo escritor gener\xf3 una transacci\xf3n, de tal forma que es posible hacerlos legalmente responsables de ella."),(0,i.kt)("p",null,"Es necesario verificar que en LACChain EOSIO cualquier transacci\xf3n que sea emitida se propague por un nodo que est\xe9 en la lista de cuentas autorizadas por el comit\xe9 permisionador."),(0,i.kt)("p",null,"Esta trazabilidad requiere que cada transacci\xf3n de EOSIO incluya la firma del nodo escritor de tal forma que los  dem\xe1s nodos sean capaces de reconocer a trav\xe9s de que nodo ha entrado la transacciones a la red. "),(0,i.kt)("h3",{id:"creaci\xf3n-de-cuenta"},"Creaci\xf3n de cuenta"),(0,i.kt)("p",null,"Se plantean los siguientes pasos para la creaci\xf3n de cuentas y uso de los recursos de la red."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se delega el permiso de crear nuevas cuentas exclusivamente a los escritores/writers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Un escritor ",(0,i.kt)("inlineCode",{parentName:"p"},"escritorbobb"),", crea una cuenta nueva ",(0,i.kt)("inlineCode",{parentName:"p"},"aliceaccount"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"En la tabla de cuentas, ",(0,i.kt)("inlineCode",{parentName:"p"},"aliceaccount")," tiene definido a ",(0,i.kt)("inlineCode",{parentName:"p"},"escritorbobb")," como el escritor que creo la cuenta")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"El escritor decide como distribuirle recursos a Alice en funci\xf3n a los requerimientos definidos por el comit\xe9, puede optar por transferir recursos, delegarlos, confirmar transacciones.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Alice utiliza los recursos de la red."))),(0,i.kt)("h2",{id:"damage-control-y-liability"},"Damage control y liability"),(0,i.kt)("p",null,"En caso de que se est\xe9n usando recursos de la red por fuera del scope planteado por el comit\xe9, se plantea el siguiente escenario."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se identifica la cuenta abusando de los recursos")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se identifica el escritor responsable de la creaci\xf3n de esa cuenta (informaci\xf3n publica en la red)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se notifica al escritor")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"El comit\xe9 puede optar por accionar de distintas formas:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delegar al escritor  la responsabilidad de controlar."),(0,i.kt)("li",{parentName:"ul"},"Deshabilitar la cuenta abusando."),(0,i.kt)("li",{parentName:"ul"},"Deshabilitar todas las cuentas generadas por el escritor."),(0,i.kt)("li",{parentName:"ul"},"No Deshabilitar las cuentas pero desdelegar recursos temporalmente."),(0,i.kt)("li",{parentName:"ul"},"Ordenar a los validadores que blacklisteen la cuenta."),(0,i.kt)("li",{parentName:"ul"},"Otras acciones que cumplan con los requerimientos legales y operativos."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Una vez controlada la situaci\xf3n queda sujeto al comit\xe9 como realizar el arbitraje que responda a los requerimientos del comit\xe9."))))}c.isMDXComponent=!0},69094:function(e,a,t){"use strict";a.Z=t.p+"assets/images/user-authorities-9c80ca31bbb6032880ee3f4efbaf5b7e.png"},32069:function(e,a,t){"use strict";a.Z=t.p+"assets/images/writer-authorities-1aeae499b343187624650af1112d0270.png"},34530:function(e,a){"use strict";a.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0iI0E5QTlBOSIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTQgMTJjMC00LjQyIDMuNTgtOCA4LTggMS44NSAwIDMuNTUuNjMgNC45IDEuNjlMNS42OSAxNi45QzQuNjMgMTUuNTUgNCAxMy44NSA0IDEyem04IDhjLTEuODUgMC0zLjU1LS42My00LjktMS42OUwxOC4zMSA3LjFDMTkuMzcgOC40NSAyMCAxMC4xNSAyMCAxMmMwIDQuNDItMy41OCA4LTggOHoiLz48L3N2Zz4="},66741:function(e,a){"use strict";a.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiA+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6bTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0iIzE5YWY1NCIgZD0iTTE2LjU5IDcuNThMMTAgMTQuMTdsLTMuNTktMy41OEw1IDEybDUgNSA4LTh6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4eiIvPjwvc3ZnPg=="}}]);