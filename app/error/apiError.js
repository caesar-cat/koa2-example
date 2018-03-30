var apiErrorInfo = require('./apiErrorInfo')

class ApiError extends Error {
    constructor(error_name) {
        super();
        var errorInfo = apiErrorInfo.getErrorInfo(error_name)
        this.name = error_name;
        this.code = errorInfo.code;
        this.message = errorInfo.message;
    }
}

module.exports = ApiError