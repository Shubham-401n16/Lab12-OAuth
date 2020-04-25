'use strict';

// External Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Internal Resources
const oauth = require('./oauth.js');
const errorHandler = require('../middleware/error.js');
const notFound = require('../middleware/404.js');

// DONE: What is this line doing?
// It creates a new express application
const app = express();

// DONE: What is this line doing?
// Our app will use the cors and morgan middleware
app.use(cors());
app.use(morgan('dev'));

// This line of code allows us to use the HTML pages located in the public folder.
// It is important for OAuth applications to have some "front-end" webpages, because
// we want to have the user redirect to a webpage owned by our OAuth provider.
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DONE: What is this route doing?
// It sets up our /oauth route, calls the oauth middleware, and send a request to get the token
//
// DONE: Document route with swagger comments
/**
 * Route runs and returns the access token if authorized
 * @route GET /oauth
 * @returns {string} 200 - access token
 */
app.get('/oauth', oauth, (req, res) => {
    res.status(200).send(req.token);
});


//Error handlers
app.use(notFound);
app.use(errorHandler);

// DONE: What is this module exporting?
// It is exporting our app to run on the server
// DONE: What does app.listen do?
// It is listening to port 3000 so we can run localhost
module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log(`Server Up on ${port}`);
        });
    },
};
