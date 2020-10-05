import { router } from "./routes/router";

import Server from "./classes/server";
import bodyParser from "body-parser";
import cors from "cors";

const server = new Server();

// Configurações do servidor
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Configuração do CORS
server.app.use(cors({ origin: true, credentials: true })); // Permitir acesso de todas as URLs

// Chamar endpoits de acesso
server.app.use("/", router);

server.start(() => {
  console.log(`Servidor ativo na porta ${server.port}`);
});
