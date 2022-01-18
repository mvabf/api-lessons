import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserSchema from '../Models/User';

class UserController {
    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const user = await UserSchema.findOne({ email });

        if (!user)
            return res.status(401).json({ message: 'user does not exists!' });

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword)
            return res.status(401).json({ message: 'wrong password!' });

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

        return res.json(token);
    }

    public async index(req: Request, res: Response): Promise<Response> {
        const users = await UserSchema.find();

        return res.json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password: bcrypt.hashSync(password, 8)
        };

        await UserSchema.create(user);

        return res.status(201).json(user);
    }
}

export default new UserController();