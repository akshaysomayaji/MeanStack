var users = require('../../app/controllers/users.server.controller'),
passport = require('passport');

module.exports = function (app) {
    app.route('/api/login').post(users.authenticate);
    app.route('/api/user/register').post(users.register);
}