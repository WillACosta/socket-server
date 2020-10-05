# Node.js Socket-Server

Backend para implementação de aplicações utilizando a tecnologia de WebSockets.

# Construído com

- Node.js
- Express
- Typescript
-

# Execução

- Instale as dependências com `npm install`
- Gere os arquivo de distribuição typescript com `tsc -w`
- Executar servidor `nodemon dist` ou `node dist`

- Caso não tenha o nodemon instalado de forma global, configra aqui [https://www.npmjs.com/package/nodemon](Nodemon)

# Informações

- REST (Representational State Transfer)

  Um cliente solicita informações ao servidor através de um endpoit, logo em seguida este o responde com a informação correspondente. Porém se houver alguma mudança nos dados, o cliente não a receberá até que faça a solicitação novamente, impossibilitando a comunicação em tempo real.

- Sockets

  O servidor emite uma mensagem para todos os clientes conectados ao endpoit, para que atualizem suas informações.

## Conceitos

- Socket.io

  Biblioteca de implementação dos Sockets

- Broadcast

  Enviar mensagens para todos os clientes conectados, exceto o cliente que fez a emissão do evento.

## Comandos

- `tsc --init` Cria arquivo de configuração do typescript
- `tsc -w` Ouvir alterações dos arquivos e fazer a transpilação

- Router é responsável por manipular as rotas no express

- Instalar o pacote cors via NPM.
