import { Request, Response } from "express";
import express from 'express';

import { createUser, login } from './user.controller';

import redirectResponse from '../../utils/redirectResponse';
const app = express();

app.post('/create', (req: Request, res: Response) => {
    redirectResponse(
        createUser(req.body),
        res
    );
});

app.post('/login', (req: Request, res: Response) => {
    redirectResponse(
        login(req.body),
        res
    );
});

export default app;
