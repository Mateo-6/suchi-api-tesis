import { Request, Response } from "express";
import to from 'await-to-js';

// JWT
import { validateToken } from "../utils/jwt";

export const authAdmin = async (req: Request, res: Response, next: any) => {
  const autorization = req.get('authorization');
  if(!autorization) {
    res.status(403).json({ error: 'Not authorized' });
  }

  const [err] = await to(validateToken(autorization as string));
  if(err) {
    res.status(403).json({ error: 'Not authorized' });
  } else {
    next();
  }
}