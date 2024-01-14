import { Request, Response, RequestHandler } from 'express';

export default (view: string, options?: object): RequestHandler => (_: Request, res: Response): void => void res.render(view, options);
