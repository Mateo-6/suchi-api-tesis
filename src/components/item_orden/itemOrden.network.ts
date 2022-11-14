import { Request, Response } from "express";
import express from 'express';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

// Middleware
import { authAdmin } from '../../middleware/auth';

// Controller
import { createItemOrden } from './itemOrden.controller';

app.post('/create', authAdmin, (req: Request, res: Response) => {
  redirectResponse(
    createItemOrden(req.body),
    res
  );
});

export default app;
