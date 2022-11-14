import { Request, Response } from "express";
import express from 'express';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

// Middleware
import { authAdmin } from '../../middleware/auth';

// Controller
import { createOrden, updateOrden } from './orden.controller';

app.post('/create', authAdmin, (req: Request, res: Response) => {
  redirectResponse(
    createOrden(req.body),
    res
  );
});

app.post('/update/:ordenId', authAdmin, (req: Request, res: Response) => {
  const ordenIdParam = req.params.ordenId;
  redirectResponse(
    updateOrden(req.body, ordenIdParam),
    res
  );
});

export default app;
