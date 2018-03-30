var path = require("path");

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
var errorPath = "/error";
//错误日志文件名
var errorFileName = "error_log";
//错误日志输出路径
var errorLogPath = baseLogPath + errorPath + '/' + errorFileName

//响应日志目录
var resPath = "/response";
//响应日志文件名
var resFileName = "res_log";
//响应日志输出路径
var resLogPath = baseLogPath + resPath + '/' + resFileName

module.exports = {
    "appenders": {
        "out":{type: "console"},
        "errorLogger": {
            "alwaysIncludePattern":true,  //是否总是带有后缀
            "pattern": "-yyy-MM-dd-hh.log", //后缀格式
            "path": errorPath,
            type: 'dateFile', //日志类型
            filename: errorLogPath //日志输出位置
        },

        "resLogger": {
            "alwaysIncludePattern":true,  //是否总是带有后缀
            "pattern": "-yyy-MM-dd-hh.log", //后缀格式
            "path": resPath,
            type: 'dateFile', //日志类型
            filename: resLogPath //日志输出位置
        }
    },

    categories:{
        default: {appenders: ['out'], level: 'INFO'},
        "resLogger": { appenders:['resLogger'], level: 'ALL' },
        "errorLogger": { appenders:['errorLogger'], level: 'ERROR' }
    },
    baseLogPath: baseLogPath
}
   