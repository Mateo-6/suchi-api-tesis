import { Request, Response } from "express";
import express from 'express';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

// Middleware
import { authAdmin } from '../../middleware/auth';

// Controller
import { createItem, updateItem } from './item.controller';

app.post('/create', authAdmin, (req: Request, res: Response) => {
  redirectResponse(
    createItem(req.body),
    res
  );
});

app.post('/update/:itemId', authAdmin, (req: Request, res: Response) => {
  const itemIdParam = req.params.itemId;
  redirectResponse(
    updateItem(req.body, itemIdParam),
    res
  );
});

export default app;
