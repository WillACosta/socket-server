import { SERVER_PORT } from "../global/environment";

import SocketIO from "socket.io";
import express from "express";
import http from "http";

import * as socket from "../sockets/sockets";

export default class Server {
  private static _instance: Server;

  public app: express.Application;
  public port: number;

  /** Socket.io necessita de um servidor compatível para ser levantado */
  public io: SocketIO.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer = new http.Server(this.app);
    this.io = SocketIO(this.httpServer);

    this.listenerSockets();
  }

  /**
   * Padrão Singleton
   * Retorna sempre a mesma instância, caso ela já exista
   */
  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private listenerSockets() {
    console.log("Ouvindo as conexões...");

    this.io.on("connection", (client) => {
      console.log("Cliente Conectado!");

      socket.disconnect(client);
    });
  }

  start(callback: Function) {
    this.httpServer.listen(this.port, callback());
  }
}
