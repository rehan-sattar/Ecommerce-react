const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
   try {
        const decodedData = jwt.verify(req.body.token , 'olx-pakistan' );
        req.userData = decodedData
        next();
   } catch( err ) {
        return res.status(401).send({
            message: 'Access denied!'
        })
   }
};