---
id: lacchain-eosio-local
title: Herramienta para desarrollo local
sidebar_label: Desarrollo local
---

Este proyecto construye la red LACChain en un entorno local de modo que se puedan realizar pruebas antes de ser publicadas en la red pública. Debido a la tecnología que contiene Blockchain, al ser publicado o privado cualquier cambio en la red crea un registro inmutable de la acción y todo lo que se modifique puede afectar tanto positivamente como negativamente a los usuarios dentro de la misma, es por este motivo que es fundamental tener un entorno local donde se puedan realizar pruebas de funcionalidad, pruebas de rendimiento, pruebas de estrés (stress test) entre otras sin producir alguna falla que afecte a los usuarios.

Puede consultar el repositorio de este proyecto [aquí](https://github.com/eoscostarica/lacchain-eosio-local)

### Contratos
La imagen de LACChain EOSIO necesita contratos para su configuración inicial:
1. **eosio.bios**: Proporciona las acciones que son absolutamente críticas para iniciar una cadena.
2. **lacchain.system**: Brinda las reglas de gobernanza establecidas en la red de LACChain EOSIO. Consultar [este enlace](../eosio/) para más detalle.
3. **eosio.token**: Define las estructuras y acciones que permiten a los usuarios crear, emitir y administrar tokens para cadenas de bloques basadas en EOSIO.
4. **eosio.msig**: Permite la creación de transacciones propuestas que requieren la autorización de una lista de cuentas.

### Key de configuración
La llave preconfigurada es la de eosio que permite realizar la configuración inicial de la red. Puede consultarla [aquí](https://github.com/eoscostarica/lacchain-eosio-local/blob/main/Dockerfile#L43).
```
EOSIO_PRIVATE_KEY: 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
EOSIO_PUBLIC_KEY:  EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

### Prerrequisitos
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## Inicio rápido
- Descargue la imagen de Docker `docker pull eoscostarica506/lacchain-eosio-local`
- Ejecute la imagen de Docker `docker run -dp 8888:8888 eoscostarica506/lacchain-eosio-local`
- Ejecute el comando `cleos get info` o revise en el navegador el enlace `http://127.0.0.1:8888/v1/chain/get_info`

Si ejecuta el comando `cleos get info` o accede a `http://127.0.0.1:8888/v1/chain/get_info` y obtiene información como la siguiente es porque ya tiene el entorno listo para trabajar.

```
{"server_version":"e57a1eab","chain_id":"981453d176ddca32aa278ff7b8af9bf4632de00ab49db273db03115705d90c5a","head_block_num":7,"last_irreversible_block_num":6,"last_irreversible_block_id":"00000006ce0e04cb174e797d1f910945d1ba1c82d925c0f0e3721e392e72e37d","head_block_id":"0000000728b21e87b801d17207477c9cc057e1ff7535ce4c4bae5c38d779f531","head_block_time":"2021-07-06T20:42:24.000","head_block_producer":"eosio","virtual_block_cpu_limit":201202,"virtual_block_net_limit":1054885,"block_cpu_limit":199900,"block_net_limit":1048576,"server_version_string":"v2.0.12","fork_db_head_block_num":7,"fork_db_head_block_id":"0000000728b21e87b801d17207477c9cc057e1ff7535ce4c4bae5c38d779f531","server_full_version_string":"v2.0.12-e57a1eab619edffc25afa7eceb05a01ab575c34a"}
```

## Empecemos
Para crear la imagen de Docker de manera local debe ejecutar los siguientes comandos:
- Clone el repositorio local de LACChain EOSIO `https://github.com/eoscostarica/lacchain-eosio-local.git`
- Ingrese a la carpeta del repositorio clonado `cd <path/lacchain-eosio-local>`
- Construya la imagen del Dockerfile `docker build -t lacchain-eosio-local .`
- Ejecute la imagen del Dockerfile `docker run -dp 8888:8888 lacchain-eosio-local`
- Ejecute el comando `cleos get info` o revise en el navegador el enlace `http://127.0.0.1:8888/v1/chain/get_info`

Para este punto, ya tiene la imagen de la red de LACChain EOSIO corriendo de manera local.
