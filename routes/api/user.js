var router = require('koa-router')();
var user = require('../../app/controllers/user');

router.get('/getUser', user.getUser);
router.post('/registerUser', user.registerUser);

module.exports = router;
