import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { token_tindin } = req.headers;

    const token = JSON.parse(JSON.stringify(token_tindin));

    if (!token_tindin)
        return res.sendStatus(401);

    try {

        jwt.verify(token, 'secret');
        
        return next();
    } catch (err) {
        return res.sendStatus(401);
    }
}