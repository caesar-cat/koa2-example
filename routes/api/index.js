var router = require('koa-router')();
var user = require('./user');

router.use('/users', user.routes(), user.allowedMethods())

module.exports = router