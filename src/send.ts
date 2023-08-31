import { Request, Response, RequestHandler } from 'express';

export default (body: string | Buffer | object): RequestHandler => (_: Request, res: Response): void => void res.send(body);
