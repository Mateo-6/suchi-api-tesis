import { App } from './server/app';
// import { db } from './database/database';

import { connect } from './server/socket';

// Models
import './models/CodigoQR';
import './models/ItemOrden';
import './models/Item';
import './models/Mesa';
import './models/Notificacion';
import './models/Orden';
import './models/Persona';
import './models/Restaurante';
import './models/Sede';
import './models/Usuario';

const main = async () => {
  // await db.sync({ force: true });
  // console.log('conexion Authentication');

  const app = new App(3000);
  connect(app.server);
  app.listen();
}

main();

/* const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req: any, res: any) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
}); */
