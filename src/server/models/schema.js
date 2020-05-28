const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
})

const CommentSchema = new Schema({
    author: {
        type: UserSchema,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    body: {
        type: String,
        required: true
    },
    accepted: {
        type: Boolean,
        default: false
    },
})

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: UserSchema,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    body: {
        type: String,
        required: true
    },
    comments: {
        type: [CommentSchema],
        default: []
    },
    resolved: {
        type: Boolean,
        required: true
    }

})

mongoose.model("comments", CommentSchema);
mongoose.model("users", UserSchema);
mongoose.model("posts", PostSchema);