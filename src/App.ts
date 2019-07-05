// Setting up a new NPM Express project
// 1. npm init
// 2. npm install express
// 3. (if not already installed) npm install -g ts-node
// 4. npm install body-parser
// 5. (install any other necessary dependencies)
// 6. code . (opens VS code at the current directory)

const express = require('express');
// import (export member) from 'package-name'
                               // non-default imports must be in { nonDefaultExport }

// What is a port?
// A port is an access point to a machine. We need a port for our application to 'listen' on.
// Applications outside of our computer can send messages to a port. Our application can listen
// and respond to those messages.

const port = 3000;

/*
    Express is a framework for creating web applications that communicate over HTTP.
    Express can be used to easily listen for incoming 'requests' and easily handle
    writing 'responses'.
    A server is a machine that 'serves' things. For HTTP, that means users send 'requests' and
    the server responds with 'responses'.
*/

const app = express();

// Middleware
app.use('', (request, response, next) => {
    next();
});

const userRouter = express.Router();

// For most things, get is the default request sent
userRouter.get('', (request, response, next) => {
    response.json({message: 'Getting user'});
    next();
});

userRouter.post('', (request, response, next) => {
    response.json({message: 'creating user'});
    next();
})

app.use('/users', userRouter);

app.listen(port, () => {
    console.log('Express listening on port ' + port);
});