import to from "await-to-js";

// Models
import { CodigoQR } from "../../models/CodigoQR";

const create = async (data: CodigoQR) => {
  const { url, mesa_id, restaurante_id, sede_id } = data;
  const [err, newitem] = await to(CodigoQR.create({
    url,
    mesa_id,
    restaurante_id,
    sede_id
  }));
  if (err) throw err;
  return newitem;
};

const update = async (data: CodigoQR, codigoQRId: string) => {
  const { url } = data;

  const [errFinding, codigoQR] = await to(CodigoQR.findOne({
    where: {
      id: codigoQRId
    }
  }));
  if (errFinding) throw errFinding;
  if (!codigoQR) throw "No se ha encontrado el codigo QR";

  const [errCodigoQRUpdated, codigoQRUpdate] = await to(codigoQR.update({ url }));
  if (errCodigoQRUpdated) throw errCodigoQRUpdated;
  return codigoQRUpdate;
};

export {
  create,
  update
}