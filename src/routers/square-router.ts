import express, {Request, Response} from 'express';

const squareRouter = express.Router();


// The :parameter syntax can be used to reserve part of the URI for a parameter
squareRouter.get('/:value', (request: Request, response: Response, next) => {
    // the parameter can be retrieved from the params property of the request
    // ex) If we send the request to localhost:3000/square/5
    //     then request.params.value will equal '5'
    
    const value = request.params.value;
    const numericValue = parseInt(value);
    const square = Math.pow(numericValue, 2);
    response.json({square: square});

})

export default squareRouter;