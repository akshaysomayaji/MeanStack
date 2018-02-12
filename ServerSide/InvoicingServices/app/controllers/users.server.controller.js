var mongoose = require('mongoose'), crypto = require('crypto'), User = mongoose.model('UserSchema'), user_otp_schema = mongoose.model('user_otp_schema');
var NotificationHelper = require('../helpers/genericHelper').commonNotification;
notification = new NotificationHelper();

exports.authenticate = function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({ email: req.params.email, IsActive: true }, function (err, result) {
        if (result) {
            if (result.comparepasswords(password, result.password)) {
                result.password = null;
                var tokenObj = {};
                tokenObj.id = result._id;
                var token = jwt.sign(tokenObj, '' + config.tokenSecret, { expiresIn: 24 * 60 * 60 });
                res.send({ 'users': [], success: true, msg: '', token: token });
            } else {
                result.password = null;
                res.send({ 'users': [], success: false, msg: notification.authetication_notification_message('Auth004') });
            }
        } else {
            res.send({ 'users': [], success: false, msg: notification.authetication_notification_message('Auth004') });
        }

    })

}


exports.register = function (req, res, next) {
    try
    {
        var md5 = crypto.createHash('md5');
        req.body.password = md5.update(req.body.password).digest('hex');
        var userObj = new User(req.body);
        userObj.save(function (err, userObj) {
            if (err) {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User012'), err: err });
            } else {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User003'), err: err });
            }
        })
    }
    catch (err) {
        res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User012'), err: err });
    }
}

exports.forgotpassword = function (req, res, next) {
    try
    {
        user_otp_schema.findOne({ email: req.params.email, isActive: true }, function (err, result) {
            if (err) {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User014'), err: err });
            } else {
                if (result) {
 res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User003'), err: err });
                } else {
 res.send({ 'users': [], success: true, msg: notification.getUser_notification_message('User003') });
                }
            }
        })
    } catch (err) {
        res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User014'), err: err });
    }
}

function sendmails(body, req, callback) {
    var smtp = req.config.smtp;
}