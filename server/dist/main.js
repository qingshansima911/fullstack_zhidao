"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const user_1 = __importDefault(require("./routers/user"));
const post_1 = __importDefault(require("./routers/post"));
const router_1 = __importDefault(require("@koa/router"));
const app = new koa_1.default();
const port = 3000;
const router = new router_1.default({
    prefix: '/api/v1',
});
router.use(user_1.default.routes());
router.use(post_1.default.routes());
app.use(router.routes());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=main.js.map