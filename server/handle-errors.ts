import logger from './logger';

export default function handleError(app) {
    app.use((err, req, res, next)=>{
        if(err) {
          logger.error(err);
          if(err.name === 'ValidationError') {
            return res.status(400).json({error: err.message, fieldName: err.fieldName});
          }
          if(err.name === 'NotFoundError') {
            return res.status(404).json({error: err.message});
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
