import { Request, Response } from "express";

const healthCheck = (req: Request, res: Response) => {
    return res.json('Welcome to my API');
}

export { healthCheck };