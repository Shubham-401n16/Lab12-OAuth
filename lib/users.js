'use strict';

// External resources
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// DONE: Update this string to be something unique to your groups project
//
// DONE: Where should the secret typically be stored in a more secure application?
// It should be saved in the .env file
let SECRET = 'myserverhasfleas';

// This creates a small test database, where the only record is test.
// The bcrypt.hashSync function is used to quickly hash the password string 'testPass' as a
// synchronous command
let db = {
    test: { username: 'test', password: bcrypt.hashSync('testPass', 10) },
};

// Create an object as our "model", and add functions to that object.
// This takes the place of Mongoose's model AND our wrapper generic model
// class. We're minimizing on features and external packages in this lab, so that
// the focus can be on OAuth.
let usersModel = {
    // DONE: JSDocs function comments
    /**
     * Saves user record to db
     * @param {object} record - user record to save
     * @return {object} user record saved 
     * @return (boolean) if false
     */
    save: async (record) => {
        if (!db[record.username]) {
            // Hash the password
            record.password = await bcrypt.hash(record.password, 10);

            // Create the user in the (mock) database
            db[record.username] = record;

            return record;
        }

        return false;
    },

    // DONE: JSDocs function comments
    /**
     * Authenticates User
     * @param {string} user - username to locate in db
     * @param {string} pass - password checked against stored encrypted password
     * @return {object} user information received from 3rd party
     * @return {boolean} if false
     */
    authenticateBasic: async (user, pass) => {
        // Compare the user's stored password with the provided plaintext password
        let valid = await bcrypt.compare(pass, db[user].password);

        if (valid) return db[user];

        return false;
    },

    // DONE: JSDocs function comments
    /**
     * Generates JSONWebToken and returns the token
     * @param {object} user - the user JSONWebToken is created for
     * @return {object} JSONWebToken
     */
    generateToken: (user) => {
        let token = jwt.sign({ username: user.username }, SECRET);
        return token;
    },

    // DONE: JSDocs function comments
    /**
     * Fetches user list from db
     * @return {object} List of users
     */
    list: () => {
        return db;
    },
};

module.exports = usersModel;
