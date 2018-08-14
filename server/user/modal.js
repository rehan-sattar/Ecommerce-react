const mongoose = require('mongoose');
// const validator = require('validator');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
});
// UserSchema.methods.toJSON = function () {
//     const user = this;
//     const userObject = user.toObject();
//     console.log(userObject);
//     return _.pick(userObject, ['_id', 'email']);

// }
// UserSchema.methods.generateAuthTokenForUser = function () {
//     let user = this;
//     let access = 'auth';
//     let token = jwt.sign({ _id: user._id.toHexString(), access }, 'bootcamp-olx').toString();
//     user.tokens.push({ access, token });
//     return user.save()
//         .then(() => {
//             return token
//         });
// };

// UserSchema.statics.findByToken = function (token) {
//     var user = this;
//     var decoded;
//     try {
//         decoded = jwt.verify(token, 'bootcamp-olx');
//         console.log('decoded Token : ' , decoded);
//     } catch (e) {

//     }
//     return user.findOne({
//         '_id' : decoded._id,
//         'tokens.access' : 'auth',
//         'tokens.token' : token
//     });
// }

module.exports = mongoose.model('User', UserSchema);;