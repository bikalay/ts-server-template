import * as winston from 'winston';
import * as morgan from 'morgan';
import {StreamOptions} from 'morgan';

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)()
    ],
    exitOnError: false
});

export const loggerStream:StreamOptions = {
    write: function(message) {
        logger.info(message);
    }
};

const morganOptions:morgan.Options = {
    stream: loggerStream
};

export function initLogger(app) {
    //noinspection TypeScriptValidateTypes
    app.use(morgan('combined', morganOptions));
}

export default logger;