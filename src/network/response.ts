import { Response } from "express";

export function success(res: Response, msg: any, status: any) {
  res.status(status || 200).send({ response: msg, ok: true });
}

export function error(res: Response, msg: any, status: any, details?: any) {
  console.error(`[response error] ${msg}`);
  res.status(status || 500).send({ error: "Something is wrong", ok: false });
}
