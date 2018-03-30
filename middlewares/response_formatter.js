var ApiError = require('../app/error/apiError')
var response_formatter = async (ctx) => {
    //先执行路由
    //如果有返回数据，将返回数据二次加工
    if(ctx.body) {
        ctx.body = {
            code: 0,
            message: 'success',
            data: ctx.body
        }
    }else{
        ctx.body = {
            code: 10001,
            msg: 'no data'
        }
    }
}

//过滤url
var url_filter = function(pattern) {
    return async function(ctx, next) {
        var reg = new RegExp(pattern);
        try{
            await next()
        } catch(error) {
            if(error instanceof ApiError && reg.test(ctx.originalUrl))  {
                ctx.status = 200;
                ctx.body = {
                    code: error.code,
                    message: error.message
                }
                
            }
            //继续向外层抛异常
            throw error
        }
        if(reg.test(ctx.originalUrl)) {
            response_formatter(ctx)
        }
    }
}

module.exports = url_filter
