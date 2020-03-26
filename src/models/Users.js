const mongoose = require('mongoose');
const db = require('./../db');
const Schema = mongoose.Schema;
const yup = require('yup');

const emailValidationSchema = yup.string().email().required();

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER', 'MODERATOR'],
        required: true,
    },
    email: {
        type: String,
        validate: {
            validator: value => emailValidationSchema.validate(value),
            message: 'Email validation failed',
        },
        unique: true,
    },
    chats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Chat',
        },
    ],
});

const User = db.model('User', userSchema);

module.exports = User;