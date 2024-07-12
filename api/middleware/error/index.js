const exceptions = require('../../exceptions');

module.exports = function( err, req, res, next ){
    if( err instanceof exceptions ) {
        return res.status( err.status ).json({ message: err.message, errors: err.errors });
    }

    console.log(err);
    return res.status(500).json({ message: 'internal server error'});
}