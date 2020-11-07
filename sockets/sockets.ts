import { Socket } from "socket.io";
import SocketIO from "socket.io";
import { UserList } from "../classes/user-list";
import { User } from "../classes/user";

export const connectedUsers = new UserList();

/**
 * Salva as informações do client atual conectado ao socket
 * @param client
 */
export const connectClient = (client: Socket) => {
  const user = new User(client.id); // ID do Socket atual
  connectedUsers.add(user);
};

export const disconnect = (client: Socket) => {
  client.on("disconnect", () => {
    connectedUsers.deleteOne(client.id);
  });
};

/**
 * Metódo que escuta as mensages recebidas do client
 * @param client
 */
export const messageListener = (client: Socket, io: SocketIO.Server) => {
  client.on("message", (payload) => {
    console.log("Mensagem recebida: ", payload);

    // Emitir a mensagem para todos os clientes conectados ao servidor
    io.emit("stream", payload);
  });
};

/**
 * Seta o usuário ativo que iniciou a conexão
 * @param client
 * @param io
 */
export const setUser = (client: Socket, io: SocketIO.Server) => {
  client.on("set-user", (payload, callback: Function) => {
    connectedUsers.updateName(client.id, payload.name);

    callback({
      ok: true,
      message: `Usuário ${payload.name}, salvo.`,
    });
  });
};
