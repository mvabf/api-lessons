import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
    id_class: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'date_created'
    }
});

export default model('Comment', CommentSchema);