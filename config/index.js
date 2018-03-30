module.exports = {
    development: require('./development'),
    test: require('./test'),
    production: require('./test')
}[process.env.NODE_ENV || 'development']