# Node.js Socket-Server

Backend para implementação de aplicações utilizando a tecnologia de WebSockets.

## ⛏️ Construído com

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Express](https://expressjs.com/) - Server Framework
- [Socket.io](https://socket.io/) - Realtime Framework
- [Typescript](https://www.typescriptlang.org/) - Language

## 🏁 Execução

- Instale as dependências com `npm install`
- Gere os arquivo de distribuição typescript com `tsc -w`
- Execute o servidor com `nodemon dist/` ou `node dist/`

- Caso não tenha o nodemon instalado de forma global, confira [aqui](https://www.npmjs.com/package/nodemon)

## 📝 Futuras implementações

- Testes unitários
- Refatoração do código (Desgin Pattern)

## Informações de estudo

- REST (Representational State Transfer)

  Um cliente solicita informações ao servidor através de um endpoit, logo em seguida este o responde com a informação correspondente. Porém se houver alguma mudança nos dados, o cliente não a receberá até que faça a solicitação novamente, impossibilitando a comunicação em tempo real.

- Sockets

  O servidor emite uma mensagem para todos os clientes conectados ao endpoit, para que atualizem suas informações.

- Socket.io

  Biblioteca de implementação dos Sockets

- Broadcast

  Enviar mensagens para todos os clientes conectados, exceto o cliente que fez a emissão do evento.
