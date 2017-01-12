import * as express from 'express';
import item from './item/routes';

const router = express.Router();

router.use('/item', item);

export default router;
