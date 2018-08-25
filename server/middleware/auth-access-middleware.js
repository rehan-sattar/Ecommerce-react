const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decodedData = jwt.verify(token, 'olx-pakistan');
        console.log("Decoded Data",decodedData);
        req.userData = decodedData
        next();
    } catch (err) {
        return res.status(401).send({
            message: 'Access denied!'
        })
    };
};