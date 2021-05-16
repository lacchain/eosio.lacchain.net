(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[1070],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=r.createContext({}),c=function(e){var a=r.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},l=function(e){var a=c(e.components);return r.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=t,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:a},l),{},{components:n})):r.createElement(f,i({ref:a},l))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95582:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(22122),t=n(19756),o=(n(67294),n(3905)),i={id:"cuentas-permisos",title:"Cuentas y Autorizaciones",sidebar_label:"Cuentas y Autorizaciones"},s={unversionedId:"cuentas-permisos",id:"cuentas-permisos",isDocsHomePage:!1,title:"Cuentas y Autorizaciones",description:"Cuentas",source:"@site/docs/cuentas-permisos.md",sourceDirName:".",slug:"/cuentas-permisos",permalink:"/en/docs/cuentas-permisos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/cuentas-permisos.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"5/16/2021",sidebar_label:"Cuentas y Autorizaciones",frontMatter:{id:"cuentas-permisos",title:"Cuentas y Autorizaciones",sidebar_label:"Cuentas y Autorizaciones"},sidebar:"docs",previous:{title:"Mecanismo de Consenso",permalink:"/en/docs/mecanismo-consenso"},next:{title:"Autorizaciones y Trazabilidad",permalink:"/en/docs/trazabilidad"}},u=[{value:"Cuentas",id:"cuentas",children:[]},{value:"Permisos",id:"permisos",children:[]},{value:"Autorizaciones",id:"autorizaciones",children:[]}],c={toc:u};function l(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cuentas"},"Cuentas"),(0,o.kt)("p",null,"Una ",(0,o.kt)("strong",{parentName:"p"},"cuenta")," en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuraci\xf3n de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacci\xf3n v\xe1lida a la cadena de bloques."),(0,o.kt)("p",null,"El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la a ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," la ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," en min\xfascula, n\xfameros del ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," al ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," y tener una longitud de 12 caracteres. Por ejemplo : ",(0,o.kt)("inlineCode",{parentName:"p"},"latamlink12"),"."),(0,o.kt)("p",null,"En la red de LACChain EOSIO, existen varios tipos de cuentas. Consulte la gu\xeda para crear una cuenta seg\xfan su rol de usuario: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"guias/crear-cuenta-usuario"},"Usuario final")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"guias/crear-cuenta-contrato"},"Aplicaci\xf3n o contrato")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"guias/crear-cuenta-entidad"},"Non-partner")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"guias/crear-cuenta-entidad"},"Partner"))),(0,o.kt)("h2",{id:"permisos"},"Permisos"),(0,o.kt)("p",null,"EOSIO permite crear permisos jer\xe1rquicos personalizados que se derivan del permiso ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),". Un permiso personalizado es b\xe1sicamente una llave que solo puede realizar las acciones que se le permite realizar."),(0,o.kt)("p",null,"Cada cuenta posee dos permisos base ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," siendo ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," una llave de recuperaci\xf3n que se utiliza solo en caso de querer cambiar la clave ",(0,o.kt)("inlineCode",{parentName:"p"},"active"),". Aparte de estos dos permisos iniciales se pueden configurar permisos a la medida."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("strong",{parentName:"p"},"Por ejemplo:")," Cualquier cuenta puede crear un permiso personalizado con su par de llaves \xfanicas para interactuar \xfanicamente con un contrato.")),(0,o.kt)("p",null,"De esta manera, EOSIO ofrece capacidades de permisos de \xfaltima generaci\xf3n con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base."),(0,o.kt)("p",null,"Los permisos de la cuenta tambi\xe9n fortalecen la seguridad en caso de que alguien que no est\xe9 autorizado obtenga una llave privada, lo \xfanico que puede hacer son las acciones que la clave se ha limitado a ejecutar."),(0,o.kt)("h2",{id:"autorizaciones"},"Autorizaciones"),(0,o.kt)("p",null,"Una cuenta puede definir una asignaci\xf3n entre cualquiera de sus permisos nombrados y un contrato inteligente o acci\xf3n dentro de ese contrato. Esto permite un control m\xe1s preciso sobre las autorizaciones de acci\xf3n, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organizaci\xf3n reflejen la estructura organizativa en la cadena de bloques."),(0,o.kt)("p",null,"En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorizaci\xf3n de acci\xf3n determinada."),(0,o.kt)("p",null,"Para obtener m\xe1s informaci\xf3n sobre estos conceptos, consulte ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"},"documentaci\xf3n de cuentas y permisos"),"."))}l.isMDXComponent=!0}}]);