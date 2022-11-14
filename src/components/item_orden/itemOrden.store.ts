import to from "await-to-js";

// Models
import { ItemOrden } from "../../models/ItemOrden";

const create = async (data: ItemOrden) => {
  const { orden_id, item_id } = data;
  const [err, newitem] = await to(ItemOrden.create({
    orden_id,
    item_id
  }));
  if (err) throw err;
  return newitem;
};

export {
  create
}