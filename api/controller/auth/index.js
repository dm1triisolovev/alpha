class c_auth_controller {
    async login(req, res, next) {
        try {
            console.log("hello from api")
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new c_auth_controller();