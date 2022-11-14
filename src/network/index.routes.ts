import { Express } from 'express';

// Routes
import healthCheckRoutes from  "../routes/healthCheck.routes"; 
import UserRoutes from  "../components/user/user.network"; 
import SedeRoutes from  "../components/sede/sede.network"; 
import MesaRoutes from  "../components/mesa/mesa.network"; 
import ItemRoutes from  "../components/item/item.network"; 
import OrdenRoutes from  "../components/orden/orden.network"; 
import ItemOrdenRoutes from  "../components/item_orden/itemOrden.network"; 
import NotificacionRoutes from  "../components/notificacion/notificacion.network"; 
import CodigoQRRoutes from  "../components/codigoQR/codigoQR.network"; 

export default (app: Express) => {
  app.use('/', healthCheckRoutes);
  app.use('/user', UserRoutes);
  app.use('/sede', SedeRoutes);
  app.use('/mesa', MesaRoutes);
  app.use('/item', ItemRoutes);
  app.use('/orden', OrdenRoutes);
  app.use('/item-orden', ItemOrdenRoutes);
  app.use('/notificacion', NotificacionRoutes);
  app.use('/codigo-qr', CodigoQRRoutes);
};