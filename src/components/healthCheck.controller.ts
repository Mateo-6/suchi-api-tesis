import { Request, Response } from "express";
import path from "path";

const healthCheck = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public') + '/index.html');
}

export { healthCheck };