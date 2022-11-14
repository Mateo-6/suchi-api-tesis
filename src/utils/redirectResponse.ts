import { Response } from "express";
import to from 'await-to-js';

import { success, error } from '../network/response';

const redirectResponse = async (responseController: any, res: Response) => {
    const [err, response] = await to(responseController);
    (err) ? error(res, err, 500) : success(res, response, 200);
}

export default redirectResponse;
