module.exports = class c_api_error extends Error {
    status;
    errors;

    constructor( status, message, errors = [] ) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static unauthorized() {
        return new c_api_error(401, 'unauthorized' )
    }

    static bad_request( message, errors = [] ){
        return new c_api_error(400, message, errors)
    }

    static forbidden( ){
        return new c_api_error(403, 'this maze isn\'t mean for you' )
    }
}