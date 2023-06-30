"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const userController_1 = require("../controllers/userController");
const router = new router_1.default();
router.get('/users', userController_1.getUsers);
router.get('/users/:id', userController_1.getUser);
router.post('/users', userController_1.createUser);
router.put('/users/:id', userController_1.updateUser);
router.delete('/users/:id', userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map