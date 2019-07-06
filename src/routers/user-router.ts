import express, {Request, Response} from 'express';

const userRouter = express.Router();

// For most things, get is the default request sent
userRouter.get('', (request: Request, response: Response, next) => {
    response.json({message: 'Getting user'});
    next();
});

userRouter.post('', (request: Request, response: Response, next) => {
    response.json({message: 'creating user'});
    next();
})

export default userRouter;