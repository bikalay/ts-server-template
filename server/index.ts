import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import handleErrors from './handle-errors';
import logger, {initLogger} from './logger';
import {Server} from 'http';
import routes from './routes';
import props from '../properties';

const app:express.Express = express();

app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

initLogger(app);
routes(app);
handleErrors(app);

const server:Server = app.listen(props.PORT, function() {
    logger.info('Server ready on port %d\n', server.address().port);
});
