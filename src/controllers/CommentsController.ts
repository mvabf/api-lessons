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
}

export default new CommentsController();