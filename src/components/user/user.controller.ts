import to from "await-to-js";

// Utils
import { encrypt, compare } from '../../utils/bcrypt';
import { generateToken } from '../../utils/jwt';

// Store
import { signup, signin } from "./user.store";

// Models
import { Usuario } from "../../models/Usuario";

const createUser = async (data: any) => {
  const { usuario } = data;
  const hash = encrypt(usuario.contrasena);
  const [error, response] = await to(signup(data, hash));
  if (error) throw error;
  return response;
};

const login = async (user: Usuario) => {
  const { contrasena } = user;

  const [err, userDb] = await to(signin(user));
  if (err) throw err;
  if (!userDb) return "Credenciales incorrectas";

  const passwordValidated = compare(contrasena, userDb.contrasena);
  if (!passwordValidated) return "Credenciales incorrectas";

  const payload = {
    nombre: userDb.persona.nombre,
    email: userDb.persona.email,
  }
  const [, token] = await to(generateToken(payload));

  return { user: userDb, token };
}

export {
  createUser,
  login
}
