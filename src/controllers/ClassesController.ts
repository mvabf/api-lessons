import { Request, Response } from 'express';

import ClassSchema from '../Models/Class';

class ClassesController {
    public async list(req: Request, res: Response): Promise<Response> {
        const classes = await ClassSchema.find();

        return res.json(classes);
    }


    public async create(req: Request, res: Response): Promise<Response> {
        const { name, description, video, data_init, data_end } = req.body;

        const newClass = { name, description, video, data_init, data_end };

        try {
            await ClassSchema.create(newClass);
        } catch(err) {
            return res.status(404).json({error: err});
        }

        return res.json(newClass);
    }
}

export default new ClassesController();