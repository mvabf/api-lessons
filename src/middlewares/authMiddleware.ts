import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { token_tindin } = req.headers;

    if (!token_tindin)
        return res.sendStatus(401);
    
    const token = JSON.parse(JSON.stringify(token_tindin));

    try {

        jwt.verify(token, 'secret');
        
        return next();
    } catch (err) {
        return res.sendStatus(401);
    }
}