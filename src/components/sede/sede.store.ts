import to from "await-to-js";

// Models
import { Sede } from "../../models/Sede";

const create = async (data: Sede) => {
  const { descripcion, direccion, telefeno, correo, restaurante_id } = data;
  const [err, newSede] = await to(Sede.create({
    descripcion,
    direccion,
    telefeno,
    correo,
    restaurante_id,
  }));
  if (err) throw err;
  return newSede;
};

const update = async (data: Sede, sedeId: string) => {
  const { descripcion, direccion, telefeno, correo } = data;

  const [errFinding, sede] = await to(Sede.findOne({
    where: {
      id: sedeId
    }
  }));
  if (errFinding) throw errFinding;
  if (!sede) throw "No se ha encontrado la sede";

  const [errSedeUpdated, sedeUpdate] = await to(sede.update({descripcion, direccion, telefeno, correo}));
  if (errSedeUpdated) throw errSedeUpdated;
  return sedeUpdate;
};

export {
  create,
  update
}