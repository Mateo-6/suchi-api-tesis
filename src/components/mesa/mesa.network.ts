import { Request, Response } from "express";
import express from 'express';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

// Middleware
import { authAdmin } from '../../middleware/auth';

// Controller
import { createMesa, updateMesa } from './mesa.controller';

app.post('/create', authAdmin, (req: Request, res: Response) => {
  redirectResponse(
    createMesa(req.body),
    res
  );
});

app.post('/update/:mesaId', authAdmin, (req: Request, res: Response) => {
  const mesaIdParam = req.params.mesaId;
  redirectResponse(
    updateMesa(req.body, mesaIdParam),
    res
  );
});

export default app;
