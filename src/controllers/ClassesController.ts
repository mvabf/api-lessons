import { Request, Response } from 'express';

import ClassSchema from '../Models/Class';
import CommentSchema from '../Models/Comment';

class ClassesController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, description, video, data_init, data_end } = req.body;

        const newClass = { name, description, video, data_init, data_end };

        try {
            const createdClass = await ClassSchema.create(newClass);

            return res.status(201).json(createdClass);

        } catch (err) {
            return res.status(404).json({ error: err });
        }
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
                total_comments: cl.total_comments,
                last_comment: classLastComment != null ? classLastComment.comment : '',
                last_comment_date: classLastComment != null ? classLastComment.date_created : '',
                date_created: cl.date_created,
                date_updated: cl.date_updated
            };

            listOfClasses.push(tindinClass);
        }

        const listOfClassesFilter = name || description || data_init || data_end ? listOfClasses.filter(cl => cl.name.includes(name) || cl.description.includes(description)
            || cl.description.includes(data_init) || cl.description.includes(data_end)) : listOfClasses;
        
        return res.json(listOfClassesFilter);
    }

    public async find(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const findClass = await ClassSchema.findById(id); 

            const classComments = await CommentSchema.find().limit(3).sort('-date_created');

            const classReturn = {
                name: findClass.name,
                comments: classComments.map(c => { return c.comment})
            }

            return res.json(classReturn);

        } catch(err) {
            return res.status(404).json({error: 'id not found!'});
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, name, description, video, data_init, data_end } = req.body;

        try {
            const classToUpdate = await ClassSchema.findByIdAndUpdate({ _id: id }, {
            name, description, video, data_init, data_end
            });

            return res.json(classToUpdate);   
            
        } catch(err) {
            return res.status(404).json();
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            await ClassSchema.findByIdAndDelete(id);

            return res.status(204).json({});

        } catch (err) {
            return res.status(404).json({ error: 'id not found!' });
        }
    }
}

export default new ClassesController();