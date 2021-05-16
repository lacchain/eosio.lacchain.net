(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[5041],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return m}});var o=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function t(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),l=function(e){var n=o.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=t(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return a?o.createElement(f,s(s({ref:n},c),{},{components:a})):o.createElement(f,s({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var t={};for(var d in n)hasOwnProperty.call(n,d)&&(t[d]=n[d]);t.originalType=e,t.mdxType="string"==typeof e?e:r,s[1]=t;for(var l=2;l<i;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5651:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return s},metadata:function(){return t},toc:function(){return d},default:function(){return c}});var o=a(22122),r=a(19756),i=(a(67294),a(3905)),s={id:"nodos-eosio",title:"Consideraciones Infraestructura",sidebar_label:"Notas Infraestructura"},t={unversionedId:"guias/nodos-eosio",id:"guias/nodos-eosio",isDocsHomePage:!1,title:"Consideraciones Infraestructura",description:"Nodeos es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronizaci\xf3n con otros nodos a trav\xe9s del protocolo p2p, proporciona una API HTTP para el software del cliente y, opcionalmente, firma bloques si se configura con la cuenta de un validador.",source:"@site/docs/guias/nodos-eosio.md",sourceDirName:"guias",slug:"/guias/nodos-eosio",permalink:"/en/docs/guias/nodos-eosio",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/guias/nodos-eosio.md",version:"current",lastUpdatedAt:1621149853,formattedLastUpdatedAt:"5/16/2021",sidebar_label:"Notas Infraestructura",frontMatter:{id:"nodos-eosio",title:"Consideraciones Infraestructura",sidebar_label:"Notas Infraestructura"},sidebar:"docs",previous:{title:"Instalaci\xf3n de Nodos LACChain",permalink:"/en/docs/guias/instalacion-nodos"},next:{title:"Ay\xfadenos a Mejorar Esta Documentaci\xf3n",permalink:"/en/docs/guias/contribuir"}},d=[{value:"Requerimientos de Hardware",id:"requerimientos-de-hardware",children:[]},{value:"Almacenamiento",id:"almacenamiento",children:[]},{value:"Sistema de archivos",id:"sistema-de-archivos",children:[]},{value:"Contenedores y Virtualizaci\xf3n",id:"contenedores-y-virtualizaci\xf3n",children:[]},{value:"Redes",id:"redes",children:[]}],l={toc:d};function c(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Nodeos")," es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronizaci\xf3n con otros nodos a trav\xe9s del ",(0,i.kt)("inlineCode",{parentName:"p"},"protocolo p2p"),", proporciona una ",(0,i.kt)("inlineCode",{parentName:"p"},"API HTTP")," para el software del cliente y, opcionalmente, ",(0,i.kt)("inlineCode",{parentName:"p"},"firma bloques")," si se configura con la cuenta de un validador."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Nodeos")," est\xe1 disponible en c\xf3digo fuente y paquetes binarios en el ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases"},"repositorio GitHub"),".  Las plataformas compatibles son Ubuntu 16.04 y 18.04, RHEL7 y MacOS. "),(0,i.kt)("p",null,"Cuando planifique la instalaci\xf3n de un servidor, tiene varias opciones para seleccionar. A menudo, la selecci\xf3n est\xe1 determinada por los h\xe1bitos y preferencias existentes del administrador del sistema."),(0,i.kt)("p",null,"Consulte nuestra de gu\xcda de sobre como configurar el ",(0,i.kt)("a",{parentName:"p",href:"../guias/ambiente-desarrollo"},"ambiente de desarrollo")," para poder trabajar sobre la red de LACChain EOSIO."),(0,i.kt)("h3",{id:"requerimientos-de-hardware"},"Requerimientos de Hardware"),(0,i.kt)("p",null,"Las caracter\xedsticas de un servidor dependen mucho de los requisitos de la red. Las redes de alto tr\xe1fico como el mainnet de EOS requieren un servidor dedicado con SSD o NVMe conectados directamente, al menos para los archivos de estado de los nodos. Algunos proveedores de hosting permiten una combinaci\xf3n de HDD y SSD en el mismo servidor f\xedsico, y bloquea el registro y el archivo de historial de estado que se pueden almacenar en discos duros. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Un servidor t\xedpico en producci\xf3n tendr\xeda al menos 500 GB de almacenamiento SSD, 32 GB de RAM y una CPU de 3.5 Ghz o m\xe1s r\xe1pido.")),(0,i.kt)("p",null,"Las redes de bajo tr\xe1fico y las redes de prueba estar\xedan funcionando bien en servidores virtuales VPS. Por lo general, 8 GB de RAM y un par de n\xfacleos de CPU son suficientes. "),(0,i.kt)("h3",{id:"almacenamiento"},"Almacenamiento"),(0,i.kt)("p",null,"El registro de bloques y el historial de estado pueden requerir un espacio de almacenamiento significativo."),(0,i.kt)("p",null,"En cuanto a rendimiento, nodeos requiere acceso a su estado de memoria compartida con el m\xednimo retraso posible. Por lo tanto, el directorio que contenga los datos del estado debe residir en almacenamiento SSD o NVMe. Otros directorios, como los bloques y el historial de estado, son bastante bajos en cuanto a los requisitos de rendimiento, y los discos duros funcionan bien para este trabajo. "),(0,i.kt)("h3",{id:"sistema-de-archivos"},"Sistema de archivos"),(0,i.kt)("p",null,"ZFS es un sistema de archivos desarrollado por Sun Microsystems y utilizado en su sistema operativo Solaris. El sistema de archivos ha sido portado al kernel de Linux y est\xe1 disponible de forma inmediata en Ubuntu 18.04"),(0,i.kt)("p",null,"Otros sistemas de archivos de elecci\xf3n ser\xedan ext4 y XFS. Son estables y funcionan bien, aunque ZFS ofrece una serie de caracter\xedsticas \xfanicas para beneficiarse de:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Respaldos r\xe1pidos y costo-eficientes. Se necesita una fracci\xf3n de segundo para crear un nuevo respaldo de un sistema de archivos ZFS, y los respaldos son m\xe1s ligeros en tama\xf1o ya que solo se agregan los cambios a los datos del nodo. El contenido del respaldo se puede copiar m\xe1s tarde en alg\xfan otro medio o ubicaci\xf3n remota sin interrumpir el servicio.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Compresi\xf3n r\xe1pida lz4. Incluso en NVMe, la compresi\xf3n no agrega ning\xfan retraso visible al funcionamiento del disco, y permite ahorrar hasta un 30% en el archivo de registro de bloques y hasta un 50% en el archivo de estado. Tambi\xe9n reduce el tr\xe1fico de E / S de almacenamiento, lo que permite aumentar el rendimiento.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creaci\xf3n f\xe1cil de tantos sistemas de archivos como sea necesario, y cada sistema de archivos tendr\xeda su propio punto de montaje, tama\xf1o de registro, pol\xedtica de almacenamiento en cach\xe9 y configuraciones de compresi\xf3n. Esto permite ajustar el almacenamiento seg\xfan las necesidades de aplicaci\xf3n."))),(0,i.kt)("p",null,"LVM puede o no usarse, y depende del administrador del sistema definir la pol\xedtica est\xe1ndar. Adem\xe1s, algunos proveedores de alojamiento, como IONOS, est\xe1n pre-configurando los servidores con LVM, por lo que es m\xe1s f\xe1cil usarlo que eliminarlo."),(0,i.kt)("h3",{id:"contenedores-y-virtualizaci\xf3n"},"Contenedores y Virtualizaci\xf3n"),(0,i.kt)("p",null,"Por lo general, un servidor ejecutar\xeda m\xfaltiples procesos de nodo para diferentes prop\xf3sitos y posiblemente hasta para diferentes redes. Cada administrador del sistema debe seleccionar una estrategia para colocar procesos de nodo en un servidor. A continuaci\xf3n incluimos un resumen de las principales estrategias utilizadas."),(0,i.kt)("h4",{id:"sin-contenedores"},"Sin contenedores"),(0,i.kt)("p",null,"Los nodos se ejecutar\xe1n directamente en el espacio principal del host. El beneficio es un mantenimiento m\xe1s f\xe1cil y, en algunos casos, un mejor rendimiento. El inconveniente es que el paquete binario EOSIO instala los archivos binarios en una ubicaci\xf3n com\xfan, y si se ejecutan varios procesos de nodo en el servidor, todos deben actualizarse simult\xe1neamente."),(0,i.kt)("h4",{id:"contenedores-lxc"},"Contenedores LXC"),(0,i.kt)("p",null,"La mayor\xeda de las distribuciones de Linux ofrecen la funcionalidad de contenedores LXC. Debian supone que usted sabe c\xf3mo configurar una red para los contenedores, mientras que Ubuntu preconfigura un puente interno con direcciones en el rango 10.0.3.0/24 y un servicio DHCP en \xe9l. El direccionamiento es f\xe1cil de cambiar, y tambi\xe9n el servicio DHCP se puede configurar con asignaciones de direcciones est\xe1ticas para sus contenedores. Cuando se crea, un contenedor es un sistema operativo Linux m\xednimo y necesita instalar paquetes adicionales seg\xfan sea necesario (incluso syslog y ping no est\xe1n presentes desde el principio). Los contenedores son f\xe1ciles de mantener y uno de los beneficios es que puede seleccionar una distribuci\xf3n o versi\xf3n de Linux diferente a la que ejecuta el host."),(0,i.kt)("h4",{id:"virtualizaci\xf3n-kvm-xen-vmware"},"Virtualizaci\xf3n KVM, Xen, VmWare"),(0,i.kt)("p",null,"Hay una cierta sobrecarga en la operaci\xf3n de la CPU, y normalmente la virtualizaci\xf3n completa no se usa en el entorno EOSIO. Sin embargo, podr\xeda ser utilizable, especialmente si ya forma parte de los procesos est\xe1ndar de TI."),(0,i.kt)("h4",{id:"contenedores-docker"},"Contenedores Docker"),(0,i.kt)("p",null,"Utilizan la misma tecnolog\xeda subyacente que LXC, pero hay una serie de caracter\xedsticas adicionales, como la implementaci\xf3n autom\xe1tica. Por esta raz\xf3n se ha decidido implementar los servicios como contenedores docker."),(0,i.kt)("h3",{id:"redes"},"Redes"),(0,i.kt)("p",null,"El dise\xf1o y la seguridad de la red deben planificarse cuidadosamente. Considerando "),(0,i.kt)("p",null,"En la mayor\xeda de los entornos de proveedores de alojamiento, las m\xe1quinas f\xedsicas se enfrentan directamente a Internet p\xfablico sin ning\xfan firewall frente a ellas. Algunos proveedores ofrecen un firewall frente a un servidor, opcional u obligatorio."),(0,i.kt)("p",null,"Un proceso de nodeos generalmente se escucha en 2 o 3 puertos TCP: el punto final p2p, la API HTTP y, opcionalmente, el websocket del complemento de historial de estado."),(0,i.kt)("p",null,"Adem\xe1s, nodeos suele establecer conexiones TCP salientes a sus pares p2p como se especifica en su configuraci\xf3n."),(0,i.kt)("h4",{id:"balanceadores-de-carga"},"Balanceadores de carga"),(0,i.kt)("p",null,"Algunos proveedores de alojamiento ofrecen equilibradores de carga frente a los servidores. Un equilibrador de carga generalmente supervisa la conectividad a los servidores de fondo y deja de enviar solicitudes a un servidor que deja de responder, o se cumple alguna condici\xf3n de supervisi\xf3n personalizada. Normalmente tambi\xe9n le permiten pausar el tr\xe1fico a uno de los servidores y dejarlo fuera de servicio para mantenimiento y actualizaciones."))}c.isMDXComponent=!0}}]);