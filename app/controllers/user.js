const ApiError = require('../error/apiError');
const ApiErrorName = require('../error/apiErrorName');
exports.getUser = async (ctx, next) => {
    if(ctx.query.id != 1) {
        throw new ApiError(ApiErrorName.USER_NOT_EXIST)
    }
    ctx.body = {
        username: '黄强',
        age: 25
    }
}

exports.registerUser = async(ctx, next) => {
    console.log('registerUser', ctx.request.body)
}