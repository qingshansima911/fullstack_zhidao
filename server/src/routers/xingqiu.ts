import Router from 'koa-router';
import xingqiuController from '../controllers/xingqiuController';

const router = new Router();

router.get('/xingqius', xingqiuController.getAllXingqius);
router.get('/xingqius/:id', xingqiuController.getXingqiuById);
router.post('/xingqius', xingqiuController.createXingqiu);
router.put('/xingqius/:id', xingqiuController.updateXingqiu);
router.delete('/xingqius/:id', xingqiuController.deleteXingqiu);

export default router;