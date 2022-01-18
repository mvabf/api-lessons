import { Request, Response } from 'express';

import CommentSchema from '../Models/Comment';
import ClassSchema from '../Models/Class';

class CommentsController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { id_class, comment } = req.body;
        
        const newComment = { id_class, comment };

        try {
            await CommentSchema.create(newComment);
        } catch(err) {
            return res.status(404).json({error: err});
        }

        await ClassSchema.findOneAndUpdate({_id: id_class}, {$inc: {total_comments: 1}});
        
        return res.status(201).json(newComment);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const comments = await CommentSchema.find().limit(50).sort('-date_created');

        return res.json(comments);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const comment = await CommentSchema.findById(id);

            await ClassSchema.findOneAndUpdate({ _id: comment.id_class }, { $inc: { total_comments: -1 } });

            await CommentSchema.findByIdAndDelete(id);

            return res.status(204).json({});

        } catch (err) {
            return res.status(404).json({ error: 'id not found!' });
        }
    }
}

export default new CommentsController();