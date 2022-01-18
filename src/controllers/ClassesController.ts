import { Request, Response } from 'express';

import ClassSchema from '../Models/Class';
import CommentSchema from '../Models/Comment';

class ClassesController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, description, video, data_init, data_end } = req.body;

        const newClass = { name, description, video, data_init, data_end };

        try {
            await ClassSchema.create(newClass);
        } catch (err) {
            return res.status(404).json({ error: err });
        }

        return res.json(newClass);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const { name, description, data_init, data_end } = req.query;

        const classes = await ClassSchema.find().limit(50).sort('-date_created');

        const listOfClasses = [];
    
        for (let cl of classes) {

            let classLastComment = await CommentSchema.findOne({ id_class: cl.id }).sort('-date_created');

            let tindinClass = {
                id: cl.id,
                name: cl.name,
                description: cl.description,
                video: cl.video,
                data_init: cl.data_init,
                data_end: cl.data_end,
                data_created: cl.data_created,
                data_updated: cl.data_updated,
                total_comments: cl.total_comments,
                last_comment: classLastComment.comment,
                last_comment_date: classLastComment.date_created
            };

            listOfClasses.push(tindinClass);
        }

        const listOfClassesFilter = name || description || data_init || data_end ? listOfClasses.filter(cl => cl.name.includes(name) || cl.description.includes(description)
            || cl.description.includes(data_init) || cl.description.includes(data_end)) : listOfClasses;
        
        return res.json(listOfClassesFilter);
    }
}

export default new ClassesController();