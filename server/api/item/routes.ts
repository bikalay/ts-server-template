import * as express from 'express';
import * as controller from './controllers/item-controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);

export default router;
