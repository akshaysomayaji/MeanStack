process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose(),
	app = express();

module.exports = app;
app.listen(config.port);
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);