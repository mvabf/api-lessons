import { Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 8,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 12,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 255,
    },
}, {
    timestamps: true
}
);

export default model('User', UserSchema);