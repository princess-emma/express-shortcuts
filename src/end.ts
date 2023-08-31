import { Request, Response, RequestHandler } from 'express';

export default (): RequestHandler => (_: Request, res: Response): void => void res.end();
