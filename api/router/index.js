const express_router = require("express").Router;
const router = express_router();

const auth_controller = require('../controller/auth');

router.post('/login', auth_controller.login);

module.exports = router;