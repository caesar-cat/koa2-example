const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const route = require('./routes')
const logUtil = require('./utils/log_util')
const url_filter = require('./middlewares/response_formatter')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  var ms;
  
  try{
    await next();
    ms = new Date() - start;
    logUtil.logResponse(ctx, ms);
    logUtil.logConsole(ctx, ms)
  }catch(error) {
    ms = new Date() - start;
    logUtil.logError(ctx, error, ms);
    logUtil.logConsole(ctx, error, ms)
  }
})

//formatter response data
app.use(url_filter('^/api'))
// routes
app.use(route.routes(), route.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
