import express, { Application, Express } from 'express';
import morgan from 'morgan';

import Routes from '../network/index.routes';

import http from 'http';
import { Server } from "socket.io";

export class App {
  private app: Express;
  public server: any;

  constructor(private port?: number | string) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.settings();
    this.middleware();
    this.routes();
  }

  settings(): void {
    this.app.set('port', this.port || process.env.PORT || 3000);
    this.app.use(express.json());
  }

  middleware() {
    this.app.use(morgan('dev'));
  }

  routes() {
    Routes(this.app);
  }

  async listen(): Promise<void> {
    this.server.listen(this.app.get('port'));
    console.log(`Server listening on port ${this.app.get('port')}`);
  }
}