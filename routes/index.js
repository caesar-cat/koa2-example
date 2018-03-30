var router = require('koa-router')();
var api = require('./api')

router.use('/api', api.routes(), api.allowedMethods());

module.exports = router