import express, { Express } from 'express';
import { Server } from 'socket.io';

interface ISockect {
  io?: any;
}

const socket: ISockect = {};

function connect(server: any) {
  socket.io = new Server(server);

  socket.io.on('connection', (socket: any) => {
    console.log('a user connected');
  });
}

export {
  connect,
  socket
}