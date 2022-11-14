import { Request, Response } from "express";
import express from 'express';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

// Middleware
import { authAdmin } from '../../middleware/auth';

// Controller
import { createCodigoQR, codigoQRItem } from './codigoQR.controller';

app.post('/create', authAdmin, (req: Request, res: Response) => {
  redirectResponse(
    createCodigoQR(req.body),
    res
  );
});

app.post('/update/:codigoQRId', authAdmin, (req: Request, res: Response) => {
  const codigoQRIdParam = req.params.codigoQRId;
  redirectResponse(
    codigoQRItem(req.body, codigoQRIdParam),
    res
  );
});

export default app;
