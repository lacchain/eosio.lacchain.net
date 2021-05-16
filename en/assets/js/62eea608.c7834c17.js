(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[9434],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return t?n.createElement(k,o(o({ref:a},u),{},{components:t})):n.createElement(k,o({ref:a},u))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90498:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=t(22122),i=t(19756),r=(t(67294),t(3905)),o={id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes"},s={unversionedId:"recursos/funciones-importantes",id:"recursos/funciones-importantes",isDocsHomePage:!1,title:"Funciones Importantes en EOSIO",description:"Cuenta Privilegiada EOSIO",source:"@site/docs/recursos/funciones-importantes.md",sourceDirName:"recursos",slug:"/recursos/funciones-importantes",permalink:"/en/docs/recursos/funciones-importantes",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/recursos/funciones-importantes.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"5/16/2021",sidebar_label:"Funciones Importantes",frontMatter:{id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes"},sidebar:"docs",previous:{title:"Glosario de T\xe9rminos",permalink:"/en/docs/recursos/glosario"},next:{title:"Redes Blockchain basadas en EOSIO",permalink:"/en/docs/recursos/redes-eosio"}},l=[{value:"Cuenta Privilegiada EOSIO",id:"cuenta-privilegiada-eosio",children:[]},{value:"Funciones Privilegiadas EOSIO",id:"funciones-privilegiadas-eosio",children:[{value:"<code>set_resource_limits</code>",id:"set_resource_limits",children:[]},{value:"<code>set_prods</code>",id:"set_prods",children:[]},{value:"<code>set_params</code>",id:"set_params",children:[]},{value:"<code>set_privileged</code>",id:"set_privileged",children:[]}]},{value:"Acciones de Sistema",id:"acciones-de-sistema",children:[{value:"<code>new_account</code>",id:"new_account",children:[]},{value:"<code>set code</code>",id:"set-code",children:[]},{value:"<code>set abi</code>",id:"set-abi",children:[]},{value:"<code>updateauth</code>",id:"updateauth",children:[]},{value:"<code>deleteauth</code>",id:"deleteauth",children:[]},{value:"<code>linkauth</code>",id:"linkauth",children:[]},{value:"<code>unlinkauth</code>",id:"unlinkauth",children:[]}]},{value:"Contrato Nativo eosio.token",id:"contrato-nativo-eosiotoken",children:[{value:"<code>create</code>",id:"create",children:[]},{value:"<code>issue</code>",id:"issue",children:[]},{value:"<code>retire</code>",id:"retire",children:[]},{value:"<code>transfer</code>",id:"transfer",children:[]}]}],c={toc:l};function u(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cuenta-privilegiada-eosio"},"Cuenta Privilegiada EOSIO"),(0,r.kt)("p",null,"Esta cuenta posee acceso ilimitado a los recursos CPU, NET, y RAM.  Se fijar\xe1 una cuenta compuesta por el comit\xe9 permisionador que representa la autoridad m\xe1xima de la red. "),(0,r.kt)("p",null,"Se pueden crear permisos espec\xedficos para cada acci\xf3n privilegiada y ademas se podr\xe1 utilizar un contrato multi-firma (o \u201cmultisig\u201d) con par\xe1metros variables que requerir\xe1 el consentimiento de la mayor\xeda de los actores en la tabla. Esta cuenta privilegiada se denominar\xe1 la cuenta ",(0,r.kt)("inlineCode",{parentName:"p"},"eosio"),"."),(0,r.kt)("h2",{id:"funciones-privilegiadas-eosio"},"Funciones Privilegiadas EOSIO"),(0,r.kt)("p",null,"Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en s\xed pero en el entorno en el que se ejecuta el c\xf3digo de WebAssembly. EOSIO utiliza estas funciones integradas (intr\xednsecas) para intercambiar datos entre el c\xf3digo de contrato de WebAssembly y el nodo EOSIO ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeos"),". Cada vez que la m\xe1quina virtual EOS (EOSVM), que ejecuta el c\xf3digo de WebAssembly, llega a un nivel intr\xednseco, el control del programa se transfiere al c\xf3digo del controlador de nodo para resolverlo. Una lista completa de funciones intr\xednsecas para EOSIO 2.0.X se puede encontrar ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"},"aqu\xed"),"."),(0,r.kt)("h3",{id:"set_resource_limits"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_resource_limits")),(0,r.kt)("p",null,"Actualiza los limites de recursos asociados a una cuenta\nUtiliza como par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account:  La cuenta destino\nram_bytes:  El limite de RAM en bytes\nnet_weight:  El weight para determinar su capacidad de NET\ncpu_weight:  El weight para determinar su capacidad de CPU\n")),(0,r.kt)("h3",{id:"set_prods"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_prods")),(0,r.kt)("p",null,"Establece una nueva lista de productores(validadores) activos.\nUna vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos.\nPar\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"schedule: JSON con lista de productores y sus signing keys\n")),(0,r.kt)("h3",{id:"set_params"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_params")),(0,r.kt)("p",null,"Modifica uno o varios par\xe1metros de la blockchain."),(0,r.kt)("p",null,"Par\xe1metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_block_net_usage")),"   La cantidad m\xe1xima de uso de net en un bloque")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"target_block_net_usage_pct")),"    El porcentaje de uso m\xe1ximo de net, pasado este limite la red entra en modo congesti\xf3n.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_transaction_net_usage")),"  El uso m\xe1ximo de net que la chain va a permitir, mas all\xe1 de los limites de la cuenta.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"base_per_transaction_net_usage")),"  The base amount of net usage billed for a transaction to cover incidentals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"net_usage_leeway")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"context_free_discount_net_usage_num")),"  The numerator for the discount on net usage of context-free data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"context_free_discount_net_usage_den")),"  The denominator for the discount on net usage of context-free data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_block_cpu_usage"))," The maxiumum billable cpu usage (in microseconds) for a block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"target_block_cpu_usage_pct"))," The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_transaction_cpu_usage"))," The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"min_transaction_cpu_usage"))," The minimum billable cpu usage (in microseconds) that the chain requires")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_transaction_lifetime"))," The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"deferred_trx_expiration_window"))," The number of seconds after the time a deferred transaction can first execute until it expires")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_transaction_delay"))," The maximum number of seconds that can be imposed as a delay requirement by authorization checks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_inline_action_size"))," Maximum allowed size (in bytes) of an inline action")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_inline_action_depth"))," Recursion depth limit on sending inline actions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_authority_depth"))," Recursion depth limit for checking if an authority is satisfied"))),(0,r.kt)("h3",{id:"set_privileged"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_privileged")),(0,r.kt)("p",null,"Permite establecer como privilegiada a una cuenta.\nPar\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta que se quiere setear como privilegiada\nis_priv:  0 para falso, mayor a 0 para verdadero\n")),(0,r.kt)("h2",{id:"acciones-de-sistema"},"Acciones de Sistema"),(0,r.kt)("p",null,"Estas acciones no requieren ser ejecutadas por una cuenta privilegiada."),(0,r.kt)("h3",{id:"new_account"},(0,r.kt)("inlineCode",{parentName:"h3"},"new_account")),(0,r.kt)("p",null,"Crea una cuenta nueva.\nUtiliza como par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"creator: Nombre de la cuenta que crea la cuenta nueva\nname: Nombre de la cuenta nueva\nowner: Owner public key\nactive: Active public key\n")),(0,r.kt)("h3",{id:"set-code"},(0,r.kt)("inlineCode",{parentName:"h3"},"set code")),(0,r.kt)("p",null,"Set code establecer o actualizar un contrato inteligente en una cuenta\nUtiliza como par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta a la que se desea publicar un contrato\ncode: El c\xf3digo en forma de BLOB binario\n")),(0,r.kt)("h3",{id:"set-abi"},(0,r.kt)("inlineCode",{parentName:"h3"},"set abi")),(0,r.kt)("p",null,"Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name.\nUtiliza como par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: El nombre de la cuenta destino\nabi:  El abi\n")),(0,r.kt)("h3",{id:"updateauth"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateauth")),(0,r.kt)("p",null,"actualiza los permisos de una cuenta.\nUtiliza como par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account:  La cuenta que se desea modificar.\npemission:  El nombre del nuevo permiso\nparent: El permiso padre del nuevo permiso\nauth: El json definiendo la autorizaci\xf3n de permisos\n")),(0,r.kt)("h3",{id:"deleteauth"},(0,r.kt)("inlineCode",{parentName:"h3"},"deleteauth")),(0,r.kt)("p",null,"elimina la autorizaci\xf3n de permisos de una cuenta .\nUtiliza como par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta destino\npermission: El nombre del permiso que se desea eliminar\n")),(0,r.kt)("h3",{id:"linkauth"},(0,r.kt)("inlineCode",{parentName:"h3"},"linkauth")),(0,r.kt)("p",null,"Asigna una acci\xf3n especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas updateauth,deleteauth,linkauth,unlikauth,canceldelay\nPar\xe1metros utilizados:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: Cuenta destino\ncode: Cuenta owner de la acci\xf3n que se desea linkear\ntype: La accion que se desea linkear\nrequirement: El permiso a linkear.\n")),(0,r.kt)("h3",{id:"unlinkauth"},(0,r.kt)("inlineCode",{parentName:"h3"},"unlinkauth")),(0,r.kt)("p",null,"Es la reversa de linkauth\nPar\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"account: Cuenta destino\ncode: Cuenta owner de la accion que se desea deslinkear\ntype: La acci\xf3n que se desea deslinkear\n")),(0,r.kt)("h2",{id:"contrato-nativo-eosiotoken"},"Contrato Nativo eosio.token"),(0,r.kt)("p",null,"Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio."),(0,r.kt)("h3",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h3"},"create")),(0,r.kt)("p",null,"Le permite a una cuenta ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"issuer"))," crear un token.\nUtiliza como parametros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"issuer: La cuenta que crea el token\nmaximum_supply: La cantidad maxima junto al simbolo del token.\n")),(0,r.kt)("h3",{id:"issue"},(0,r.kt)("inlineCode",{parentName:"h3"},"issue")),(0,r.kt)("p",null,"Esta acci\xf3n distribuye a una cuenta una cantidad de tokens determinada.\nUtiliza como Par\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"to: Cuenta a la que se distribuyen los tokens\nquantity: La cantidad de tokens a distribuir\nmemo: memo que acompa\xf1a la distribuci\xf3n inicial de tokens\n")),(0,r.kt)("h3",{id:"retire"},(0,r.kt)("inlineCode",{parentName:"h3"},"retire")),(0,r.kt)("p",null,"El opuesto a crear un token.\nPar\xe1metros:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"quantity: La cantidad de tokens a retirar\nmemo : El memo que acompa\xf1a la transacci\xf3n.\n")),(0,r.kt)("h3",{id:"transfer"},(0,r.kt)("inlineCode",{parentName:"h3"},"transfer")),(0,r.kt)("p",null,'Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens\nPar\xe1metros:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"from: Cuenta origen desde donde se debitan los tokens\nto: Cuenta destino a la que acreditar los tokens\nquantity: La cantidad de tokens\nmemo: Memo que acompa\xf1a la transacci\xf3n\n")))}u.isMDXComponent=!0}}]);