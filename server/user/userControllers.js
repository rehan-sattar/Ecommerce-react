const User = require('./modal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signInAttempt = (req, res) => {
    User.findOne({
        email: req.body.bodyData.email,
        // password: req.body.bodyData.password
    })
        .then(user => {
            if (user.lenght < 1) {
                res.status(401).send({
                    message: 'Auth failed!'
                });
            };
            bcrypt.compare(req.body.bodyData.password, user.password, (request, result) => {
                if (result) {
                    const token = jwt.sign({
                        email : user.email,
                        id : user._id
                    }, 'olx-pakistan' , {
                        expiresIn : '1h'
                    });
                    return res.status(200).send({
                        message: 'Auth Success!',
                        token
                    });
                };
            });
        })
        .catch(err => res.send({ status: false, data: err }));
};

// res.send({
//     status: true,
//     data: user
// }

const signUpAttempt = (req, res) => {
    // * check if email exist...
    User.findOne({ email: req.body.bodyData.email })
        .then(result => {
            if (result.lenght >= 1) {
                return res.status(409).send({
                    message: 'user already exist'
                })
                // * else create the user
            } else {
                // * hashing the password
                bcrypt.hash(req.body.bodyData.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            error: err
                        })
                    } else {
                        // * creating a new User
                        const user = new User({
                            userName: req.body.bodyData.userName,
                            email: req.body.bodyData.email,
                            password: hash
                        });
                        // * saving user in database
                        user.save()
                            .then(success => res.send({ status: true, data: success }))
                            .catch(err => res.send({ status: false, data: err }));
                    }
                })
            }
        })
};

// * delete the user 

const deleteUserAttempt = (req, res) => {
    User.remove({ _id: req.params.id })
        .then(doc => {
            res.status(200).send({
                message: 'User deleted!'
            })
        })
        .catch(err => res.send({ status: false, data: err }))
}

const getAllUsers = (req, res) => {
    let AllUser = [];
    User.find()
        .then(docs => {
            docs.map(doc => {
                const user = {
                    _id: doc._id,
                    userName: doc.userName,
                    email: doc.email,
                    password: doc.password
                }

                console.log(user);
                AllUser.push(user)
            })
            res.status(200).send({
                users: AllUser
            });
        })

}
module.exports = {
    signInAttempt,
    signUpAttempt,
    deleteUserAttempt,
    getAllUsers
};