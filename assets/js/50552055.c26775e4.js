(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[8807],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?t.createElement(v,s(s({ref:a},p),{},{components:n})):t.createElement(v,s({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6270:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o},default:function(){return p}});var t=n(22122),r=n(19756),l=(n(67294),n(3905)),s={id:"llaves-privadas",title:"Manejo de Llaves Privadas",sidebar_label:"Llaves P\xfablicas y Privadas"},i={unversionedId:"guias/llaves-privadas",id:"guias/llaves-privadas",isDocsHomePage:!1,title:"Manejo de Llaves Privadas",description:"Obtenga su cuenta en LACChain",source:"@site/docs/guias/llaves-privadas.md",sourceDirName:"guias",slug:"/guias/llaves-privadas",permalink:"/docs/guias/llaves-privadas",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/guias/llaves-privadas.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"16/5/2021",sidebar_label:"Llaves P\xfablicas y Privadas",frontMatter:{id:"llaves-privadas",title:"Manejo de Llaves Privadas",sidebar_label:"Llaves P\xfablicas y Privadas"},sidebar:"docs",previous:{title:"Obtener una cuenta para una entidad",permalink:"/docs/guias/crear-cuenta-entidad"},next:{title:"Configurar Wallet",permalink:"/docs/guias/configurar-wallet"}},o=[{value:"Obtenga su cuenta en LACChain",id:"obtenga-su-cuenta-en-lacchain",children:[]},{value:"1. Generar llaves p\xfablicas y privadas",id:"1-generar-llaves-p\xfablicas-y-privadas",children:[]},{value:"2. Administrar la billetera con cleos",id:"2-administrar-la-billetera-con-cleos",children:[{value:"2.1 Cambiar clave privada",id:"21-cambiar-clave-privada",children:[]}]}],c={toc:o};function p(e){var a=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"obtenga-su-cuenta-en-lacchain"},"Obtenga su cuenta en LACChain"),(0,l.kt)("p",null,"Despu\xe9s de instalar el ambiente de desarrollo y pruebas, el siguiente paso consiste en obtener una cuenta en la red. En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la gu\xeda para crear una cuenta seg\xfan su caso de uso:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./crear-cuenta-usuario"},"Usuario final")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./crear-cuenta-contrato"},"Aplicaci\xf3n o contrato")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./crear-cuenta-entidad"},"Non-partner")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./crear-cuenta-entidad"},"Partner"))),(0,l.kt)("p",null,"Para lo anterior se requiere adicionalmente de los siguientes pasos:"),(0,l.kt)("h2",{id:"1-generar-llaves-p\xfablicas-y-privadas"},"1. Generar llaves p\xfablicas y privadas"),(0,l.kt)("p",null,"Las llaves, son requisito para crear una cuenta en una blockchain. En la mayor\xeda de las billeteras se puede generar llaves nuevas para EOSIO."),(0,l.kt)("p",null,"Para generarlas ejecutaremos el siguiente comando en la terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cleos create key --to-console\n")),(0,l.kt)("p",null,"Este comando nos va a generar llaves privadas y p\xfablicas (podemos crear la cantidad de llaves que queramos). Las cuentas cleos, por defecto, vienen en pares: una ",(0,l.kt)("inlineCode",{parentName:"p"},"active key")," y una ",(0,l.kt)("inlineCode",{parentName:"p"},"owner key")," (para recuperar cuenta en caso de perder la active key)."),(0,l.kt)("h2",{id:"2-administrar-la-billetera-con-cleos"},"2. Administrar la billetera con cleos"),(0,l.kt)("p",null,"Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es ",(0,l.kt)("inlineCode",{parentName:"p"},"holacontrato"),", mediante el siguiente comando."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cleos wallet create -n holacontrato --to-console\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Nota")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Si desea configurar su wallet para utilizarla por medio de autenticadores externos como Anchor Wallet, consulte ",(0,l.kt)("a",{parentName:"p",href:"./configurar-wallet"},"aqu\xed")))),(0,l.kt)("p",null,"En este momento, las llaves est\xe1n guardadas \xfanicamente en la consola, por lo que es necesario crear la billetera que contendr\xe1 las llaves. De esta manera, se podr\xe1 acceder a estas llaves con una \xfanica contrase\xf1a. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cleos wallet import -n holacontrato\n")),(0,l.kt)("h3",{id:"21-cambiar-clave-privada"},"2.1 Cambiar clave privada"),(0,l.kt)("p",null,"En caso de que se desee cambiar la clave privada de su cuenta en LACChain EOSIO debe seguir los siguientes pasos:"),(0,l.kt)("h4",{id:"paso-1-crear-nuevas-llaves"},"Paso 1: Crear nuevas llaves"),(0,l.kt)("p",null,"Cree dos nuevos pares de claves usando "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cleos create key --to-console\n")),(0,l.kt)("h4",{id:"paso-2-importar-claves"},"Paso 2: Importar claves"),(0,l.kt)("p",null,"Importar nuevas claves a su billetera "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cleos wallet import -n holacontrato\n")),(0,l.kt)("h4",{id:"paso-3-establecer-permisos"},"Paso 3: Establecer permisos"),(0,l.kt)("p",null,"Establecer el permiso de la cuenta del ",(0,l.kt)("strong",{parentName:"p"},"owner")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cleos -u https://lacchain.eosio.cr set account permission account_name owner EOS_public_key_of_new_owner -p account_name@owner\n")),(0,l.kt)("p",null,"Establecer el permiso de la cuenta del ",(0,l.kt)("strong",{parentName:"p"},"active")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cleos -u https://lacchain.eosio.cr set account permission account_name active EOS_private_key_of_new_active -p account_name@active\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Nota")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Debe tener la clave de propietario actual en su billetera para autorizar esta transacci\xf3n."))))}p.isMDXComponent=!0}}]);