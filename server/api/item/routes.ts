import * as express from 'express';
import * as controller from './controllers/item-controller';

const router = express.Router();

router.get('/', controller.list);
router.get('/:itemId', controller.findById);
router.post('/', controller.create);
router.put('/:itemId', controller.update);
router.delete('/:itemId', controller.remove);

export default router;
