import logger from './logger';

export default function handleError(app) {
    app.use((err, req, res, next)=>{
        if(err) {
          logger.error(err);
          return res.status(500).json({error: err.message || err});
        }
        return next();
    });
};

process.on('uncaughtException', function (err) {
  logger.error('Catching uncaught errors to avoid process crash', err);
  throw err;
});
