var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash'),
    expressJWT = require('express-jwt'),
    jwt = require('jsonwebtoken'),
    cors = require('cors'),
    uuid = require('node-uuid'),
    cookieParser = require('cookie-parser'),
    boolParser = require('express-query-boolean'),
    dateParser = require('express-query-date');

module.exports = function () {
    var app = express();

    app.use(cookieParser('SecretPassPhrase'));

    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/index.server.routes.js')(app);
    return app;
};