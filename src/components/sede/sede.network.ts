import { Request, Response } from "express";
import express from 'express';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

// Middleware
import { authAdmin } from '../../middleware/auth';

// Controller
import { createSede, updateSede } from './sede.controller';

app.post('/create', authAdmin, (req: Request, res: Response) => {
  redirectResponse(
    createSede(req.body),
    res
  );
});

app.post('/update/:sedeId', authAdmin, (req: Request, res: Response) => {
  const sedeIdParam = req.params.sedeId;
  redirectResponse(
    updateSede(req.body, sedeIdParam),
    res
  );
});

export default app;
