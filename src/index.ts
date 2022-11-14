import { App } from './server/app';
import { db } from './database/database';

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
  /* await db.sync({ force: true });
  console.log('conexion Authentication'); */

  const app = new App(3000);
  app.listen();
}

main();
