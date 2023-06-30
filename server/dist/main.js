"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const user_1 = __importDefault(require("./routers/user"));
const post_1 = __importDefault(require("./routers/post"));
const router_1 = __importDefault(require("@koa/router"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_cors_1 = __importDefault(require("koa-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect('mongodb://127.0.0.1:27017/zhidao', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
const app = new koa_1.default();
app.use((0, koa_static_1.default)('public'));
app.use((0, koa_cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
const port = 3000;
const router = new router_1.default({
    prefix: '/api/v1',
});
router.use(user_1.default.routes());
router.use(post_1.default.routes());
app.use(router.routes());
app.use(async (ctx, next) => {
    try {
        await next();
    }
    catch (err) {
        console.error(err.stack);
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=main.js.map