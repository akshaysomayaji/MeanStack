var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
    mongoose.Promise = global.Promise;


var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String, match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*~`&quot;;(){}^+-=<>#|\,''_?&.]{8,}/,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: { type: String },
    email: {
        type: String,
        trim: true,
        unique: true,
        required:true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "users" });

UserSchema.methods.comparepasswords = function (password) {
    var md5 = crypto.createHash('md5');
    md5 = md5.update(password).digest('hex');
    return this.password === md5;
};

var user_otp_schema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createDate: {
        type: Date, default: Date.now(),
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
}, { collection: "user_otp" });


mongoose.model('UserSchema', UserSchema);
mongoose.model('user_otp_schema', user_otp_schema);