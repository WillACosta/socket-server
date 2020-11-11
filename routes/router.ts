import { connectedUsers } from "./../sockets/sockets";
import { Request, Response, Router } from "express";
import { Socket } from "socket.io";
import Server from "../classes/server";

export const router = Router(); // Router é responsável por manipular as rotas no express

router.post("/messagem/:id", (req: Request, res: Response) => {
  const message = req.body.message;
  const from = req.body.from;
  const id = req.params.id;

  const payload = {
    from,
    message,
  };

  const server = Server.instance; // Instância do servidor

  server.io.in(id).emit("private-message", payload); // Envia uma mensagem apenas para o id informado
  // Para enviar mensagens a todos os clientes conectdos emita o evento sem o metódo 'in'

  res.json({
    ok: true,
    body: payload,
  });
});

router.post("/message/all", (req, res) => {
  const body = req.body;
  const from = req.body.from;
  const id = req.params.id;

  const payload = {
    from,
    body,
  };

  const server = Server.instance;
  server.io.emit("stream", JSON.stringify(payload));

  res.json({
    ok: true,
    body: payload,
  });
});

/**
 * Retorna uma lista de clientes conectados ao servidor do socket
 */
router.get("/users", (req, res) => {
  const server = Server.instance;

  server.io.clients((err: any, clients: string[]) => {
    if (err) {
      return res.json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      clients,
    });
  });
});

/** Retorna as informações dos clientes conectados */
router.get("/users/info", (req, res) => {
  const list = connectedUsers.getAll();

  res.json({
    ok: true,
    list,
  }); 
});
export default router;
