'use strict';

// TODO: What is this line doing?
// This line is connecting to the dotenv file
require('dotenv').config();

// TODO: What is this line doing?
// This line is importing our server and starting the server using a port stored in the environment variables
require('./lib/server.js').start(process.env.PORT);
