import logger from './logger';

function isCouchbaseValidationError(err) {
  return /Expected.+but got/.test(err.message);
}

export default function handleError(app) {
    app.use((err, req, res, next)=>{
        if(err) {
          logger.error(err);
          if(isCouchbaseValidationError(err)) {
            return res.status(400).json({error: 'Validation error'});
          }
          return res.status(500).json({error: err.message || err});
        }
        return next();
    });
};

process.on('uncaughtException', function (err) {
  logger.error('Catching uncaught errors to avoid process crash', err);
  throw err;
});
