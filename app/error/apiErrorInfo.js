/**
 * api错误详情
 */
var errorName = require('./apiErrorName')
 
var handleApiError = {}

const error_map = {
    [errorName.UNKNOW_ERROR]: { code: -1, message: '未知的错误' },
    [errorName.USER_NOT_EXIST]: { code: 101, message: '用户不存在' }
};

handleApiError.getErrorInfo = (error_name) => {
    var error_info;
    if(error_name) {
        error_info = error_map[error_name];
    }


    if(!error_info) {
        error_name = UNKNOW_ERROR;
        error_info = error_map[error_name]
    }

    return error_info
}

module.exports = handleApiError


