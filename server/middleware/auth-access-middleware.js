const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'olx-pakistan', function (err, decodedData) {
            if (err) {
                console.log(err);
            }
            req.userData = decodedData
            next();
        });

        next();
    } catch (err) {
        console.log(err);
        return res.status(401).send({
            message: 'Access denied!'
        })
    };
};