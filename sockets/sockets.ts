import { Socket } from "socket.io";
import SocketIO from "socket.io";

export const disconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log("Cliente Desconectado");
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
