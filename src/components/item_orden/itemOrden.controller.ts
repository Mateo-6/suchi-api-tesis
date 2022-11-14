import to from "await-to-js";

// Store
import { create,  } from "./itemOrden.store";

const createItemOrden = async (data: any) => {
  const [err, newItemOrden] = await to(create(data));
  if (err) throw err;
  return newItemOrden;
}

export {
  createItemOrden
}