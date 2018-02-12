var port = 1001;
var tokenSecret = 'SuperSecret';
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    auth: {
        user: "akkie.kicha@gmail.com",
        pass: "9632343752"
    }
}));

module.exports = {
    port: port,
    db: 'mongodb://localhost/InvoiceDB',
    'secret': 'superawesome',
    tokenSecret: tokenSecret,
    smtp: smtpTransport,
}