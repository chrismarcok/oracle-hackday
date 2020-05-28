import * as express from 'express';
const mongoose = require("mongoose");
type Router = express.Router;
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

const router:Router = express.Router();

require("./models/schema");
const User = mongoose.model("users");
const Post = mongoose.model("posts");
const Comment = mongoose.model("comments");

router.get('/api/hello', (req:Request, res:Response, next:NextFunction) => {
    res.json('World');
});

router.get('/api/user', (req:Request, res:Response, next:NextFunction) => {
    User.find()
        .then((users:any) => {
            res.send(users)
        })
        .catch((err:any) => {
            console.log(err);
            res.sendStatus(500);
        })
});

router.post('/api/user', (req:Request, res:Response, next:NextFunction) => {
    console.log(req.body)
    const newUser = new User({
        name: req.body.name,
        avatar: req.body.avatar
    });

    newUser.save()
    .then((user:any) => {
        console.log(`${user.name} has been registered.`);
        res.sendStatus(200);
        
    })
    .catch((err:any) => {
        console.log(err);
    });
});

router.get('/api/post', (req:Request, res:Response, next:NextFunction) => {
    Post.find()
        .then((posts:any) => {
            res.send(posts)
        })
        .catch((err:any) => {
            console.log(err);
            res.sendStatus(500);
        })
});

router.get('/api/post/:postId', (req:Request, res:Response, next:NextFunction) => {
    const id = req.params.postId
    Post.findById(id)
        .then((posts:any) => {
            res.send(posts)
        })
        .catch((err:any) => {
            console.log(err);
            res.sendStatus(500);
        })
});

router.post('/api/post', (req:Request, res:Response, next:NextFunction) => {
    const newPost = new Post({
        title:req.body.title,
        author:req.body.author,
        score:req.body.score,
        body:req.body.body,
        comments:req.body.comments,
        resolved:req.body.resolved,
    });

    newPost.save()
    .then((post:any) => {
        console.log(`Post: ${post.title} has been created.`);
        res.sendStatus(200);
        
    })
    .catch((err:any) => {
        console.log(err);
    });
});

export default router;