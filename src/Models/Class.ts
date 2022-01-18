import { Schema, model } from 'mongoose';

const ClassSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    data_init: {
        type: Date,
        required: true
    },
    data_end: {
        type: Date,
        required: true
    },
    total_comments: {
        type: Number,
        default: 0
    }
}, {
    timestamps: {
        createdAt: 'date_created',
        updatedAt: 'date_updated'
    }
});

export default model('Class', ClassSchema);