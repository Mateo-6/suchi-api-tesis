import to from "await-to-js";

// Models
import { Persona } from "../../models/Persona";
import { Usuario } from "../../models/Usuario";
import { Restaurante } from "../../models/Restaurante";

const signup = async (data: any, hash: string) => {
  const { usuario, restaurante, persona } = data;
  const [error, newPersona] = await to(Persona.create({
    usuario: {
      usuario: usuario.usuario,
      contrasena: hash,
      sesion: "on",
    },
    restaurante: {
      nombre: restaurante.nombre,
      nit: restaurante.nit,
    },
    nombre: persona.nombre,
    apellido: persona.apellido,
    documento: persona.documento,
    telefono: persona.telefono,
    email: persona.email,
  }, {
    include: [{
      model: Usuario
    },
    {
      model: Restaurante
    }]
  }));
  if (error) throw error;
  return newPersona;
};

const signin = async (user: Usuario) => {
  const { usuario } = user;
  const [err, userDb] = await to(Usuario.findOne({
    include: [
      {
        model: Persona
      }
    ],
    where: {
      usuario,
    }
  }));
  if (err) throw err;
  return userDb;
};

export {
  signup,
  signin
}