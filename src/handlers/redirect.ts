import { Request, Response, RequestHandler } from 'express';

function redirect(status: number, url: string): RequestHandler;
function redirect(url: string): RequestHandler;
function redirect(a: number | string, b?: string): RequestHandler {
    if(typeof a === 'number' && typeof b === 'string') {
        return (_: Request, res: Response): void => void res.redirect(a, b);
    } else {
        return (_: Request, res: Response): void => void res.redirect(a as string);
    }
}

export default redirect;
