const winston = require('winston');
require('winston-daily-rotate-file');

const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = winston.createLogger({
    transports: [
        new (winston.transports.DailyRotateFile)({
            filename: 'botbot-applog-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            dirname: 'log/appLog',
            maxFiles: '30d',
            level: process.env.ENV === 'development' ? 'debug' : 'info',
            colorize: true
        }),
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'debug',
            colorize: true
        }),
    ]
});

module.exports= {
    appLog: logger
}