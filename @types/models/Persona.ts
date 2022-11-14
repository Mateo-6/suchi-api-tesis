import { Optional } from 'sequelize';

declare global {
  interface IPersonaAttributes {
    id: string
    nombre: string
    apellido: string
    documento: string
    telefono: string
    email: string
  }
  
  type TPersonaCreationAttributes = Optional<IPersonaAttributes, 'id'>
}