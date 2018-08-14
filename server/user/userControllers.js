const User = require('./modal');

const signInAttempt = (req, res) => {
    User.findOne({
        email: req.body.bodyData.email,
        password: req.body.bodyData.password
    })
        .then(success => res.send({ status: true, data: success }))
        .catch(err => res.send({ status: false, data: err }));
};

const signUpAttempt = (req, res) => {
    const user = new User(req.body.bodyData);
    user.save()
        .then(success => res.send({ status: true, data: success }))
        .catch(err => res.send({ status: false, data: err }));
};
module.exports = {
    signInAttempt,
    signUpAttempt
};