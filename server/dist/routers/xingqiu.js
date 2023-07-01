"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const xingqiuController_1 = __importDefault(require("../controllers/xingqiuController"));
const router = new koa_router_1.default();
router.get('/xingqius', xingqiuController_1.default.getAllXingqius);
router.get('/xingqius/:id', xingqiuController_1.default.getXingqiuById);
router.post('/xingqius', xingqiuController_1.default.createXingqiu);
router.put('/xingqius/:id', xingqiuController_1.default.updateXingqiu);
router.delete('/xingqius/:id', xingqiuController_1.default.deleteXingqiu);
exports.default = router;
//# sourceMappingURL=xingqiu.js.map