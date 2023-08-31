import { Request, Response, RequestHandler } from 'express';

export default (body: object | number | string | bigint): RequestHandler => (_: Request, res: Response): void => void res.json(body);
